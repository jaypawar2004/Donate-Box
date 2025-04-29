import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Home = () => {
  const slides = [
    {
      id: 1,
      image: "/src/assets/images/slider.jfif",
      title: "Help The Poor To Build A Better World",
      subtitle: "Your donation can help educate thousands of people and make the world more beautiful.",
    },
    {
      id: 2,
      image: "/src/assets/images/slider.jfif",
      title: "Support Education for All",
      subtitle: "Together, we can change lives with your generous support.",
    },
    {
      id: 3,
      image: "/src/assets/images/slider.jfif",
      title: "Create a Brighter Future",
      subtitle: "Every donation brings hope to those in need.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideInterval = 5000; // 5 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoSlideInterval);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
      <div className="relative z-10   flex items-center justify-center h-full text-white text-center">
        <div>
          <h1 className="text-7xl font-bold mb-10">{slides[currentSlide].title}</h1>
          <p className="mb-10 text-xl">{slides[currentSlide].subtitle}</p>
          <button
            onClick={nextSlide} // Trigger next slide on button click
            className="bg-red-500 border-2 border-white text-white px-10 py-4.5 rounded-lg hover:bg-red-600 transition text-xl"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 opacity-100 text-black p-6 rounded-full hover:bg-opacity-75 transition"
      >
         <IoIosArrowBack />
        {/* <i className="ri-arrow-left-s-line text-white "></i> */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 opacity-100 text-black p-6 rounded-full hover:bg-opacity-75 transition"
      >
        <IoIosArrowForward />
          {/* <i className="ri-arrow-right-s-line text-white "></i> */}
      </button>

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