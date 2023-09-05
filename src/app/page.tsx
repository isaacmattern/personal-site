// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import Image from 'next/image';
import parse from 'html-react-parser'
import { allPosts } from 'contentlayer/generated';
import { PostCard } from './blog/page';
import LinkButton from '@/components/LinkButton';

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
      url: "https://keem.science",
      date: "2022",
      description: "Developed a shopify merchandise store for rapper Baby Keem, along with <a href='https:peter.digital'>Peter Campanelli</a>"
    },
    {
      title: "What Are You Cooking?",
      url: "https://whatareyou.cooking",
      date: "2022",
      description: "Recipe sharing website with Sign-In with Google, profiles, tags, and search by tags. I used React for building the UI, TypeScript to increase type safety, and Tailwind CSS for styling. <a href='https://github.com/isaacmattern/what-are-you-cooking'>View on GitHub</a>"
    },
    {
      title: "Remi Wolf Online Store",
      url: "https://remiwolf.com",
      date: "2021",
      description: "Developed a shopify merchandise store for artist Remi Wolf, along with <a href='https:peter.digital'>Peter Campanelli</a>"
    },
    {
      title: "Wordle Solver Bot",
      url: "https://colab.research.google.com/drive/1sj6Yd2Ckswmcwa5ZRH6Uk8mYffwVf07B?usp=sharing",
      date: "2022",
      description: "A Wordle solving bot I wrote in python. No machine learning here, so it's not actually that great ;)"
    },
    {
      title: "Digit Recognition",
      url: "https://github.com/isaacmattern/mnist-digit-recognition",
      date: "2021",
      description: "A project I completed for coursework with three classmates in an Introduction to Artificial Intelligence course. Uses the MNIST Database "
    },
    
  ]

  const lastThreePosts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice(0, 3)

  return (
    <>

      <div className='my-12'>
        <h1 className='text-center'>{"About"}</h1>
        <p>
          {"Hi, I'm Isaac. I'm a front-end software engineer at JPMorgan Chase in Columbus, Ohio. I'm interested in web technologies and enjoy creating great experiences on the web. I've also had great opportunites to work on some awesome freelance projects."}
        </p>
      </div>

      <div className='my-12'>
        <h1 className='text-center'>{"Recent Posts"}</h1>
        <>
          {lastThreePosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </>
        <LinkButton 
          href='/blog'
          buttonText='View all posts'
        />
      </div>

      {/* <div className='my-12'>
        <h1 className='text-center'>{"Contact"}</h1>
      </div> */}

      <div className='my-12'>
        <h1 className='text-center'>{"Projects"}</h1>
        <div className='sm:flex flex-wrap gap-4 flex-auto'>
          {projects.map((project, key) => {
            return (
              <div key={key} className='project-item'>
                <p className='my-0 font-bold text-lg blue-link'><a href={project.url}>{project.title}</a></p>
                <p className='my-0 text-sm project-item-description'>{parse(project.description)}</p>
              </div>
            )
          })}
        </div>  
      </div>
    </>
  )
}