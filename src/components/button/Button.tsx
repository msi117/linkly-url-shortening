import { ReactNode } from 'react';
import './Button.scss'
type ButtonProps = {
    buttonText: string;
    icon:  ReactNode;
}
const Button = ({buttonText, icon }: ButtonProps) => {
  return (
    <button> <span>{buttonText}</span>{icon} </button>
  )
}

export default Button