import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
    let movies = useSelector(store => store.movies.nowPlayingMovies)

     if(!movies) return null;

     let mainMovie = movies[0]
     const {original_title,overview,id} = mainMovie;
  return (
    <div>
      <VideoTitle title = {original_title} description ={overview} />
      <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer
