import { useState, useEffect, useRef, useContext } from 'react'
import zoom from '../assets/images/zoom.svg'
import back from '../assets/images/back.svg'
import clean from '../assets/images/clean.svg'
import { TodoContext } from '../context/context'
import i18next from 'i18next'

const Navbar = () => {
  const { setSearchingHandler, t } = useContext(TodoContext)
  const [text, setText] = useState('')
  const [show, setShow] = useState(true)
  const reset = () => {
    setText('')
    setShow(true)
  }
  useEffect(() => {
    if (isMounted.current) {
      setSearchingHandler(text)
    }
    isMounted.current = true
    // console.log((h1.current.style.background = 'red'))
  }, [text])
  // const h1 = useRef(null) pokazat primer raboti useRef
  const isMounted = useRef(false)
  const [lang, setLang] = useState(false)
  const changeLang = () => {
    setLang(!lang)
    if (!lang) i18next.changeLanguage('uz')
    else i18next.changeLanguage('ru')
  }
  return (
    <header className="header">
      {show ? (
        <nav className="header__nav">
          <button className="header__nav-lang" onClick={() => changeLang()}>
            {!lang ? 'RU' : 'UZ'}
          </button>
          <h1 className="header__nav-title">
            {/* <h1 className="header__nav-title" ref={h1}> */}
            {t('Zametki')}
          </h1>
          <button className="header__nav-search" onClick={() => setShow(false)}>
            <img src={zoom} alt="" />
          </button>
        </nav>
      ) : (
        <nav className="header__search">
          <button className="header__search-back" onClick={() => reset()}>
            <img src={back} alt="" />
          </button>
          <input
            type="text"
            className="header__search-input"
            placeholder="Поиск..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="header__search-clean">
            <img src={clean} alt="" onClick={() => setText('')} />
          </button>
        </nav>
      )}
    </header>
  )
}

export default Navbar
