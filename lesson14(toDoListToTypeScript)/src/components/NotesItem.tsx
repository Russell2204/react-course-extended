import { useContext } from 'react'
import * as React from 'react'
import delIcon from '../assets/images/del.svg'
import penIcon from '../assets/images/pen.svg'
import clsx from 'clsx'
import { TodoContext } from '../context/context'
import {Note} from '../App'
interface NoteProps {
  note: Note,
  view: boolean
}
const NotesItem:React.FC<NoteProps> = ({ note, view }) => {
  const { deleteNoteHandler, changeNoteHandler} = useContext(TodoContext)
  const noteItemTopClass:string = clsx('notes__item-top', { active: !view })

  const handleEditNote = (): void => {
    changeNoteHandler(note)
  }

  const handleDeleteNote = (): void => {
    deleteNoteHandler(note.id)
  }
  return (
    <div className="notes__item">
      <div className={noteItemTopClass}>
        <h2>{note.title}</h2>
        <span>{note.date}</span>
      </div>
      <p>{note.text}</p>
      <div className="notes__item-btns">
        <button>
          <img src={penIcon} alt="" />
          <span onClick={handleEditNote}>РЕДАКТИРОВАТЬ</span>
        </button>
        <button onClick={handleDeleteNote}>
          <img src={delIcon} alt="" />
          <span>УДАЛИТЬ</span>
        </button>
      </div>
    </div>
  )
}

export default NotesItem
