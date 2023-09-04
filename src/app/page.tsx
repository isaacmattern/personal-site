// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import Image from 'next/image';
import parse from 'html-react-parser'

interface IPersonalProject {
  title: string;
  date: string;
  url: string;
  description: string;
}

export default function Home() {

  const projects : IPersonalProject[] = [
    {
      title: "Baby Keem Online Store",
      url: "https://google.com",
      date: "2022",
      description: "<a class='blue-link' href='https://github.com'>GitHub</a> blah blah blah"
    }
  ]

  return (
    <>

      <div className='my-12'>
        <h1 className='text-center'>{"About"}</h1>

        <p>
          {"Hi, I'm Isaac. I'm a front-end software engineer at JPMorgan Chase in Columbus, Ohio. I'm interested in web technologies and enjoy creating great experiences on the web. I've also had great opportunites to work on some awesome freelance projects."}
        </p>
      </div>

      {/* <div className='my-12'>
        <h1 className='text-center'>{"Contact"}</h1>
      </div> */}

      <div className='my-12'>
        <h1 className='text-center'>{"Projects"}</h1>

        <div className=''>
          {projects.map((project, key) => {
            return (
              <div key={key} className=''>
                <p className='mt-1 mb-0 font-bold text-xl'><a href={project.url}>{project.title}</a></p>
                <p className='my-0'>{parse(project.description)}</p>
              </div>
            )
          })}
        </div>  
      </div>
    </>
  )
}