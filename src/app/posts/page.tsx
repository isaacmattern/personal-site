// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

export function PostCard(post: Post) {
  return (
    <div className="my-6">
      <Link href={post.url} className="blue-link text-2xl font-bold mb-0.5">
        {post.title}
      </Link>
      <time dateTime={post.date} className="block mb-1 text-sm opacity-60">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="hidden text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.description }} />
    </div>
  )
}

export default function BlogIndex() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </>
  )
}