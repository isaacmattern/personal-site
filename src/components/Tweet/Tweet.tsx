import "./Tweet.css";

interface ITweet {
  link: string;
  author: string;
  dateString: string;
  textContent: string;
}

export default function Tweet({
  link,
  author,
  dateString,
  textContent,
}: ITweet) {
  return (
    <a
      className="main-tweet-link-container"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <blockquote className="twitter-tweet">
        <div className="tweet-attribution">
          <span className="tweet-author">{author}</span>
          <span className="tweet-date">{dateString}</span>
        </div>
        {textContent}
      </blockquote>
    </a>
  );
}
