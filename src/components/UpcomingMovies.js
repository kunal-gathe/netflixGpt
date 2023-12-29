import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTOUpcoming } from "../utils/moviesSlice";

function UpcomingMovies() {
  let dispatch = useDispatch();
  let getUpcomingMovies = useSelector((store) => store.movies.topRatedMovies);

  const upcomingMovies = async () => {
    let data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
    let json = await data.json();
    dispatch(addTOUpcoming(json.results));
  };

  useEffect(() => {
    upcomingMovies();
  }, []);

  if (!getUpcomingMovies) return null;
  return (
    <>
      <div className=" flex">
        {getUpcomingMovies?.map((e) => {
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


export default UpcomingMovies
