import Background from "@/components/Background/Background";
import Link from "next/link";
import "./about.css";

export default function Page() {
  return (
    <Background image="/bg-images/trees.gif">
      <div className="about-me-container">
        <h1>About Me</h1>
        <p>
          {
            "My name is Isaac Mattern. I am a software engineer from Columbus, Ohio. I enjoy "
          }
          <Link href={"https://music.isaacmattern.com"} target="_blank">
            making music
          </Link>
          {
            ", cooking, running, weightlifting, brewing coffee, reading, and building cool stuff online. Check out my "
          }
          <Link href={"/posts"}>blog</Link>
          {" to learn more about me!"}
        </p>
        <h2>Contact Me</h2>
        <div>Some other places I exist online:</div>
        <ul>
          <li>{"Email: isaac[dot]mattern[at]gmail.com"}</li>
        </ul>
      </div>
    </Background>
  );
}
