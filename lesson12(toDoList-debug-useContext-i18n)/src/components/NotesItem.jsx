import { useContext } from 'react'
import delIcon from '../assets/images/del.svg'
import penIcon from '../assets/images/pen.svg'
import clsx from 'clsx'
import { TodoContext } from '../context/context'

const NotesItem = ({ note, view }) => {
  const { deleteNoteHandler, changeNoteHandler} = useContext(TodoContext)
  const noteItemTopClass = clsx('notes__item-top', { active: !view })

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
          <span onClick={() => changeNoteHandler(note)}>РЕДАКТИРОВАТЬ</span>
        </button>
        <button onClick={() => deleteNoteHandler(note.id)}>
          <img src={delIcon} alt="" />
          <span>УДАЛИТЬ</span>
        </button>
      </div>
    </div>
  )
}

export default NotesItem
