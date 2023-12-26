export default function Page() {
  return (
    <div>
      <p>
        {"If you know me in "}
        <a
          target="_blank"
          className="blue-link"
          href="https://en.wikipedia.org/wiki/Real_life"
        >
          real life
        </a>
        {", just ask and I'll add a link of your choice to this page :)"}
      </p>

      <h1>Friends</h1>

      <ul>
        <li>{"Oops, this list is empty :("}</li>
      </ul>
    </div>
  );
}
