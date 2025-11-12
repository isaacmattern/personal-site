import Link from 'next/link'
import './friends.scss'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Friends | Isaac Mattern',
  description: "Isaac Mattern's Friends",
}

export default function Page() {
  return (
    <body className="bg-friends ">
      <div className="friends-container">
        <h1>Friends</h1>
        <p>
          {
            "As the internet grows full of fake and AI-generated content, it's important to visit sites made by real people, not tech companies! This page is a list of verified real people I know. They all have cool websites - so check them out!"
          }
        </p>
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
            <Link href="https://josiah.digital" target="_blank">
              Josiah Mattern
            </Link>
          </li>
          <li>
            <Link href="https://radicaledward101.com" target="_blank">
              Edward Modecki-Mellett
            </Link>
          </li>
        </ul>
      </div>
    </body>
  )
}
