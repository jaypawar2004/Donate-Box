import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const BasicDetails = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cause: "medical",
        amount: "",
        name: "",
        email: "",
        phone: "",
      });
    
      const causes = ["medical", "education", "memorial", "others"];
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  return (
    <>
<div className='w-full h-[80px] px-10 flex items-center gap-x-7 shadow-xl/20 shadow-zinc-500 bg-white border-b '>
        <img className='w-[70px]' src="/images/logo.png" alt="" />
        <h1 className='text-2xl font-bold'>Setup fundraiser</h1>
        </div> 
<div className="min-h-screen bg-white py-10 px-4 sm:px-8 md:px-20">

      <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-md border">
      <h2 className="text-2xl font-semibold text-center mb-8">Cause Details</h2>
        <p className="text-center mb-4 text-gray-700">I am raising funds for a/an <span className="font-semibold text-black">{formData.cause}</span> cause</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {causes.map((item) => (
            <button
              key={item}
              className={`py-3 px-2 rounded-md border transition text-sm sm:text-base font-medium ${
                formData.cause === item ? "bg-[#E7000B] text-white" : "bg-white text-gray-700 border"
              }`}
              onClick={() => setFormData({ ...formData, cause: item })}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid gap-4">
  {formData.cause === "medical" && (
    <>
     <div>

<label className="block mb-1 text-sm text-gray-700">Estimated cost (INR)
   {/* <select className="border-none" name="" id="">
   <option className="border-none"  value="">INR</option>
   <option className="border-none" value="">USD</option>
   </select> */}
</label>
<input
  type="number"
  name="amount"
  value={formData.amount}
  onChange={handleChange}
  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  placeholder="Enter amount you want to raise"
/>
<p className="text-red-500 text-xs mt-1">Enter amount you want to raise</p>
</div>
      <div>
        <label className="block mb-1 text-sm text-gray-700">Hospital Name</label>
        <input
          type="text"
          name="Name"
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Hospital Name"
        />
      </div>
     
  <div>
    <label className="block mb-1 text-sm text-gray-700">Location</label>
    <input
      type="text"
      name="Location"
      value={formData.location}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      placeholder="Location (City) of the hospital"
    />
  </div>
  <div>
    <label className="block mb-1 text-sm text-gray-700">Ailment</label>
    <input
      type="text"
      name="ailment"
      value={formData.aliment}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      placeholder="Ailment"
    />
  </div>
  
    </>
  )}

  {formData.cause === "education" && (
    <>
    <div>

<label className="block mb-1 text-sm text-gray-700">Estimated cost (INR)
   {/* <select className="border-none" name="" id="">
   <option className="border-none"  value="">INR</option>
   <option className="border-none" value="">USD</option>
   </select> */}
</label>
<input
  type="number"
  name="amount"
  value={formData.amount}
  onChange={handleChange}
  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  placeholder="Enter amount you want to raise"
/>
<p className="text-red-500 text-xs mt-1">Enter amount you want to raise</p>
</div>
    </>
  )}

  {formData.cause === "memorial" && (
    <>
     <div>

<label className="block mb-1 text-sm text-gray-700">Estimated cost (INR)
   {/* <select className="border-none" name="" id="">
   <option className="border-none"  value="">INR</option>
   <option className="border-none" value="">USD</option>
   </select> */}
</label>
<input
  type="number"
  name="amount"
  value={formData.amount}
  onChange={handleChange}
  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  placeholder="Enter amount you want to raise"
/>
<p className="text-red-500 text-xs mt-1">Enter amount you want to raise</p>
</div>
    </>
  )}

  {formData.cause === "others" && (
    <>
     <div>

<label className="block mb-1 text-sm text-gray-700">Estimated cost (INR)
   {/* <select className="border-none" name="" id="">
   <option className="border-none"  value="">INR</option>
   <option className="border-none" value="">USD</option>
   </select> */}
</label>
<input
  type="number"
  name="amount"
  value={formData.amount}
  onChange={handleChange}
  className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  placeholder="Enter amount you want to raise"
/>
<p className="text-red-500 text-xs mt-1">Enter amount you want to raise</p>
</div>
    </>
  )}

  {/* Common fields (for all causes) */}
 
  
</div>

        {/* <div className="grid gap-4">
          <div>

            <label className="block mb-1 text-sm text-gray-700">Estimated cost 
               <select className="border-none" name="" id="">
               <option className="border-none"  value="">INR</option>
               <option className="border-none" value="">USD</option>
               </select>
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter amount you want to raise"
            />
            <p className="text-red-500 text-xs mt-1">Enter amount you want to raise</p>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter name"
            />
            <p className="text-red-500 text-xs mt-1">Enter name</p>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Email Address"
            />
            <p className="text-red-500 text-xs mt-1">Enter Email Address</p>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Phone number</label>
            <div className="flex">
              <span className="px-4 py-2 bg-gray-200 border border-r-0 rounded-l-md text-gray-700">+91</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-red-400 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Phone number"
              />
            </div>
          </div>
        </div> */}

        <div className="mt-6 text-end space-x-5">
            
          <Link onClick={() => navigate(-1)} className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition">
            Back
          </Link>
          <Link to={'/elaborate_cause_details'} className="bg-[#E7000B] text-white px-8 py-3 rounded-full hover:bg-[#E7000B] transition">
            Continue
          </Link>
        </div>
      </div>
    </div>





    
    </>
  )
}

export default BasicDetails