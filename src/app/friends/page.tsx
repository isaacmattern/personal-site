import Image from "next/image";

export default function Page() {
  return (
    <div>
      <p>
        {"If you know me in "}
        <a
          target="_blank"
          className="blue-link"
          href="https://en.wikipedia.org/wiki/Real_life#As_distinct_from_the_Internet"
        >
          real life
        </a>
        {", just ask and I'll add a link of your choice to this page :)"}
      </p>

      <h1>Friends</h1>

      <ul>
        <li>{"Oops, this list is empty :("}</li>
      </ul>

      <div className="mt-8">
        {"If you link my page on your site, consider using my button :)"}

        <div className="mt-4">
          <Image
            draggable={false}
            alt="Isaac Mattern's website button"
            src={"/buttons/isaac-mattern-button.png"}
            width={88}
            height={31}
          />
        </div>
      </div>
    </div>
  );
}
