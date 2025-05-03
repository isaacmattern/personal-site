import Background from "@/components/Background/Background";
import PortfolioProject from "@/components/PortfolioProject/PortfolioProject";
import { personalProjects } from "@/lib/personalProjects";
import parse from "html-react-parser";
import "./portfolio.css";

export default function Page() {
  return (
    <Background image="/bg-images/default.gif">
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
              <PortfolioProject
                key={key}
                title={project.title}
                url={project.url}
                description={parse(project.description)}
              />
            );
          })}
        </div>
      </div>
    </Background>
  );
}
