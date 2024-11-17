import ContactsTab from '@/app/utils/contacts/ContactsTab';
import NavButton from '@/app/utils/navigation/NavButton';
import React from 'react'
import ChatContainer from './ChatContainer';

const Chatpage = () => {

  return (
    <div className="h-screen flex flex-col">
      <div className="flex pt-16 h-screen">
        {/* Fixed Sidebar */}
        <aside className="w-[300px] fixed top-16 bottom-0 border-r overflow-hidden">
          <div className="h-full ml-2">
            <ContactsTab />
          </div>
        </aside>

        {/* Main Chat Container - Adjusted for sidebar */}
        <main className="flex-1 ml-[300px]">
          <div className="h-full max-w-5xl mx-auto px-4">
          <h1 className="text-xl font-bold">Welcome to Chat page!</h1>
            <div className="flex gap-3">
              <NavButton 
                name='Home page' 
                className='bg-[#04c052] hover:bg-[#04c052]-500 font-semibold dark:text-white text-black px-6 py-1 rounded-full text-md hover:bg-opacity-90' 
                route='/' 
              />
              <NavButton 
                name='Login page' 
                className='bg-[#04c052] hover:bg-[#04c052]-500 font-semibold dark:text-white text-black px-6 py-1 rounded-full text-md hover:bg-opacity-90' 
                route='/Login' 
              />
            </div>
            <ChatContainer />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Chatpage;