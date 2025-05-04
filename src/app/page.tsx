// app/page.tsx
import "./css/home.css";
import HomepageLink from "@/components/HomepageLinks/HomepageLink";
import NoAIWebring from "@/components/NoAIWebring/NoAIWebring";
import Image from "next/image";

export default function Home() {
  return (
    <body className="bg-homepage">
      <div className="page-container">
        <main className="home-main-container">
          <div className="main-site-header">
            <h1>{"Isaac's Website"}</h1>
            <div>
              <Image
                draggable={false}
                alt="Surfing computer"
                src={"/gifs/surfing-computer.gif"}
                width={84}
                height={68}
              />
            </div>
          </div>
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
          <div className="webring-container">
            <div>
              <NoAIWebring />
            </div>
          </div>
        </main>
        <footer>
          <div>
            <Image
              draggable={false}
              alt="This site contains 100% recycled material"
              src={"/buttons/recycled.png"}
              width={225}
              height={45}
            />
          </div>
          <div>
            <Image
              draggable={false}
              alt="This user really enjoys dark and stormy nights"
              src={"/buttons/darkandstormy.png"}
              width={225}
              height={45}
            />
          </div>
          <div>
            <Image
              draggable={false}
              alt="This user eated glass"
              src={"/buttons/eated-glass.jpg"}
              width={225}
              height={45}
            />
          </div>
          <div>
            <Image
              draggable={false}
              alt="I love Wi-Fi"
              src={"/buttons/i-love-wifi.jpg"}
              width={104}
              height={65}
            />
          </div>
          <div>
            <Image
              draggable={false}
              alt="My birthstone is a coffee bean"
              src={"/buttons/birthstone_coffeebean.png"}
              width={225}
              height={45}
            />
          </div>
          <div>
            <Image
              draggable={false}
              alt="I put the toast in toaster, then I take it out and eat it"
              src={"/buttons/toast.png"}
              width={225}
              height={45}
            />
          </div>
          <div>
            <Image
              draggable={false}
              alt="I miss using pictochat"
              src={"/buttons/pictochat.gif"}
              width={88}
              height={31}
            />
          </div>
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
        </footer>
      </div>
    </body>
  );
}
