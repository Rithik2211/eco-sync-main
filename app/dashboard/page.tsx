import { Post, User, TrendingTopic } from '@/app/types';
import { CreatePost } from "../utils/dashboard_comp/CreatePost";
import { Feed } from "../utils/dashboard_comp/Feed";
import { ProfileCard } from "../utils/dashboard_comp/ProfileCard";
import { TrendingTopics } from "../utils/dashboard_comp/TrendingTopics";
import { mockPosts, mockUser, mockTrends } from "../utils/mockData";
import { NavGroup } from '../utils/navigation/NavigationMenu';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <ProfileCard user={mockUser} />
          </div>
          <div className="md:col-span-6">
            <CreatePost />
            <div className="mt-6">
              <Feed posts={mockPosts} />
            </div>
          </div>
          <div className="md:col-span-3">
            <TrendingTopics trends={mockTrends} />
          </div>
        </div>
        
      </div>
      
    </div>
  );
}