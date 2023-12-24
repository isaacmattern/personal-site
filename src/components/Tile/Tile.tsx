"use client";
import "./Tile.css";

interface ITile {
  title: string;
  url: string;
  description: string | JSX.Element | JSX.Element[];
}

export default function Tile({ title, url, description }: ITile) {
  return (
    <div className="tile-comp block bg-tile-color p-6 rounded-md">
      <a
        href={url}
        target="_blank"
        className="my-0 font-bold text-lg blue-link"
      >
        {title}
      </a>
      <p className="my-0 text-sm tile-comp-description">{description}</p>
    </div>
  );
}
