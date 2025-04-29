import React from "react";

const About = () => {
  return (
    <div className=" relative w-full h-screen mb-[5vw] overflow-hidden">
      <h2 className="text-5xl mt-10 text-center font-bold text-black">
        Donate for a <span className="text-red-500">Cause</span>!
      </h2>
      <div className="w-20 h-1 bg-red-500 mx-auto my-2 rounded"></div>

      <div className="w-full p-[6vw] h-full ">
        <div className=" w-full h-full relative flex">
          <div className="w-[40%] h-[100%] object-center object-cover overflow-hidden">
            <img
              className="w-full h-[50%] object-center object-cover"
              src=" https://plus.unsplash.com/premium_photo-1666264200754-1a2d5f2f6695?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="w-full h-[50%] object-center object-cover"
              src="https://images.unsplash.com/photo-1743999941326-ef5cc0120e8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D "
              alt=""
            />
          </div>
          <div className="w-[63%]  z-10 leading-[2.5vw] bg-white rounded-2xl drop-shadow-2xl p-10 absolute top-12.5 right-0 h-[80%] ">
            <h1 className="text-4xl ">
              A team of{" "}
              <span className="text-red-600">Soft Hearted People</span>!
            </h1>
            <p className="mt-5 text-md">
              We’ve transformed the crowdfunding industry with our unique
              platform, enabling people worldwide to donate directly toward
              products needed by NGOs. Built on trust, transparency, and
              empathy, we are dedicated to uniting communities and making a
              meaningful, lasting impact. We’ve transformed the crowdfunding
              industry with our unique platform, enabling people worldwide to
              donate directly toward products needed by NGOs. Built on trust,
              transparency, and empathy, we are dedicated to uniting communities
              and making a meaningful, lasting impact.{" "}
            </p>
            <div className="flex items-center justify-evenly">
              <h1 className="text-center text-5xl font-semibold text-red-500">
                50+ <br />
                <span className="text-center text-black text-lg font-normal">
                  team Member
                </span>
              </h1>
              <h1 className="text-center text-5xl font-semibold text-red-500">
                4000 + <br />
                <span className="text-center text-black text-lg font-normal">
                  Donations
                </span>
              </h1>
              <h1 className="text-center text-5xl font-semibold text-red-500">
                Rs 50 L + <br />
                <span className="text-center text-black text-lg font-normal">
                  Raised
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <img className="absolute opacity-25 -bottom-10 -right-36 w-[35vw]" src="/src/assets/images/Frame Elements.png" alt="" />
    </div>
  );
};

export default About;
