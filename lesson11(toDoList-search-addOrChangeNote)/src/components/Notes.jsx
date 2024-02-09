import listIcon from "../assets/images/list.svg"
import gridIcon from "../assets/images/grid.svg"
import { useState } from "react"
import NotesItem from "./NotesItem"
import clsx from "clsx"
const Notes = ({ notes, deleteNote, changeNote }) => {
  const [view, setView] = useState(true)

  const noteListClass = clsx("notes__list", { active: !view })

  return (
    <div className='container notes'>
      <div className='notes__top'>
        <h2 className='notes__top-title'>{notes.length ? 'Все заметки' : 'Нет заметок'}</h2>
        <button className='notes__top-btn' onClick={() => setView(!view)}>
          <img src={view ? listIcon : gridIcon} alt='' />
          <span>{view ? "Список" : "Сетка"}</span>
        </button>
      </div>
      <div className={noteListClass}>
        {notes.map((note) => (
          <NotesItem key={note.id} note={note} view={view} deleteNote={deleteNote} changeNote={changeNote} />
        ))}
      </div>
    </div>
  )
}

export default Notes
