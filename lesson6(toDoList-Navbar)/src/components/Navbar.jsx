const Navbar = () => {
  return (
    <header className="header">
        <nav className="header__nav">
            <button className="header__nav-lang">RU</button>
            <h1 className="header__nav-title">Заметки</h1>
            <button className="header__nav-search">
                <img src="images/zoom.svg" alt="" />
            </button>
        </nav>
    </header>
  )
}

export default Navbar