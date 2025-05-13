// src/components/Blog.js
import React from 'react';
import { Link } from 'react-router-dom'; // Updated import
import BlogCards from './BlogCards';

const Blog = () => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-6 md:p-10 text-center bg-gray-50">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        Blogs & <span className="text-red-600">Stories</span>!
      </h1>
      <div className="w-24 sm:w-32 md:w-40 h-1 bg-red-500 rounded-full mx-auto my-4 sm:my-6 md:my-8"></div>

      {/* Blog Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
      </div>

      {/* View All Blogs Button */}
      <Link to="/all_blog_page">
        <button className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-2 sm:py-3 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg font-medium">
          View All Blogs
        </button>
      </Link>
    </div>
  );
};

export default Blog;