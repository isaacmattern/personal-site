// app/posts/[slug]/page.tsx
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import './blog-post.css'
import { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Test from '@/components/Test/Test'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { 
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: 'Isaac Mattern', url: 'https://isaacmattern.com' }],
  };
};

const mdxComponents: MDXComponents = { 
  Test, 
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export default function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  // 404 if the post does not exist.
  if (!post) notFound()

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div>
      <h1 className='blog-post-title'>{post.title}</h1>
      <MDXContent components={mdxComponents} />
    </div>
  )
}
