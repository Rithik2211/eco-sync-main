'use client'
import { Post } from '@/app/types';
import { PostCard } from './PostCard';

interface FeedProps {
  posts: Post[];
}

export const Feed = ({ posts }: FeedProps) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

