import React from "react";
import { Link } from "react-router-dom";
const Support_Info = () => {
  return (
    <div className="w-full lg:px-12 px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10">
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-[#E53935] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black">Support</span> Every Month
        </h1>
        <h4 className="text-base sm:text-lg md:text-xl mt-2 mb-4">A Mission to Save Lives</h4>
        <p className="text-[#666666] text-base sm:text-lg md:text-xl mt-5 max-w-xl">
          GHEM or ‘Giving Hope Every Month’ is a monthly donation program that ensures patients in India receive timely access to life-saving treatment. GHEM or ‘Giving Hope Every Month’ is a monthly donation program that ensures patients in India receive timely access to life-saving treatment.
        </p>

        <Link to={"/donate"}>
        <button className="mt-8 py-3 px-6 border-2 cursor-pointer rounded-lg bg-[#F11914] text-white flex items-center text-sm sm:text-base hover:bg-[#e21713] transition">
          <svg
            className="mr-2"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(247,247,247,1)"
            >
            <path d="M2 8.5C2 5.46243 4.46243 3 7.5 3C9.36016 3 11.0046 3.92345 12 5.33692C12.9954 3.92345 14.6398 3 16.5 3C19.5376 3 22 5.46243 22 8.5C22 16 11.9999 21.4852 11.9999 21.4852C11.9999 21.4852 2 16 2 8.5Z"></path>
          </svg>
          Support Every Month
        </button>
            </Link>
      </div>
      <div className="w-30"></div>

      {/* Right Icons Section */}
      <div className="w-full lg:w-[25vw] grid grid-cols-2 lg:gap-y-12 lg:gap-x-10 gap-y-12 justify-items-center">
        {["BoxLogo1.png", "BoxLogo2.png", "BoxLogo3.png", "BoxLogo4.png"].map((img, i) => (
          <div
            key={i}
            className="relative w-24 h-24 sm:w-28 sm:h-28 bg-[#FDF5F5] rounded-full flex items-center justify-center"
          >
            <img
              className="w-12 sm:w-14 object-contain"
              src={`/images/${img}`}
              alt={`icon-${i}`}
            />
            <span className="absolute -bottom-6 text-sm text-gray-600">Statement</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support_Info;
