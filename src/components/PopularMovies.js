import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPapularMovie } from "../utils/moviesSlice";

function PopularMovies() {
  let dispatch = useDispatch();
  let getPapularMovies = useSelector((store) => store.movies.papularMovies);

  const papularMovie = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    let json = await data.json();
    dispatch(addPapularMovie(json.results));
  };

  useEffect(() => {
    papularMovie();
  }, []);

  if (!getPapularMovies) return null;
  return (
    <>
      <div className=" flex">
        {getPapularMovies?.map((e) => {
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

export default PopularMovies;
