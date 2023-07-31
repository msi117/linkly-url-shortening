import { FiArrowRight } from 'react-icons/fi'
import Button from '../button/Button'
import './mainsection.scss'
const Main = () => {
  return (
    <section>
      <div className='content'>
        <h2>Shorten your Looooong Links :)</h2>
        <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
      </div>
      <form className='form-input'>
          <input type="text" id="link" placeholder="Enter the link here" />
          <Button buttonText='Shorten Now!' icon={<FiArrowRight />} />
      </form>
    </section>
  )
}

export default Main