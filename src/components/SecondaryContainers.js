import React from "react";
import { useSelector } from "react-redux";
import MoviesPoster from "./MoviesPoster";
import PopularMovies from "./PopularMovies";
import TopMovies from "./TopMovies";
import UpcomingMovies from "./UpcomingMovies";

function SecondaryContainers() {
  let moviesPoster = useSelector((store) => store.movies.nowPlayingMovies);
  if(!moviesPoster) return null
  return (
    <div className="absolute bg-black -top-[50%] md:top-0">
      <div className="flex overflow-y-scroll no-scrollbar relative z-30">
       <MoviesPoster />
      </div>
      <h1 className="text-white mx-4 font-bold text-xl">Top rated</h1>;
      <div className="flex overflow-y-scroll no-scrollbar relative z-50">
       <TopMovies />
      </div>
      <h1 className="text-white mx-4 font-bold text-xl">Popular Movies</h1>;
      <div className="flex overflow-y-scroll no-scrollbar relative z-50">
       <PopularMovies />
      </div>
      <h1 className="text-white mx-4 font-bold text-xl">Upcoming</h1>;
      <div className="flex overflow-y-scroll no-scrollbar relative z-50">
       <UpcomingMovies />
      </div>

    </div>
  );
}

export default SecondaryContainers;
