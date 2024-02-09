import React from "react"

const Modal = () => {
  return (
    <div className='modal'>
      <div className='modal__block'>
        <h2 className='modal__block-title'>Добавьте заметку</h2>
        <div className='modal__block-inputs'>
          <label>
            <input type='text' placeholder='Title' />
            <span>Title</span>
          </label>
          <label>
            <input type='text' placeholder='Content' />
            <span>Content</span>
          </label>
        </div>
        <div className='modal__block-btns'>
          <button>Отмена</button>
          <button>Добавить</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
