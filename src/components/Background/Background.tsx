import { ReactNode } from "react";

export default function Background({
  image,
  color,
  children,
}: {
  image: string;
  color?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: color,
        backgroundRepeat: "repeat",
        backgroundPosition: "top left",
        backgroundAttachment: "fixed",
        minHeight: "100vh",

        margin: 0,
        padding: "0.01px",
      }}
    >
      {children}
    </div>
  );
}
