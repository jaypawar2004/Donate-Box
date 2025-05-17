// src/components/BlogCards.js
import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BlogCards = ({ id, image, title, date, excerpt }) => {

  return (
    <div
      className="max-w-[90%] aspect-[3/3] rounded-2xl bg-amber-200 relative overflow-hidden transition-transform duration-300 hover:scale-105"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Link to={`/blogcards/${id}`}>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 xs:p-4 sm:p-5 md:p-6 text-white">
          <h6 className="lg:text-[10px] xs:text-xs sm:text-sm md:text-base font-light text-left">
            {date || '09 oct 2024'}
          </h6>
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-left mt-1 xs:mt-1.5 sm:mt-2 md:mt-2.5 line-clamp-2">
            {title || 'Spreading Smiles: A Brighter Future for Every Child'}
          </h2>
          <div className="flex items-center mt-1.5 xs:mt-2 sm:mt-2.5 md:mt-3">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-light text-left">
              {excerpt || 'Read More'}
            </h3>
            <BsArrowRightCircleFill className="text-red-500 bg-black rounded-full ml-1.5 xs:ml-2 sm:ml-2.5 md:ml-3 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCards;