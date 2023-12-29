import React from "react";

function Moviescard({ title, movie }) {
  console.log(title, movie);
  return (
    <>
      <div className="flex  overflow-y-scroll no-scrollbar">
        <h1 className="text-md md:text-2xl text-white  m-4">{title}</h1>
      </div>
      <div className="flex overflow-y-scroll no-scrollbar">
        {
            movie.map(m => {
              if(! m.poster_path) return null
             return   <img className="w-36 my-3 m-4" src={"https://image.tmdb.org/t/p/original/" + m.poster_path} alt="poster"/>

            })
        }
      </div>
    </>
  );
}

export default Moviescard;
