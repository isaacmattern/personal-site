import { headers } from "next/headers";
import "./css/globals.css";
import "./css/lists.css";
import "./css/syntax-highlighting.css";

import type { Metadata } from "next";
import Background from "@/components/Background/Background";

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
      <body>
        <Background image="/bg-images/bright-blue-water.gif">
          {children}
        </Background>
      </body>
    </html>
  );
}
