import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { useEffect, useRef, useState } from 'react'
import usePopularStore, {
  selectPopularMovies,
  selectPopularTvs,
} from 'store/popular'
import { MovieAndTv } from 'types/Types'
import { imageMini } from 'store/url'
import ItemBlock from 'components/ItemBlock/ItemBlock'

interface TAMProp {
  type: string
}

const Content: React.FC<TAMProp> = ({ type }) => {
  const fetchData = usePopularStore((state) => state.fetchData) as (
    type: string
  ) => void
  const popularMovies = usePopularStore(selectPopularMovies) as MovieAndTv[]
  const popularTvs = usePopularStore(selectPopularTvs) as MovieAndTv[]
  const isMounted = useRef<boolean>(false)

  useEffect(() => {
    if (isMounted.current) {
      fetchData(type)
    }
    isMounted.current = true
  }, [isMounted.current])

  const [active, setActive] = useState<boolean>(false)
  const [media, setMedia] = useState<MovieAndTv | null>(null)
  const getMedia = (item:MovieAndTv, type: string) => {
    if(type === 'movie') setMedia(item)
    else setMedia(item)
    setActive(true)
  }
  const closeItemBlock = (disactive:boolean) => {
    setActive(disactive)
  }
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
                  <SplideSlide key={item.id} className="media-slider-item" onClick={() => getMedia(item, type)}>
                    <img
                      src={imageMini + item.poster_path}
                      alt={item.poster_path}
                    />
                  </SplideSlide>
                ))
              : popularTvs?.map((item) => (
                  <SplideSlide key={item.id} className="media-slider-item" onClick={() => getMedia(item, type)}>
                    <img
                      src={imageMini + item.poster_path}
                      alt={item.poster_path}
                    />
                  </SplideSlide>
                ))}
          </>
        )}
      </Splide>
      <ItemBlock active={active} media={media} closeItemBlock={closeItemBlock}/>
    </section>
  )
}

export default Content
