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
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            console.log('visited')
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        }
      ]
    ],
  },
});
module.exports = withMDX(nextConfig)