import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import usePlayingMovie from "../hooks/usePlayingMovie";
import SecondaryContainers from "./SecondaryContainers";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

function Browse() {
  const gptSearch = useSelector((store) => store.movies.gptSearch);

  usePlayingMovie();
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainers />
        </>
      )}
    </div>
  );
}

export default Browse;
