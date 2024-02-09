import { useState } from "react"
import { v4 } from "uuid"

const Modal = ({ closeModal, addNote }) => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const add = () => {
    const note = {
      id: v4(),
      title: title,
      text: text,
      date: new Date().toLocaleDateString()
    }
    addNote(note)
    closeModal()
  }
  return (
    <div className='modal' onClick={() => closeModal()}>
      <div
        className='modal__block'
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className='modal__block-title'>Добавьте заметку</h2>
        <div className='modal__block-inputs'>
          <label>
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span>Title</span>
          </label>
          <label>
            <input
              type='text'
              placeholder='Content'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <span>Content</span>
          </label>
        </div>
        <div className='modal__block-btns'>
          <button onClick={() => closeModal()}>Отмена</button>
          <button onClick={() => add()}>Добавить</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
