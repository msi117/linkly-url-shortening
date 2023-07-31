import Header from "./components/Header"
import Links from "./components/links/Links"
import Main from "./components/mainsection/Main"
import './main.scss'
import ExampleSVG from './assets/Swirl.svg'


const App = () => {
  return (
    <div className="app">
      <div className="svg-background">
        <img src={ExampleSVG} alt="Background Swirl" />
      </div>
    <Header />
    <Main />
    <Links />
    </div>
  )
}

export default App