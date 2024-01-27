// rafce - короткая запись вместо ! ДОЛЖЕН БЫТЬ УСТАНОВЛЕН ПЛАГИН ES++
import {useState, useEffect, useRef} from "react"
import image from '../assets/images/react.svg' // ПОКАЗАТЬ В КОНЦЕ УРОКА И СКАЗАТЬ СОБРАТЬ ABOUT ME
// https://www.figma.com/file/gqALMr452VtXQ2x6TmsJ7z/%D0%A1%D0%B0%D0%B9%D1%82-%22%D0%9E%D0%B1%D0%BE-%D0%BC%D0%BD%D0%B5%22?node-id=0%3A3&mode=dev ссылка на макет

const Navbar = (props) => {
  // const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  useEffect(() => {
    console.log('Navbar монtирован');
    // console.log(inputRef.current); // а здесь мы уже получаем целиком html элемент input
    inputRef.current.focus() // делаем автофокус при монтировании приложения
    return () => {
      console.log('Navbar демонитрован(уничтожен)');
    }
  }, [count2]) // чтобы useEffect не запускался постоянно добавить пустой массив, НО если в массив передать какое либо состояние, то таким образом мы заставим useEffect сработать снова в том случае если введённый элемент в массив изменился!!!
  
  const inputRef = useRef(null)
  // console.log(inputRef.current); // вне return нет смысла вызывать ref так как мы получим только начальное значение
  
  return (
    <nav className='nav'>
      <a href='' className='logo'>
        <img src={image} alt="" />
      </a>
      <div className="box">
        {/* <h2>{count}</h2> */}
        {/* <button onClick={() => setCount(count + 2) /* при клике будет снова монтироваться приложение и будет срабатывать всё что прописано в useEffect ~~>>add</button> */}
        <input type="text" ref={inputRef} />
       </div>
      <div className="box">
        <h2>{count2}</h2>
        <button onClick={() => setCount2(count2 + 2)}>add</button>
      </div>
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
