"use client";
export default function BackgroundSetter({ src }: { src: string }) {
  return (
    <style jsx global>
      {`
        body {
          background-image: url(${src});
        }
      `}
    </style>
  );
}
