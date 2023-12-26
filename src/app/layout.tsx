import "./css/globals.css";
import "./css/blockquote.css";
import "./css/lists.css";
import "./css/syntax-highlighting.css";
import Image from "next/image";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Isaac Mattern",
  description: "Isaac Mattern's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.variable}>
        <div className="mx-auto max-w-4xl">
          <div className="pt-4 xs:pt-6 mx-4 xs:mx-6 main-content pb-8">
            <nav className="mb-4 xs:mb-8 flex flex-col sm:flex-row items-center justify-between">
              <h1 className="text-2xl font-extrabold m-0">
                <a href="/">{"Isaac Mattern"}</a>
              </h1>
              <div className="flex flex-nowrap items-center gap-4 justify-end h-6">
                <Link href="/">
                  <div className="text-lg blue-link">{"About"}</div>
                </Link>
                <Link href="/friends">
                  <div className="text-lg blue-link">{"Friends"}</div>
                </Link>
                <Link href="/posts">
                  <div className="text-lg blue-link">{"Blog"}</div>
                </Link>
              </div>
            </nav>
            <main id="main-content">{children}</main>
          </div>

          <footer className="mx-4 xs:mx-6 text-sm block sm:flex items-center justify-between footer">
            <div className="opacity-60 text-center mb-2 sm:mb-0">
              &copy;{" Isaac Mattern 2023-present"}
            </div>
            <div className="opacity-100 flex gap-2 items-center justify-center">
              <div>
                <Image
                  draggable={false}
                  alt="HTML decorative banner"
                  src={"/buttons/html.gif"}
                  width={88}
                  height={31}
                />
              </div>
              <div>
                <Image
                  draggable={false}
                  alt="He/Him pronouns banner"
                  src={"/buttons/hehim.png"}
                  width={88}
                  height={31}
                />
              </div>
              <div>
                <Image
                  draggable={false}
                  alt="No cookies banner - this site is cookies free"
                  src={"/buttons/nocookie.gif"}
                  width={88}
                  height={31}
                />
              </div>
            </div>
          </footer>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
