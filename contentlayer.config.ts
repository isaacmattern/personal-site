// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md*`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    keywords: {type: 'list', of: {type: 'string'}, required: true}
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ 
  contentDirPath: 'src/posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
    ],
  },
})