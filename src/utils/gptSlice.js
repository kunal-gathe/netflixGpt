import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        movieName: null,
        moviesResult : null
    },
    reducers:{
        addGptMovieResult: (state, action)=>{
            const {MovieName , moviesResult} = action.payload
            state.movieName = MovieName
            state.moviesResult = moviesResult
        },
        
    }
})

export const {addGptMovieResult} = gptSlice.actions
export default gptSlice.reducer