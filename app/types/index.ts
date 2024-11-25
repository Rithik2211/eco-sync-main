export interface User {
    id: string;
    name: string;
    username: string;
    avatar: string;
    bio: string;
    following: number;
    followers: number;
  }
  
export type PostType = 'text' | 'image' | 'link' | 'video';

export interface PostMedia {
  type: 'image' | 'video';
  url: string;
  alt?: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp?: string;
  type: PostType;
  likes: number;
  comments: number;
  shares: number;
  media?: PostMedia[];
  verified?: boolean;
  
}
  
  export interface TrendingTopic {
    tag: string;
    category: string;
    tweetCount: number;
  }
  