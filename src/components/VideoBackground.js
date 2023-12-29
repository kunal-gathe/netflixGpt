import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../utils/useMovieTrailer'
function VideoBackground({id}) {
    let trailer = useSelector(store => store.movies.trailer)
    useMovieTrailer(id)
  
  return (
    <div className='absolute -top-8 md:top-[-110px]  w-screen z-10' >
      <iframe className='w-screen h-[30%] aspect-video object-cover' src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
