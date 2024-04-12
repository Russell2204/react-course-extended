import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { useEffect, useRef, useState } from 'react'
import usePopularStore, {
  selectPopularMovies,
  selectPopularTvs,
} from 'store/popular'
import { Movie } from 'types/Movie'
import { Tv } from 'types/Movie'
import { imageMini } from 'store/url'

interface TAMProp {
  type: string
}

const Content: React.FC<TAMProp> = ({ type }) => {
  const fetchData = usePopularStore((state) => state.fetchData) as (
    type: string
  ) => void
  const popularMovies = usePopularStore(selectPopularMovies) as Movie[]
  const popularTvs = usePopularStore(selectPopularTvs) as Tv[]
  const isMounted = useRef<boolean>(false)

  useEffect(() => {
    if (isMounted.current) {
      fetchData(type)
    }
    isMounted.current = true
  }, [isMounted.current])

  return (
    <section className="media">
      <Link className="media-title" to={type === 'movie' ? '/movies' : '/tvs'}>
        {type === 'movie' ? 'Фильмы' : 'Сериалы'}
        <i className="fa-solid fa-chevron-right"></i>
      </Link>
      <Splide
        className="media-slider"
        options={{
          type: 'loop',
          perPage: 5.5,
          perMove: 1,
          pagination:false,
          gap: '1rem',
          autoplay: true,
          breakpoints: {
            600: {
              perPage: 1,
            },
          },
        }}
      >
        {isMounted.current && (
          <>
            {type === 'movie'
              ? popularMovies?.map((item) => (
                  <SplideSlide key={item.id} className="media-slider-item">
                    <img
                      src={imageMini + item.poster_path}
                      alt={item.poster_path}
                    />
                  </SplideSlide>
                ))
              : popularTvs?.map((item) => (
                  <SplideSlide key={item.id} className="media-slider-item">
                    <img
                      src={imageMini + item.poster_path}
                      alt={item.poster_path}
                    />
                  </SplideSlide>
                ))}
          </>
        )}
      </Splide>
    </section>
  )
}

export default Content
