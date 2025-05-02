import Link from "next/link";
import "./HomepageLink.css";

export default function HomepageLink({
  href,
  spriteIdentifier,
  label,
}: {
  href: string;
  spriteIdentifier: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={`${spriteIdentifier}-sprite-container homepage-single-link-container`}
    >
      <div className={`${spriteIdentifier}-sprite`}></div>
      <div>{label}</div>
    </Link>
  );
}
