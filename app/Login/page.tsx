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
    <div className="flex justify-center items-center flex-wrap min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <div className="flex justify-center items-center">
        <LoginAuth />
      </div>
    </div>
  );
}

export default LoginPage
