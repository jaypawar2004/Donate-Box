import "../Donate/DonateDetails.css";
import React, { useState, useRef } from "react"; // Added useRef for scrolling
import { Link, useNavigate } from "react-router-dom";

const BeneficiaryDetails = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("my self"); // Initially null, no form shown
  const [gender, setGender] = useState("male");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageError, setImageError] = useState(false);

  // Ref to scroll to the form section
  const formRef = useRef(null);

  const placeholderImage =
    "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg";

  const handleImageError = () => {
    setImageError(true);
  };

  const handleSelection = (option) => {
    setSelectedOption(option);
    // Scroll to the form section
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setImageError(false);
    }
  };

  const renderFields = () => {
    switch (selectedOption) {
      case "my self":
        return (
          <div className="">
            <div className="">
              <label className="block mb-2">Beneficiary Name</label>
              <input
                type="text"
                placeholder="Beneficiary Name"
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Location</label>
              <div className="flex gap-2">
                <select
                  className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="State"
                >
                  <option value="">Select State</option>
                  <option value="State1">Madhaya Pradesh</option>
                  <option value="State2">State2</option>
                  <option value="State3">State3</option>
                  {/* Add more states as needed */}
                </select>
                <select
                  className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="City"
                >
                  <option value="">Select City</option>
                  {/* Cities will be populated based on selected state */}
                  <option value="Bhopal">Bhopal</option>
                </select>
              </div>
            </div>
            <div className='mt-4'>
                <label className="block mb-1 text-sm text-gray-700">Phone Number</label>
                <div className="flex">
                  <span className="px-4 py-2 bg-gray-200 border border-r-0 rounded-l-md text-gray-700">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    // value={formData.phone}
                    // onChange={handleChange}
                    className="w-full px-4 py-2 border border-red-400 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Beneficiary Phone number"
                  />
                </div>
              </div>
            <div className="mt-4">
              <label className="block mb-2">Address</label>
              <input
                type="text"
                placeholder="Full Address beneficiary"
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Age</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Age"
                  className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="years">years</option>
                  <option value="months">months</option>
                </select>
              </div>
            </div>
          </div>
        );
      case "Others":
        return (
          <div className="">
            <div className="">
              <label className="block mb-2">Beneficiary Name & Relation</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Beneficiary's Name"
                  className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select Relation</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Grandfater">Grandfater</option>
                  <option value="Grandmother">Grandmother</option>
                  <option value="Hasbund">Hasbund</option>
                  <option value="Wife">Wife</option>
                  <option value="Son">Son</option>
                  <option value="Doughter">Doughter</option>
                  <option value="Grand son">Grand son</option>
                  <option value="Grand doughter">Grand doughter</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Friend">Friend</option>
                  <option value="Family">Family</option>
                  <option value="Cousins">Cousins</option>
                  <option value="Uncle">Uncle</option>
                  <option value="Aunt">Aunt</option>
                  <option value="other">Other</option>
                  <option value="other">Other</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2">Location</label>
              <div className="flex gap-2">
                <select
                  className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="State"
                >
                  <option value="">Select State</option>
                  <option value="State1">Madhaya Pradesh</option>
                  <option value="State2">State2</option>
                  <option value="State3">State3</option>
                  {/* Add more states as needed */}
                </select>
                <select
                  className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="City"
                >
                  <option value="">Select City</option>
                  {/* Cities will be populated based on selected state */}
                  <option value="Bhopal">Bhopal</option>
                </select>
              </div>
            </div>
            <div className='mt-4'>
                <label className="block mb-1 text-sm text-gray-700">Phone Number</label>
                <div className="flex">
                  <span className="px-4 py-2 bg-gray-200 border border-r-0 rounded-l-md text-gray-700">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    // value={formData.phone}
                    // onChange={handleChange}
                    className="w-full px-4 py-2 border border-red-400 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Beneficiary Phone number"
                  />
                </div>
              </div>
            <div className="mt-4">
              <label className="block mb-2">Address</label>
              <input
                type="text"
                placeholder="Full Address of beneficiary"
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Age</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Age"
                  className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="years">years</option>
                  <option value="months">months</option>
                </select>
              </div>
            </div>
          </div>
        );
      case "Registered NGO":
        return (
          <div className="mt-6 border-t pt-6">
            {/* Images */}
            {/* <div className="flex flex-col space-y-5 items-center justify-center">
              <img
                src={imageUrl && !imageError ? imageUrl : placeholderImage}
                alt="User Photo"
                className="w-32 h-32 rounded-full object-cover"
                onError={handleImageError}
              />
              <p>Display photo</p>
              <label>
                <input type="file" hidden onChange={handleImageUpload} />
                <div className="flex w-28 h-9 px-2 flex-col bg-[#E7000B] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                  Choose File
                </div>
              </label>
            </div> */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="Registered NGO"
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mt-6">
              <label className="block mb-2">Beneficiary Name</label>
              <input
                type="text"
                placeholder="Beneficiary Name"
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            
            <div className="mt-4">
              <label className="block mb-2">Location</label>
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className='mt-4'>
                <label className="block mb-1 text-sm text-gray-700">Phone Number</label>
                <div className="flex">
                  <span className="px-4 py-2 bg-gray-200 border border-r-0 rounded-l-md text-gray-700">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    // value={formData.phone}
                    // onChange={handleChange}
                    className="w-full px-4 py-2 border border-red-400 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Beneficiary Phone number"
                  />
                </div>
              </div>
            <div className="mt-4">
              <label className="block mb-2">Age</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Age"
                  className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="years">years</option>
                  <option value="months">months</option>
                </select>
              </div>
            </div>
          </div>
        );
      default:
        return null; // No form shown initially
    }
  };

  return (
    <>
      <div className="w-full h-[80px] px-4 sm:px-10 flex items-center gap-x-4 sm:gap-x-7 shadow-2xl border-b shadow-zinc-500 bg-white">
        <Link to={'/'}>
        <img
          className="w-[50px] sm:w-[70px]"
          src="/images/logo.png"
          alt="Logo"
          />
          </Link>
        <h1 className="text-xl sm:text-2xl font-bold">Setup fundraiser</h1>
      </div>

      <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-white border rounded-xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
            Beneficiary details
          </h2>

          <div className="mb-6 text-center">
            <span className="text-gray-700 font-medium">
              This fundraiser will benefit
            </span>
          </div>

          <div className="space-y-4">
            {/* Three buttons: My Self, Other, NGO */}
            <div className="flex items-center justify-center lg:flex-row gap-4">
              <select 
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={selectedOption}
                onChange={(e) => handleSelection(e.target.value)}
              >
                <option value="">Select Beneficiary</option>
                <option value="my self">My Self</option>
                <option value="Others">Other then self</option>
              </select>
              {/* <button
                className={`lg:py-3 lg:px-10 py-3 px-5 rounded-md border transition text-sm sm:text-base font-medium ${
                  selectedOption === "Registered NGO"
                    ? "bg-[#E7000B] text-white"
                    : "border-red-200 hover:border-red-500"
                }`}
                onClick={() => handleSelection("Registered NGO")}
              >
                 NGO
              </button> */}
            </div>

            {/* Form Section */}
            <div ref={formRef}>{selectedOption && renderFields()}</div>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-x-3 sm:gap-x-5 mt-6">
              <Link
                onClick={() => navigate(-1)}
                className="bg-[#E7000B] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-red-600 transition"
              >
                Back
              </Link>
              <Link
                to={"/hospital"}
                className="bg-[#E7000B] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-red-600 transition"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeneficiaryDetails;
