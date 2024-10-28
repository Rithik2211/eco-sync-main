'use client'
import Image from 'next/image'
import React from 'react'
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter()

  const handleClick = (route: string) => {
    router.push(route)
  }

  return (
    <div className='flex justify-center items-center top-0 sticky z-10 bg-white font-[1rem] h-[55px] mt-[-7px] shadow-sm'>
      <div className='flex flex-row justify-between items-center z-1 w-full h-full'>
        <div className='cursor-pointer' onClick={() => handleClick('/')}>
          <Image src={"/logo-light.png"} alt='logo' width={120} height={120} />
        </div>
        <div className='flex justify-around items-center w-[500px] h-[40px] flex-wrap mr-[30px]'>
          {/* Search Bar */}
          <div className="flex items-center rounded-[8px] border bg-[#E5E8EB] px-4 py-1">
            <Search className="h-5 w-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full bg-transparent outline-none placeholder:text-gray-600"
            />
          </div>
          {/* Login / SignIn */}
          <div className='flex items-center space-x-4'>
            <button 
            className="rounded-full border px-6 py-2 text-sm font-medium text-black bg-[#04c052]" 
            onClick={() => handleClick('/Login')}
            > Login </button>
            <button 
            className="rounded-full border px-6 py-2 text-sm font-medium text-black bg-[#E5E8EB]" 
            onClick={() => handleClick('/Login')}
            > Sign up </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar