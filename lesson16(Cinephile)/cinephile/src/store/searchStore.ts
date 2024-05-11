import { create } from "zustand";
import { apiKey, apiUrl } from "./url";
import axios from "axios";
import { SearchStateMovies } from "types/Movie";
const searchStore = create<SearchStateMovies>((set) => ({
    data: null,
    fetchData: async (query:string) => {
        try {
            const url = `${apiUrl}/search/multi?query=${query}&include_adult=false&language=ru-RU&page=1&api_key=${apiKey}`
            const response = await axios.get(url)
            set({ data: response.data.results })
        } catch (error) {
           console.error('Произoшла ошибка в Search', error);
        }
      
    }
}))
export const selectData = (state: SearchStateMovies) => state.data

export default searchStore