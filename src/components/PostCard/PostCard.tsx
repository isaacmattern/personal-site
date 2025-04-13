import { Post } from "contentlayer/generated";
import Link from "next/link";
import "./PostCard.css";

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const monthAbbr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthAbbr[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

// Example usage:
const date = new Date("2024-03-08");
console.log(formatDate(date)); // Output: "08 Mar 2024"

export default function PostCard(post: Post) {
  return (
    <div className="postcard">
      <time className="secondary-text" dateTime={post.date}>
        {formatDate(new Date(post.date))}
      </time>

      <div>
        <Link href={post.url}>{post.title}</Link>
      </div>
    </div>
  );
}
