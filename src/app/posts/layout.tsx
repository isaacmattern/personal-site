import Background from "@/components/Background/Background";
import "./../css/post.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Background image={null} color={"#f4f4f4"}>
      <div className="posts-section-layout-container">{children}</div>
    </Background>
  );
}
