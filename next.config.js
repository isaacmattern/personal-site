const rehypePrettyCode = require('rehype-pretty-code');
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: false,
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

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode, 
        {
          theme: 'one-dark-pro'
        }
      ]
    ],
  },
});
module.exports = withMDX(nextConfig)