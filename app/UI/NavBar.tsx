import React from 'react'
import { ImageToggle } from '../utils/DarkModeToggle';
import { NavGroup } from '../utils/navigation/NavigationMenu';

const NavBar = () => {
  return (
    <div className='flex justify-center items-center top-0 sticky z-10 bg-white dark:bg-zinc-950 font-[1rem] h-[55px] mt-[-7px] shadow-sm  '>
      <div className='flex flex-row justify-between items-center z-1 w-full h-full dark:border-b-[1px] dark:border-gray-400'>
        <div>
          <ImageToggle img1='/logo-light.png' img2='/logo-dark.png' alt='logo' width={120} height={120}/>
        </div>
        <NavGroup />
      </div>
    </div>
  )
}

export default NavBar