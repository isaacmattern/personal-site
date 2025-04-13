// app/page.tsx
import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { personalProjects } from "@/lib/personalProjects";
import Tile from "@/components/Tile/Tile";
import parse from "html-react-parser";
import PostCard from "@/components/PostCard/PostCard";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  const lastThreePosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <>
      <div>
        <h1>{"About"}</h1>
        <p>
          {
            "Hi, I'm Isaac, and this is my personal site. I'm still figuring out how I want to use this thing, but for now you can check out the small amount of articles I've posted on my "
          }
          <Link href="/posts">{"blog"}</Link>
          {
            ". I enjoy writing code, cooking, weightlifting, running, coffee brewing, and "
          }
          <a href="https://music.isaacmattern.com" target="_blank">
            {"making music"}
          </a>
          {"."}
        </p>
      </div>

      {/* <div>
        <h2>{"Recent Posts"}</h2>
        <>
          {lastThreePosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </>
        <LinkButton href="/posts" buttonText="View all posts" />
      </div> */}

      <div>
        <h2>Contact Me</h2>
        <p>Some other places I exist</p>
        <ul>
          <li>Email: isaac[dot]mattern[at]gmail.com</li>
          {/* <li>
            <Link
              target="_blank"
              href="https://github.com/isaacmattern"
            >
              {"GitHub"}
            </Link>
          </li> */}
          <li>
            <Link
              target="_blank"
              href="https://www.goodreads.com/user/show/30791276-isaac"
            >
              {"Goodreads"}
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h2>{"Projects"}</h2>
        <p>
          {
            "Here are some cool projects that I've either done for fun in my free time or have completed for other people."
          }
        </p>
        <div>
          {personalProjects.map((project, key) => {
            return (
              <Tile
                key={key}
                title={project.title}
                url={project.url}
                description={parse(project.description)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
