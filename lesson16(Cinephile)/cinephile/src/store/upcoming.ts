import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "store/store"
import axios from "axios"
import { apiKey } from "store/url"

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

interface UpcomingState {
  upcoming: Movie[] | null
}

const initialState: UpcomingState = {
  upcoming: null,
}

interface UpcomingResponse {
    results: Movie[];
}

export const fetchUpcoming = createAsyncThunk<Movie[] | null>(
  "upcoming/fetch",
  async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=ru-RU`
    const response = await axios.get<UpcomingResponse>(url)
    return response.data.results
  }
)

const upcomingSlice = createSlice({
  name: "upcoming",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUpcoming.fulfilled, (state, action) => {
      state.upcoming = action.payload
    })
  },
})

export const selectUpcoming = (state: RootState) => state.upcoming.upcoming

export default upcomingSlice.reducer