import { Link } from "react-router-dom"

const BtnMore = () => {
  return (
    <Link to="/" className="btn-more">
        <i className="fa-solid fa-bars"></i>
        Подробнее
    </Link>
  )
}

export default BtnMore