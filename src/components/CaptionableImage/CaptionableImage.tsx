import Image from "next/image";
import "./CaptionableImage.css";

interface CaptionableImagePropsType {
  src: string;
  alt: string;
  caption?: string;
}

export default function CaptionableImage({
  src,
  alt,
  caption,
}: CaptionableImagePropsType): React.ReactElement {
  return (
    <div className="captionable-image">
      <figure>
        <Image src={src} alt={alt} width={9999} height={100} />
        {caption && (
          <figcaption className="secondary-text">{caption}</figcaption>
        )}
      </figure>
    </div>
  );
}
