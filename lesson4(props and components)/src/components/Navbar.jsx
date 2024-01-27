// rafce - короткая запись вместо ! ДОЛЖЕН БЫТЬ УСТАНОВЛЕН ПЛАГИН ES++
import React from "react"

const Navbar = (props) => {
    console.log(props);
//   return (
//     <nav className='nav'>
//       <a href='' className='logo'>
//         Logo
//       </a>
//       <ul className='list'>
//         <li>
//           <a href='#' className='link'>html</a>
//         </li>
//         <li>
//           <a href='#' className='link'>css</a>
//         </li>
//         <li>
//           <a href='#' className='link'>js</a>
//         </li>
//       </ul>
//     </nav>
//   )
  return ( // показать на пропсах с массивом из useState
    <nav className='nav'>
      <a href='' className='logo'>
        Logo
      </a>
      <ul className='list'>
        {props.list.map((item) => (
            <li key={item.id}>
                 <a onClick={() => props.change(item.name)} href='#' className='link'>{item.name}</a>
            </li>
        ))}
        
      </ul>
    </nav>
  )
}

export default Navbar
