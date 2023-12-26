// app/page.tsx
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { PostCard } from "./posts/page";
import LinkButton from "@/components/LinkButton";
import { personalProjects } from "@/lib/personalProjects";
import Tile from "@/components/Tile/Tile";
import parse from "html-react-parser";

export default function Home() {
  const lastThreePosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <>
      <div className="my-12">
        <h2 className="text-center">{"About"}</h2>
        <p>
          {
            "Hi, I'm Isaac, and this is my blog. I'm still figuring out how I want to use this thing, but for now you can check out the small amount of articles I've posted. I enjoy writing code, cooking, weightlifting, coffee brewing, and "
          }
          <a
            className="blue-link"
            href="https://music.isaacmattern.com"
            target="_blank"
          >
            {"making music"}
          </a>
          {", among other things."}
        </p>
      </div>

      {/* <div className="my-12">
        <h2 className="text-center">{"Recent Posts"}</h2>
        <>
          {lastThreePosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </>
        <LinkButton href="/posts" buttonText="View all posts" />
      </div> */}

      <div className="my-12">
        <h2 className="text-center">Contact Me</h2>
        <p>Some other places I exist</p>
        <ul>
          <li>Email: isaac[dot]mattern[at]gmail.com</li>
          <li>
            <Link
              target="_blank"
              href="https://github.com/isaacmattern"
              className="blue-link"
            >
              {"GitHub"}
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.goodreads.com/user/show/30791276-isaac"
              className="blue-link"
            >
              {"Goodreads"}
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-12 m-auto max-w-2xl">
        <h2 className="text-center">{"Projects"}</h2>
        <p>
          {
            "Here are some cool projects that I've either done for fun in my free time or have completed for other people."
          }
        </p>
        <div className="sm:flex flex-wrap gap-4 flex-auto">
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
