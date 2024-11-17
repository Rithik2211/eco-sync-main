import { ImageToggle } from '@/app/utils/DarkModeToggle';
import { Lock } from 'lucide-react';
import Image from "next/image";

const ChatBackground = () => {
  return (
    <div className="flex flex-col flex-grow flex-1 rounded-l-xl justify-between border border-gray-300">
      <div className="flex flex-col justify-between items-center w-full h-full py-6 font-uni">
        <section className="flex justify-center h-full items-center flex-col">
          <ImageToggle img1='/logo-light.png' img2='/logo-dark.png' alt='logo' width={100} height={100}/>
          <p className="text-primary-white/60 max-w-xs text-center mt-5 text-black dark:text-white">
            Send and receive messages anytime to your contacts
          </p>
        </section>
        <p className="flex text-sm gap-1 items-center text-black dark:text-white">
          <Lock className="w-4 h-4" />
          End to end encrypted
        </p>
      </div>
    </div>
  );
};

export default ChatBackground;
