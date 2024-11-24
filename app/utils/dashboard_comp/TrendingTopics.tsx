'use client'
import { TrendingTopic } from '@/app/types';

interface TrendingTopicsProps {
  trends: TrendingTopic[];
}

export const TrendingTopics: React.FC<TrendingTopicsProps> = ({ trends }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h2 className="text-xl dark:text-white text-black font-bold mb-4">Trending Topics</h2>
      <div className="space-y-4">
        {trends.map((trend) => (
          <div key={trend.tag} className="border-b border-gray-200 pb-3 last:border-0">
            <div className="text-lg font-medium text-green-500">
              {trend.tag}
            </div>
            <div className="text-sm text-gray-500">
              {trend.category}
            </div>
            <div className="text-sm text-gray-400">
              {trend.tweetCount.toLocaleString()} tweets
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};