import Background from "@/components/Background/Background";
import { personalProjects } from "@/lib/personalProjects";
import "./portfolio.css";
import Link from "next/link";

export default function Page() {
  return (
    <Background image="/bg-images/clouds.gif">
      <div className="portfolio-page-container">
        <div className="header-card">
          <h1>{"Portfolio"}</h1>
          <p>
            {
              "Here are some cool projects that I've either done for fun in my free time or have completed for other people. Click on a card to view the project!"
            }
          </p>
        </div>

        <div className="sticky-note-container">
          {personalProjects.map((project, key) => {
            return (
              <Link key={key} target="_blank" href={project.url}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </Background>
  );
}
