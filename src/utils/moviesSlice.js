import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        papularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        gptSearch: false,
        trailer: null
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action)=>{
            state.trailer = action.payload;
        },
        addPapularMovie: (state, action)=>{
            state.papularMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addTOUpcoming: (state, action)=>{
            state.upcomingMovies = action.payload;
        },
        toggleGptSearch: (state)=>{
            state.gptSearch = !state.gptSearch;
        }
    }
})

export const { addNowPlayingMovies,addTOUpcoming, addTopRatedMovies ,addPapularMovie, addTrailer, toggleGptSearch} = moviesSlice.actions
export default moviesSlice.reducer;