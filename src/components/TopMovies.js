import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

function TopMovies() {
  let dispatch = useDispatch();
  let getTopRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const topRatedMovie = async () => {
    let data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
    let json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    topRatedMovie();
  }, []);

  if (!getTopRatedMovies) return null;
  return (
    <>
      <div className=" flex">
        {getTopRatedMovies?.map((e) => {
          return (
            <img
              key={e.id}
              className="w-40 p-4 mx-2 rounded-lg  relative z-40"
              src={"https://image.tmdb.org/t/p/original/" + e?.poster_path}
              alt="poster"
            />
          );
        })}
      </div>
    </>
  );
}



export default TopMovies
