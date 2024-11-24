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

// Mock data for the feed
// export const mockPosts: Post[] = [
//   {
//     id: '1',
//     author: {
//       id: '1',
//       name: 'EcoSync Official',
//       username: 'ecosync',
//       avatar: '/ecosync-avatar.png',
//       bio: '🌱 Leading the way in sustainability tracking and environmental awareness',
//       following: 6664,
//       followers: 9991,
//     },
//     content:"🌍 Exciting news! Our latest sustainability report shows a 45% reduction in carbon emissions across our partner network. Together, we're making a real impact! #ClimateAction #Sustainability",
//     timestamp: '2h ago',
//     type: 'text',
//     likes: 1234,
//     comments: 89,
//     shares: 234,
//     verified: true,
//   },
//   {
//     id: '2',
//     author: {
//       id: '2',
//       name: 'Green Tech Solutions',
//       username: 'greentech',
//       avatar: '/greentech-avatar.png',
//       bio: 'Innovative solutions for a sustainable future',
//       following: 2345,
//       followers: 12000,
//     },
//     content: 'Check out our new solar panel installation project! This installation will power 1000+ homes with clean energy. 🌞',
//     timestamp: '4h ago',
//     type: 'image',
//     likes: 892,
//     comments: 45,
//     shares: 156,
//     media: [
//       {
//         type: 'image',
//         url: '/solar-installation.jpg',
//         alt: 'Solar panel installation project',
//       },
//     ],
//     verified: true,
//   },
//   {
//     id: '3',
//     author: {
//       id: '3',
//       name: 'Climate Research Lab',
//       username: 'climatelab',
//       avatar: '/climatelab-avatar.png',
//       bio: 'Research-driven climate solutions',
//       following: 1200,
//       followers: 8500,
//     },
//     content: 'New research findings on urban sustainability initiatives and their impact on local communities. Download the full report here: ecosync.com/report',
//     timestamp: '6h ago',
//     type: 'link',
//     likes: 567,
//     comments: 23,
//     shares: 89,
//     media: [
//         {
//           type: 'image',
//           url: '/solar-installation.jpg',
//           alt: 'Solar panel installation project',
//         },
//       ],
//     verified: true,
//   },
// ];