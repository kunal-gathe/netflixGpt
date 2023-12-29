import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

function usePlayingMovie (){
    let dispatch = useDispatch();
    async function getNowPlayingMovies(){
        let data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        let json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        getNowPlayingMovies()
    },[])
}

export default usePlayingMovie;