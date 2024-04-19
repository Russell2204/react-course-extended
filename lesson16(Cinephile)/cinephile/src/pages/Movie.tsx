import useCurrentStore, { selectMovie, selectTv } from "store/current";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom"
import { MovieAndTv } from "types/Types";

const Movie = () => {
    const {type, id} = useParams();
    const fetchData = useCurrentStore((state) => state.fetchData) as (
        type: string | undefined,
        id: string | undefined
      ) => void
      const movie = useCurrentStore(selectMovie) as MovieAndTv
      const tv = useCurrentStore(selectTv) as MovieAndTv
      const isMounted = useRef<boolean>(false)
      useEffect(() => {
        if (isMounted.current) {
          fetchData(type, id)
        }
        isMounted.current = true
      }, [fetchData, isMounted.current])
  return (
    <></>
  )
}

export default Movie