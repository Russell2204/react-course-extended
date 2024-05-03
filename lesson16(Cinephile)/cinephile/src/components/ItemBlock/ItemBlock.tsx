import BtnMore from "components/UI/BtnMore"
import { imageFull } from "store/url"
import { Movie } from "types/Movie"
interface ItemBlockProps {
  media: Movie | null
  active: boolean
  close: () => void
}

const ItemBlock:React.FC<ItemBlockProps> = ({media, active, close}) => {
  console.log(media);
  
  return (
    <div className={`media__info ${active ? 'active' : ''}`}>
      <i className="fa-solid fa-close close" onClick={() => close()}></i>
      {media && (
        <div className="media__info-content">
            <div className="media__info-content-block">
                <h2>{media.title || media.name}</h2>
                <p>{media.overview || 'Неописуемый...'}</p>
                <BtnMore/>
            </div>
          <img src={imageFull + media.backdrop_path} alt="" />
        </div>
      )}
        
    </div>
  )
}

export default ItemBlock