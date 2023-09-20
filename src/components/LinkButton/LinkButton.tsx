import Link from "next/link";
// import './LinkButton.css'

interface LinkButtonPropsType {
  buttonText: string
  href: string
}

function LinkButton({buttonText, href}: LinkButtonPropsType) : JSX.Element {

  return (
    <Link
      href={href}
      className='block px-3 py-2 text-base bg-tile-blue rounded-md max-w-fit m-auto hover:opacity-60 cursor-pointer button-hover-effect-listener'
    >
      <div className="flex items-center justify-center">
        <div className="font-bold text-foreground hover:text-primary-blue">
          {buttonText}
        </div>
      </div>
    </Link>

  );
}

export default LinkButton;