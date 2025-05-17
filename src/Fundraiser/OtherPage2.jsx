import React, { useState } from 'react'
import { Link } from 'react-router'

const OtherPage2 = () => {
    const [selectedOption, setSelectedOption] = useState('myself')
    const renderForm = () => {
        switch (selectedOption) {
          case "myself":
            return (
              <div className="grid gap-4">
                <div>
                  <label className="block mb-2">Beneficiary Name</label>
                  <input
                    type="text"
                    placeholder="Beneficiary Name"
                    className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block mb-2">Location</label>
                  <div className="flex gap-2">
                    <select className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option value="">Select State</option>
                      <option value="MP">Madhya Pradesh</option>
                      {/* Add more states */}
                    </select>
                    <select className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option value="">Select City</option>
                      <option value="Bhopal">Bhopal</option>
                      {/* Add more cities */}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Phone Number</label>
                  <div className="flex">
                    <span className="px-4 py-2 bg-gray-200 border border-r-0 rounded-l-md text-gray-700">+91</span>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-red-400 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
            );
    
          case "individual":
            return (
              <div className="grid gap-4">
                <div>
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
                      <option value="Spouse">Spouse</option>
                      <option value="Child">Child</option>
                      <option value="Sibling">Sibling</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Location</label>
                  <div className="flex gap-2">
                    <select className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option value="">Select State</option>
                      <option value="MP">Madhya Pradesh</option>
                      {/* Add more states */}
                    </select>
                    <select className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option value="">Select City</option>
                      <option value="Bhopal">Bhopal</option>
                      {/* Add more cities */}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Phone Number</label>
                  <div className="flex">
                    <span className="px-4 py-2 bg-gray-200 border border-r-0 rounded-l-md text-gray-700">+91</span>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-red-400 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
            );
    
          case "ngo":
            return (
              <div className="grid gap-4">
                <div>
                  <label className="block mb-2">Organization Name</label>
                  <input
                    type="text"
                    placeholder="Enter organization name"
                    className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block mb-2">Location</label>
                  <div className="flex gap-2">
                    <select className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option value="">Select State</option>
                      <option value="MP">Madhya Pradesh</option>
                      {/* Add more states */}
                    </select>
                    <select className="w-1/2 px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option value="">Select City</option>
                      <option value="Bhopal">Bhopal</option>
                      {/* Add more cities */}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Contact Number</label>
                  <div className="flex">
                    <span className="px-4 py-2 bg-gray-200 border border-r-0 rounded-l-md text-gray-700">+91</span>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-red-400 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Contact number"
                    />
                  </div>
                </div>
              </div>
            );
    
          default:
            return null;
        }
      };
  return (
    <>
<div className='h-[100px]' />

    <div className="w-[50vw] mx-auto bg-white p-5 shadow border mb-5 rounded-xl">
        <h1 className='text-2xl text-center font-bold mb-5'>Beneficiary details</h1>
        <p>This fundraiser will benefit</p>
        <div className="mb-6">
          <label className="block mb-2">Select Beneficiary Type</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
           
            <option value="myself">My Self</option>
            <option value="individual">Individual (Other than self)</option>
            <option value="ngo">NGO / Society / Other registered non-profit organizations</option>
          </select>
        </div>

           
            {selectedOption && renderForm()}
               {/* Navigation Buttons */}
               <div className="mt-6 text-end space-x-5">
            {/* <Link
              onClick={() => navigate(-1)}
              className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
            >
              Back
            </Link> */}
            <Link
              to={"/elaborate_cause_details_others"}
              className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
            >
              Continue
            </Link>
          </div>
          </div>
          </>
  )
}

//                {/* Navigation Buttons */}
//                <div className="mt-6 text-end space-x-5">
//             <Link
//               onClick={() => navigate(-1)}
//               className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
//             >
//               Back
//             </Link>
//             <Link
//               to={"/otherP2"}
//               className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
//             >
//               Continue
//             </Link>
//           </div>
//           </div>
//           </>
//   )
// }

export default OtherPage2
