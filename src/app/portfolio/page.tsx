import { personalProjects } from '@/lib/personalProjects'
import './portfolio.scss'
import Link from 'next/link'
import parse from 'html-react-parser'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Isaac Mattern',
  description: "Isaac Mattern's Portfolio",
}

export default function Page() {
  return (
    <body className="bg-portfolio">
      <main className="portfolio-page-container">
        <div className="header-card">
          <div>
            <h1>{'Portfolio'}</h1>
            <p>
              {
                "Here are some cool projects that I've either done for fun in my free time or have completed for other people."
              }
            </p>
          </div>
        </div>

        <div className="sticky-note-container">
          {personalProjects.map((project, key) => {
            return (
              <div key={key}>
                <h2>
                  <Link target="_blank" href={project.url}>
                    {project.title}
                  </Link>
                </h2>
                <p>{parse(project.description)}</p>
              </div>
            )
          })}
        </div>
      </main>
    </body>
  )
}
