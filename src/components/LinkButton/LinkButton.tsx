import Link from "next/link";
// import './LinkButton.css'

interface LinkButtonPropsType {
  buttonText: string;
  href: string;
}

function LinkButton({
  buttonText,
  href,
}: LinkButtonPropsType): React.ReactElement {
  return (
    <Link
      href={href}
      className="block text-xl max-w-fit m-auto blue-link bg-tile-color py-2 px-4 rounded-md"
    >
      <div className="flex items-center justify-center">
        <div>{buttonText}</div>
      </div>
    </Link>
  );
}

export default LinkButton;
