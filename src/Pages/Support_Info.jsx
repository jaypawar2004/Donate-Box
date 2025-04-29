import React from "react";

const Support_Info = () => {
  return (
    <>
      <div className="w-full p-[6vw] flex ">
        <div className="">
          <div className="">
            <h1 className="text-[#E53935] text-6xl font-bold mb-4">
              <span className="text-black">Support</span> Every Month{" "}
            </h1>
            <h4 className="text-xl mt-2 mb-4">A Mission to Save Lives</h4>
            <p className="text-[#666666] text-xl w-[60%] mt-5">
              GHEM or ‘Giving Hope Every Month’ is a monthly donation program
              that ensures patients in India receive timely access to
              life-saving treatment. GHEM or ‘Giving Hope Every Month’ is a
              monthly donation program that ensures patients in India receive
              timely access to life-saving treatment.{" "}
            </p>
            <button className="py-3 px-6 border-2 rounded-lg mt-[3.2vw] border-white bg-[#F11914] text-white flex items-center justify-center ">
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
          </div>
        </div>
        <div className=" w-[40vw]">
          <div className="flex items-center justify-between mb-[5vw]">
            <div className="circal relative w-[7.5vw] bg-[#FDF5F5] h-[14vh] rounded-full flex items-center justify-center ">
              <img
                className="object-center w-[4vw] items-center text-center "
                src="/src/assets/images/BoxLogo.png"
                alt=""
              />
              <span className="absolute bottom-[-25%]">hello</span>
            </div>
            <div className="circal relative w-[7.5vw] bg-[#FDF5F5] h-[14vh] rounded-full flex items-center justify-center ">
              <img
                className="object-center w-[4vw] items-center text-center"
                src="/src/assets/images/BoxLogo2.png"
                alt=""
              />
              <span className="absolute bottom-[-25%]">hello</span>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-[8vw]">
            <div className="circal relative w-[7.5vw] bg-[#FDF5F5] h-[14vh] rounded-full flex items-center justify-center ">
              <img
                className="object-center w-[4vw] items-center text-center"
                src="/src/assets/images/BoxLogo3.png"
                alt=""
              />
              <span className="absolute bottom-[-25%]">hello</span>
            </div>
            <div className="circal relative w-[7.5vw] bg-[#FDF5F5] h-[14vh] rounded-full  flex items-center justify-center">
              <img
                className="object-center w-[4vw] items-center text-center"
                src="/src/assets/images/BoxLogo4.png"
                alt=""
              />
              <span className="absolute bottom-[-25%]">hello</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support_Info;
