import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar' // 4
import Users from './components/Users'
let logo = 'Лого'
function App() {
  const [open, setOpen] = useState(true)
  const [list, setList] = useState([ // useStateSnippet
    {id: 1, name: 'HTML'},
    {id: 2, name: 'CSS'},
    {id: 3, name: 'JS'},
    {id: 4, name: 'React'},
  ]) 
  const [users, setUsers] = useState(null)
  // async function take() {
  //   const data = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const res  = await data.json()
  //   console.log(res);
  //  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(res => setUsers(res))
  // take()
  }, [])
  
  return (
    <div className="wrapper">
      { open && <Navbar logo={logo} list={list} open={open} /> }
      <button onClick={() => setOpen(!open)}>CLICK</button>
      <Users users={users}/>
    </div> 
  )
}

export default App
