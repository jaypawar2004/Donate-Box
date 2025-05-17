import React, { useState } from 'react'
import { Link } from 'react-router';



const Ngo = () => {
    const [formData, setFormData] = useState({
        cause: "medical",
        subCause: "",
        amount: "",
        campaignName: "",
        email: "",
        phone: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
  return (
    <>
    <div className='h-[100px]'></div>
    <div className='w-[50%] h-[100%] mx-auto bg-white p-5 rounded-xl shadow-2xl mb-5'>

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
            <div className="mt-6 text-end space-x-5">
            <Link
              onClick={() => navigate(-1)}
              className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
            >
              Back
            </Link>
            <Link
              to={"/"}
              className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
            >
              Continue
            </Link>
          </div>
    </div>
    </>
  )
}

export default Ngo
