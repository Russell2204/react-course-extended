import React from "react"
import delIcon from "../assets/images/del.svg"
import penIcon from "../assets/images/pen.svg"
import clsx from "clsx"

const NotesItem = ({ note, view, deleteNote, changeNote }) => {
  const noteItemTopClass = clsx("notes__item-top", { active: !view })

  return (
    <div className='notes__item'>
      <div className={noteItemTopClass}>
        <h2>{note.title}</h2>
        <span>{note.date}</span>
      </div>
      <p>{note.text}</p>
      <div className='notes__item-btns'>
        <button>
          <img src={penIcon} alt='' />
          <span onClick={() => changeNote(note)}>РЕДАКТИРОВАТЬ</span>
        </button>
        <button onClick={() => deleteNote(note.id)}>
          <img src={delIcon} alt='' />
          <span>УДАЛИТЬ</span>
        </button>
      </div>
    </div>
  )
}

export default NotesItem
