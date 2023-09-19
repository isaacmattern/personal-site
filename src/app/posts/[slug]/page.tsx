// app/posts/[slug]/page.tsx
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { MDXComponents } from 'mdx/types'
import { format, parseISO } from 'date-fns'
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
  a: ({ href, children }) => <div>{children}</div>,
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
      <h1 className='text-center font-medium text-3xl my-2 sm:mt-12 sm:text-4xl'>
        {post.title}
      </h1>
      <p className='my-0 bg-tile-blue py-1 px-2 rounded-md border-primary-blue border-1 w-fit text-base mx-auto'>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </p>
      <h2 className='opacity-60 font-normal text-base mt-2 mb-4 sm:mb-8 sm:text-lg'>
        {post.description}
      </h2>
      <MDXContent components={mdxComponents} />
    </div>
  )
}
