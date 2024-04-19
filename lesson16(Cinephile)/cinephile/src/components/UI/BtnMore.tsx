import { Link } from "react-router-dom"
import bars from "images/bars.svg";
interface BtnMoreProps{
  id: number
  type: string
}
const BtnMore:React.FC<BtnMoreProps> = ({id,type}) => {
  return (
    <Link to={`/${type}/${id}`} className="btn-more"><img src={bars} alt="" />Подробнее</Link>
  ) 
}

export default BtnMore