import BtnMore from 'components/UI/BtnMore'
import { imageFull,imageMini } from 'store/url'
import * as React from 'react'
import { UpcomingItemProps } from 'types/Movie'

const UpcomingItem: React.FC<UpcomingItemProps> = ({
  movie,
  next,
  nextSlide
}) => {
  return (
    <div className="main-upcoming-item">
      <img src={imageFull + movie.backdrop_path} alt="" />
      <div className="main-upcoming-item-content">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <BtnMore />
      </div>
      <div className="main-upcoming-item-next" onClick={next}>
        <img src={imageMini + nextSlide.backdrop_path} alt="" />
        <div>
            <span>Следующий</span>
            <h2>{nextSlide.title}</h2>
        </div>
        <div className="main-upcoming-item-line"></div>
    </div>
</div>
  )
}

export default UpcomingItem
