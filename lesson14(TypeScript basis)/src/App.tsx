import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(): JSX.Element {
  // Добавлена явная аннотация типа в функции App, указывающая, что она возвращает JSX.Element.
  const [count, setCount] = useState<number>(0) // Добавлено указание типа в useState для переменной count (number).

  return (
    <>
      <div>
       {/* Атрибут rel="noreferrer" добавляет дополнительный уровень безопасности при открытии внешних ссылок на другие сайты. */}
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
