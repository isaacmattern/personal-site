import "./css/globals.scss";
import "./css/lists.scss";

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
  return <html lang="en">{children}</html>;
}
