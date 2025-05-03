import "./css/globals.css";
import "./css/lists.css";
import "./css/syntax-highlighting.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaac Mattern",
  description: "Isaac Mattern's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-default">{children}</body>
    </html>
  );
}
