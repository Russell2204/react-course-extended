import { useState } from "react"
import "./assets/styles/main.scss"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import editIcon from "./assets/images/pen.svg"
import Modal from "./components/Modal"

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "JS",
      text: "Learn JS",
      date: "09.02.2024",
    },
    {
      id: 2,
      title: "JAVA",
      text: "Learn Java",
      date: "09.02.2024",
    },
    {
      id: 3,
      title: "C#",
      text: "Learn C#",
      date: "09.02.2024",
    },
  ])
  return (
    <div className='wrapper'>
      <Navbar />
      <Notes notes={notes} />
      <Modal />
      <button className='add'>
        <img src={editIcon} alt='' />
      </button>
    </div>
  )
}

export default App
