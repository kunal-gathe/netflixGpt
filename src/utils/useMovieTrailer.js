import { useEffect } from "react";
import { addTrailer } from "./moviesSlice";
import { useDispatch } from "react-redux";
import {API_OPTIONS} from '../utils/constant'

function useMovieTrailer(id){
    let dispatch = useDispatch();

    async function getVideoTrailer(id){
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,API_OPTIONS)
        const json = await data.json();

        let filterTrailer = json.results.filter((e)=>{
            return e.name ===  "Official Trailer" && e.type ===  "Trailer"
        })

        let getTrailer = filterTrailer ? filterTrailer[0] : json.results[0] ;
        dispatch(addTrailer(getTrailer))
    }

    useEffect(()=>{
        getVideoTrailer(id)
    },[])
}

export default useMovieTrailer