import { useContext, useState } from "react"
import Button from "./Button"
import { FiBell, FiChevronDown, FiLogIn } from 'react-icons/fi'
import { AuthContext } from "../context/AuthContext"
import Login from "./Login"
import Register from "./Register"

const Header = () => {

  // const auth = useContext(AuthContext)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const auth = false

  const closeLogin = () => {
    setShowLogin(false)
  }

  const closeRegister = () => {
    setShowRegister(false)
  }

  return (
    <>
      <header className="py-2 px-4 flex justify-between">
        <h1 className="text-3xl lg:text-5xl inline-block font-bold from-primary via-secondary to-primary bg-gradient-to-r bg-clip-text text-transparent">Linkly</h1>

        {
          auth ?
            <div className="flex justify-center items-center gap-4">
              {/* TODO Add a dropdown menu here */}
              <Button className="rounded-full"> {auth} <FiChevronDown /> </Button>

              {/* TODO Create notifications icon */}
              <Button className="bg-primary ring-primary"> <FiBell /> </Button>
            </div>
            :
            <div className="flex justify-center items-center gap-4">
              <Button handleButton={() => setShowLogin(true)}> <span className="hidden md:block"> Sign In </span>  <FiLogIn /> </Button>
              <Button handleButton={() => setShowRegister(true)} className="bg-primary ring-primary">Sign Up </Button>
            </div>
        }
      </header>
      {
        showLogin && <Login handleLogin={closeLogin} />
      }
      {
        showRegister && <Register handleRegister={closeRegister} />
      }
    </>
  )
}

export default Header