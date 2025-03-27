import { MDXComponents } from "mdx/types";
import Link from "next/link";
import CaptionableImage from "./CaptionableImage/CaptionableImage";
import Test from "./Test/Test";

/**
 * Add components here for use within .mdx files
 */
export const mdxComponents: MDXComponents = {
  CaptionableImage,
  Test,
  a: ({ href, children }) => (
    <Link className="blue-link" target="_blank" href={href as string}>
      {children}
    </Link>
  ),
  img: (props) => <CaptionableImage src={props.src} alt={props.alt} />,
};
