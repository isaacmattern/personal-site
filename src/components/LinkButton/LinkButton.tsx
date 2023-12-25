import Link from "next/link";
// import './LinkButton.css'

interface LinkButtonPropsType {
  buttonText: string;
  href: string;
}

function LinkButton({ buttonText, href }: LinkButtonPropsType): JSX.Element {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-base bg-tile-color rounded-md max-w-fit m-auto blue-link"
    >
      <div className="flex items-center justify-center">
        <div className="font-bold">{buttonText}</div>
      </div>
    </Link>
  );
}

export default LinkButton;
