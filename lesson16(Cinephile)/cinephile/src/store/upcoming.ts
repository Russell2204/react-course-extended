import {create} from 'zustand'
import axios from "axios"
import { Movie } from 'types/Movie'
import { apiKey } from './url'

interface UpcomingState {
  fetchUpcoming: any
  upcoming: Movie[] | null
}

const useUpcomingStore = create<UpcomingState>((set) => ({
  upcoming: null,
  fetchUpcoming: async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=ru-RU`
    const response = await axios.get(url)
    set({ upcoming: response.data.results })
  }
}))

export const selectUpcoming = (state: UpcomingState) => state.upcoming

export default useUpcomingStore