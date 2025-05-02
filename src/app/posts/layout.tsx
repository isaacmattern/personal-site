import Background from "@/components/Background/Background";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Background image={"/bg-images/default.gif"}>{children}</Background>;
}
