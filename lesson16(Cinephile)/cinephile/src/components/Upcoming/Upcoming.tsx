import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store/store"
import { Movie, fetchUpcoming, selectUpcoming } from "store/upcoming"
import * as React from 'react'
import bg from "images/bg.jpg"
import BtnMore from 'components/UI/BtnMore'

const Upcoming: React.FC = () => {
  const dispatch = useDispatch()
  const upcoming = useSelector((state: RootState) => selectUpcoming(state))
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      dispatch(fetchUpcoming())
    }
    isMounted.current = true
  }, [])

  return (
    <div className='main-upcoming'>
      {upcoming && upcoming.map((movie: Movie) => (
        <div className='main-upcoming-item' key={movie.id}>
          <img src={bg} alt='' />
          <div className='main-upcoming-item-content'>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <BtnMore />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Upcoming