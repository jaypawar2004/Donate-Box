// src/components/AllBlogPage.js
import React from 'react';
import BlogCards from './BlogCards';

// Sample blog data
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
  {
    id: 4,
    image: 'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
    title: 'Protecting Wildlife for Future Generations',
    date: '12 Oct 2024',
    excerpt: 'Read More',
  },
  {
    id: 5,
    image: 'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
    title: 'Supporting Accessibility for All',
    date: '13 Oct 2024',
    excerpt: 'Read More',
  },
  {
    id: 6,
    image: 'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
    title: 'Healing Hearts with Compassion',
    date: '14 Oct 2024',
    excerpt: 'Read More',
  },
];

const AllBlogPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header Space */}
      <div className="w-full h-20 sm:h-16 md:h-20 bg-transparent" />

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
        Blogs & <span className="text-red-600">Stories</span>!
      </h1>
      <div className="w-24 sm:w-32 md:w-40 h-1 bg-red-500 rounded-full mx-auto my-4 sm:my-6 md:my-8" />

      {/* Blog Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-10 py-6">
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
      </div>
    </div>
  );
};

export default AllBlogPage;