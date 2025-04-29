import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardsContainer from "../Pages/CardsContainer";
import Cards from "../components/Cards";

const causes = [
  { label: "ALL", icon: "🩺" },
  { label: "ANIMALS", icon: "🐾" },
  { label: "EDUCATION", icon: "🎓" },
  { label: "CHILDREN", icon: "😃" },
  { label: "HUNGER", icon: "🍲" },
  { label: "HANDICAPABLE", icon: "♿" },
];

const Cause = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const scrollRight = () => {
    setActiveIndex((prev) => (prev === causes.length - 1 ? prev : prev + 1));
  };

  return (
    <div className="w-full p-[8vw] bg-[#FDF5F4] min-h-[200%]">
        <div className="w-full px-5 py-10 bg-[#fef7f4] text-center">
      <h2 className="text-3xl font-bold text-black">
        Donate for a <span className="text-red-500">Cause</span>!
      </h2>
      <div className="w-20 h-1 bg-red-500 mx-auto my-2 rounded"></div>

      <div className="relative mt-8 ">
        {/* Navigation */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex overflow-x-hidden justify-between gap-4 px-[5vw]">
          {causes.map((cause, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center w-25 h-25 rounded-xl shadow-md border transition-all duration-300 cursor-pointer hover:scale-105 ${
                idx === activeIndex
                  ? "bg-blue-100 border-blue-500"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="text-4xl mb-2">{cause.icon}</div>
              <span className="text-sm font-medium text-gray-700">{cause.label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
   <div className="flex grid-cols-4 gap-5">
  <Cards />
   
   
   </div>
    </div>
  );
};

export default Cause;