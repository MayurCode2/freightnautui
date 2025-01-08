/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  // Add this to handle client-side navigation
  experimental: {
    scrollRestoration: true
  }
}

module.exports = nextConfig 