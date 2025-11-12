import { Post, Recipe } from "contentlayer/generated";
import Link from "next/link";
import "./PostCard.scss";

export default function PostCard(content: Post | Recipe) {
  return (
    <div className="postcard">
      <time className="secondary-text" dateTime={content.date}>
        {new Date(content.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short", // or "long" if you want full month names
          year: "numeric",
          timeZone: "UTC",
        })}
      </time>

      <div>
        <Link href={content.url}>{content.title}</Link>
      </div>
    </div>
  );
}
