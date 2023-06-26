/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: '_static',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
