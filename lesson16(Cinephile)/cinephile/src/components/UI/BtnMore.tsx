import { Link } from "react-router-dom"
import bars from "images/bars.svg";

const BtnMore = () => {
  return (
    <Link to='/' className="btn-more"><img src={bars} alt="" />Подробнее</Link>
  ) 
}

export default BtnMore