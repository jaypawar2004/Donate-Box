import React, { useRef, useState } from "react";
import TextMarquee from "../components/TextMarquee";
import { SiPhonepe } from "react-icons/si";
import { LuHeartHandshake, LuMessageCircleHeart } from "react-icons/lu";
import { FaGooglePay } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "./UserEditDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MdOutlineSecurity } from "react-icons/md";
import Cards from "../components/Cards";
import { Link, useParams } from "react-router";
import JoditEditor from "jodit-react";
import UserDonate from "./UserDonate";

const UserEditDetails = ({ strokeWidth = 8, percentage = 40 }) => {
  const editor = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [storyText, setStoryText] = useState(" ");
  const [isEditing2, setIsEditing2] = useState(false);
  const [update, setUpdate] = useState(" ");
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Story");

  const params = useParams();
  console.log(params);
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
    { id: 1, image: "/images/Slider2.jpg" },
    { id: 2, image: "/images/Slider2.jpg" },
    { id: 3, image: "/images/Slider2.jpg" },
  ];
  return (
    <>
      <div className="bg-white pt-10">
        <div className="w-full h-full pt-10"></div>
        <section className="w-full">
          {/* <TextMarquee /> */}
          {/* <h1 className="text-2xl bg-white w-[80%] m-auto font-bold text-start">
            Bentley Owen Raphael is a brave 9-year-old boy fighting the toughest
            battle of his life. Diagnosed with relapsed Acute Lymphoblastic
            Leukaemia.
          </h1> */}
          <div className="lg:w-[60vw] lg:h-[60px] lg:px-[5vw] lg:py-3 px-5 lg:text-lg lg:shadow-2xl flex items-center justify-between px-">
            <div className="flex gap-x-5">
              <h2>Withdraw funds</h2>
              <select name="More" id="">
                <option value="">More</option>
                <option value="">Campaign dashboard</option>
                <option value="">Edit setting</option>
                <option value="">Add team member</option>
              </select>
            </div>
            <div> <span className="text-red-200">30</span> days to go </div>
          </div>
        </section>
        <div className="w-full h-screen flex p-4">
          {/* Left Section */}
          <div className="example lg:w-[60%] w-full flex flex-col overflow-y-auto overflow-x-hidden">
            {/* Swiper Section */}
            <div className="lg:w-full lg:min-h-[75vh] w-full rounded-2xl">
              <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]} // Add Autoplay module
                loop={true}
                autoplay={{ delay: 3000 }}
                className="mySwiper rounded-2xl"
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className="w-full h-[75vh] rounded-2xl object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Raised Section */}
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-3 items-center justify-start">
                <div className="flex  justify-center items-center p-1 lg:p-6">
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
                <div className="lg:w-full w-[100vw] ">
                  <h1 className="text-xl font-bold">Raised</h1>
                  <h2 className="text-lg ">
                    Rs.50,000{" "}
                    <span className="font-semibold">of Rs. 500,000</span>
                  </h2>
                </div>
              </div>
              <div>
                <a
                  className="lg:px-5 lg:py-3 bg-gray-200 lg:rounded-4xl w-[20%] "
                  href="#"
                >
                  1000 Donors
                </a>
              </div>
            </div>

            {/* Donor Cards */}
            <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:h-[450px]">
              <div className="lg:w-[45%] mb-2 lg:mb-0 ">
                <div className="border gap-5 p-6 border-zinc-200 bg-[#F0F0F0]  flex space-x-4 py-2">
                  <div className="avatar avatar-online rounded-full">
                    <div className="lg:w-[70px] w-[50px] h-[50px] mr-2 lg:h-[70px] rounded-full">
                      <img
                        className="w-full rounded-full h-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
                        alt="Donor Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-thin text-zinc-400">Created by</h1>
                    <span className="font-medium">Name@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-[45%] ">
                <div className="border gap-5 p-6 border-zinc-300 bg-[#F0F0F0]  flex space-x-4 py-2">
                  <div className="avatar avatar-online rounded-full">
                    <div className="lg:w-[70px] w-[50px] h-[50px] mr-2 lg:h-[70px] rounded-full">
                      <img
                        className="w-full rounded-full h-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
                        alt="Donor Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-thin text-zinc-400">Created by</h1>
                    <span className="font-medium">Name@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="w-full h-[200px] flex items-center text-center justify-between mt-15 mb-15 lg:w-full lg:h-[200px] lg:flex lg:items-center lg:text-center lg:justify-evenly lg:mt-15 lg:mb-15 ">
              {["Story", "Document", "Updates"].map((btn, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(btn)}
                  className={`lg:px-10 lg:py-3 px-5 py-3 lg:w-[13vw] text-center rounded-lg shadow-xl ${
                    activeSection === btn
                      ? "bg-red-500 text-white"
                      : "border border-red-400 bg-[#F0F0F0]"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Conditionally Render Sections */}

            {activeSection === "Story" && (
              <article className="w-full h-auto p-5">
                {!isEditing ? (
                  <>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="border px-6 py-3 text-red-500 rounded-md"
                    >
                      Edit story
                    </button>
                    <div
                      className="text-lg mt-5"
                      dangerouslySetInnerHTML={{ __html: storyText }}
                    />
                  </>
                ) : (
                  <div className="flex flex-col gap-4">
                    <JoditEditor
                      ref={editor}
                      value={storyText}
                      tabIndex={1}
                      onChange={(newContent) => setStoryText(newContent)}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="border px-4 py-2 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </article>
            )}

            {activeSection === "Document" && (
              <div className="w-full h-auto p-10 shadow-lg">
                <div class="w-full py-9 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed">
                  <div class="grid gap-1">
                    <svg
                      class="mx-auto"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="File">
                        <path
                          id="icon"
                          d="M31.6497 10.6056L32.2476 10.0741L31.6497 10.6056ZM28.6559 7.23757L28.058 7.76907L28.058 7.76907L28.6559 7.23757ZM26.5356 5.29253L26.2079 6.02233L26.2079 6.02233L26.5356 5.29253ZM33.1161 12.5827L32.3683 12.867V12.867L33.1161 12.5827ZM31.8692 33.5355L32.4349 34.1012L31.8692 33.5355ZM24.231 11.4836L25.0157 11.3276L24.231 11.4836ZM26.85 14.1026L26.694 14.8872L26.85 14.1026ZM11.667 20.8667C11.2252 20.8667 10.867 21.2248 10.867 21.6667C10.867 22.1085 11.2252 22.4667 11.667 22.4667V20.8667ZM25.0003 22.4667C25.4422 22.4667 25.8003 22.1085 25.8003 21.6667C25.8003 21.2248 25.4422 20.8667 25.0003 20.8667V22.4667ZM11.667 25.8667C11.2252 25.8667 10.867 26.2248 10.867 26.6667C10.867 27.1085 11.2252 27.4667 11.667 27.4667V25.8667ZM20.0003 27.4667C20.4422 27.4667 20.8003 27.1085 20.8003 26.6667C20.8003 26.2248 20.4422 25.8667 20.0003 25.8667V27.4667ZM23.3337 34.2H16.667V35.8H23.3337V34.2ZM7.46699 25V15H5.86699V25H7.46699ZM32.5337 15.0347V25H34.1337V15.0347H32.5337ZM16.667 5.8H23.6732V4.2H16.667V5.8ZM23.6732 5.8C25.2185 5.8 25.7493 5.81639 26.2079 6.02233L26.8633 4.56274C26.0191 4.18361 25.0759 4.2 23.6732 4.2V5.8ZM29.2539 6.70608C28.322 5.65771 27.7076 4.94187 26.8633 4.56274L26.2079 6.02233C26.6665 6.22826 27.0314 6.6141 28.058 7.76907L29.2539 6.70608ZM34.1337 15.0347C34.1337 13.8411 34.1458 13.0399 33.8638 12.2984L32.3683 12.867C32.5216 13.2702 32.5337 13.7221 32.5337 15.0347H34.1337ZM31.0518 11.1371C31.9238 12.1181 32.215 12.4639 32.3683 12.867L33.8638 12.2984C33.5819 11.5569 33.0406 10.9662 32.2476 10.0741L31.0518 11.1371ZM16.667 34.2C14.2874 34.2 12.5831 34.1983 11.2872 34.0241C10.0144 33.8529 9.25596 33.5287 8.69714 32.9698L7.56577 34.1012C8.47142 35.0069 9.62375 35.4148 11.074 35.6098C12.5013 35.8017 14.3326 35.8 16.667 35.8V34.2ZM5.86699 25C5.86699 27.3344 5.86529 29.1657 6.05718 30.593C6.25217 32.0432 6.66012 33.1956 7.56577 34.1012L8.69714 32.9698C8.13833 32.411 7.81405 31.6526 7.64292 30.3798C7.46869 29.0839 7.46699 27.3796 7.46699 25H5.86699ZM23.3337 35.8C25.6681 35.8 27.4993 35.8017 28.9266 35.6098C30.3769 35.4148 31.5292 35.0069 32.4349 34.1012L31.3035 32.9698C30.7447 33.5287 29.9863 33.8529 28.7134 34.0241C27.4175 34.1983 25.7133 34.2 23.3337 34.2V35.8ZM32.5337 25C32.5337 27.3796 32.532 29.0839 32.3577 30.3798C32.1866 31.6526 31.8623 32.411 31.3035 32.9698L32.4349 34.1012C33.3405 33.1956 33.7485 32.0432 33.9435 30.593C34.1354 29.1657 34.1337 27.3344 34.1337 25H32.5337ZM7.46699 15C7.46699 12.6204 7.46869 10.9161 7.64292 9.62024C7.81405 8.34738 8.13833 7.58897 8.69714 7.03015L7.56577 5.89878C6.66012 6.80443 6.25217 7.95676 6.05718 9.40704C5.86529 10.8343 5.86699 12.6656 5.86699 15H7.46699ZM16.667 4.2C14.3326 4.2 12.5013 4.1983 11.074 4.39019C9.62375 4.58518 8.47142 4.99313 7.56577 5.89878L8.69714 7.03015C9.25596 6.47133 10.0144 6.14706 11.2872 5.97592C12.5831 5.8017 14.2874 5.8 16.667 5.8V4.2ZM23.367 5V10H24.967V5H23.367ZM28.3337 14.9667H33.3337V13.3667H28.3337V14.9667ZM23.367 10C23.367 10.7361 23.3631 11.221 23.4464 11.6397L25.0157 11.3276C24.9709 11.1023 24.967 10.8128 24.967 10H23.367ZM28.3337 13.3667C27.5209 13.3667 27.2313 13.3628 27.0061 13.318L26.694 14.8872C27.1127 14.9705 27.5976 14.9667 28.3337 14.9667V13.3667ZM23.4464 11.6397C23.7726 13.2794 25.0543 14.5611 26.694 14.8872L27.0061 13.318C26.0011 13.1181 25.2156 12.3325 25.0157 11.3276L23.4464 11.6397ZM11.667 22.4667H25.0003V20.8667H11.667V22.4667ZM11.667 27.4667H20.0003V25.8667H11.667V27.4667ZM32.2476 10.0741L29.2539 6.70608L28.058 7.76907L31.0518 11.1371L32.2476 10.0741Z"
                          fill="#4F46E5"
                        />
                      </g>
                    </svg>
                    <h2 class="text-center text-gray-400   text-xs leading-4">
                      PNG, JPG or PDF, smaller than 15MB
                    </h2>
                  </div>
                  <div class="grid gap-2">
                    <h4 class="text-center text-gray-900 text-sm font-medium leading-snug">
                      Add supporting documents (e.g. medical estimate,
                      hospital/college admit letters, bills, invoices, newspaper
                      clips etc) to gain donors’ trust on your fundraiser.
                    </h4>
                    <div class="flex items-center justify-center">
                      <label>
                        <input type="file" hidden />
                        <div class="flex w-28 h-9 px-2 flex-col bg-red-600 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                          Choose File
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl text-black">Document</h1>
                <hr className="w-full mb-5" />
                <img
                  src="https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Document"
                />
              </div>
            )}

            {activeSection === "Updates" && (
              <>
                <div className="w-full mt-5 space-y-6">
                  <h1 className="text-3xl">Post an updates</h1>
                  <p className="text-lg">
                    Feel free to reach out to the campaigner for the latest
                    update on this fundraiser.
                  </p>
                  {/* <h3 className="text-2xl text-red-500">
                    <span>#1 | </span> 27/02/2025
                  </h3> */}
                </div>
                {/* Update Images */}
                {/* <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:h-[40vh] w-full h-[100vh]">
                  <div className="lg:w-[45%] lg:h-full w-full mb-2">
                    <img
                      className="w-[100%] h-[100%] object-cover object-center rounded-xl shadow-lg"
                      src="https://images.unsplash.com/photo-1588410670460-cdab54625253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[45%] lg:h-full w-full mb-2">
                    <img
                      className="w-[100%] h-[100%] object-cover object-center rounded-xl shadow-lg"
                      src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                </div> */}
                {/* Update Details */}
                {/* <p className="text-xl py-5">
                  Dear Donors,
                  <br />
                  <br />
                  We at Annapurna Seva & Prerna Foundation extend our heartfelt
                  gratitude for your generous contributions. Your support is
                  bringing nourishment, care, and hope to those in need. Your
                  invaluable support ensures that families in need receive
                  nutritious meals and essentials to sustain their well-being.
                  <br />
                  <br />
                  We are truly grateful for your generosity—it continues to
                  bring positive change to so many lives. Thank you for standing
                  with us in this mission
                  <br /> <br />
                  Warm Regards,Annapurna Seva & Prerna Foundation
                </p> */}
<article className="w-full h-auto p-5">
                {!isEditing2 ? (
                  <>
                    {/* <button
                      onClick={() => setIsEditing2(true)}
                      className="border px-6 py-3 text-red-500 rounded-md"
                    >
                      Edit story
                    </button> */}
                    <div
                      className="text-lg mt-5"
                      dangerouslySetInnerHTML={{ __html: storyText }}
                    />
                  <div className="flex flex-col gap-4">
                    <JoditEditor
                      ref={editor}
                      value={update}
                      tabIndex={1}
                      onChange={(newContent) => setUpdate(newContent)}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsEditing2(false)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setIsEditing2(false)}
                        className="border px-4 py-2 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  </>
                ):<div></div>}
              </article>

              </>
            )}
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
            <div className="flex items-center justify-center bg-[#FFFAFA]">
              <Link to={""}>
                <button className=" text-red-500 border-2 hover:text-white px-4 py-2 rounded hover:bg-red-700 transition">
                  View All Supporters
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-[40%] lg:block hidden lg:visible invisible bg-rose-50 p-5 px-10 ">
            <div className="w-full flex items-center  justify-between text-lg">
              <h1
                className="font-bold
            "
              >
                Donate
              </h1>
              <h3 className="underline">1000 Donars</h3>
            </div>
            <div className="w-  -ml-5">
              <div className="w-full h-[220px] flex flex-col justify-center items-center ">
                <div className="grid grid-cols-3  items-center justify-start">
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
                  <div className="w-full">
                    <h1 className="text-xl font-bold">Raised</h1>
                    <h2 className="text-lg">
                      Rs.50,000 of{" "}
                      <span className="font-semibold">Rs. 500,000</span>
                    </h2>
                  </div>
                </div>
                <button  onClick={() => setIsDonateOpen(true)}  className="text-white bg-red-500 px-6 py-4 rounded-full w-1/2 text-center m-auto shadow-2xl">
                  {" "}
                  Donate Now
                </button>
                <UserDonate isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
              </div>
            </div>
            <div className="pt-10">
              <h1 className="text-zinc-300 text-lg">Give Through:</h1>
              <div>
                <h1 className="font-semibold text-xl py-5">UPI</h1>
                <div className="w-full flex items-center justify-between  h-[15px] mb-10 mt-10">
                  <div>
                    {/* <img width="48" height="48" src="https://img.icons8.com/material-rounded/48/phone-pe.png" alt="phone-pe"/> */}
                    <SiPhonepe className="text-5xl text-[#673AB7]" />
                    <h1>PhonePe</h1>
                  </div>
                  <div className="">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/google-pay.png"
                      alt="google-pay"
                    />
                    <h1>G Pay</h1>
                  </div>

                  <div>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/96/bhim.png"
                      alt="bhim"
                    />
                    Bhim UPI
                  </div>
                  <div>
                    <img
                      width="50"
                      height="64"
                      src="https://img.icons8.com/puffy-filled/64/more--v3.png"
                      alt="more--v3"
                    />
                    Others
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="capitalize py-5 font-semibold text-xl">
                Other Options
              </h1>

              <div>
                <div className="w-full text-lg py-10 flex items-center justify-between h-[15px]">
                  <div>
                    <img
                      width="48"
                      height="96"
                      src="https://img.icons8.com/color/96/paytm.png"
                      alt="paytm"
                    />
                    Paytm
                  </div>
                  <div>
                    <img
                      width="44"
                      height="94"
                      src="https://img.icons8.com/3d-fluency/94/card-verification-value.png"
                      alt="card-verification-value"
                    />
                    Cr/Dr Cards
                  </div>
                  <div>
                    <img
                      width="48"
                      height="64"
                      src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-online-banking-finance-kiranshastry-lineal-kiranshastry-1.png"
                      alt="external-online-banking-finance-kiranshastry-lineal-kiranshastry-1"
                    />
                    Net Banking
                  </div>
                  <div>
                    <img
                      width="48"
                      height="96"
                      src="https://img.icons8.com/color/96/gift-card.png"
                      alt="gift-card"
                    />
                    Gift Cards
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section end */}
        </div>
        <div className="w-full h-[50vh] bg-[#FBFAF8] p-10">
          <h1 className="text-2xl">
            Your easy, powerFul, and trusted home for help
          </h1>
          <div className="lg:w-full lg:h-full lg:flex space-y-5 w-full">
            <div className="lg:w-[33.4%] lg:h-full   lg:flex lg:flex-1/2 lg:items-center inline-flex lg:justify-center w-full p-3">
              <LuMessageCircleHeart className="lg:text-[5vw] font-thin text-[13vw] mr-3" />
              <h2>
                Easy <br />
                <span>Donate quickly and easily</span>
              </h2>
            </div>
            <div className="lg:w-[33.4%] lg:h-full  p-3 lg:flex lg:flex-1/2 lg:items-center inline-flex lg:justify-center w-full">
              <LuHeartHandshake className="lg:text-[5vw] mr-5 font-thin text-[15vw]" />
              <h2>
                Powerful <br />
                <span>
                  Send help right to the people and causes you care about{" "}
                </span>
              </h2>
            </div>
            <div className="lg:w-[33.4%] lg:h-full p-3 lg:flex lg:flex-1/2 lg:items-center inline-flex lg:justify-center w-full">
              <MdOutlineSecurity className="lg:text-[5vw] mr-5 font-thin text-[12vw]" />
              <h2>
                Trusted <br />
                <span>Your donation is protected with us.</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-10 p-10">
          <h1 className="text-4xl">
            Support <span className="text-red-500"> More Causes</span>
          </h1>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default UserEditDetails;

// import React from "react";
// import TextMarquee from "../components/TextMarquee";
// import { SiPhonepe } from "react-icons/si";
// import { LuHeartHandshake, LuMessageCircleHeart } from "react-icons/lu";
// import { FaGooglePay } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./DonateDetails.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { MdOutlineSecurity } from "react-icons/md";
// import Cards from "../components/Cards";

// const DonateDetails = ({ strokeWidth = 8, percentage = 40 }) => {
//   const radius = 50 - strokeWidth / 2;
//   const pathDescription = `
//     M 50,50 m 0,-${radius}
//     a ${radius},${radius} 0 1 1 0,${2 * radius}
//     a ${radius},${radius} 0 1 1 0,-${2 * radius}
//   `;

//   const diameter = Math.PI * 2 * radius;
//   const progressStyle = {
//     stroke: "#007dbc",
//     strokeLinecap: "round",
//     strokeDasharray: `${diameter}px ${diameter}px`,
//     strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
//   };

//   const slides = [
//     { id: 1, image: "/images/Slider2.jpg" },
//     { id: 2, image: "/images/Slider2.jpg" },
//     { id: 3, image: "/images/Slider2.jpg" },
//   ];

//   return (
//     <>
//       <div className="bg-white pt-4 sm:pt-6 md:pt-10">
//         <div className="w-full h-10 sm:h-16 md:h-24"></div>
//         <section className="w-full">
//           <TextMarquee />
//           <h1 className="text-xl sm:text-2xl md:text-3xl bg-white w-[90%] sm:w-[85%] md:w-[80%] m-auto font-bold text-start py-4 sm:py-6">
//             Bentley Owen Raphael is a brave 9-year-old boy fighting the toughest
//             battle of his life. Diagnosed with relapsed Acute Lymphoblastic
//             Leukaemia.
//           </h1>
//         </section>
//         <div className="w-full flex flex-col lg:flex-row p-4 sm:p-6 md:p-10">
//           {/* Left Section */}
//           <div className="w-full lg:w-[60%] flex flex-col overflow-y-auto">
//             {/* Swiper Section */}
//             <div className="w-full lg:min-h-[75vh] rounded-2xl mb-6">
//               <Swiper
//                 navigation={true}
//                 modules={[Navigation, Autoplay]}
//                 loop={true}
//                 autoplay={{ delay: 3000 }}
//                 className="mySwiper rounded-2xl"
//               >
//                 {slides.map((slide) => (
//                   <SwiperSlide key={slide.id}>
//                     <img
//                       src={slide.image}
//                       alt={`Slide ${slide.id}`}
//                       className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] rounded-2xl object-cover"
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>

//             {/* Raised Section */}
//             <div className="w-full h-auto sm:h-[300px] md:h-[400px] flex justify-center items-center mb-6">
//               <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-start gap-4">
//                 <div className="flex justify-center items-center p-2 sm:p-4">
//                   <svg
//                     className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
//                     viewBox="0 0 100 100"
//                   >
//                     <path
//                       d={pathDescription}
//                       strokeWidth={strokeWidth}
//                       fillOpacity={0}
//                       className="stroke-gray-300"
//                     />
//                     <path
//                       d={pathDescription}
//                       strokeWidth={strokeWidth}
//                       fillOpacity={0}
//                       style={progressStyle}
//                     />
//                     <text
//                       x={50}
//                       y={50}
//                       className="fill-[#007dbc] text-lg sm:text-xl md:text-2xl font-bold"
//                       dominantBaseline="central"
//                       textAnchor="middle"
//                     >
//                       {`${percentage}%`}
//                     </text>
//                   </svg>
//                 </div>
//                 <div className="text-center sm:text-left">
//                   <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
//                     Raised
//                   </h1>
//                   <h2 className="text-base sm:text-lg md:text-xl">
//                     Rs.50,000 of{" "}
//                     <span className="font-semibold">Rs. 500,000</span>
//                   </h2>
//                 </div>
//                 <div className="text-center sm:text-left">
//                   <a
//                     className="px-3 sm:px-5 py-2 sm:py-3 bg-gray-200 rounded-full text-sm sm:text-base"
//                     href="#"
//                   >
//                     1000 Donors
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Donor Cards */}
//             <div className="w-full flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[450px] mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
//               {[...Array(2)].map((_, index) => (
//                 <div key={index} className="w-full sm:w-[45%]">
//                   <div className="border p-4 sm:p-6 border-zinc-300 bg-[#F0F0F0] flex space-x-4 py-2">
//                     <div className="avatar avatar-online rounded-full">
//                       <div className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] rounded-full">
//                         <img
//                           className="w-full rounded-full h-full object-cover object-center"
//                           src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
//                           alt="Donor Avatar"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <h1 className="font-thin text-zinc-400 text-sm sm:text-base">
//                         Created by
//                       </h1>
//                       <span className="font-medium text-sm sm:text-base">
//                         Name@gmail.com
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Buttons Section */}
//             <div className="w-full h-auto flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
//               {["Story", "Document", "Updates"].map((btn, index) => (
//                 <button
//                   key={index}
//                   className={`px-4 sm:px-10 py-2 sm:py-3 text-center w-full sm:w-auto rounded-lg shadow-xl ${
//                     btn === "Story"
//                       ? "bg-red-500 text-white"
//                       : "border border-red-400 bg-[#F0F0F0] text-black"
//                   }`}
//                 >
//                   {btn}
//                 </button>
//               ))}
//             </div>

//             {/* Story Section */}
//             <article className="w-full h-auto p-4 sm:p-5 mb-6">
//               <p className="text-base sm:text-lg">
//                 Give Bentley a Chance to Live
//                 <br />
//                 <br />
//                 Bentley Owen Raphael is a brave 9-year-old boy fighting the
//                 toughest battle of his life. Diagnosed with relapsed Acute
//                 Lymphoblastic Leukaemia, he underwent a stem cell transplant
//                 with his mother as the donor. Despite the initial success,
//                 Bentley’s condition took a devastating turn. He is now in the
//                 ICU, struggling with kidney failure, uncontrollable seizures,
//                 and severe hypertension.
//                 <br />
//                 <br />
//                 His parents are doing everything they can, but the hospital bill
//                 has climbed to RM650,000—an amount they can’t afford. Watching
//                 their son fight for his life while facing this financial burden
//                 is heartbreaking.
//                 <br />
//                 <br />
//                 Bentley deserves a chance to grow up, laugh, and live a full
//                 life. Your kindness can give him that chance. Please donate and
//                 help this family through their darkest hour. Every contribution
//                 counts.
//               </p>
//               <br />
//               <p className="text-base sm:text-lg">
//                 The Impact of Your Support
//                 <br />
//                 <br />
//                 Your generous contributions will directly help with:
//                 <br />
//                 ✅ Critical Surgeries & Emergency Care
//                 <br />
//                 ✅ Hospital Expenses & Essential Medications
//                 <br />
//                 ✅ Physiotherapy & Long-Term Recovery
//                 <br />
//                 <br />
//                 Every donation brings hope and healing—support today! 💙✨
//               </p>
//             </article>

//             {/* Document */}
//             <div className="w-full h-auto p-4 sm:p-10 mb-6 shadow-lg">
//               <h1 className="text-xl sm:text-2xl text-black">Document</h1>
//               <hr className="w-full my-4" />
//               <img
//                 src="https://plus.unsplash.com/premium_vector-1714148691911-5e79c7aa7454?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt=""
//                 className="w-full h-auto object-cover rounded-lg"
//               />
//             </div>

//             {/* Updates */}
//             <div className="w-full mt-6 space-y-4 mb-6">
//               <h1 className="text-2xl sm:text-3xl">Updates</h1>
//               <p className="text-base sm:text-lg">
//                 Feel free to reach out to the campaigner for the latest update
//                 on this fundraiser.
//               </p>
//               <h3 className="text-xl sm:text-2xl text-red-500">
//                 <span>#1 | </span> 27/02/2025
//               </h3>
//             </div>

//             {/* Updates Images */}
//             <div className="w-full flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[40vh] mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
//               <div className="w-full sm:w-[45%] h-[30vh] sm:h-full">
//                 <img
//                   className="w-full h-full object-cover object-center rounded-xl shadow-lg"
//                   src="https://images.unsplash.com/photo-1588410670460-cdab54625253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt=""
//                 />
//               </div>
//               <div className="w-full sm:w-[45%] h-[30vh] sm:h-full">
//                 <img
//                   className="w-full h-full object-cover object-center rounded-xl shadow-lg"
//                   src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfHwwfHx8MA%3D%3D"
//                   alt=""
//                 />
//               </div>
//             </div>

//             {/* Update Details */}
//             <p className="text-lg sm:text-xl py-4 sm:py-5 mb-6">
//               Dear Donors,
//               <br />
//               <br />
//               We at Annapurna Seva & Prerna Foundation extend our heartfelt
//               gratitude for your generous contributions. Your support is
//               bringing nourishment, care, and hope to those in need. Your
//               invaluable support ensures that families in need receive
//               nutritious meals and essentials to sustain their well-being.
//               <br />
//               <br />
//               We are truly grateful for your generosity—it continues to bring
//               positive change to so many lives. Thank you for standing with us
//               in this mission
//               <br />
//               <br />
//               Warm Regards, Annapurna Seva & Prerna Foundation
//             </p>

//             {/* Contributors Section */}
//             <div className="w-full bg-[#FFFAFA] p-4 sm:p-10 mt-6">
//               <h1 className="text-xl sm:text-2xl font-bold">Contributors</h1>
//               {[...Array(4)].map((_, index) => (
//                 <div
//                   key={index}
//                   className="border-b p-4 sm:p-6 border-t-zinc-500 border-b-zinc-500 flex space-x-4 py-2"
//                 >
//                   <div className="avatar avatar-online rounded-full">
//                     <div className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] rounded-full">
//                       <img
//                         className="w-full rounded-full h-full object-cover object-center"
//                         src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
//                         alt="Contributor Avatar"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <h1 className="font-bold text-sm sm:text-base">Sanyogita</h1>
//                     <span className="font-light text-sm sm:text-base">$1000</span>
//                     <p className="font-light text-zinc-400 text-xs sm:text-sm">
//                       Name@gmail.com
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex items-center justify-center bg-[#FFFAFA] py-4">
//               <button className="border-2 py-2 sm:py-4 w-[80%] sm:w-[40%] m-auto rounded-xl border-red-300 text-lg sm:text-2xl text-red-300 hover:bg-red-300 hover:text-white transition">
//                 View All Supporters
//               </button>
//             </div>
//           </div>

//           {/* Right Section (Hidden on mobile/tablet, visible on desktop) */}
//           <div className="hidden lg:block lg:w-[40%] bg-white p-4 sm:p-5 md:p-10">
//             <div className="w-full flex items-center justify-between text-lg sm:text-xl">
//               <h1 className="font-bold">Donate</h1>
//               <h3 className="underline">1000 Donors</h3>
//             </div>
//             <div className="w-full mt-4">
//               <div className="w-full h-[200px] sm:h-[220px] flex flex-col justify-center items-center">
//                 <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-start gap-4">
//                   <div className="flex justify-center items-center p-2 sm:p-4">
//                     <svg
//                       className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
//                       viewBox="0 0 100 100"
//                     >
//                       <path
//                         d={pathDescription}
//                         strokeWidth={strokeWidth}
//                         fillOpacity={0}
//                         className="stroke-gray-300"
//                       />
//                       <path
//                         d={pathDescription}
//                         strokeWidth={strokeWidth}
//                         fillOpacity={0}
//                         style={progressStyle}
//                       />
//                       <text
//                         x={50}
//                         y={50}
//                         className="fill-[#007dbc] text-lg sm:text-xl md:text-2xl font-bold"
//                         dominantBaseline="central"
//                         textAnchor="middle"
//                       >
//                         {`${percentage}%`}
//                       </text>
//                     </svg>
//                   </div>
//                   <div className="text-center sm:text-left">
//                     <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
//                       Raised
//                     </h1>
//                     <h2 className="text-base sm:text-lg md:text-xl">
//                       Rs.50,000 of{" "}
//                       <span className="font-semibold">Rs. 500,000</span>
//                     </h2>
//                   </div>
//                 </div>
//                 <button className="text-white bg-red-500 px-4 sm:px-6 py-2 sm:py-4 rounded-full w-1/2 text-center mt-4 shadow-2xl hover:bg-red-600 transition">
//                   Donate Now
//                 </button>
//               </div>
//             </div>
//             <div className="pt-6 sm:pt-10">
//               <h1 className="text-zinc-300 text-lg sm:text-xl">Give Through:</h1>
//               <div>
//                 <h1 className="font-semibold text-xl sm:text-2xl py-4 sm:py-5">
//                   UPI
//                 </h1>
//                 <div className="w-full flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[15px] mb-6 sm:mb-10 mt-4 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
//                   <div className="flex items-center space-x-2">
//                     <SiPhonepe className="text-3xl sm:text-5xl text-[#673AB7]" />
//                     <h1 className="text-base sm:text-lg">PhonePe</h1>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <FaGooglePay className="text-3xl sm:text-5xl text-green-500" />
//                     <h1 className="text-base sm:text-lg">G Pay</h1>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <img
//                       width="48"
//                       height="48"
//                       src="https://img.icons8.com/color/96/bhim.png"
//                       alt="bhim"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Bhim UPI</h1>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <img
//                       width="50"
//                       height="64"
//                       src="https://img.icons8.com/puffy-filled/64/more--v3.png"
//                       alt="more--v3"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Others</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h1 className="capitalize py-4 sm:py-5 font-semibold text-xl sm:text-2xl">
//                 Other Options
//               </h1>
//               <div>
//                 <div className="w-full text-lg sm:text-xl py-6 sm:py-10 flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[15px]">
//                   <div className="flex items-center space-x-2 mb-4 sm:mb-0">
//                     <img
//                       width="48"
//                       height="96"
//                       src="https://img.icons8.com/color/96/paytm.png"
//                       alt="paytm"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Paytm</h1>
//                   </div>
//                   <div className="flex items-center space-x-2 mb-4 sm:mb-0">
//                     <img
//                       width="44"
//                       height="94"
//                       src="https://img.icons8.com/3d-fluency/94/card-verification-value.png"
//                       alt="card-verification-value"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Cr/Dr Cards</h1>
//                   </div>
//                   <div className="flex items-center space-x-2 mb-4 sm:mb-0">
//                     <img
//                       width="48"
//                       height="64"
//                       src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-online-banking-finance-kiranshastry-lineal-kiranshastry-1.png"
//                       alt="external-online-banking-finance-kiranshastry-lineal-kiranshastry-1"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Net Banking</h1>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <img
//                       width="48"
//                       height="96"
//                       src="https://img.icons8.com/color/96/gift-card.png"
//                       alt="gift-card"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Gift Cards</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full h-[40vh] sm:h-[50vh] bg-[#FBFAF8] p-4 sm:p-6 md:p-10">
//           <h1 className="text-xl sm:text-2xl md:text-3xl">
//             Your easy, powerful, and trusted home for help
//           </h1>
//           <div className="w-full h-full flex flex-col sm:flex-row items-center justify-between mt-4">
//             <div className="w-full sm:w-[33.4%] h-auto flex items-center justify-center space-x-2 mb-4 sm:mb-0">
//               <LuMessageCircleHeart className="text-3xl sm:text-4xl md:text-5xl font-thin" />
//               <div>
//                 <h2 className="text-base sm:text-lg md:text-xl">Easy</h2>
//                 <span className="text-sm sm:text-base">Donate quickly and easily</span>
//               </div>
//             </div>
//             <div className="w-full sm:w-[33.4%] h-auto flex items-center justify-center space-x-2 mb-4 sm:mb-0">
//               <LuHeartHandshake className="text-3xl sm:text-4xl md:text-5xl font-thin" />
//               <div>
//                 <h2 className="text-base sm:text-lg md:text-xl">Powerful</h2>
//                 <span className="text-sm sm:text-base">
//                   Send help right to the people and causes you care about
//                 </span>
//               </div>
//             </div>
//             <div className="w-full sm:w-[33.4%] h-auto flex items-center justify-center space-x-2">
//               <MdOutlineSecurity className="text-3xl sm:text-4xl md:text-5xl font-thin" />
//               <div>
//                 <h2 className="text-base sm:text-lg md:text-xl">Trusted</h2>
//                 <span className="text-sm sm:text-base">Your donation is protected with us.</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full h-auto mt-6 sm:mt-8 p-4 sm:p-6 md:p-10">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl">
//             Support <span className="text-red-500">More Causes</span>
//           </h1>
//           <Cards />
//         </div>
//       </div>
//     </>
//   );
// };

// export default DonateDetails;

{
  /* All Button section*/
}

{
  /* Buttons Section */
}
// <div className="w-full h-[200px] flex items-center text-center justify-between mt-15 mb-15 lg:w-full lg:h-[200px] lg:flex lg:items-center lg:text-center lg:justify-between lg:mt-15 lg:mb-15 ">
//   {["Story", "Document", "Updates"].map((btn, index) => (
//     <button
//       key={index}
//       className={`lg:px-10  lg:py-3 px-5 py-3 lg:w-[13vw] text-center rounded-lg shadow-xl ${
//         btn === "Story"
//           ? "bg-red-500"
//           : "border border-red-400 bg-[#F0F0F0]"
//       }`}
//     >
//       {btn}
//     </button>
//   ))}
// </div>

// {/* Story Section */}
// <article className="w-full h-auto  p-5">
//   <p className="text-lg">
//     Give Bentley a Chance to Live
//     <br />
//     <br />
//     Bentley Owen Raphael is a brave 9-year-old boy fighting the
//     toughest battle of his life. Diagnosed with relapsed Acute
//     Lymphoblastic Leukaemia, he underwent a stem cell transplant
//     with his mother as the donor. Despite the initial success,
//     Bentley’s condition took a devastating turn. He is now in the
//     ICU, struggling with kidney failure, uncontrollable seizures,
//     and severe hypertension.
//     <br />
//     <br />
//     His parents are doing everything they can, but the hospital bill
//     has climbed to RM650,000—an amount they can’t afford. Watching
//     their son fight for his life while facing this financial burden
//     is heartbreaking.
//     <br />
//     <br />
//     Bentley deserves a chance to grow up, laugh, and live a full
//     life. Your kindness can give him that chance. Please donate and
//     help this family through their darkest hour. Every contribution
//     counts.
//   </p>
//   <br />
//   <p className="text-lg">
//     The Impact of Your Support
//     <br />
//     <br />
//     Your generous contributions will directly help with:
//     <br />
//     ✅ Critical Surgeries & Emergency Care
//     <br />
//     ✅ Hospital Expenses & Essential Medications
//     <br />
//     ✅ Physiotherapy & Long-Term Recovery
//     <br />
//     <br />
//     Every donation brings hope and healing—support today! 💙✨
//   </p>
// </article>

// {/* Document */}

// <div className="w-full h-auto p-10 shadow-lg">
//   <h1 className="text-2xl text-black">Document</h1>
//   <hr className="w-full mb-5" />

//   <img
//     src="https://plus.unsplash.com/premium_vector-1714148691911-5e79c7aa7454?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     alt=""
//   />
// </div>

// {/* Updates */}

// <div className="w-full mt-5 space-y-6">
//   <h1 className="text-3xl">Updates</h1>
//   <p className=" text-lg">
//     Feel free to reach out to the campaigner for the latest update
//     on this fundraiser.
//   </p>
//   <h3 className="text-2xl text-red-500">
//     <span>#1 | </span> 27/02/2025
//   </h3>
// </div>

// {/* Updates Images */}

// <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:h-[40vh] w-full h-[100vh]">
//   <div className="lg:w-[45%] lg:h-full w-full mb-2">
//     <img
//       className="w-[100%] h-[100%] object-cover object-center rounded-xl shadow-lg "
//       src="https://images.unsplash.com/photo-1588410670460-cdab54625253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       alt=""
//     />
//   </div>
//   <div className="lg:w-[45%] lg:h-full w-full mb-2">
//     <img
//       className="w-[100%] h-[100%] object-cover object-center rounded-xl shadow-lg"
//       src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfHwwfHx8MA%3D%3D"
//       alt=""
//     />
//   </div>
// </div>

// {/* Update Details */}

// <p className="text-xl py-5">
//   Dear Donors,
//   <br />
//   <br />
//   We at Annapurna Seva & Prerna Foundation extend our heartfelt
//   gratitude for your generous contributions. Your support is
//   bringing nourishment, care, and hope to those in need. Your
//   invaluable support ensures that families in need receive
//   nutritious meals and essentials to sustain their well-being.
//   <br />
//   <br />
//   We are truly grateful for your generosity—it continues to bring
//   positive change to so many lives. Thank you for standing with us
//   in this mission
//   <br /> <br />
//   Warm Regards,Annapurna Seva & Prerna Foundation
// </p> -->
