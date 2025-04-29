import React from "react";
import TextMarquee from "../components/TextMarquee";
import { LuHeartHandshake, LuMessageCircleHeart } from "react-icons/lu";

import "swiper/css";
import "swiper/css/navigation";
import "./FundraiseDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MdOutlineSecurity } from "react-icons/md";
import Cards from "../components/Cards";
import { Slide } from "@mui/material";

const FundraiseDetails = ({ strokeWidth = 8, percentage = 40 }) => {
  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
    M 50,50 m 0,-${radius}
    a ${radius},${radius} 0 1 1 0,${2 * radius}
    a ${radius},${radius} 0 1 1 0,-${2 * radius}
  `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    stroke: "#007dbc",
    strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
  };
  const slides = [
    { id: 1, image: "/src/assets/images/Slider2.jpg" },
  { id: 2, image: "/src/assets/images/Slider2.jpg" },
  { id: 3, image: "/src/assets/images/Slider2.jpg" },
  ]
  return (
    <>
    <div className="bg-white p-10">

    
      <div className="w-full h-full py-10">
      </div>
      <section className="">
        <TextMarquee />
        <h1 className="text-2xl bg-white w-[80%] m-auto font-bold text-center">
          Bentley Owen Raphael is a brave 9-year-old boy fighting the toughest
          battle of his life. Diagnosed with relapsed Acute Lymphoblastic
          Leukaemia.
        </h1>
      </section>
      <div className="w-full h-screen flex p-10">
        {/* Left Section */}
        <div className=" w-[60%] flex flex-col overflow-y-auto">
          {/* Swiper Section */}
          <div className="w-full min-h-[75vh] ">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]} // Add Autoplay module
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-[75vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

          {/* Raised Section */}
          <div className="w-full h-[400px] flex justify-center items-center ">
            <div className="grid grid-cols-3 items-center justify-start">
            <div className="flex justify-center items-center p-4">
      <svg
        className="w-24 h-24 md:w-32 md:h-32"
        viewBox="0 0 100 100"
      >
        {/* Background Circle (Trail) */}
        <path
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          className="stroke-gray-300"
        />

        {/* Progress Circle (Path) */}
        <path
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={progressStyle}
        />

        {/* Percentage Text */}
        <text
          x={50}
          y={50}
          className="fill-[#007dbc] text-xl md:text-2xl font-bold"
          dominantBaseline="central"
          textAnchor="middle"
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
              <div>
                <h1 className="text-xl font-bold">Raised</h1>
                <h2 className="text-lg">
                  Rs.50,000 of <span className="font-semibold">Rs. 500,000</span>
                </h2>
              </div>
            </div>
            <div>
              <a className="px-5 py-3 bg-gray-200 rounded-4xl" href="#">
                1000 Donors
              </a>
            </div>
          </div>

          {/* Donor Cards */}
          <div className="w-full flex items-center justify-between h-[450px] ">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="w-[45%]">
                <div className="border p-6 border-zinc-300  flex space-x-4 py-2">
                  <div className="avatar avatar-online rounded-full">
                    <div className="w-[70px] h-[70px] rounded-full">
                      <img
                        className="w-full rounded-full h-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
                        alt="Donor Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold">Name</h1>
                    <span className="font-light">Name@gmail.com</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons Section */}
          <div className="w-full h-[200px]  flex items-center justify-between mt-15 mb-15 ">
            {["Story", "Document", "Updates"].map((btn, index) => (
              <button
                key={index}
                className={`px-10  py-3 text-center w-[13vw] rounded-md shadow-xl ${
                  btn === "Story" ? "bg-red-500" : "border border-red-400 bg-zinc-300"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Story Section */}
          <article className="w-full h-auto  p-5">
            <p className="text-lg">
              Give Bentley a Chance to Live
              <br />
              <br />
              Bentley Owen Raphael is a brave 9-year-old boy fighting the
              toughest battle of his life. Diagnosed with relapsed Acute
              Lymphoblastic Leukaemia, he underwent a stem cell transplant with
              his mother as the donor. Despite the initial success, Bentley’s
              condition took a devastating turn. He is now in the ICU,
              struggling with kidney failure, uncontrollable seizures, and
              severe hypertension.
              <br />
              <br />
              His parents are doing everything they can, but the hospital bill
              has climbed to RM650,000—an amount they can’t afford. Watching
              their son fight for his life while facing this financial burden is
              heartbreaking.
              <br />
              <br />
              Bentley deserves a chance to grow up, laugh, and live a full life.
              Your kindness can give him that chance. Please donate and help
              this family through their darkest hour. Every contribution counts.
            </p>
          </article>

          {/* Contributors Section */}
          <div className="w-full bg-[#FFFAFA] p-10 mt-10">
            <h1 className="text-2xl font-bold">Contributors</h1>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="border-b p-6 border-t-zinc-500 border-b-zinc-500 flex space-x-4 py-2"
              >
                <div className="avatar avatar-online rounded-full">
                  <div className="w-[70px] h-[70px] rounded-full">
                    <img
                      className="w-full rounded-full h-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
                      alt="Contributor Avatar"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold">Sanyogita</h1>
                  <span className="font-light">$1000</span>
                  <p className="font-light text-zinc-400">Name@gmail.com</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[40%] bg-blue-400 p-10 ">
          <div className="w-full flex items-center justify-between text-lg">
            <h1 className="font-bold
            ">Donate</h1>
            <h3 className="underline">1000 Donars</h3>
          </div>
          <div className="w-full  -ml-5">
          <div className="w-full h-[400px] flex flex-col justify-center items-center ">
            <div className="grid grid-cols-3 items-center justify-start">
            <div className="flex justify-center items-center p-4">
      <svg
        className="w-24 h-24 md:w-32 md:h-32"
        viewBox="0 0 100 100"
      >
        {/* Background Circle (Trail) */}
        <path
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          className="stroke-gray-300"
        />

        {/* Progress Circle (Path) */}
        <path
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={progressStyle}
        />

        {/* Percentage Text */}
        <text
          x={50}
          y={50}
          className="fill-[#007dbc] text-xl md:text-2xl font-bold"
          dominantBaseline="central"
          textAnchor="middle"
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
              <div>
                <h1 className="text-xl font-bold">Raised</h1>
                <h2 className="text-lg">
                  Rs.50,000 of <span className="font-semibold">Rs. 500,000</span>
                </h2>
              </div>

            </div>
            {/* <div>
              <a className="px-5 py-3 bg-gray-200 rounded-4xl" href="#">
              1000 Donors
              </a>
              </div> */}
              <button className="text-white bg-red-500 px-6 py-4 rounded-full -mt-[25v] w-1/2 text-center m-auto"> Donate Now</button>
          </div>
          </div>
          <div>
            <h1 className="text-zinc-200">Give Through:</h1>
            <div>
              <h1>UPI</h1>
      <div className="w-full flex items-center justify-between bg-red-500 h-[15px]">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
      </div>
            </div>
          </div>
          <div>
            <h1 className="text-zinc-200">Give Through:</h1>
            <div>
              <h1>UPI</h1>
      <div className="w-full text-lg flex items-center justify-between bg-red-500 h-[15px]">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
      </div>
            </div>
          </div>
        </div>

        
      </div>
      <div className="w-full h-[50vh] bg-[#FBFAF8]">
        <h1 className="text-2xl">Your easy, powerFul, and trusted home for help</h1>
        <div className="w-full h-full flex ">
          <div className="w-[33.4%] h-full  flex flex-1/2 items-center justify-center ">
          <LuMessageCircleHeart  className="text-[5vw] font-thin"/>
            <h2>Easy <br /><span>Donate quickly and easily</span></h2>
           
            </div> 
          <div className="w-[33.4%] h-full  flex flex-1/2 items-center justify-center ">
          <LuHeartHandshake  className="text-[5vw] font-thin"/>
            <h2>Powerful <br /><span>Send help right to the people and causes you care about </span></h2>
           
            </div> 
          <div className="w-[33.4%] h-full flex flex-1/2 items-center justify-center ">
          <MdOutlineSecurity  className="text-[5vw] font-thin"/>
            <h2>Trusted <br /><span>Your donation is protected with us.</span></h2>
           
            </div> 
          
           

        </div>
        
      </div>

      <div className="w-full h-auto mt-10">
        <h1 className="text-4xl">Support <span className="text-red-500"> More Causes</span></h1>
        <Cards />
      </div>
      </div>
    </>
  );
};

export default FundraiseDetails;