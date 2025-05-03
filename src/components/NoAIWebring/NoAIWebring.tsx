import image from "next/image";

export default function NoAIWebring() {
  return (
    <>
      <map name="noaimini9b">
        <area
          href="https://baccyflap.com/noai"
          shape="poly"
          coords="146,0,174,0,174,60,104,60,104,42,118,42,118,22,146,22"
          target="_blank"
          alt="no ai webring"
          title="no ai webring"
        />
        <area
          href="https://baccyflap.com/noai/?prv&s=itm"
          target="_top"
          shape="rect"
          coords="0,0,144,20"
          alt="previous"
          title="previous"
        />
        <area
          href="https://baccyflap.com/noai/?rnd"
          target="_top"
          shape="rect"
          coords="0,20,116,40"
          alt="random"
          title="random"
        />
        <area
          href="https://baccyflap.com/noai/?nxt&s=itm"
          target="_top"
          shape="rect"
          coords="0,40,76,60"
          alt="next"
          title="next"
        />
      </map>
      <img
        style={{ width: "176px", imageRendering: "pixelated" }}
        useMap="#noaimini9b"
        src="https://baccyflap.com/noai/miniwidget9.gif"
        alt="in big red letters is the word PREVIOUS, in big green letters is the word RANDOM and in big aquamarine letters is the words NEXT. beside these big words, in smaller print, it says THE / NO AI / W E B R I N G in black letters outlined in pink"
      />
    </>
  );
}
