/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'previews.123rf.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}
 
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)