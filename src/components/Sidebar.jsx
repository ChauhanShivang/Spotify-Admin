import React from 'react'
import {assets} from '../../src/assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-[#003A10] min-h-screen pl-[4vw]'>
      <img className='mt-5 w-[120px] mr-10 hidden sm:block' src={assets.logo} />
      <img className='mt-5 w-[40px] mr-5 sm:hidden block' src={assets.logo_small} />

      <div className='flex flex-col gap-5 mt-10'>
        <NavLink to='/add-song' className='cursor-pointer flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
          <img src={assets.add_song} className='w-7' />
          <p className='hidden sm:block'>Add Song</p>
        </NavLink>
        
        <NavLink to='/list-song' className='cursor-pointer flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
          <img src={assets.song_icon} className='w-7' />
          <p className='hidden sm:block'>List Song</p>
        </NavLink>
        
        <NavLink to='/add-album' className='cursor-pointer flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
          <img src={assets.add_album} className='w-7' />
          <p className='hidden sm:block'>Add Album</p>
        </NavLink>
        
        <NavLink to='/list-album' className='cursor-pointer flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
          <img src={assets.album_icon} className='w-7' />
          <p className='hidden sm:block'>List Album</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
