import { useState, useEffect } from 'react'
import * as React from 'react'
import './assets/styles/main.scss'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import editIcon from './assets/images/pen.svg'
import Modal from './components/Modal'
import { TodoContext } from './context/context'
import { useTranslation, TFunction } from 'react-i18next'
export interface Note {
  title: string
  date: string
  text: string
  id: string
}

export interface TodoContextType {
  setSearchingHandler: (val: string) => void
  changeNoteHandler: (note: Note) => void
  deleteNoteHandler: (id: string) => void
  closeModalHandler: () => void
  addOrChangeNoteHandler: (note: Note) => void
  t: TFunction
}
function App(): JSX.Element {
  const { t }: { t: TFunction } = useTranslation()
  const getLs = (): Note[] =>
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  const setLs = (): void => {
    localStorage.notes = JSON.stringify(notes)
  }
  const [notes, setNotes] = useState<Note[]>(getLs)
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [isEdit, setEdit] = useState<boolean>(false)
  const [editNote, setEditNote] = useState<Note | null>(null)
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    setLs()
  }, [notes])
  const filteredNotes: Note[] = notes.filter((note: Note) =>
    note.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  const openModalHandler = (): void => {
    setEditNote(null)
    setModalOpen(true)
    setEdit(false)
  }
  const closeModalHandler = (): void => {
    setModalOpen(false)
    setEdit(false)
  }
  const addOrChangeNoteHandler = (note: Note): void => {
    if (editNote?.id) {
      const updatedNotes: Note[] = notes.map((item: Note) => {
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
  const deleteNoteHandler = (id: string): void => {
    setNotes(notes.filter((note: Note) => note.id !== id))
  }
  const changeNoteHandler = (note: Note): void => {
    setEditNote(note)
    setModalOpen(true)
    setEdit(true)
  }
  const setSearchingHandler = (val: string): void => {
    setSearchValue(val)
  }

  return (
    <TodoContext.Provider value={{
      setSearchingHandler,
      changeNoteHandler,
      deleteNoteHandler,
      closeModalHandler,
      addOrChangeNoteHandler,
      t,
    }}>
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
