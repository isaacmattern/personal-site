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
        <div className="mx-auto max-w-3xl my-2 md:my-8 px-4 md:px-8">
          <div className='mb-4 md:mb-8 flex items-center justify-between'>
            <h1 className="text-2xl font-extrabold">Isaac Mattern</h1>
            <div className='text-xl font-semibold flex flex-nowrap align-middle gap-4 justify-end'>
              <a className='blue-link' href="/">About</a>
              <a className='blue-link' href="/blog">Blog</a>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
