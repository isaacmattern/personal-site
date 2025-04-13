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
    <Link href={href}>
      <div>
        <div>{buttonText}</div>
      </div>
    </Link>
  );
}

export default LinkButton;
