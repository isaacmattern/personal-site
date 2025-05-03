import Background from "@/components/Background/Background";
import "./recipe.css";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Background image={"/bg-images/sun-face.gif"}>
      <div className="recipe-layout-container">
        <nav className="paper-effect">
          <ul className="nav-links">
            <li>
              <Link href="/">isaacmattern.com</Link>
            </li>
            <li>
              <Link href="/recipes">View All Recipes</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </Background>
  );
}
