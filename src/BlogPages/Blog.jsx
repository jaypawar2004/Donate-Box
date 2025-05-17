import React from 'react';
import { Link } from 'react-router-dom';
import BlogCards from './BlogCards';
const blogData = [
  {
    id: 1,
    image: 'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
    title: 'Spreading Smiles: A Brighter Future for Every Child',
    date: '09 Oct 2024',
    excerpt: 'Read More',
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
    title: 'Empowering Communities Through Education',
    date: '10 Oct 2024',
    excerpt: 'Read More',
  },
  {
    id: 3,
    image: 'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
    title: 'Fighting Hunger One Meal at a Time',
    date: '11 Oct 2024',
    excerpt: 'Read More',
  },
 
];

const Blog = () => {
  return (
    <div className="min-w-[90%] min-h-[calc(100vh-80px)] p-4 sm:p-6 md:p-8 lg:p-10 text-center bg-gray-50">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800">
        Blogs & <span className="text-red-600">Stories</span>!
      </h1>
      <div className="w-24 sm:w-32 md:w-40 h-1 bg-red-500 rounded-full mx-auto my-4 sm:my-6 md:my-8"></div>

      {/* Blog Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {blogData.map(blog => (
          <BlogCards
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            date={blog.date}
            excerpt={blog.excerpt}
          />
        ))}
        {/* Add more BlogCards as needed */}
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

