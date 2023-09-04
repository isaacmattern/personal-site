import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isaac Mattern',
  description: 'Isaac Mattern\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mx-auto max-w-3xl'>
          <div className="py-4 xs:py-6 mx-4 xs:mx-6 main-content">
            <header className=' max-h-min mb-4 xs:mb-8 flex items-center justify-between'>
              <h1 className="text-2xl font-extrabold m-0 clickable-text-decorator">
                <a href="/">Isaac Mattern</a>
              </h1>
              <div className='font-semibold flex flex-nowrap align-middle gap-4 justify-end'>
                <h2>
                  <a className='blue-link text-xl' href="/">About</a>
                </h2>
                <h2>
                  <a className='blue-link text-xl' href="/blog">Blog</a>
                </h2>
              </div>
            </header>
            {children}
          </div>
          <footer className='text-sm block sm:flex items-center justify-between footer'>
              <div className='opacity-60 text-center mb-2 sm:mb-0'>
                &copy; Isaac Mattern 2023-present
              </div>
              <div className='opacity-100 flex items-center justify-center gap-4'>
                <div><a href="" className='blue-link'>GitHub</a></div>
                <div><a href="" className='blue-link'>LinkedIn</a></div>
                <div><a href="" className='blue-link'>Contact</a></div>
              </div>
          </footer>
        </div>

      </body>
    </html>
  )
}
