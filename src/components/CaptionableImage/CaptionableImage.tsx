import Image from "next/image";

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
    <div className="max-w-lg m-auto">
      <figure>
        <Image src={src} alt={alt} width={9999} height={100} />
        {caption && (
          <figcaption className="text-center mt-2 opacity-60">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
