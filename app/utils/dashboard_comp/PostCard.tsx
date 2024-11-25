// components/PostCard.tsx
import { useState } from 'react';
import { Post } from '@/app/types';
import Image from 'next/image';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
      <div className="flex gap-3">
        <Image
          src={post.author.avatar}
          alt={post.author.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold dark:text-white">{post.author.name}</h3>
            {post.verified && (
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
            <span className="text-gray-500">@{post.author.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{post.timestamp}</span>
          </div>
          
          <p className="mt-2 text-gray-900 dark:text-gray-100">{post.content}</p>
          
          {post.media && post.media.length > 0 && (
            <div className={`mt-3 grid gap-2 ${post.media.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {post.media.map((media, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden">
                  {media.type === 'image' ? (
                    <Image
                      src='/sus1 img.jpg'
                      alt={media.alt || 'Post image'}
                      width={500}
                      height={300}
                      className="object-cover w-full"
                    />
                  ) : (
                    <video
                      src={media.url}
                      controls
                      className="w-full rounded-xl"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 ${
                liked ? 'text-green-500' : 'text-gray-500'
              } hover:text-green-600 transition-colors`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors">
              <Repeat2 className="w-5 h-5" />
              <span>{post.shares}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors">
              <Share className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};