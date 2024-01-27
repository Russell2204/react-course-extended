import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar' // 4
// import {title, hello} from './data' 1
// import asd from './data' default даёт возможность вызывать что-либо с любым названием 3
let logo = 'Лого'
function App() {
  // console.log(user); 3
  // console.log(asd); 3
  const [list, setList] = useState([ // useStateSnippet
    {id: 1, name: 'HTML'},
    {id: 2, name: 'CSS'},
    {id: 3, name: 'JS'},
    {id: 4, name: 'React'},
  ]) 
  const [title, setTitle] = useState('Состояние')
  const changeTitle = (item) => {
    setTitle(item);
  }
  const [text, setText] = useState('')
  const add = () => {
    let obj = {
      id: Math.random(),
      name: text
    }
    setList([...list, obj])
    setText('')
  }
  return (
    <div className="wrapper">
      {/* <h1>{title}</h1> 1*/ }
      {/* <button onClick={() => hello() 2}>HELLO</button> */}
      {/* <Navbar logo="Это пропс"></Navbar> */}
      <Navbar change={changeTitle} logo={logo} list={list} />
      <h1>{title}</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => add()}>add</button>
    </div>
  )
}

export default App
