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
        <div className="font-bold text-primary-blue">
          {buttonText}
        </div>
        <div className="hidden button-hover-effect-target">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline" width="22" height="22" viewBox="0 0 24 24">
          <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
          </svg>
        </div>
      </div>
    </Link>

  );
}

export default LinkButton;