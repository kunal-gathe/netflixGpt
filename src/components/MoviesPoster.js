import React from "react";

import { useSelector } from "react-redux";

function MoviesPoster() {
  let moviesPoster = useSelector((store) => store.movies.nowPlayingMovies);

  if (!moviesPoster) return null;

 return moviesPoster.map((e) => {
    return (
      <img key={e.id}
        className="w-40 p-4 mx-2 rounded-lg mt-[40%] relative z-40 mb-8"
        src={"https://image.tmdb.org/t/p/original/" + e?.poster_path}
        alt="poster"
      />
    );
  });
}

export default MoviesPoster;
