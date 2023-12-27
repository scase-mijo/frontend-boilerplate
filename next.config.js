/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: false,
  output: 'standalone',
  experimental: {
    esmExternals: false,
    externalDir: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.ts'],
}

module.exports = nextConfig
