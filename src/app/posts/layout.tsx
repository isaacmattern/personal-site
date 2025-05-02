import BackgroundSetter from "@/components/BackgroundSetter/BackgroundSetter";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundSetter src={"/bg-images/default.gif"} />
      {children}
    </>
  );
}
