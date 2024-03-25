import * as React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "images/logo.svg";
const Navbar:React.FC = () => {
  return (
    <nav className="nav">
    <div className="container">
        <NavLink to="/"><img src={logo} alt=""/></NavLink>
        {/* <button className="burger"> */}
            {/* <img src="images/bars.svg" alt=""/> */}
        {/* </button> */}
        <ul className="nav-list">
            <li><NavLink to="/" className="">Главная</NavLink></li>
            <li><NavLink to="/movies" className="">Фильмы</NavLink></li>
            <li><NavLink to="/tvs" className="">Сериалы</NavLink></li>
            <li><NavLink to="/search" className=""><i className="fa-solid fa-magnifying-glass"></i></NavLink></li>
        </ul>
    </div>
</nav>
  )
}

export default Navbar