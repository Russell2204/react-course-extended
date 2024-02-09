import listIcon from "../assets/images/list.svg"
import gridIcon from "../assets/images/grid.svg"
import { useState } from "react"
import NotesItem from "./NotesItem"
const Notes = () => {
  const [view, setView] = useState(true)

  return (
    <div className='container notes'>
      <div className='notes__top'>
        <h2 className='notes__top-title'>Все заметки</h2>
        <button className='notes__top-btn' onClick={() => setView(!view)}>
          <img src={view ? listIcon : gridIcon} alt='' />
          <span>{view ? "Список" : "Сетка"}</span>
        </button>
      </div>
      <div className='notes__list'>
        <NotesItem />
      </div>
    </div>
  )
}

export default Notes
