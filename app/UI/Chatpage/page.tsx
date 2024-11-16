import NavButton from '@/app/utils/navigation/NavButton';
import React from 'react'

const Chatpage = () => {

  return (
    <div className='flex justify-center items-center flex-col my-4'>
        <h1>Welcome to Chat page!</h1>
        <NavButton name='Home page' className='bg-[#04c052] hover:bg-[#04c052]-500 font-semibold dark:text-white text-black px-6 py-1 rounded-full text-md hover:bg-opacity-90 my-3' route='/' />
        <NavButton name='Login page' className='bg-[#04c052] hover:bg-[#04c052]-500 font-semibold dark:text-white text-black px-6 py-1 rounded-full text-md hover:bg-opacity-90' route='/Login' />
    </div>
  )
}

export default Chatpage;