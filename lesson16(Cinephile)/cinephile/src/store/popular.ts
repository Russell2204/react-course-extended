import {create} from 'zustand'
import axios from "axios"
import { PopularState } from 'types/Movie'
import { apiKey } from './url'


const usePopularStore = create<PopularState>((set) => ({
    popularMovies: null,
    popularTvs: null,
  fetchData: async (type:string) => {
    try {
        const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=ru-RU`
        const response = await axios.get(url)
        if(type === 'movie') set({ popularMovies: response.data.results })
        else set({ popularTvs: response.data.results })
    } catch (error) {
        console.error('Произошла ошибка при получении популярных фильмов или сериалов', error);
    }
  }
}))

export const selectPopularMovies = (state: PopularState) => state.popularMovies
export const selectPopularTvs = (state: PopularState) => state.popularTvs

export default usePopularStore