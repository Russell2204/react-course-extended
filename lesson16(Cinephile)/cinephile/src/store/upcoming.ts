import {create} from 'zustand'
import axios from "axios"
import { UpcomingStateMovies } from 'types/Movie'
import { apiKey } from './url'


const useUpcomingStore = create<UpcomingStateMovies>((set) => ({
  data: null,
  fetchData: async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=ru-RU`
    const response = await axios.get(url)
    set({ data: response.data.results })
  }
}))

export const selectUpcoming = (state: UpcomingStateMovies) => state.data

export default useUpcomingStore