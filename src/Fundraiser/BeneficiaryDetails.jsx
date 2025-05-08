

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Updated import for React Router v6

const BeneficiaryDetails = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Registered NGO");
  const [gender, setGender] = useState("male");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [imageUrl, setImageUrl] = useState(null); // Initially null, ya koi invalid URL daal sakte ho
  const [imageError, setImageError] = useState(false);

  const placeholderImage =
    "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"; // Default placeholder image URL

  const handleImageError = () => {
    setImageError(true);
  };
  const handleSelection = (option) => {
    setSelectedOption(option);
    setIsModalOpen(true); // Open modal when an option is selected
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const renderFields = () => {
    switch (selectedOption) {
      case "my self":
        return (
          <div className="mt-6 border-t pt-6">
            <div class="flex flex-col space-y-5 items-center justify-center">
              {/* <img className="rounded-full w-[120px] h-[120px] object-cover object-center" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              <img
                src={imageUrl && !imageError ? imageUrl : placeholderImage}
                alt="User Photo"
                className="w-32 h-32 rounded-full object-cover"
                onError={handleImageError}
              />
              <p>Display photo</p>
              <label>
                <input type="file" hidden />
                <div class="flex w-28 h-9 px-2 flex-col bg-[#E7000B] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                  Choose File
                </div>
              </label>
            </div>
            <div className="mt-6">
              <label className="block mb-2">I'm</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Age</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Age"
                  className="w-1/2 border-b p-1 focus:outline-none"
                />
                <select className="w-1/2 border-b p-1 focus:outline-none">
                  <option value="years">years</option>
                  <option value="months">months</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2">Gender</label>
              <div className="flex gap-2">
                {["male", "female", "others"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    className={`flex-1 py-1 rounded ${
                      gender === g
                        ? "bg-[#E7000B] text-white"
                        : "border text-gray-700"
                    }`}
                  >
                    {gender === g ? "✓ " : ""}
                    {g.charAt(0).toUpperCase() + g.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2">I'm residing in</label>
              <input
                type="text"
                placeholder="Ex: Bengaluru"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
          </div>
        );
      case "My family":
        return (
          <div className="mt-6 border-t pt-6">
            <div class="flex flex-col space-y-5 items-center justify-center">
              {/* <img className="rounded-full w-[120px] h-[120px] object-cover object-center" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              <img
                src={imageUrl && !imageError ? imageUrl : placeholderImage}
                alt="User Photo"
                className="w-32 h-32 rounded-full object-cover"
                onError={handleImageError}
              />
              <p>Display photo</p>
              <label>
                <input type="file" hidden />
                <div class="flex w-28 h-9 px-2 flex-col bg-[#E7000B] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                  Choose File
                </div>
              </label>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Relative's Name"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-6">
              <label className="block mb-2">I'm</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Age</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Age"
                  className="w-1/2 border-b p-1 focus:outline-none"
                />
                <select className="w-1/2 border-b p-1 focus:outline-none">
                  <option value="years">years</option>
                  <option value="months">months</option>
                </select>
              </div>
              <div className="flex items-center h-full gap-2 mt-4">
                <p>is my</p>
                <select className="focus:outline-none border-b p-3">
                  <optgroup label="PARENT">
                    <option value="father">father</option>
                    <option value="mother">mother</option>
                  </optgroup>
                  <optgroup label="SPOUSE">
                    <option value="husband">husband</option>
                    <option value="wife">wife</option>
                  </optgroup>
                  <optgroup label="CHILD">
                    <option value="son">son</option>
                    <option value="daughter">daughter</option>
                  </optgroup>
                  <optgroup label="SIBLING">
                    <option value="brother">brother</option>
                    <option value="sister">sister</option>
                    <option value="cousin">cousin</option>
                  </optgroup>
                  <optgroup label="OTHERS">
                    <option value="uncle">Uncle</option>
                    <option value="grandfather">grandfather</option>
                    <option value="grandmother">grandmother</option>
                    <option value="granddaughter">granddaughter</option>
                    <option value="grandson">grandson</option>
                    <option value="nephew">nephew</option>
                    <option value="niece">niece</option>
                    <option value="other">Other</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2">I'm residing in</label>
              <input
                type="text"
                placeholder="Ex: Bengaluru"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Beneficiary's mobile no."
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
          </div>
        );
      case "My friends":
        return (
          <div className="mt-6 border-t pt-6">
            <div class="flex flex-col space-y-5 items-center justify-center">
              {/* <img className="rounded-full w-[120px] h-[120px] object-cover object-center" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              <img
                src={imageUrl && !imageError ? imageUrl : placeholderImage}
                alt="User Photo"
                className="w-32 h-32 rounded-full object-cover"
                onError={handleImageError}
              />
              <p>Display photo</p>
              <label>
                <input type="file" hidden />
                <div class="flex w-28 h-9 px-2 flex-col bg-[#E7000B] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                  Choose File
                </div>
              </label>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Write friend's full name"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-6">
              <label className="block mb-2">I'm</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Age</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Age"
                  className="w-1/2 border-b p-1 focus:outline-none"
                />
                <select className="w-1/2 border-b p-1 focus:outline-none">
                  <option value="years">years</option>
                  <option value="months">months</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2">Gender</label>
              <div className="flex gap-2">
                {["male", "female", "others"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    className={`flex-1 py-1 rounded ${
                      gender === g
                        ? "bg-[#E7000B] text-white"
                        : "border text-gray-700"
                    }`}
                  >
                    {gender === g ? "✓ " : ""}
                    {g.charAt(0).toUpperCase() + g.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2">I'm residing in</label>
              <input
                type="text"
                placeholder="Ex: Bengaluru"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Beneficiary's mobile no."
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
          </div>
        );
      case "My family Group":
        return (
          <div className="mt-6 border-t pt-6">
          <div class="flex flex-col space-y-5 items-center justify-center">
            {/* <img className="rounded-full w-[120px] h-[120px] object-cover object-center" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            <img
              src={imageUrl && !imageError ? imageUrl : placeholderImage}
              alt="User Photo"
              className="w-32 h-32 rounded-full object-cover"
              onError={handleImageError}
            />
            <p>Display photo</p>
            <label>
              <input type="file" hidden />
              <div class="flex w-28 h-9 px-2 flex-col bg-[#E7000B] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                Choose File
              </div>
            </label>
          </div>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Group / family name"
              className="w-full border-b p-1 focus:outline-none"
            />
          </div>
          <div className="mt-6">
              <label className="block mb-2">comprises of 
              members</label>
              <input
                type="text"
                placeholder="Ex: 12"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
          {/* <div className="mt-4">
            <label className="block mb-2">Age</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Age"
                className="w-1/2 border-b p-1 focus:outline-none"
              />
              <select className="w-1/2 border-b p-1 focus:outline-none">
                <option value="years">years</option>
                <option value="months">months</option>
              </select>
            </div>
          </div> */}
          <div className="mt-4">
            <label className="block mb-2">is Based out of </label>
            <input
              type="text"
              placeholder="Ex: Bengaluru"
              className="w-full border-b p-1 focus:outline-none"
            />
          </div>
          
          <div className="w-full p-4 bg-zinc-100 mt-5">
            <h4 className="text-center text-lg">Contact details</h4>
            <p className="text-center ">Representative could be any member of the group/family</p>

            <div className="mt-4 ">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b p-1 focus:outline-none"
            />
          </div>
            <div className="mt-4">
            <label className="block mb-2">Phone Number</label>
            <input
              type="text"
              placeholder="Mobile number"
              className="w-full border-b p-1 focus:outline-none"
            />
          </div>
          </div>
         
        </div>
        );
      case "My friends Group":
        return (
          <div className="mt-6 border-t pt-6">
            <div class="flex flex-col space-y-5 items-center justify-center">
              {/* <img className="rounded-full w-[120px] h-[120px] object-cover object-center" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              <img
                src={imageUrl && !imageError ? imageUrl : placeholderImage}
                alt="User Photo"
                className="w-32 h-32 rounded-full object-cover"
                onError={handleImageError}
              />
              <p>Display photo</p>
              <label>
                <input type="file" hidden />
                <div class="flex w-28 h-9 px-2 flex-col bg-[#E7000B] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                  Choose File
                </div>
              </label>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Group Name"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-6">
              <label className="block mb-2">comprises of 
              members</label>
              <input
                type="text"
                placeholder="Ex: 12"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            {/* <div className="mt-4">
              <label className="block mb-2">Age</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Age"
                  className="w-1/2 border-b p-1 focus:outline-none"
                />
                <select className="w-1/2 border-b p-1 focus:outline-none">
                  <option value="years">years</option>
                  <option value="months">months</option>
                </select>
              </div>
            </div> */}
            <div className="mt-4">
              <label className="block mb-2">Based out of </label>
              <input
                type="text"
                placeholder="Ex: Bengaluru"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            
            <div className="w-full p-4 bg-zinc-100 mt-5">
              <h4 className="text-center text-lg">Contact details</h4>
              <p className="text-center ">Representative could be any member of the group/family</p>

              <div className="mt-4 ">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
              <div className="mt-4">
              <label className="block mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Mobile number"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            </div>
           
          </div>
        );
      case "Others Group":
        return (
          <div className="mt-6 border-t pt-6">
            <div class="flex flex-col space-y-5 items-center justify-center">
              {/* <img className="rounded-full w-[120px] h-[120px] object-cover object-center" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              <img
                src={imageUrl && !imageError ? imageUrl : placeholderImage}
                alt="User Photo"
                className="w-32 h-32 rounded-full object-cover"
                onError={handleImageError}
              />
              <p>Display photo</p>
              <label>
                <input type="file" hidden />
                <div class="flex w-28 h-9 px-2 flex-col bg-[#E7000B] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                  Choose File
                </div>
              </label>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Funds raised will help"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            {/* <div className="mt-4">
              <label className="block mb-2">Age</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Age"
                  className="w-1/2 border-b p-1 focus:outline-none"
                />
                <select className="w-1/2 border-b p-1 focus:outline-none">
                  <option value="years">years</option>
                  <option value="months">months</option>
                </select>
              </div>
            </div> */}
            <div className="mt-4">
              <label className="block mb-2">Based out of </label>
              <input
                type="text"
                placeholder="Ex: Bengaluru"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Beneficiary's mobile no."
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            
          </div>
        );
      case "Others":
        return (
          <div className="mt-6 border-t pt-6">
            <div class="flex flex-col space-y-5 items-center justify-center">
              {/* <img className="rounded-full w-[120px] h-[120px] object-cover object-center" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              <img
                src={imageUrl && !imageError ? imageUrl : placeholderImage}
                alt="User Photo"
                className="w-32 h-32 rounded-full object-cover"
                onError={handleImageError}
              />
              <p>Display photo</p>
              <label>
                <input type="file" hidden />
                <div class="flex w-28 h-9 px-2 flex-col bg-[#E7000B] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                  Choose File
                </div>
              </label>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Funds raised will help"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Age</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Age"
                  className="w-1/2 border-b p-1 focus:outline-none"
                />
                <select className="w-1/2 border-b p-1 focus:outline-none">
                  <option value="years">years</option>
                  <option value="months">months</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2">I'm residing in</label>
              <input
                type="text"
                placeholder="Ex: Bengaluru"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Beneficiary's mobile no."
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
          </div>
        );
      case "Registered NGO":
        return (
          <div className="mt-6 border-t pt-6">
            <div class="flex flex-col space-y-5 items-center justify-center">
              {/* <img className="rounded-full w-[120px] h-[120px] object-cover object-center" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              <img
                src={imageUrl && !imageError ? imageUrl : placeholderImage}
                alt="User Photo"
                className="w-32 h-32 rounded-full object-cover"
                onError={handleImageError}
              />
              <p>Display photo</p>
              <label>
                <input type="file" hidden />
                <div class="flex w-28 h-9 px-2 flex-col bg-[#E7000B] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                  Choose File
                </div>
              </label>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Registered NGO"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-6">
              <label className="block mb-2">I'm</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Age</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Age"
                  className="w-1/2 border-b p-1 focus:outline-none"
                />
                <select className="w-1/2 border-b p-1 focus:outline-none">
                  <option value="years">years</option>
                  <option value="months">months</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2">Gender</label>
              <div className="flex gap-2">
                {["male", "female", "others"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    className={`flex-1 py-1 rounded ${
                      gender === g
                        ? "bg-[#E7000B] text-white"
                        : "border text-gray-700"
                    }`}
                  >
                    {gender === g ? "✓ " : ""}
                    {g.charAt(0).toUpperCase() + g.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2">I'm residing in</label>
              <input
                type="text"
                placeholder="Ex: Bengaluru"
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Beneficiary's mobile no."
                className="w-full border-b p-1 focus:outline-none"
              />
            </div>
          </div>
        );
      default:
        return <div className="mt-6 border-t pt-6 text-gray-500"></div>;
    }
  };

  return (
    <>
      <div className="w-full h-[80px] px-4 sm:px-10 flex items-center gap-x-4 sm:gap-x-7 shadow-2xl border-b shadow-zinc-500 bg-white">
        <img
          className="w-[50px] sm:w-[70px]"
          src="/images/logo.png"
          alt="Logo"
        />
        <h1 className="text-xl sm:text-2xl font-bold">Setup fundraiser</h1>
      </div>

      <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-white border rounded-xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
            Beneficiary details
          </h2>

          <div className="mb-6 text-center">
            <span className="text-gray-700 font-medium">
              This fundraiser will benefit{" "}
            </span>
            <select
              value={selectedOption}
              onChange={(e) => handleSelection(e.target.value)}
              className="text-[#E7000B] font-semibold focus:outline-none"
            >
              <option value="my self">myself</option>
              <option value="My family">my relative</option>
              <option value="My friends">my friends</option>
              <option value="Others">others</option>
              <option value="Registered NGO">registered NGO</option>
            </select>
          </div>

          <div className="space-y-4">
            <button
              className="flex-1 border border-green-200 rounded-md p-2 cursor-pointer flex items-center justify-center hover:border-green-500 w-full"
              onClick={() => handleSelection("my self")}
            >
              👤 My Self
            </button>

            <div>
              <p className="font-medium mb-2">
                My family,{" "}
                <span className="text-gray-500">next of kin & relatives</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="flex-1 border border-green-200 rounded-md p-2 cursor-pointer flex items-center justify-center hover:border-green-500 w-full"
                  onClick={() => handleSelection("My family")}
                >
                  👤 Individual
                </button>
                <button
                  className="flex-1 border border-gray-300 rounded-md cursor-pointer p-2 flex items-center justify-center hover:border-green-500 w-full"
                  onClick={() => handleSelection("My family Group")}
                >
                  👥 Group
                </button>
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">
                My friends,{" "}
                <span className="text-gray-500">
                  classmates, colleagues & people I know
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="flex-1 border border-green-200 rounded-md p-2 cursor-pointer flex items-center justify-center hover:border-green-500 w-full"
                  onClick={() => handleSelection("My friends")}
                >
                  👤 Individual
                </button>
                <button
                  className="flex-1 border border-gray-300 rounded-md p-2 cursor-pointer flex items-center justify-center hover:border-green-500 w-full"
                  onClick={() => handleSelection("My friends Group")}
                >
                  👥 Group
                </button>
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">
                Others{" "}
                <span className="text-gray-500">
                  (everyone else: people, animals, businesses, communities etc)
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="flex-1 border border-green-200 rounded-md p-2 cursor-pointer flex items-center justify-center hover:border-green-500 w-full"
                  onClick={() => handleSelection("Others")}
                >
                  👤 Individual
                </button>
                <button
                  className="flex-1 border border-gray-300 rounded-md p-2 cursor-pointer flex items-center justify-center hover:border-green-500 w-full"
                  onClick={() => handleSelection("Others Group")}
                >
                  👥 Group
                </button>
              </div>
            </div>

            <div>
              <button
                className="w-full bg-[#E7000B] text-white p-4 rounded-md hover:bg-red-600 transition cursor-pointer"
                onClick={() => handleSelection("Registered NGO")}
              >
                <strong className="block">🏢 Registered NGO</strong>
                <span className="text-sm block mt-1">
                  A registered not-for-profit that has a valid PAN card issued
                  in its name
                </span>
              </button>
            </div>

            <div className="flex justify-end gap-x-3 sm:gap-x-5 mt-6">
              <Link
                onClick={() => navigate(-1)}
                className="bg-[#E7000B] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-red-600 transition"
              >
                Back
              </Link>
              <Link
                to={"/fundraiser"}
                className="bg-[#E7000B] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-red-600 transition"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-opacity-40 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-xl p-4 sm:p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Beneficiary Details for {selectedOption}
            </h3>
            {renderFields()}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-black px-4 py-2 rounded-full hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="bg-[#E7000B] text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BeneficiaryDetails;
