// components/Background.tsx
import { ReactNode } from "react";

export default function Background({
  image,
  children,
}: {
  image: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "top left",
        backgroundAttachment: "scroll",
        minHeight: "100vh",

        margin: 0,
        padding: "16px",
      }}
    >
      {children}
    </div>
  );
}
