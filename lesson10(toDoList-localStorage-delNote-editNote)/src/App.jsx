import { useState, useEffect } from "react"
import "./assets/styles/main.scss"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import editIcon from "./assets/images/pen.svg"
import Modal from "./components/Modal"

function App() {
  const getLs = () => localStorage.notes ? JSON.parse(localStorage.notes) : []
  const setLs = () => localStorage.notes = JSON.stringify(notes)
  const [notes, setNotes] = useState(getLs)
  const [isModalOpen, setModalOpen] = useState(false)
  const [isEdit, setEdit] = useState(false)
  
  useEffect(() => {
    console.log(1);
    // localStorage.user = {name: 'User', age: 25} ninada tak delat(
    // localStorage.user = JSON.stringify({name: 'User', age: 25})
    // let user = localStorage.user
    // let user = JSON.parse(localStorage.user)
    // console.log(user); pokazat primer
    setLs()
  }, [notes])
  
  const openModalHandler = () => {
    setModalOpen(true)
  setEdit(false)
    
  }
  const closeModalHandler = () => {
    setModalOpen(false)
  setEdit(false)
    
  }
  const addNoteHandler = (note) => {
    // console.log(note);
    setNotes([...notes, note])
  }
  const deleteNoteHandler = (id) => {
    // console.log(id);
    setNotes(notes.filter(note => note.id !== id))
}   
const changeNoteHandler = (note) => {
  console.log(note);
  setModalOpen(true)
  setEdit(true)
}
  return (
    <div className='wrapper'>
      <Navbar />
      <Notes notes={notes} deleteNote={deleteNoteHandler} changeNote={changeNoteHandler} />
      {isModalOpen && (
        <Modal closeModal={closeModalHandler} addNote={addNoteHandler} edit={isEdit}/>
      )}
      {!isModalOpen && (
        <button className='add' onClick={() => openModalHandler()}>
          <img src={editIcon} alt='' />
        </button>
      )}
    </div>
  )
}

export default App
