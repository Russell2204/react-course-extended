import { createContext } from 'react'
import { Note } from '../App'
import { TFunction } from '../../node_modules/i18next/index'
export interface TodoContextType {
  setSearchingHandler: (val: string) => void
  changeNoteHandler: (note: Note) => void
  deleteNoteHandler: (id: string) => void
  closeModalHandler: () => void
  addOrChangeNoteHandler: (note: Note) => void
  t: TFunction
}
export const TodoContext = createContext<TodoContextType>({} as TodoContextType)
