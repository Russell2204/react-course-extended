import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import searchStore, { selectData } from "store/searchStore"
import { imageMini } from "store/url"
import { Movie } from "types/Movie"

const SearchPage = () => {
  const [query, setQuery] = useState<string>('')
  const fetchData = searchStore(
    (state) => state.fetchData
  ) as (query:string) => void
  const data = searchStore(selectData) as Movie[]
  const isMounted = useRef<boolean>(false)
  useEffect(() => {
    if(isMounted.current){
      fetchData(query)
    }
    isMounted.current = true
  }, [isMounted.current,query])
    return (
      <section className="container search">
        <input type="text" placeholder="Найти фильм, сериал..." onChange={(e) => setQuery(e.target.value)}/>
        <div className="search__results">
          {data?.map((item:Movie) => (
            <Link to={`/${item.title ? 'movie' : 'tv'}/${item.id}`} className="search__results-item">
              <img src={imageMini + item.poster_path} alt={item.title} />
          </Link>
          ))}
        </div>
      </section>
    )
  }
  
  export default SearchPage