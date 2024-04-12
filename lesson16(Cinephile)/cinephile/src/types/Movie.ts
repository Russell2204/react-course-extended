export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }
export interface Tv {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }
 export type UpcomingItemProps = {
    movie: Movie,
    next: ()=>void,
    nextSlide: Movie
  }

  export  interface UpcomingStateMovies {
    fetchData: any
    data: Movie[] | null
  }
  export  interface PopularState {
    fetchData: any
    popularMovies: Movie[] | null
    popularTvs: Tv[] | null
  }

  