import { useState, useEffect } from 'react'
import './assets/styles/main.scss'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import editIcon from './assets/images/pen.svg'
import Modal from './components/Modal'
import { TodoContext } from './context/context'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  const getLs = () => (localStorage.notes ? JSON.parse(localStorage.notes) : [])
  const setLs = () => (localStorage.notes = JSON.stringify(notes))
  const [notes, setNotes] = useState(getLs)
  const [isModalOpen, setModalOpen] = useState(false)
  const [isEdit, setEdit] = useState(false)
  const [editNote, setEditNote] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {
    console.log(1)
    // localStorage.user = {name: 'User', age: 25} ninada tak delat(
    // localStorage.user = JSON.stringify({name: 'User', age: 25})
    // let user = localStorage.user
    // let user = JSON.parse(localStorage.user)
    // console.log(user); pokazat primer
    setLs()
  }, [notes])
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  const openModalHandler = () => {
    setEditNote(null)
    setModalOpen(true)
    setEdit(false)
  }
  const closeModalHandler = () => {
    setModalOpen(false)
    setEdit(false)
  }
  const addOrChangeNoteHandler = (note) => {
    // console.log(note);
    if (editNote?.id) {
      const updatedNotes = notes.map((item) => {
        if (item.id === note.id) {
          return note
        }
        return item
      })
      setNotes(updatedNotes)
    } else {
      setNotes([...notes, note])
    }
  }
  const deleteNoteHandler = (id) => {
    // console.log(id);
    setNotes(notes.filter((note) => note.id !== id))
  }
  const changeNoteHandler = (note) => {
    // console.log(note);
    setEditNote(note)
    setModalOpen(true)
    setEdit(true)
  }
  const setSearchingHandler = (val) => {
    console.log(val)
    setSearchValue(val)
  }
  return (
    <TodoContext.Provider
      value={{
        setSearchingHandler,
        changeNoteHandler,
        deleteNoteHandler,
        closeModalHandler,
        addOrChangeNoteHandler,
        t,
      }}
    >
      <div className="wrapper">
        <Navbar />
        <Notes notes={filteredNotes} />
        {isModalOpen && <Modal edit={isEdit} editNote={editNote} />}
        {!isModalOpen && (
          <button className="add" onClick={() => openModalHandler()}>
            <img src={editIcon} alt="" />
          </button>
        )}
      </div>
    </TodoContext.Provider>
  )
}

export default App
