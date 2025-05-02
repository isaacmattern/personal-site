import Tile from "@/components/Tile/Tile";
import { personalProjects } from "@/lib/personalProjects";
import parse from "html-react-parser";

export default function Page() {
  return (
    <div>
      <h2>{"Projects"}</h2>
      <p>
        {
          "Here are some cool projects that I've either done for fun in my free time or have completed for other people."
        }
      </p>
      <div>
        {personalProjects.map((project, key) => {
          return (
            <Tile
              key={key}
              title={project.title}
              url={project.url}
              description={parse(project.description)}
            />
          );
        })}
      </div>
    </div>
  );
}
