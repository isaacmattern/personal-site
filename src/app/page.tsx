// app/page.tsx
import "./css/home.css";
import HomepageLink from "@/components/HomepageLinks/HomepageLink";

export default function Home() {
  return (
    <>
      <main className="home-container">
        <div className="homepage-link-wrapper">
          <HomepageLink
            href={"/portfolio"}
            spriteIdentifier={"portfolio"}
            label={"Portfolio"}
          />
          <HomepageLink
            href={"/about"}
            spriteIdentifier={"about"}
            label={"About"}
          />
          <HomepageLink
            href={"/posts"}
            spriteIdentifier={"blog"}
            label={"Blog"}
          />
          <HomepageLink
            href={"/recipes"}
            spriteIdentifier={"recipes"}
            label={"Recipes"}
          />
          <HomepageLink
            href={"https://music.isaacmattern.com"}
            spriteIdentifier={"music"}
            label={"Music"}
          />
        </div>
      </main>
    </>
  );
}
