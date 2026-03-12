import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Post } from '../types';
import { fetchPosts } from '../services/api';

interface PostsContextType {
  allPosts: Post[];
  currentPage: number;
  removedPosts: number[];
  loading: boolean;
  error: string | null;
  initialLoading: boolean;
  filteredPosts: Post[];
  totalPages: number;
  visiblePosts: Post[];
  setCurrentPage: (page: number) => void;
  handleRemovePost: (postId: number) => void;
  handlePageChange: (page: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [removedPosts, setRemovedPosts] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  const postsPerPage = 6;

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const posts = await fetchPosts();
        setAllPosts(posts);
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
    
    // Show initial loading for 5 seconds
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Get filtered posts (excluding removed ones)
  const filteredPosts = allPosts.filter(post => !removedPosts.includes(post.id));
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = filteredPosts.slice(startIndex, endIndex);

  const handleRemovePost = (postId: number) => {
    setRemovedPosts([...removedPosts, postId]);
    
    // If current page has no posts after removal, go to previous page
    const newFilteredPosts = allPosts.filter(post => !removedPosts.includes(post.id) && post.id !== postId);
    const newTotalPages = Math.ceil(newFilteredPosts.length / postsPerPage);
    
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(newTotalPages);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const value: PostsContextType = {
    allPosts,
    currentPage,
    removedPosts,
    loading,
    error,
    initialLoading,
    filteredPosts,
    totalPages,
    visiblePosts,
    setCurrentPage,
    handleRemovePost,
    handlePageChange,
    handleNext,
    handlePrev,
  };

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};
