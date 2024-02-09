import "./assets/styles/main.scss"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Notes />
    </div>
  )
}

export default App
