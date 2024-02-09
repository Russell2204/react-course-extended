import React from "react"
import delIcon from "../assets/images/del.svg"
import penIcon from "../assets/images/pen.svg"
const NotesItem = () => {
  return (
    <div className='notes__item'>
      <div className='notes__item-top'>
        <h2>Title</h2>
        <span>09.02.2024</span>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ex
        voluptas nostrum ducimus eveniet hic dolor molestias, excepturi aliquam
        optio.
      </p>
      <div className='notes__item-btns'>
        <button>
          <img src={penIcon} alt='' />
          <span>РЕДАКТИРОВАТЬ</span>
        </button>
        <button>
          <img src={delIcon} alt='' />
          <span>УДАЛИТЬ</span>
        </button>
      </div>
    </div>
  )
}

export default NotesItem
