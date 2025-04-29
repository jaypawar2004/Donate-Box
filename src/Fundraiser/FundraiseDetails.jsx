import React from "react";
import TextMarquee from "../components/TextMarquee";
import { LuHeartHandshake, LuMessageCircleHeart } from "react-icons/lu";
import { FaGooglePay } from "react-icons/fa";
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
  ];
  return (
    <>
      <div className="bg-white p-10">
        <div className="w-full h-full py-10"></div>
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
          <div className="example w-[60%] scroll flex flex-col overflow-y-auto">
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
                    Rs.50,000 of{" "}
                    <span className="font-semibold">Rs. 500,000</span>
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
                  <div className="border p-6 border-zinc-300 bg-[#F0F0F0]  flex space-x-4 py-2">
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
                      <h1 className="font-thin text-zinc-400">Created by</h1>
                      <span className="font-medium">Name@gmail.com</span>
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
                  className={`px-10  py-3 text-center w-[13vw] rounded-lg shadow-xl ${
                    btn === "Story"
                      ? "bg-red-500"
                      : "border border-red-400 bg-[#F0F0F0]"
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
                Lymphoblastic Leukaemia, he underwent a stem cell transplant
                with his mother as the donor. Despite the initial success,
                Bentley’s condition took a devastating turn. He is now in the
                ICU, struggling with kidney failure, uncontrollable seizures,
                and severe hypertension.
                <br />
                <br />
                His parents are doing everything they can, but the hospital bill
                has climbed to RM650,000—an amount they can’t afford. Watching
                their son fight for his life while facing this financial burden
                is heartbreaking.
                <br />
                <br />
                Bentley deserves a chance to grow up, laugh, and live a full
                life. Your kindness can give him that chance. Please donate and
                help this family through their darkest hour. Every contribution
                counts.
              </p>
<br />
              <p className="text-lg">
                The Impact of Your Support
                <br />
                <br />
                Your generous contributions will directly help with:
                <br />
                ✅ Critical Surgeries & Emergency Care
                <br />
                ✅ Hospital Expenses & Essential Medications
                <br />
                ✅ Physiotherapy & Long-Term Recovery
                <br />
                <br />
                Every donation brings hope and healing—support today! 💙✨
              </p>
            </article>

            {/* Document */}

            <div className="w-full h-auto p-10 shadow-lg">
              <h1 className="text-2xl text-black">Document</h1>
              <hr className="w-full mb-5" />

              <img
                src="https://plus.unsplash.com/premium_vector-1714148691911-5e79c7aa7454?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>

            {/* Updates */}

            <div className="w-full mt-5 space-y-6">
              <h1 className="text-3xl">Updates</h1>
              <p className=" text-lg">
                Feel free to reach out to the campaigner for the latest update
                on this fundraiser.
              </p>
              <h3 className="text-2xl text-red-500">
                <span>#1 | </span> 27/02/2025
              </h3>
            </div>

            {/* Updates Images */}

            <div className="w-full flex items-center justify-between  h-[40vh]">
              <div className="w-[45%] h-full ">
                <img
                  className="w-[100%] h-[100%] object-cover object-center rounded-xl shadow-lg "
                  src="https://images.unsplash.com/photo-1588410670460-cdab54625253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="w-[45%] h-full">
                <img
                  className="w-[100%] h-[100%] object-cover object-center rounded-xl shadow-lg"
                  src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
            </div>

            {/* Update Details */}

            <p className="text-xl py-5">
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
              We are truly grateful for your generosity—it continues to bring
              positive change to so many lives. Thank you for standing with us
              in this mission
              <br /> <br />
              Warm Regards,Annapurna Seva & Prerna Foundation
            </p>

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
            <button className="border-3 py-4 w-[40%] m-auto  rounded-xl border-red-300 text-2xl text-red-300">View All Supporters</button>

            </div>
          </div>

          {/* Right Section */}
          <div className="w-[40%]  p-10 ">
            <div className="w-full flex items-center justify-between text-lg">
              <h1
                className="font-bold
            "
              >
                Donate
              </h1>
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
                      Rs.50,000 of{" "}
                      <span className="font-semibold">Rs. 500,000</span>
                    </h2>
                  </div>
                </div>
                {/* <div>
              <a className="px-5 py-3 bg-gray-200 rounded-4xl" href="#">
              1000 Donors
              </a>
              </div> */}
                <button className="text-white bg-red-500 px-6 py-4 rounded-full -mt-[25v] w-1/2 text-center m-auto shadow-2xl">
                  {" "}
                  Donate Now
                </button>
              </div>
            </div>
            <div className="-mt-[8vh]">
              <h1 className="text-zinc-300 text-lg">Give Through:</h1>
              <div>
                <h1 className="font-semibold text-xl">UPI</h1>
                <div className="w-full flex items-center justify-between  h-[15px] mb-10 mt-10">
                  <div> 
                  <img width="48" height="48" src="https://img.icons8.com/material-rounded/48/phone-pe.png" alt="phone-pe"/>
                   <h1>PhonePe</h1>
                    </div>
                  <div className="">
                  <img width="48" height="48" src="https://img.icons8.com/color/48/google-pay.png" alt="google-pay"/>
<h1>G Pay</h1>
                  </div>
                  
                  <div>
                  <img width="48" height="48" src="https://img.icons8.com/color/96/bhim.png" alt="bhim"/>
                    Bhim UPI
                    </div>
                  <div>
                  <img width="64" height="64" src="https://img.icons8.com/puffy-filled/64/more--v3.png" alt="more--v3"/>
                    Others
                    </div>
                </div>
              </div>
            </div>
            <div>
            <h1 className="capitalize mb-5 font-semibold text-xl">Other Options</h1>

              <div>
                <div className="w-full text-lg flex items-center justify-between h-[15px]">
                  <div>
                  <img width="48" height="96" src="https://img.icons8.com/color/96/paytm.png" alt="paytm"/>
                    Paytm
                    </div>
                  <div>
                  <img width="48" height="94" src="https://img.icons8.com/3d-fluency/94/card-verification-value.png" alt="card-verification-value"/>
                    Cr/Dr Cards</div>
                  <div>
                  <img width="48" height="64" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-online-banking-finance-kiranshastry-lineal-kiranshastry-1.png" alt="external-online-banking-finance-kiranshastry-lineal-kiranshastry-1"/>
                    Net Banking</div>
                  <div>
                  <img width="48" height="96" src="https://img.icons8.com/color/96/gift-card.png" alt="gift-card"/>
                    Gift Cards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[50vh] bg-[#FBFAF8]">
          <h1 className="text-2xl">
            Your easy, powerFul, and trusted home for help
          </h1>
          <div className="w-full h-full flex ">
            <div className="w-[33.4%] h-full  flex flex-1/2 items-center justify-center ">
              <LuMessageCircleHeart className="text-[5vw] font-thin" />
              <h2>
                Easy <br />
                <span>Donate quickly and easily</span>
              </h2>
            </div>
            <div className="w-[33.4%] h-full  flex flex-1/2 items-center justify-center ">
              <LuHeartHandshake className="text-[5vw] font-thin" />
              <h2>
                Powerful <br />
                <span>
                  Send help right to the people and causes you care about{" "}
                </span>
              </h2>
            </div>
            <div className="w-[33.4%] h-full flex flex-1/2 items-center justify-center ">
              <MdOutlineSecurity className="text-[5vw] font-thin" />
              <h2>
                Trusted <br />
                <span>Your donation is protected with us.</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-10">
          <h1 className="text-4xl">
            Support <span className="text-red-500"> More Causes</span>
          </h1>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default FundraiseDetails;
