import "./css/globals.css";
import "./css/site-layout.css";
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
    <html lang="en">
      <body className={inter.variable}>
        <div>
          <div>
            <nav className="nav">
              <div className="name">{"Isaac Mattern"}</div>
              <ul className="nav-link-list">
                <li>
                  <Link href="/">
                    <span>{"About"}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/friends">
                    <span>{"Friends"}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/posts">
                    <span>{"Blog"}</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <main id="main-content">{children}</main>
          </div>

          <footer className="footer">
            <div>&copy;{" Isaac Mattern 2023-present"}</div>
            <div className="footer-web-button-container">
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
