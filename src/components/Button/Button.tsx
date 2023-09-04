interface ButtonPropsType {
  buttonText: string
}

function Button({buttonText}: ButtonPropsType) : JSX.Element {

  return (
    <button className="py-1 px-2 border-2 rounded-lg">
      {buttonText}
    </button>
  );
}

export default Button;