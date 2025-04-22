import { Post } from "contentlayer/generated";
import Link from "next/link";
import "./PostCard.css";

export default function PostCard(post: Post) {
  return (
    <div className="postcard">
      <time className="secondary-text" dateTime={post.date}>
        {new Date(post.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short", // or "long" if you want full month names
          year: "numeric",
          timeZone: "UTC",
        })}
      </time>

      <div>
        <Link href={post.url}>{post.title}</Link>
      </div>
    </div>
  );
}
