"use client";
import "./Tile.css";

interface ITile {
  title: string;
  url: string;
  description: string | React.ReactElement | React.ReactElement[];
}

export default function Tile({ title, url, description }: ITile) {
  return (
    <div className="tile-comp">
      <h3 className="project-title">
        <a href={url} target="_blank">
          {title}
        </a>
      </h3>
      {description}
    </div>
  );
}
