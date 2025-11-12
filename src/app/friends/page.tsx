import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Friends</h1>
      <p>
        {'If you know me in '}
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Real_life#As_distinct_from_the_Internet"
        >
          real life
        </a>
        {", just ask and I'll add a link of your choice to this page :)"}
      </p>

      <ul>
        <li>
          <Link href="https://shayfabrizio.com" target="_blank">
            Shay Fabrizio
          </Link>
        </li>
        <li>
          <Link href="https://peter.digital" target="_blank">
            Peter Campanelli
          </Link>
        </li>
        <li>
          <Link href="https://josiahmattern.com" target="_blank">
            Josiah Mattern
          </Link>
        </li>
      </ul>

      <div className="mt-8">
        <p>{'If you link my page on your site, consider using my button :)'}</p>

        <div className="mt-4">
          <Image
            draggable={false}
            alt="Isaac Mattern's website button"
            src={'/buttons/isaac-mattern-button.png'}
            width={88}
            height={31}
          />
        </div>
      </div>
    </div>
  )
}
