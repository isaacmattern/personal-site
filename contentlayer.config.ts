// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` },
  },
}))

export const Recipe = defineDocumentType(() => ({
  name: 'Recipe',
  filePathPattern: `recipes/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (recipe) => `/${recipe._raw.flattenedPath}` },
  },
}))

export default makeSource({ 
  contentDirPath: 'src',
  documentTypes: [Post, Recipe],
  mdx: {
    rehypePlugins: [
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: {
            dark: 'dark-plus',
            light: 'github-light-high-contrast',
          },
          keepBackground: false,
          defaultLang: {
            block: 'plaintext',
            inline: 'plaintext',
          },
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className? node.properties.className.push("line--highlighted") : node.properties.className = "line--highlighted";
          },
          // Not currently used for anything.
          onVisitHighlightedWord(node: any) {
            node.properties.className? node.properties.className.push("word--highlighted") : node.properties.className = "word--highlighted";
          },
        },
      ],
    ],
  },
})