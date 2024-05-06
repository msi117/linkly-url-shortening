import { twMerge } from 'tailwind-merge'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button className={twMerge("text-white rounded-3xl text-xs px-2.5 py-1 bg-gray flex justify-center items-center gap-2 ring-1 ring-lite md:text-md lg:py-2 lg:px-4", className)}>
            {children}
        </button>
    )
}

export default Button