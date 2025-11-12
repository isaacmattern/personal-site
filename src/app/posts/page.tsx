// app/page.tsx
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PostCard from '@/components/PostCard/PostCard'

export default function BlogIndex() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
