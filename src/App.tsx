import React from 'react';
import PostCard from './components/PostCard';
import Pagination from './components/Pagination';
import { Post } from './types';
import { usePosts } from './context/PostsContext';

const App: React.FC = () => {
  const {
    visiblePosts,
    currentPage,
    totalPages,
    loading,
    error,
    initialLoading,
    handleRemovePost,
    handlePageChange,
    handleNext,
    handlePrev,
  } = usePosts();

  if (initialLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Posts Management
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 px-4 sm:px-6 md:gap-8 md:mx-10">
          {visiblePosts.map((post: Post) => (
            <PostCard
              key={post.id}
              post={post}
              onRemove={handleRemovePost}
            />
          ))}
        </div>

        {visiblePosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts to display</p>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </div>
  );
};

export default App;
