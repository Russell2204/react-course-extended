import { configureStore } from "@reduxjs/toolkit";
import upcomingReducer from "store/upcoming";

const store = configureStore({
  reducer: {
    upcoming: upcomingReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;