import { useState, useEffect } from "react"
import zoom from "../assets/images/zoom.svg"
import back from "../assets/images/back.svg"
import clean from "../assets/images/clean.svg"

const Navbar = ({setSearching}) => {
  const [text, setText] = useState("")
  const [show, setShow] = useState(true)
const reset = () => {
  setText('')
  setShow(true)
}
useEffect(() => {
  setSearching(text)
}, [text])

  return (
    <header className='header'>
      {show ? (
        <nav className='header__nav'>
          <button className='header__nav-lang'>RU</button>
          <h1 className='header__nav-title'>Заметки</h1>
          <button className='header__nav-search' onClick={() => setShow(false)}>
            <img src={zoom} alt='' />
          </button>
        </nav>
      ) : (
        <nav className='header__search'>
          <button className='header__search-back' onClick={() => reset()}>
            <img src={back} alt='' />
          </button>
          <input
            type='text'
            className='header__search-input'
            placeholder='Поиск...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className='header__search-clean'>
            <img src={clean} alt='' onClick={() => setText('')}/>
          </button>
        </nav>
      )}
    </header>
  )
}

export default Navbar
