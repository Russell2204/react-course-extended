import { useState, useEffect, useRef, useContext } from 'react'
import zoom from '../assets/images/zoom.svg'
import back from '../assets/images/back.svg'
import clean from '../assets/images/clean.svg'
import { TodoContext } from '../context/context'
import i18next from 'i18next'
import * as React from 'react'
const Navbar = (): JSX.Element => {
  const { setSearchingHandler, t } = useContext(TodoContext)
  const [text, setText] = useState<string>('')
  const [show, setShow] = useState<boolean>(true)
  const reset = (): void => {
    setText('')
    setShow(true)
  }
  useEffect(() => {
    if (isMounted.current) {
      setSearchingHandler(text)
    }
    isMounted.current = true
  }, [text])
  const isMounted = useRef<boolean>(false)
  const [lang, setLang] = useState<boolean>(false)
  const changeLang = (): void => {
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
          <h1 className="header__nav-title">{t('Zametki')}</h1>
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
