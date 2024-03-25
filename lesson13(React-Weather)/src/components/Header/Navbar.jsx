import logo from './../../assets/images/logo.svg'
import TCicon from './../../assets/images/themeChanger.svg'
import { useEffect, useRef, useState } from 'react'

const Navbar = ({ changeWeather }) => {
  const [city, setCity] = useState('')
  const isMounted = useRef(false)
  useEffect(() => {
    if (isMounted.current && city) {
      changeWeather(city)
    } else {
      changeWeather('Чирчик')
    }
    isMounted.current = true
  }, [city])
  return (
    <nav className="container header__nav">
      <a href="#" className="header__nav-logo">
        <img src={logo} alt={logo} />
      </a>
      <div className="header__nav-settings">
        <button>
          <img src={TCicon} alt="ThemeChangerIcon" />
        </button>
        <input
          type="text"
          placeholder="Выбрать город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
    </nav>
  )
}

export default Navbar
