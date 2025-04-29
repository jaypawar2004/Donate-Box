import React, { useState } from "react";

const Cards = () => {
  // Dummy data for cards (match image design)
  const cardData = [
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1744826574464-0fc82fc6903e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neurofibromatosis A Genetic Disorder Causing Tumor Growth",
      daysLeft: "3 Days Left to Go",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Turning Struggles into Strength - Helping Others Like Her",
    },
    {
      id: 2,
      image: "https://plus.unsplash.com/premium_photo-1744826574464-0fc82fc6903e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neurofibromatosis A Genetic Disorder Causing Tumor Growth",
      daysLeft: "3 Days Left to Go",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Turning Struggles into Strength - Helping Others Like Her",
    },
    {
      id: 3,
      image: "https://plus.unsplash.com/premium_photo-1744826574464-0fc82fc6903e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neurofibromatosis A Genetic Disorder Causing Tumor Growth",
      daysLeft: "3 Days Left to Go",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Turning Struggles into Strength - Helping Others Like Her",
    },
    {
      id: 4,
      image: "https://plus.unsplash.com/premium_photo-1744826574464-0fc82fc6903e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neurofibromatosis A Genetic Disorder Causing Tumor Growth",
      daysLeft: "3 Days Left to Go",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Turning Struggles into Strength - Helping Others Like Her",
    },
    {
      id: 5,
      image: "https://plus.unsplash.com/premium_photo-1744826574464-0fc82fc6903e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neurofibromatosis A Genetic Disorder Causing Tumor Growth",
      daysLeft: "3 Days Left to Go",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Turning Struggles into Strength - Helping Others Like Her",
    },
    {
      id: 6,
      image: "https://plus.unsplash.com/premium_photo-1744826574464-0fc82fc6903e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neurofibromatosis A Genetic Disorder Causing Tumor Growth",
      daysLeft: "3 Days Left to Go",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Turning Struggles into Strength - Helping Others Like Her",
    },
    {
      id: 7,
      image: "https://plus.unsplash.com/premium_photo-1744826574464-0fc82fc6903e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neurofibromatosis A Genetic Disorder Causing Tumor Growth",
      daysLeft: "3 Days Left to Go",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Turning Struggles into Strength - Helping Others Like Her",
    },
    {
      id: 8,
      image: "https://plus.unsplash.com/premium_photo-1744826574464-0fc82fc6903e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neurofibromatosis A Genetic Disorder Causing Tumor Growth",
      daysLeft: "3 Days Left to Go",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Turning Struggles into Strength - Helping Others Like Her",
    },
    {
      id: 9,
      image: "https://plus.unsplash.com/premium_photo-1744826574464-0fc82fc6903e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Neurofibromatosis A Genetic Disorder Causing Tumor Growth",
      daysLeft: "3 Days Left to Go",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Turning Struggles into Strength - Helping Others Like Her",
    },
    // Add more cards if needed
  ];

  const [visibleCards, setVisibleCards] = useState(9); // Initially show 9 cards (3x3)

  const showAllCards = () => {
    setVisibleCards(cardData.length); // Show all cards on "View All" click
  };

  return (
    <div className="container mx-auto py-5">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.slice(0, visibleCards).map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md p-4 text-center transform hover:scale-105 transition border border-gray-200"
          >
            <img
              src={card.image}
              alt={card.subtitle}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <p className="text-sm text-gray-500">{card.subtitle}</p>
              <h2 className="text-lg font-semibold text-gray-800 mt-2">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.daysLeft} <span className="text-gray-500">•</span> <span className="text-gray-500">💖 {card.donors}</span></p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "60%" }} // Adjust based on achieved/goal ratio
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {card.achieved} <span className="text-gray-500">Achieved</span> / {card.goal}
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-red-600 transition w-full">
                DONATE NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {cardData.length > visibleCards && (
        <div className="text-center mt-4">
          <button
            onClick={showAllCards}
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;