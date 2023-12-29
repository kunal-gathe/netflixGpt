import React from 'react'

function VideoTitle({title, description}) {
  return (
    <div className='absolute z-20 p-0 text-white bg-gradient-to-r from-black pt-[18.8%] pl-24 md:pb-[25%]' >
      <h1 className='text-xs md:text-3xl font-bold -ml-16 md:pb-4 md:ml-0'>{title.slice(0,20)}..</h1>
      <h2 className='hidden md:block w-1/3'>{description}</h2>
      <div className='md:flex'>
      <button className=' bg-white text-black my-3 md:px-5 md:py-2 -ml-16  rounded-lg text-sm px-2 hover:bg-slate-200 md:ml-0'>▶ Play</button>
      <button className=' bg-gray-700 opacity-90 text-white my-3 px-5 py-2 rounded-lg hover:bg-slate-200 mx-4 hidden md:block'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
