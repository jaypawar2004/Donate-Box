import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Home = () => {
  const slides = [
    {
      id: 1,
      image: "/square/1.jpg",
      title: "Help The Poor To Build A Better World",
      subtitle: "Your donation can help educate thousands of people and make the world more beautiful.",
    },
    {
      id: 2,
      image: "/square/2.jpg",
      title: "Support Education for All",
      subtitle: "Together, we can change lives with your generous support.",
    },
    {
      id: 3,
      image: "/square/3.jpg",
      title: "Create a Brighter Future",
      subtitle: "Every donation brings hope to those in need.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideInterval = 3000; // 3 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoSlideInterval);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [slides.length]);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Slider Images with Red Overlay */}
      <div className="absolute w-full h-full transition-opacity duration-500">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full bg-cover bg-center ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Red Overlay */}
            <div className="absolute w-full h-full bg-red-800 opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10  flex items-center justify-center h-full text-white text-center">
        <div>
          <h1 className="lg:text-7xl text-3xl font-bold mb-10">{slides[currentSlide].title}</h1>
          <p className="mb-10 lg:text-xl text-lg">{slides[currentSlide].subtitle}</p>
          <Link to={"/donate"}>
          <button
            // onClick={nextSlide} // Trigger next slide on button click
            className="bg-[#E53935] border cursor-pointer border-white text-white px-5 py-2 rounded hover:bg-red-600 transition text-lg"
            >
            Donate Now
          </button>
            </Link>
        </div>
      </div>

      {/* Navigation Buttons */}
    

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>
    
    </div>
    
  );
};

export default Home;