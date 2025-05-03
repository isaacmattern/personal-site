import Background from "@/components/Background/Background";
import "./blog.css";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Background image={null} color={"#fff"}>
      <div className="blog-layout-container">
        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/">isaacmattern.com</Link>
            </li>
            <li>
              <Link href="/posts">View All Posts</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </Background>
  );
}
