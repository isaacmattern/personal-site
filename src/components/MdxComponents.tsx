import { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import CaptionableImage from './BlogPostSpecificComponents/CaptionableImage/CaptionableImage'
import Test from './Test/Test'
import HomepageLink from './HomepageLinks/HomepageLink'
import {
  PausableSaladTossGif,
  PausableSaladTossGifWithOutline,
  PausableSaladTossGifWithPermanentOutline,
} from './BlogPostSpecificComponents/PausableSaladTossGif/PausableSaladTossGif'
/**
 * Add components here for use within .mdx files
 */
export const mdxComponents: MDXComponents = {
  CaptionableImage,
  HomepageLink,
  PausableSaladTossGif,
  PausableSaladTossGifWithOutline,
  PausableSaladTossGifWithPermanentOutline,
  Test,
  a: ({ href, children }) => (
    <Link target="_blank" href={href as string}>
      {children}
    </Link>
  ),
  img: (props) => <CaptionableImage src={props.src} alt={props.alt} />,
}
