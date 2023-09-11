import './globals.css'
import './syntax-highlighting.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

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
          <div className="pt-4 xs:pt-6 mx-4 xs:mx-6 main-content">
            <nav className='mb-4 xs:mb-8 flex items-center justify-between'>
              <h1 className="text-2xl font-extrabold m-0 clickable-text-decorator">
                <Link href="/">Isaac Mattern</Link>
              </h1>
              <div className='font-semibold flex flex-nowrap items-center gap-4 justify-end h-6'>
                <Link href="/">
                  <div className="text-xl blue-link">
                    About
                  </div>
                </Link>
                <Link href="/posts">
                  <div className="text-xl blue-link">
                    Blog
                  </div>
                </Link>
              </div>
            </nav>
            <main id='main-content'>
              {children}
            </main>
          </div>
          <footer className='mx-4 xs:mx-6 text-sm block sm:flex items-center justify-between footer'>
              <div className='opacity-60 text-center mb-2 sm:mb-0'>
                &copy; Isaac Mattern 2023-present
              </div>
              <div className='opacity-100 flex items-center justify-center gap-4'>
                <div><Link href="https://github.com/isaacmattern" className='blue-link'>GitHub</Link></div>
                <div><Link href="https://www.linkedin.com/in/isaacmattern/" className='blue-link'>LinkedIn</Link></div>
                <div><Link href="mailto:isaac.mattern@gmail.com" className='blue-link'>Contact</Link></div>
              </div>
          </footer>
        </div>

      </body>
    </html>
  )
}
