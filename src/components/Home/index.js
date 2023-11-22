// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="homeContainer">
    <Header />
    <div className="homeImageContainer">
      <img
        className="mobileHomeImage"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <img
        className="desktopHomeImage"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
