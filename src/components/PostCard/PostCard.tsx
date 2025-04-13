import { Post } from "contentlayer/generated";
import Link from "next/link";
import "./PostCard.css";

export default function PostCard(post: Post) {
  return (
    <div className="postcard">
      <div>
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
