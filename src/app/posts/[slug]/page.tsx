import { use } from "react";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/components/MdxComponents";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace("posts/", ""),
  }));
}

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  const post = allPosts.find(
    (p) => p._raw.flattenedPath === `posts/${params.slug}`
  );
  if (!post) notFound();
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Isaac Mattern", url: "https://isaacmattern.com" }],
  };
};

export default function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  // Find the post for the current page.
  const post = allPosts.find(
    (p) => p._raw.flattenedPath === `posts/${params.slug}`
  );
  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <div className="post-wrapper">
        <h1>{post.title}</h1>
        <time className="secondary-text" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
          })}
        </time>
        <div className="secondary-text">{post.description}</div>
        <MDXContent components={mdxComponents} />
      </div>
    </>
  );
}
