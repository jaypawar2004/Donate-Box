import React, { useState } from "react";
import { Menu, X, User  } from "lucide-react";
import {Link} from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white fixed shadow-orange-300 shadow-md z-20  w-full">
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
          <img
            src="./src/assets/images/logo.png"
            alt="Logo"
            className="lg:h-[4vw] h-[10vh] object-cover"
          />
          {/* <span className="text-xl font-semibold text-gray-800">MyLogo</span> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 items-center">
          <a href="/" className="text-gray-700 hover:text-red-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-red-600">
            Donate
          </a>
          <a href="/fundraise" className="text-gray-700 hover:text-red-600">
            Fundraiser
          </a>
          <a href="/about-us" className="text-gray-700 hover:text-red-600">
            About Us
          </a>
          <a href="/contact" className="text-gray-700 hover:text-red-600">
            Contact Us
          </a>
          <a
            href="/login
        "
          >
            <button
              to={"/login"}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Login / Signup
            </button>
          </a>
          <Link to={"/profile"}>
          <User className="w-10 h-10 text-gray-700 bg-red-500 p-3 rounded-full hover:text-red-600 cursor-pointer" />
          
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="#" className="block text-gray-700 hover:text-red-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-red-600">
            Donate
          </a>
          <a href="#" className="block text-gray-700 hover:text-red-600">
            Fundraiser
          </a>
          <a href="#" className="block text-gray-700 hover:text-red-600">
            About Us
          </a>
          <a href="#" className="block text-gray-700 hover:text-red-600">
            Contact Us
          </a>
          <button className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Login / Signup
          </button>
          <User className="w-6 h-6 text-gray-700 hover:text-red-600 mx-auto mt-2" />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
