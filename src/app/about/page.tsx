import Link from 'next/link'
import './about.scss'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Isaac Mattern',
  description: "Isaac Mattern's About Page",
}

export default function Page() {
  return (
    <body className="bg-about">
      <main className="about-me-container">
        <h1>About Me</h1>
        <p>
          {'My name is Isaac Mattern. I am a software engineer from Columbus, Ohio. I enjoy '}
          <Link href={'https://music.isaacmattern.com'} target="_blank">
            making music
          </Link>
          {
            ', cooking, running, weightlifting, brewing coffee, reading, and building cool stuff online. Check out my '
          }
          <Link href={'/posts'}>blog</Link>
          {' to learn more about me!'}
        </p>
        <h2>Contact Me</h2>
        <div>Some other places I exist online:</div>
        <ul>
          <li>{'Email: isaac[dot]mattern[at]gmail.com'}</li>
        </ul>
      </main>
    </body>
  )
}
