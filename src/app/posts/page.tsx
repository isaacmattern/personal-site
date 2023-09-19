// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

export function PostCard(post: Post) {
  return (
    <div className="my-8">
      <div className="blue-link text-2xl font-bold mb-1">
        <Link href={post.url}>
          {post.title}
        </Link>
      </div>

      <time dateTime={post.date} className="block mb-1 text-sm my-0 bg-tile-blue py-1 px-2 rounded-md border-primary-blue border-1 w-fit">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="hidden text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.description }} />
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