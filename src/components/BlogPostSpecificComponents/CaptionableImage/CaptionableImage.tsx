import Image from 'next/image'
import './CaptionableImage.scss'

interface CaptionableImagePropsType {
  src: string
  alt: string
  caption?: string
  maxWidth?: number
}

export default function CaptionableImage({
  src,
  alt,
  caption,
  maxWidth,
}: CaptionableImagePropsType): React.ReactElement {
  return (
    <div className="captionable-image">
      <figure>
        <Image src={src} alt={alt} width={maxWidth || 9999} height={100} />
        {caption && <figcaption className="secondary-text">{caption}</figcaption>}
      </figure>
    </div>
  )
}
