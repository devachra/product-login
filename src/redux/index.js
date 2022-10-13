import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./favourite";

const store = configureStore({ reducer: { fav: favouriteSlice.reducer } });

export default store;
