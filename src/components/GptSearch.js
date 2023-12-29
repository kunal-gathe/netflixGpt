import React, { useRef } from "react";
import { API_OPTIONS, BG_IMG, SUPPORTED_LANG } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";
import GptMoviesSuggetion from "./GptMoviesSuggetion";

function GptSearch() {
  let lang = useSelector((store) => store.language.langKey);
  let searchText = useRef("");
  let dispatch = useDispatch()

  const getTMDBMovies = async (movies)=>{
    let data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movies + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
    let json = await data.json();
    return json.results
  }

  const handleSearchText = async () => {

    let SearchQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.va1ue +
      ". only give ne names of 5 movies, comma separated like the example result given ahead. Don,Dhoome,Koi mil gaya, Gadar,Dunkey ";

    const results = await openai.chat.completions.create({
      messages: [{ role: "user", content: SearchQuery }],
      model: "gpt-3.5-turbo",
    });


    const getMoviesName = results.choices[0].message.content.split(',') ;
    let gptMovies = getMoviesName.map(movie => getTMDBMovies(movie))
    let moviesList = await Promise.all(gptMovies)

    dispatch(addGptMovieResult({
        MovieName: getMoviesName,
        moviesResult: moviesList
    }))

    

  };
  return (
    <>
    <div className="flex justify-center">
      <img src={BG_IMG} alt="bg-img" className=" fixed brightness-50 h-full object-cover md:w-screen" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="fixed top-[15%]  md:top-[30%] w-1/2 flex justify-center"
      >
        <input
          ref={searchText}
          type="text"
          className="md:w-[80%] px-2"
          placeholder={SUPPORTED_LANG[lang].placeholder}
        />
        <button
          className="p-2 bg-red-700 md:w-[20%] text-white "
          onClick={() => handleSearchText()}
        >
          {SUPPORTED_LANG[lang].Search}
        </button>
      </form>
    </div>

    <div className="ml-3">
    <GptMoviesSuggetion />
    </div>
    </>
  );
}

export default GptSearch;
