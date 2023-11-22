// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="navHeader">
    <div className="navContent">
      <Link to="/">
        <img
          className="websiteLogo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburgerIconButton"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popupContent"
      >
        {close => (
          <div className="modalContainer">
            <button
              className="closeButton"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="navLinksList">
              <li className="navLinkItem">
                <Link className="navLink" to="/" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="navLinkContent">Home</p>
                </Link>
              </li>
              <li className="navLinkItem">
                <Link className="navLink" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <p className="navLinkContent">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
