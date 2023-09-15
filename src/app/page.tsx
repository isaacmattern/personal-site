// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import { PostCard } from './posts/page';
import LinkButton from '@/components/LinkButton';
import { personalProjects } from '@/lib/personalProjects';
import Tile from '@/components/Tile/Tile';
import parse from 'html-react-parser'


export default function Home() {

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
          href='/posts'
          buttonText='View all posts'
        />
      </div>

      <div className='my-12'>
        <h1 className='text-center'>{"Projects"}</h1>
        <div className='sm:flex flex-wrap gap-4 flex-auto'>
          {personalProjects.map((project, key) => {
            return (
              <Tile
                key={key}
                title={project.title}
                url={project.url}
                description={(parse(project.description))}
              />
            )
          })}
        </div>  
      </div>
    </>
  )
}