import Content from './Content.jsx'
import Nav from './Nav.jsx'
const Header = () => {
  return (
    <header className="header">
        <Nav/>
        <Content />
    </header>
  )
}

export default Header