"""
Spectrogram generator for Diamond HE Switch Lab
================================================

Usage
-----
1. Drop MP4 or WAV clip(s) into  public/media/audio-source/
2. Run:  python scripts/generate_spectrograms.py
3. PNGs are saved to  public/media/spectrograms/

Expected output filenames (rename your source files to match):
  cullinan_spacebar.mp4         -> cullinan_spacebar_spectrogram.png
  heartoftheocean_spacebar.mp4  -> heartoftheocean_spacebar_spectrogram.png
  cullinan_wasd.mp4             -> cullinan_wasd_spectrogram.png
  heartoftheocean_wasd.mp4      -> heartoftheocean_wasd_spectrogram.png

Dependencies
------------
  pip install numpy scipy matplotlib
  ffmpeg must be on PATH for MP4 extraction (https://ffmpeg.org/)

If any dependency is missing the script will exit with a clear message
and leave the placeholder cards visible in the site.
"""

import sys
import os
import subprocess
import pathlib

AUDIO_SRC  = pathlib.Path("public/media/audio-source")
SPECTRO_OUT = pathlib.Path("public/media/spectrograms")
FREQ_MIN   = 20
FREQ_MAX   = 12_000
SAMPLE_RATE = 48_000

def check_deps():
    missing = []
    for mod in ("numpy", "scipy", "matplotlib"):
        try:
            __import__(mod)
        except ImportError:
            missing.append(mod)
    if missing:
        print(f"[ERROR] Missing Python packages: {', '.join(missing)}")
        print(f"        Run:  pip install {' '.join(missing)}")
        sys.exit(1)
    # check ffmpeg
    result = subprocess.run(["ffmpeg", "-version"], capture_output=True)
    if result.returncode != 0:
        print("[ERROR] ffmpeg not found on PATH.")
        print("        Download from https://ffmpeg.org/ and add to PATH.")
        sys.exit(1)

def extract_wav(mp4_path: pathlib.Path, wav_path: pathlib.Path):
    """Extract mono 48 kHz WAV from an MP4 using ffmpeg."""
    cmd = [
        "ffmpeg", "-y", "-i", str(mp4_path),
        "-ac", "1", "-ar", str(SAMPLE_RATE),
        "-vn", str(wav_path)
    ]
    result = subprocess.run(cmd, capture_output=True)
    if result.returncode != 0:
        print(f"[ERROR] ffmpeg failed on {mp4_path.name}")
        print(result.stderr.decode(errors="replace"))
        return False
    return True

def make_spectrogram(wav_path: pathlib.Path, out_path: pathlib.Path, title: str):
    import numpy as np
    from scipy.io import wavfile
    from scipy.signal import spectrogram as scipy_spec
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    rate, data = wavfile.read(str(wav_path))
    if data.ndim > 1:
        data = data[:, 0]

    # Convert to float32 [-1, 1]
    if data.dtype == np.int16:
        data = data.astype(np.float32) / 32768.0
    elif data.dtype == np.int32:
        data = data.astype(np.float32) / 2147483648.0

    f, t, Sxx = scipy_spec(data, fs=rate, nperseg=2048, noverlap=1536, scaling="spectrum")

    # Limit to target frequency range
    mask = (f >= FREQ_MIN) & (f <= FREQ_MAX)
    f = f[mask]
    Sxx = Sxx[mask]

    fig, ax = plt.subplots(figsize=(12, 4), facecolor="#06060f")
    ax.set_facecolor("#06060f")

    ax.pcolormesh(t, f, 10 * np.log10(Sxx + 1e-10), shading="gouraud", cmap="plasma", vmin=-80, vmax=0)

    ax.set_xlabel("Time (s)", color="#94a3b8", fontsize=9)
    ax.set_ylabel("Frequency (Hz)", color="#94a3b8", fontsize=9)
    ax.set_title(title, color="#e2e8f0", fontsize=10, pad=8)
    ax.tick_params(colors="#64748b", labelsize=8)
    for spine in ax.spines.values():
        spine.set_edgecolor("#1e293b")

    plt.tight_layout()
    plt.savefig(str(out_path), dpi=150, bbox_inches="tight", facecolor="#06060f")
    plt.close()
    print(f"[OK] {out_path.name}")

def process_file(src: pathlib.Path):
    stem = src.stem
    out_name = f"{stem}_spectrogram.png"
    out_path = SPECTRO_OUT / out_name

    if src.suffix.lower() == ".mp4":
        wav_path = AUDIO_SRC / f"{stem}_extracted.wav"
        print(f"[...] Extracting audio from {src.name}")
        if not extract_wav(src, wav_path):
            return
    elif src.suffix.lower() in (".wav", ".wave"):
        wav_path = src
    else:
        print(f"[SKIP] Unsupported file type: {src.name}")
        return

    title_map = {
        "cullinan_spacebar":        "Cullinan — Spacebar (H key)",
        "heartoftheocean_spacebar": "Heart of the Ocean — Spacebar (J key)",
        "cullinan_wasd":            "Cullinan — WASD Spam (H key)",
        "heartoftheocean_wasd":     "Heart of the Ocean — WASD Spam (J key)",
    }
    title = title_map.get(stem, stem.replace("_", " ").title())

    print(f"[...] Generating spectrogram for {src.name}")
    make_spectrogram(wav_path, out_path, title)

def main():
    check_deps()

    if not AUDIO_SRC.exists():
        print(f"[ERROR] Source directory not found: {AUDIO_SRC}")
        print("        Create it and add your MP4 or WAV files.")
        sys.exit(1)

    SPECTRO_OUT.mkdir(parents=True, exist_ok=True)

    sources = sorted(
        f for f in AUDIO_SRC.iterdir()
        if f.suffix.lower() in (".mp4", ".wav", ".wave") and not f.name.startswith(".")
    )

    if not sources:
        print(f"[WARN] No MP4 or WAV files found in {AUDIO_SRC}")
        print("       Add clips named cullinan_spacebar.mp4, heartoftheocean_spacebar.mp4, etc.")
        sys.exit(0)

    for src in sources:
        process_file(src)

    print("\nDone. Refresh the site to see spectrograms in the Spectrogram section.")

if __name__ == "__main__":
    main()
