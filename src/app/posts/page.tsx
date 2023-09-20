// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

export function PostCard(post: Post) {
  return (
    <div className="my-8">
      <div className="blue-link text-2xl font-bold mb-0.5">
        <Link href={post.url}>
          {post.title}
        </Link>
      </div>

      <time dateTime={post.date} className="block text-sm my-0 rounded-md w-fit">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}

export default function BlogIndex() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className='sm:mt-12'>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}