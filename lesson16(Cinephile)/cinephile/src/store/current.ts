import {create} from 'zustand'
import axios from "axios"
import { CurrentState } from 'types/Types'
import { apiKey } from './url'


const useCurrentStore = create<CurrentState>((set) => ({
    movie: null,
    tv: null,
    fetchData: async (type:string, id: string) => {
    try {
        const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=ru-RU`
        const response = await axios.get(url)
        if(type === 'movie') set({ movie: response.data }) 
        else set({ tv: response.data })
    } catch (error) {
        console.error('Произошла ошибка при получении фильмa или сериалa', error);
    }
  }
}))

export const selectMovie = (state: CurrentState) => state.movie
export const selectTv = (state: CurrentState) => state.tv

export default useCurrentStore