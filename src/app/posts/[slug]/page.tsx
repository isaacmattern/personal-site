// app/posts/[slug]/page.tsx
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { MDXComponents } from "mdx/types";
import Link from "next/link";
import Test from "@/components/Test/Test";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: "Isaac Mattern", url: "https://isaacmattern.com" }],
  };
};

const mdxComponents: MDXComponents = {
  Test,
  a: ({ href, children }) => (
    <Link className="blue-link font-bold" target="_blank" href={href as string}>
      {children}
    </Link>
  ),
};

export default function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <h1 className="font-medium text-3xl mb-1 mt-8 sm:mt-12 sm:text-4xl">
        {post.title}
      </h1>
      <time dateTime={post.date} className="text-sm sm:text-base w-fit">
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        })}
      </time>
      <h2 className="opacity-60 font-normal text-sm sm:text-base mt-1 mb-4 sm:mb-8">
        {post.description}
      </h2>
      <MDXContent components={mdxComponents} />
    </div>
  );
}
