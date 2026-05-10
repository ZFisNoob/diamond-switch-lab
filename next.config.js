/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow unoptimized local photos (avoids timeout on large RAW-quality JPGs)
    unoptimized: true,
  },
}
module.exports = nextConfig
