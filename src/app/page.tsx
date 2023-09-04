// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import Image from 'next/image';
import parse from 'html-react-parser'

interface IPersonalProject {
  title: string;
  url: string;
  imageAlt: string;
  imgUrl: string;
  description: string;
}

export default function Home() {

  const projects : IPersonalProject[] = [
    {
      title: "Title",
      url: "https://google.com",
      imageAlt: "Alt here",
      imgUrl: "https://previews.123rf.com/images/rido/rido1204/rido120400047/13283722-happy-smiling-guy-showing-thumb-up-hand-sign-isolated-on-white-background.jpg",
      description: "<a class='blue-link' href='https://github.com'>GitHub</a> blah blah blah"
    }
  ]

  return (
    <>
      <p>
        {"Hi, I'm Isaac. I'm a front-end software engineer at JPMorgan Chase in Columbus, Ohio. I'm interested in web technologies and enjoy creating great experiences on the web. I've also had great opportunites to work on some awesome freelance projects."}
      </p>

      <h2>{"Projects"}</h2>

      <div>
        {projects.map((project, key) => {
          return (
            <div key={key} className='my-3'>
              <a href={project.url} className='  w-min'>
                <Image
                  className='project-image'
                  src={project.imgUrl}
                  alt={project.imageAlt}
                  height={400}
                  width={400}
                />
              </a>
              <p className='mt-1 mb-0 font-bold text-xl'><a href={project.url}>{project.title}</a></p>
              <p className='my-0'>{parse(project.description)}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}