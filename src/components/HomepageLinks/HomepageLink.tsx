import Link from 'next/link'
import './HomepageLink.scss'

export default function HomepageLink({
  href,
  spriteIdentifier,
  label,
}: {
  href: string
  spriteIdentifier: string
  label: string
}) {
  return (
    <Link
      href={href}
      className={`${spriteIdentifier}-sprite-container homepage-single-link-container`}
    >
      <div className={`${spriteIdentifier}-sprite`}></div>
      <h1 className="label">{label}</h1>
    </Link>
  )
}
