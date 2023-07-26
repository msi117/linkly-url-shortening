import { FiLogIn, FiUserPlus } from 'react-icons/fi'
import './Header.scss'
import Button from './button/Button'
const Header = () => {
  
  return (
    <header>
        <h1>Linkly</h1>
        <div className="logins">
            <Button buttonText={'Login'} icon={<FiLogIn />} />
            <Button buttonText={'Register Now'} icon={<FiUserPlus />} />
        </div>
    </header>
  )
}

export default Header