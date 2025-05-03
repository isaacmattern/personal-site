import Background from "@/components/Background/Background";
import "./css/not-found.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <Background image={null} color="#3b1e00">
      <div className="not-found-container">
        <h1>{"Page not found"}</h1>
        <p>{"The page you're looking for doesn't exist."}</p>
        <Image
          src={"/gifs/mole.gif"}
          height={200}
          width={200}
          alt="happy mole"
        />
      </div>
    </Background>
  );
}
