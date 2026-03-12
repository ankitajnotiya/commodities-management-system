import React from 'react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onRemove: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onRemove }) => {

  const handleRemove = () => {
    onRemove(post.id);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-80">
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 z-10 text-red-500 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
        aria-label="Remove post"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      
      <div className="p-4 flex flex-col h-full">
        <h3 className="font-semibold text-black-800 text-base mb-1 line-clamp-2">
          {post.title}
        </h3>
                
        <p className="text-gray-600 text-sm mb-1 line-clamp-3 flex-grow">
          {post.body}
        </p>
        
        <img
          src={`https://picsum.photos/seed/${post.id}/300/100.jpg`}
          alt={post.title}
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default PostCard;
