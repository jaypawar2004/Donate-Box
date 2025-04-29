import React from 'react';

const GetInTouch = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Get in <span className="text-red-500">Touch</span>!
        </h1>
        <div className="w-24 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-4">
        
        {/* Left Section - Contact Info Cards */}
        <div className="w-full md:w-2/5 flex flex-col gap-6">
          {Array(4).fill().map((_, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl flex items-center gap-4 p-5 hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-full">
                <img
                  src="/public/images/WhatsApp.png"
                  alt="WhatsApp"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">Connect with us on WhatsApp</h3>
                <p className="text-red-500 text-sm">+654-684-666</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-3/5 bg-white p-8 shadow-lg rounded-xl">
        <h1 className='text-2xl  font-bold'>Submit this form to get a <span className='text-red-400'>CallBack</span>!</h1>
          <form className="flex flex-col gap-6">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Your Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
