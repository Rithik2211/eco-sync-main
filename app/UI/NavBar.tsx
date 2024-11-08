import React from 'react'
// import { Search } from 'lucide-react';
import NavButton from '../utils/NavButton';
import DarkModeToggle, { ImageToggle } from '../utils/DarkModeToggle';

const NavBar = () => {
  return (
    <div className='flex justify-center items-center top-0 sticky z-10 bg-white dark:bg-zinc-950 font-[1rem] h-[55px] mt-[-7px] shadow-sm  '>
      <div className='flex flex-row justify-between items-center z-1 w-full h-full dark:border-b-[1px] dark:border-gray-400'>
        <div>
          <ImageToggle img1='/logo-light.png' img2='/logo-dark.png' alt='logo' width={120} height={120}/>
        </div>
        <div className='flex justify-around items-center w-[300px] h-[40px] flex-wrap'>
          {/* Search Bar */}
          {/* <div className="flex items-center rounded-[8px] border bg-[#E5E8EB] px-4 py-1">
            <Search className="h-5 w-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full bg-transparent outline-none placeholder:text-gray-600"
            />
          </div> */}
          {/* Login / SignIn */}
          <div className='flex items-center space-x-4'>
            <DarkModeToggle />
            <NavButton name='Login' className='rounded-full border px-6 py-2 text-sm font-medium text-black bg-[#04c052] hover:bg-[#04c052]-500' route='/Login' />
            <NavButton name='Sign up' className='rounded-full border px-6 py-2 text-sm font-medium text-black bg-[#E5E8EB] hover:bg-[#E5E8EB]-500' route='/Login' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar