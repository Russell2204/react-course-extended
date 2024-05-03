import { useEffect, useRef } from "react"
import currentStore, { selectMovie, selectTv } from "store/currentStore"

const Movie = () => {
  const fetchData = currentStore(
    (state) => state.fetchData
  ) as (type:string,id:number) => void
  const movie = currentStore(selectMovie)
  const isMounted = useRef<boolean>(false)
  
  useEffect(() => {
    if(isMounted.current){
        fetchData(type,id)
    }
    isMounted.current = true
  }, [isMounted.current])
  return (
    <div>Movie</div>
  )
}

export default Movie