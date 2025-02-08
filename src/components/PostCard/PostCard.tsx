import { Post } from "contentlayer/generated";
import Link from "next/link";

export default function PostCard(post: Post) {
  return (
    <div className="my-8">
      <div className="blue-link text-xl w-fit">
        <Link href={post.url}>{post.title}</Link>
      </div>

      <time
        dateTime={post.date}
        className="block text-sm my-0 rounded-md w-fit"
      >
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        })}
      </time>
    </div>
  );
}
