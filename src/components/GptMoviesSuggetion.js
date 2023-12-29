import React from 'react'
import { useSelector } from 'react-redux'
import Moviescard from './Moviescard'

function GptMoviesSuggetion() {
    const {movieName,moviesResult} = useSelector(store => store.gpt)

    if(!moviesResult) return null
  return (
    <div className='absolute top-[40%] md:m-16 bg-black opacity-80 overflow-y-scroll no-scrollbar overflow-x-scroll w-[90%] '>
      {
        movieName.map((movies, index)=>{
            return <Moviescard key={movies} title={movies} movie={moviesResult[index]} />
        })
      }
    </div>
  )
}

export default GptMoviesSuggetion
