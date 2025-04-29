import React from "react";
import AboutComponents from "../components/AboutComponents";
import NavBar from "../components/NavBar";
import OurTeam from "../components/OurTeam";
import Volunteers from "../Pages/Volunteers";
import { HorizontalRule } from "@mui/icons-material";
import HorizontalScroll from "../components/HorizontalScroll";

const About_Us = () => {
  return (
    <div className="w-full h-auto">
      <NavBar />
      <br />
      <AboutComponents />

      <div className="w-full h-full text-center leading-8 p-5">
        <h1 className="text-4xl ">
          A Timely Solution for{" "}
          <span className="text-red-600 ">Today’s Needs</span>{" "}
        </h1>

        <div className="h-1 w-20 mb-10 mt-5 bg-red-600 m-auto"></div>

        <p className="p text-xl">
          We recognized this long before the pandemic. Even then, we were aware
          that millions of Indians faced overwhelming healthcare costs, with
          only a few having insurance to protect them during medical crises. We
          saw how a single critical illness could wipe out a family's life
          savings, often trapping them in debt for years. Shockingly, over 50
          million Indians have already been pushed into poverty due to medical
          expenses.
        </p>
        <br />
        <p className="p text-xl">
          This is why we launched Sanyogita Trust—to offer a compassionate,
          community-driven way to support those facing life-threatening
          illnesses and to empower individuals to extend a helping hand to those
          in need.
        </p>
        <br />
        <p className="p text-xl">
          Today, we understand this reality even more deeply. We know that
          accessible healthcare financing is not a privilege but a necessity,
          that medical emergencies are more frequent than we assume, and that no
          one is immune to financial hardship. That’s why we are evolving beyond
          just a platform—we are building solutions that can help a struggling
          farmer save his newborn just as much as they can support a doctor
          fighting to afford his wife’s cancer treatment.
        </p>
      </div>

      <div className="w-full h-[80vh] flex">
        <div className="w-[90%] h-[80%] text-white bg-red-500 p-30">
          <h1 className="">Health Comes First</h1>
          <div className="h-1 bg-white w-30 rounded-full"> </div>
          <p>
            Sanyogati is dedicated to supporting a wide range of causes, from
            nonprofit initiatives to personal and creative endeavors. However,
            in today's post-pandemic world, access to healthcare funding is not
            just important—it is essential. No one should have to choose between
            financial stability and life-saving treatment. At Sanyogati, we
            believe healthcare financing must be a priority, ensuring that help
            reaches those in need when they need it most.
          </p>
        </div>
        {/* <div className="w-[50%] h-[40 30 50 50] bg-green-800 "></div> */}
        <div
          className="w-full h-full bg-blue-600"
          style={{
            clipPath: "polygon(0 0%, 100% 0%, 100% 80%, 58% 94%, 0 80%)",
          }}
        >
          {/* Tumhara content yahan likhna hai */}
          <div className="text-white text-3xl font-bold">
            <img
              src="https://images.unsplash.com/photo-1744566917617-452209a98498?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center leading-10">
          Our <span className="text-red-500">Focus</span>{" "}
        </h1>
        <div className="w-20 m-auto h-1 rounded-full mt-5 bg-red-600 "></div>
        <h3 className="text-2xl text-center mt-10">
          Healthcare That Saves Lives Now and Builds a Safer Future.
        </h3>
        <p className="text-center text-lg w-1/2 mt-10">
          We are crafting cutting edge technology and financial solutions to
          enable individuals to raise funds for medical emergencies, critical
          illnesses, and a wide range of social and personal causes. Our
          platform has empowered lakes of people to create impact through timely
          contributions, transformation fundraisers, and collective action.
        </p>
      </div>
      <div className="w-full relative mt-10 h-[80vh] flex bg-red-500 ">
        <div className="bg-blue-200 w-[50]"></div>
        <div></div>
        <div className="w-[50%] relative h-[100%] bg-[#9DAEC8]">
          <img
          className="w-full h-[90%] object-cover object-center"
            src="/src/assets/images/AboutImg.png"
            alt=""
          />
        </div>
        <div className="w-[50%] absolute  right-0 bottom-0 h-[100%] bg-[#DCA99D]">
          <img className="w-[100%] absolute h-[90%] object-cover object-center top-[8vh]"
            src="/src/assets/images/AboutImg2.png"
            alt=""
          />
        </div>
      </div>
<OurTeam />
<Volunteers />
    </div>
  );
};

export default About_Us;
