import React from 'react';
import {Link} from 'react-router-dom'
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Twitter, 
    Youtube,
    MessageCircle,
  } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#970300] text-white pt-10 pb-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <Link to={'/about-us'} className="hover:underline">
                About Us
              
              </Link>
            </li>
            <li>
              <Link to={"/privacy_policy"}
              className="hover:underline"
              >
              
                Privacy Policy
        
              </Link>
            </li>
            <li>
              <Link to={"/terms_and_conditions"} className="hover:underline">
              
                Terms & Conditions
  
              </Link>
            </li>
          </ul>
          <h3 className="font-semibold text-lg mt-6 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Fundraiser</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Donate
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                NGO
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Top Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Medical Crowdfunding
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Animals Crowdfunding
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Education Crowdfunding
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Children Crowdfunding
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 cursor-pointer">
              <Mail size={18} />
              <a href="https://mail.google.com/">

              <span>trashimanoriya@gmail.com</span>
              </a>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <Phone size={18} />
              <span>+91 8305425799</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <MessageCircle size={18} />
              <span>+91 8305425799</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin size={40} />
              <span>
                Plot No. 12, MP Nagar Zone 2, Near DB Mall, Bhopal, Madhya
                Pradesh – 462011
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-10 border-t border-gray-200/50"></div>

      {/* Bottom Text */}
      <p className="text-center text-sm text-white mt-4">
        © 2025 All rights reserved. Created and maintained by{" "}
        <strong className="font-semibold">Techhelper</strong>.
      </p>
    </footer>
  )
}

export default Footer