import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItemClass = (path) =>
    `text-gray-700 hover:text-red-600 ${
      isActive(path) ? "text-red-600 font-semibold underline" : ""
    }`;

  return (
    <nav className="bg-white fixed shadow-orange-300 shadow-md z-20 w-full">
      <div className="max-w-7xl mx-auto py-2 px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
          <Link to={"/"}>
            <img
              src="/images/logo.png"
              alt="Logo"
              className="lg:h-[4vw] h-[9vh] object-cover"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 items-center">
          <Link to={"/"}>
            <span className={navItemClass("/")}>Home</span>
          </Link>
          <Link to={"/donate"}>
            <span className={navItemClass("/donate")}>Donate</span>
          </Link>
          <Link to={"/about-us"}>
            <span className={navItemClass("/about-us")}>About Us</span>
          </Link>
          <Link to={"/contact"}>
            <span className={navItemClass("/contact")}>Contact Us</span>
          </Link>
          <Link to={"/login"}>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Login / Signup
            </button>
          </Link>
          <Link to={"/profile"}>
            <User className="w-10 h-10 text-gray-700 bg-red-500 p-3 rounded-full hover:text-white cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 space-y-3 text-3xl">
          <Link to={"/"}>
            <span className={navItemClass("/")}>Home</span>
          </Link>
          <Link to={"/donate"}>
            <span className={navItemClass("/donate")}>Donate</span>
          </Link>
          <Link to={"/about-us"}>
            <span className={navItemClass("/about-us")}>About Us</span>
          </Link>
          <Link to={"/contact"}>
            <span className={navItemClass("/contact")}>Contact Us</span>
          </Link>
          <Link to={"/login"}>
            <button className="w-full bg-[#E53935] text-white px-4 py-2 rounded hover:bg-white transition">
              Login / Signup
            </button>
          </Link>
          <Link to={"/profile"}>
          <User className="w-6 h-6 text-gray-700 hover:text-red-600 mx-auto mt-2" />
          
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
