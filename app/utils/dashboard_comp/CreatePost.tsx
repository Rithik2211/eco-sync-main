'use client'
import Image from 'next/image';
export const CreatePost = () => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-4">
          <Image
            src="/avatar-placeholder.png"
            alt="Your avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
          <input
            type="text"
            placeholder="What's happening in sustainability?"
            className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-2 text-green-500 hover:bg-green-50 dark:hover:bg-gray-700 rounded-full px-4 py-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4z" />
            </svg>
            Photo
          </button>
          <button className="flex items-center gap-2 text-green-500 hover:bg-green-50 dark:hover:bg-gray-700 rounded-full px-4 py-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
            Video
          </button>
        </div>
      </div>
    );
  };