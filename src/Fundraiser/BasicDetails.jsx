import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Updated from 'react-router'

const BasicDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cause: "medical",
    subCause: "",
    amount: "",
    campaignName: "",
    email: "",
    phone: "",
  });

  const causes = ["medical", "others"];
  const otherSubCauses = [
    "Children",
    "Disability",
    "Old Age",
    "Animal Welfare",
    "Enviroment",
    "Faith",
    "Education",
    "Hunger",
    "Women",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Top Bar */}
      <div className="w-full h-[80px] px-10 flex items-center gap-x-7 shadow-xl/20 shadow-zinc-500 bg-white border-b">
       <Link to={'/'}>
        <img className="w-[70px]" src="/images/logo.png" alt="logo" />
       </Link>
        <h1 className="text-2xl font-bold">Setup fundraiser</h1>
      </div>

      {/* Main Form Container */}
      <div className="min-h-screen bg-white py-10 px-4 sm:px-8 md:px-20">
        <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-md border">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Cause Details
          </h2>
          <p className="text-center mb-4 text-gray-700">
            I am raising funds for a/an{" "}
            <span className="font-semibold text-black">{formData.cause}</span>{" "}
            cause
          </p>

          {/* Cause Buttons */}
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mb-6 lg:ml-[33%]">
            {causes.map((item) => (
              <button
                key={item}
                className={`py-3 px-2 rounded-md border border-red-200 transition text-sm sm:text-base font-medium hover:border-red-400 ${
                  formData.cause === item
                    ? "bg-[#E7000B] text-white"
                    : "bg-white text-gray-700 border"
                }`}
                onClick={() =>
                  setFormData({
                    ...formData,
                    cause: item,
                    subCause: "Children",
                    amount: "",
                    campaignName: "",
                    email: "",
                    phone: "",
                  })
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {formData.cause === "medical" && (
            <div className="grid gap-4">
              <h1 className="text-center font-bold text-2xl">
                Medical Fundraiser Details
              </h1>
              <div>
                    <label className="block mb-1 text-sm text-gray-700">
                      Estimated Cost
                    </label>
                    <input
                      type="number"
                      name="estimatedCost"
                      value={formData.estimatedCost}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter estimated cost"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm text-gray-700">
                      Campaingn Name
                    </label>
                    <input
                      type="text"
                      name="campaignName"
                      value={formData.campaignName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter campaign name"
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

                  <div>
                    <label className="block mb-1 text-sm text-gray-700">
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter email ID"
                    />
                  </div>
                   {/* Navigation Buttons */}
              <div className="mt-6 text-end space-x-5">
            <Link
              onClick={() => navigate(-1)}
              className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
            >
              Back
            </Link>
            <Link
              to={"/beneficiary"}
              className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
            >
              Continue
            </Link>
          </div>
            </div>
          )}

          {/* SubCause Dropdown for 'Others' */}
          {formData.cause === "others" && (
            <div className="grid gap-4">
              <div className="mb-4">
                <label className="block mb-1 text-sm text-gray-700">
                  Select Sub-Cause
                </label>
                <select
                  name="subCause"
                  value={formData.subCause}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select a sub-cause</option>
                  {otherSubCauses.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>

              {formData.subCause && (
                <>
                  <div>
                    <label className="block mb-1 text-sm text-gray-700">
                      Estimated Cost
                    </label>
                    <input
                      type="number"
                      name="estimatedCost"
                      value={formData.estimatedCost}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter estimated cost"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm text-gray-700">
                      Campaingn Name
                    </label>
                    <input
                      type="text"
                      name="campaignName"
                      value={formData.campaignName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter campaign name"
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

                  <div>
                    <label className="block mb-1 text-sm text-gray-700">
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter email ID"
                    />
                  </div>
                </>
              )}
                 {/* Navigation Buttons */}
              <div className="mt-6 text-end space-x-5">
            <Link
              onClick={() => navigate(-1)}
              className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
            >
              Back
            </Link>
            <Link
              to={"/otherP2"}
              className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
            >
              Continue
            </Link>
          </div>
            </div>
          )}

          {/* Form for selected sub-cause */}
          {formData.cause === "NGO" && (
            <div className="grid gap-4">
              <h1 className="text-center font-bold text-2xl">
                Collabrate as NGO / Society / Other non Profit organization{" "}
              </h1>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Name of NGO / Society / Other non Profit organization
                </label>
                <input
                  type="text"
                  name="ngoName"
                  value={formData.ngoName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter NGO / Society / Other non Profit Organization name"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Founder's Name
                </label>
                <input
                  type="text"
                  name="founderName"
                  value={formData.founderName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter founder name"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Name of POC
                </label>
                <input
                  type="text"
                  name="pocName"
                  value={formData.pocName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter POC name"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Designation of POC
                </label>
                <input
                  type="text"
                  name="pocDesignation"
                  value={formData.pocDesignation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter POC designation"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Is your organization registered?
                </label>
                <select
                  name="isRegistered"
                  value={formData.isRegistered}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Team Strength
                </label>
                <input
                  type="number"
                  name="teamStrength"
                  value={formData.teamStrength}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter team strength"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Is your organization registered under 80G?
                </label>
                <select
                  name="isRegistered80G"
                  value={formData.isRegistered80G}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Is your organization registered under 12A?
                </label>
                <select
                  name="isRegistered12A"
                  value={formData.isRegistered80G}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Brief Description about your NGO.
                </label>
                <textarea
                  name="ngoDescription"
                  value={formData.ngoDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter brief description about your NGO"
                  rows="4"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Working Areas of NGO.
                </label>
                <textarea
                  name="ngoAreas"
                  value={formData.ngoAreas}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter areas where your NGO operates"
                  rows="3"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm text-gray-700">
                    State
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select State</option>
                    <option value="delhi">Delhi</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="karnataka">Karnataka</option>
                    {/* Add more states as needed */}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-sm text-gray-700">
                    City
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select City</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    {/* Add more cities as needed */}
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Website Link
                </label>
                <input
                  type="url"
                  name="websiteLink"
                  value={formData.websiteLink}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter website link"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700">
                  Social Media Links
                </label>
                <div className="space-y-2">
                  <input
                    type="url"
                    name="facebookLink"
                    value={formData.facebookLink}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Facebook link"
                  />
                  <input
                    type="url"
                    name="twitterLink"
                    value={formData.twitterLink}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Twitter link"
                  />
                  <input
                    type="url"
                    name="instagramLink"
                    value={formData.instagramLink}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Instagram link"
                  />
                </div>
              </div>
            </div>
          )}

       
         
        </div>
      </div>
    </>
  );
};

export default BasicDetails;
