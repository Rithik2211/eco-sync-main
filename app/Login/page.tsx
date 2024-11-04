'use client'
import { useRouter } from 'next/navigation'
import React from 'react';
import { ConnectButton } from "thirdweb/react";
import { client } from '../client';

const LoginPage = () => {
  const router = useRouter()

  const handleClick = (route: string) => {
    router.push(route)
  }

  return (
    <div className='flex justify-center items-center flex-col m-10 gap-4'>
        <h1>Login Page</h1>
        <ConnectButton
            client={client}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
          />
        <button 
        onClick={() => handleClick('/')}
        className='border bg-green-600 px-3 py-1 rounded-[8px]'
        >Go Back</button>

    </div>
  )
}

export default LoginPage
