import Image from "next/image";
import LoginAuth from "./LoginAuth";
import React from 'react';

export async function generateMetadata() {
  return {
    title: 'Eco Sync - Login',
    description: 'Login to Eco Sync',
  }
}

const LoginPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background images with dark/light mode support */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/loginpage/login_bg_light.png" 
          fill
          alt="Login background light" 
          className="object-cover w-full h-full  block dark:hidden"
        />
        <Image
          src="/loginpage/login_bg_dark.png" 
          fill
          alt="Login background dark" 
          className="object-cover w-full h-full hidden dark:block"
        />
      </div>
      
      {/* Content overlay with backdrop blur and transparency */}
      <div className="relative z-10 flex justify-center items-center min-h-screen bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
        <div className="bg-white/90 dark:bg-zinc-900/90 p-8 rounded-lg shadow-lg backdrop-blur-md">
          <LoginAuth />
        </div>
      </div>
    </div>
  );
}

export default LoginPage