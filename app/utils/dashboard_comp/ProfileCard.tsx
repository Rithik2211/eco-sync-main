'use client'
import { User } from '@/app/types';
import Image from 'next/image';

interface ProfileCardProps {
  user: User;
}

export const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
      <div className="relative h-24 bg-green-100 rounded-t-xl">
        <div className="absolute -bottom-12 left-4">
          <Image
            src='/boy.png'
            alt={user.name}
            width={72}
            height={72}
            className="rounded-full border-4 border-white dark:border-gray-800"
          />
        </div>
      </div>
      <div className="mt-14">
        <h2 className="text-xl font-bold dark:text-white">{user.name}</h2>
        <p className="text-gray-500">@{user.username}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{user.bio}</p>
        <div className="mt-4 flex gap-4">
          <div>
            <span className="font-bold dark:text-white">{user.following}</span>
            <span className="text-gray-500 ml-1">Following</span>
          </div>
          <div>
            <span className="font-bold dark:text-white">{user.followers}</span>
            <span className="text-gray-500 ml-1">Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};