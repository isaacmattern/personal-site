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
      href="https://twitter.com/iamdevloper/status/1902628884278894941?ref_src=twsrc%5Etfw"
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
