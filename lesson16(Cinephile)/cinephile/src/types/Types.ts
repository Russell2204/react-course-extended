export interface MovieAndTv {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    first_air_date: string,
    title: string,
    name: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }

 export type UpcomingItemProps = {
    movie: MovieAndTv,
    next: ()=>void,
    nextSlide: MovieAndTv
  }

  export  interface UpcomingStateMovies {
    fetchData: any
    data: MovieAndTv[] | null
  }

  export  interface PopularState {
    fetchData: any
    popularMovies: MovieAndTv[] | null
    popularTvs: MovieAndTv[] | null
  }
  export  interface CurrentState {
    fetchData: any
    movie: MovieAndTv | null
    tv: MovieAndTv | null
  }

  