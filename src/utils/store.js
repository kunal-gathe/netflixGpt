import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import configureSlice from "./configureSlice";
import gptSlice from "./gptSlice";

const store = configureStore({
    reducer:{
        user: userSlice,
        movies: moviesSlice,
        language: configureSlice,
        gpt: gptSlice
    }
})

export default store;