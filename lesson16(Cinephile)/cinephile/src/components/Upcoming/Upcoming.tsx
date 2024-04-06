import { useEffect, useRef, useState } from 'react'
import useUpcomingStore, { selectUpcoming } from 'store/upcoming'
import { Movie } from 'types/Movie'
import UpcomingItem from './UpcomingItem'

const Upcoming: React.FC = () => {
  const fetchUpcoming = useUpcomingStore(
    (state) => state.fetchUpcoming
  ) as () => void
  const upcoming = useUpcomingStore(selectUpcoming) as Movie[]
  const isMounted = useRef<boolean>(false)
  const [slideView, setSlideView] = useState<number>(0)

  useEffect(() => {
    if (isMounted.current) {
      const interval = setInterval(() => {
        if (upcoming && upcoming.length > 0) {
          if (slideView < upcoming.length - 1) {
            setSlideView(slideView + 1)
          } else {
            setSlideView(0)
          }
        }
      }, 10000)

      return () => clearInterval(interval)
    }
    isMounted.current = true
  }, [isMounted.current, slideView, upcoming])

  useEffect(() => {
    if (!upcoming) {
      fetchUpcoming()
    }
  }, [fetchUpcoming, upcoming])

  const handleNextSlide = () => {
    setSlideView((prevSlide) =>
      prevSlide === upcoming.length - 1 ? 0 : prevSlide + 1
    )
  }

  return (
    <div className="main-upcoming">
      {upcoming && (
        <>
          {upcoming.map((movie: Movie, idx: number) => (
            <div
              key={movie.id}
              className={`main-upcoming__animate ${
                idx === slideView ? 'active' : ''
              }`}
            >
              <UpcomingItem
                key={movie.id}
                movie={movie}
                next={handleNextSlide}
                nextSlide={
                  upcoming[
                    slideView + 1 !== upcoming.length ? slideView + 1 : 0
                  ]
                }
              />
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default Upcoming