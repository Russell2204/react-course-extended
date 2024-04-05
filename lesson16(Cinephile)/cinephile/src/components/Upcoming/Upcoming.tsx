import React, { useEffect, useRef, useState } from 'react'
import BtnMore from 'components/UI/BtnMore'
import useUpcomingStore, { selectUpcoming } from 'store/upcoming'
import { Movie } from 'types/Movie'
import { imageFull } from 'store/url'

const Upcoming: React.FC = () => {
  const fetchUpcoming = useUpcomingStore((state) => state.fetchUpcoming) as () => void
  const upcoming = useUpcomingStore(selectUpcoming) as Movie[] | null
  const isMounted = useRef(false)
  
  useEffect(() => {
    if (isMounted.current) {
      fetchUpcoming()
      setTimeoutMy(setTimeout(() => slide(), 1000))
    }
    isMounted.current = true
  }, [])

  const [slideView, setSlideView] = useState<number>(0)
  const [timeout, setTimeoutMy] = useState<any>(null)

  const slide = () => {
    if (upcoming && upcoming.length - 1 === slideView) {
      setSlideDirection('slide-out-right');
      setTimeoutMy(setTimeout(() => {
        setSlideDirection('slide-in-right');
        setSlideView(0);
      }, 500));
    } else {
      setSlideDirection('slide-out-right');
      setTimeoutMy(setTimeout(() => {
        setSlideDirection('slide-in-right');
        setSlideView((prev) => prev + 1);
      }, 500));
    }
    setTimeoutMy(setTimeout(() => slideNext(), 10000))
  }

  const slideNext = () => {
    clearTimeout(timeout)
    slide()
  }

  const slidePrev = () => {
    clearTimeout(timeout)
    setTimeoutMy(setTimeout(() => slide(), 10000))
    if (slideView > 0) {
      setSlideView((prev) => prev - 1)
    } else {
      setSlideView(upcoming ? upcoming.length - 1 : 0)
    }
  }

  const [slideDirection, setSlideDirection] = useState('slide-in-right');
  return (
    <div className="main-upcoming">
      {upcoming &&
        upcoming.map((movie: Movie, idx: number) => (
          <div key={movie.id}>
            {idx === slideView && (
              <div className={`main-upcoming-item ${idx === slideView ? slideDirection : ''}`}>
                <img src={imageFull + movie.backdrop_path} alt="" />
                <div className="main-upcoming-item-content">
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                  <BtnMore />
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  )
}

export default Upcoming