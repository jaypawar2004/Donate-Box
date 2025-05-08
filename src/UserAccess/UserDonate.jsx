
import { Cancel } from '@mui/icons-material'
import React from 'react'

const UserDonate = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-opacity-10">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Make a secure donation</h2>

        <div className="flex mb-4">
          <select className="border rounded-l px-4 py-2 bg-gray-100">
            <option>₹ INR</option>
          </select>
          <input
            type="number"
            placeholder="Amount"
            className="border rounded-r px-4 py-2 w-full"
          />
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Milaap charges NO fees. We rely on donors like you to cover our expenses.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Include a tip</label>
          <select className="w-full border px-4 py-2 rounded">
            <option>16% (₹400.00)</option>
            <option>10% (₹250.00)</option>
            <option>5% (₹125.00)</option>
            <option>No Tip</option>
          </select>
        </div>

        <div className="flex items-center mb-6">
          <label className="text-sm mr-2">Donate anonymously</label>
          <input type="checkbox" className="toggle toggle-sm" />
        </div>

        <button className="w-full bg-[#c92833] hover:bg-[#ff7f7f] text-white py-3 rounded text-lg">
          Continue to pay ₹2900
        </button>
      </div>
    </div> 
    </>
  )
}

export default UserDonate