// app/page.tsx
"use client";
import Link from "next/link";
import "./css/home.css";

function HomepageLink({
  description,
  src,
  destination,
}: {
  description: string;
  src: string;
  destination: string;
}) {
  return (
    <Link href={destination}>
      <div className="homepage-link-container">
        <div className="sprite-container">
          <div
            className="sprite"
            // style={{
            //   backgroundImage: src,
            // }}
          ></div>
        </div>

        <div>{description}</div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <div className="home-container">
        <HomepageLink
          description="Portfolio"
          src="/animations/rotating-computer.png"
          destination="/portfolio"
        />
      </div>
    </>
  );
}
