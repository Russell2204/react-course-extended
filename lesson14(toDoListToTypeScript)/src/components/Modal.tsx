import * as React from 'react'
import { useState, useContext, ChangeEvent, MouseEventHandler } from 'react'
import { v4 } from 'uuid'
import { TodoContext, TodoContextType } from '../context/context'
import { Note } from '../App'
interface ModalProps {
  edit: boolean
  editNote: Note | null
}
const Modal: React.FC<ModalProps> = ({ edit, editNote }) => {
  const {
    closeModalHandler: closeModal,
    addOrChangeNoteHandler: addOrChangeNote,
  } = useContext<TodoContextType>(TodoContext)
  const [title, setTitle] = useState<string>(editNote?.title ?? '')
  const [text, setText] = useState<string>(editNote?.text ?? '')
  const addOrChange: MouseEventHandler<HTMLButtonElement> = (): void => {
    if (title.length > 2 && text.length > 2) {
      const note = {
        id: editNote?.id ?? v4(),
        title: title,
        text: text,
        date: new Date().toLocaleDateString(),
      }
      addOrChangeNote(note)
      closeModal()
    } else {
      alert('Нужно больше символов...')
    }
  }
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <div className="modal" onClick={() => closeModal()}>
      <div
        className="modal__block"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="modal__block-title">
          {!edit ? 'Добавьте заметку' : 'Изменить заметку'}
        </h2>
        <div className="modal__block-inputs">
          <label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
            <span>Title</span>
          </label>
          <label>
            <input
              type="text"
              placeholder="Content"
              value={text}
              onChange={handleTextChange}
            />
            <span>Content</span>
          </label>
        </div>
        <div className="modal__block-btns">
          <button onClick={() => closeModal()}>Отмена</button>
          {!edit && <button onClick={(e) => addOrChange(e)}>Добавить</button>}
          {edit && <button onClick={(e) => addOrChange(e)}>Изменить</button>}
        </div>
      </div>
    </div>
  )
}

export default Modal
