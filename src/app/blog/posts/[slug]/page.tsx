// app/posts/[slug]/page.tsx
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  // 404 if the post does not exist.
  if (!post) notFound()

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = getMDXComponent(post.body.code)

  return (
    <div>
      {/* Some code ... */}
      <MDXContent />
    </div>
  )
}
