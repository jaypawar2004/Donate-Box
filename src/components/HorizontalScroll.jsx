import React from "react";
import "./HorizontalScroll.css"; // Animation aur gradient ke liye extra CSS
// import NavBar from "./NavBar"
import logo1 from '../assets/images/Collaboration logo1.png';
import logo2 from '../assets/images/c_logo2.png';
import logo3 from '../assets/images/C_logo3.png';
import logo4 from '../assets/images/C_logo4.png';
import logo5 from '../assets/images/C_logo5.png';
import Footer from "./Footer";

const logos = [logo1, logo2, logo3, logo4, logo5,
  logo1, logo2, logo3, logo4, logo5
];


// const logos = [
//   "/images/Collaboration logo1.png",
//   "../assets/images/c_logo2.png",
//   "../assets/images/C_logo3.png",
//   "../assets/images/C_logo4.png",
//   "../assets/images/C_logo5.png",
  
// ];
const HorizontalScroll = () => {
  return (
    <div className="w-full h-auto bg-[#F3F7F5]">
      <h1 className="text-center text-3xl py-5">Our Collaborations</h1>
      <div className="w-30 mb-5 bg-red-500 h-1 rounded-full m-auto"></div>

      <p className="text-center w-[850px] m-auto">
        Trust is trusted by leading organizations and CSRs for its transparent
        operations and timely updates. We ensure accountability at every step,
        keeping our partners informed about the impact of their contributions.
      </p>

      <div className="slider relative w-[1000px] mt-[5vw] h-[150px] items-center justify-center flex overflow-hidden mx-auto">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-[200px] z-10" />
      <div className="absolute right-0 top-0 h-full w-[200px] z-10" />

      {/* Slide Track */}
      <div className="slide-track flex items-center justify-center w-[calc(250px*14)] animate-scroll">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="slide w-[250px] h-[100px] flex items-center justify-center">
            <img src={logo} alt={`logo-${index}`} className="h-[150px] w-[250px] object-contain" />
          </div>
        ))}
      </div>
    </div>

<div className=" w-full h-[60vh] flex bg-white mt-[10vh]">
  <div className="w-[50%] relative h-full flex items-center justify-center">
    <img className="w-[80%] h-[80%] relative -right-30 rounded-2xl shadow-xl" src="https://images.unsplash.com/photo-1743485237407-e00bfb75163e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>
  <div className="w-[40%] h-full bg-[#F8F4E9] flex flex-col items-center justify-center space-y-4">
    <h1 className="text-2xl font-bold">Make the world better with us</h1>
    <p className="w-[70%] text-center text-zinc-400">Every effort counts Together, we can create meaningful change. Even the smallest contributions make a big impact.</p>
    <button className="border-2 border-white rounded-lg w-[32%] px-6 bg-red-500 text-white py-2">Donate Now</button>
    <button className="border-2 border-white rounded-lg w-[32%] px-6 bg-red-500 text-white py-2">Collaborate with Us</button>
    <button className="border-2 border-white rounded-lg w-[32%] px-6 bg-white text-red-500 py-2">Career</button>
    
  </div>
</div>
{/* <Footer /> */}
    </div>
  );
};

export default HorizontalScroll;
