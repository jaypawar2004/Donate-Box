import React from "react";
import { Link, useNavigate } from "react-router";

const HospitalDetails = () => {
    const navigate = useNavigate();
  return (
    <>
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
            Hospital Details
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block mb-1 text-sm text-gray-700">
                Fund Goal
              </label>
              <input
                type="number"
                name="Number"
                //   value={campaignName}
                //   onChange={handleChange}
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter In Rupees"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">
                Hospital Name
              </label>
              <input
                type="text"
                name="HospitalName"
                //   value={campaignName}
                //   onChange={handleChange}
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter Hospital name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">
               Hospital Address
              </label>
              <input
                type="text"
                name="Location"
                //   value={campaignName}
                //   onChange={handleChange}
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter Hospital Address"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">
                Disease
              </label>
              <select
                name="Disease"
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                id="diseases"
              >
                <option value="Diabetes">Diabetes</option>
                <option value="Hypertension">Hypertension</option>
                <option value="Asthma">Asthma</option>
                <option value="Cancer">Cancer</option>
                <option value="COVID-19">COVID-19</option>
                <option value="Heart Disease">Heart Disease</option>
                <option value="Arthritis">Arthritis</option>
                <option value="Stroke">Stroke</option>
                <option value="Alzheimer's">Alzheimer's</option>
                <option value="Influenza">Influenza</option>
              </select>
            </div>
           <div>
              <label className="block mb-1 text-sm text-gray-700">
                Is Patient ?
              </label>
              <select
                name="PatientStatus"
                className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="Admitted">Admitted</option>
                <option value="Not Admitted">Not Admitted</option>
                <option value="Under Home Treatment">Under Home Treatment</option>
                <option value="No Need to Hospitalize">No Need to Hospitalize</option>
              </select>
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
              to={"/elaborate_cause_details"}
              className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalDetails;
