import { imageFull } from "store/url";
import { MovieAndTv } from "types/Types";

interface itemProps {
    active: boolean
    media: MovieAndTv
    closeItemBlock: (disactive:boolean) => void
}
const ItemBlock:React.FC<itemProps> = ({active, media, closeItemBlock}) => {
  return (
    <div className={`media__info ${active ? 'active' : ''}`}>
       <i className="fa fa-close close" onClick={() => closeItemBlock(false)}></i>
       {media && (
            <div className="media__info-content">
        <div className="media__info-content-block">
            <h2>{media.title || media.name }</h2>
            <p>{ media.overview || "Неописуемый..." }</p>
            {/* <p className="media__info-content-block-descr"> */}
            {/* <span>{ new Date(media.release_date || media.first_air_date).getFullYear() }</span> */}
            {/* <span>{{getGenres}}</span> */}
            {/* <span>{ */}
                    {/* type == 'movie' ? `${Math.floor(media.runtime / 60)}h ${media.runtime % 60}m` : */}
                    {/* `${media.number_of_seasons}s ${media.number_of_episodes}e` */}
                    {/* } */}
            {/* </span> */}
            {/* </p> */}
        </div>
        <img src={imageFull + media.backdrop_path} alt="" />
        </div>
       )}
    
    </div>
  )
}

export default ItemBlock