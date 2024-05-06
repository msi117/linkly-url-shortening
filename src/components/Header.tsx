import Button from "./Button"
import { FiLogIn } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="py-2 px-4 flex justify-between">
      <h1 className="text-3xl lg:text-5xl inline-block font-bold from-primary via-secondary to-primary bg-gradient-to-r bg-clip-text text-transparent">Linkly</h1>
      <div className="flex justify-center items-center gap-4">
        <Button> <span className="hidden md:block"> Sign In </span>  <FiLogIn /> </Button>
        <Button className="bg-primary ring-2 ring-primary">Sign Up </Button>
      </div>
    </header>
  )
}

export default Header