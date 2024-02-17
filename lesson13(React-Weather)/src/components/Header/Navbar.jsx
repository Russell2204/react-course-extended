import React from 'react'
import logo from './../../assets/images/logo.svg'
import TCicon from './../../assets/images/themeChanger.svg'

const Navbar = () => {
  return (
    <nav className="container header__nav">
        <a href="#" className="header__nav-logo"><img src={logo} alt={logo} /></a>
        <div className="header__nav-settings">
            <button><img src={TCicon} alt="ThemeChangerIcon" /></button>
            <input type="text" placeholder='Выбрать город' />
        </div>
    </nav>
  )
}

export default Navbar