import "./css/not-found.scss";
import Image from "next/image";

export default function NotFound() {
  return (
    <body className="not-found-container bg-not-found">
      <h1>{"Page not found"}</h1>
      <p>{"The page you're looking for doesn't exist."}</p>
      <Image
        src={"/gifs/mole.gif"}
        height={200}
        width={200}
        alt="happy mole"
        unoptimized
      />
    </body>
  );
}
