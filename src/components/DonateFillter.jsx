// import React, { useRef, useState } from 'react'
// const causes = [
//     { label: "ALL", icon: "🩺" },
//     { label: "ANIMALS", icon: "🐾" },
//     { label: "EDUCATION", icon: "🎓" },
//     { label: "CHILDREN", icon: "😃" },
//     { label: "HUNGER", icon: "🍲" },
//     { label: "HANDICAP", icon: "♿" },
//   ];
// const DonateFillter = () => {
//     const containerRef = useRef(null);
//       const [activeIndex, setActiveIndex] = useState(null);
    
//   return (
//     <div className="w-full px-5 py-10 bg-[#fef7f4] text-center">
//     <h2 className="text-3xl font-bold text-black">
//       Donate for a <span className="text-red-500">Cause</span>!
//     </h2>
//     <div className="w-20 h-1 bg-red-500 mx-auto my-2 rounded"></div>

//     <div className="relative mt-8 w-full flex items-center justify-center">
//     {/* Left Button */}
   

//     {/* Scrollable Cards */}
//     <div
//       ref={containerRef}
//       className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4 px-4 md:px-[5vw] pb-2"
//     >
//       {causes.map((cause, idx) => (
//         <div
//           key={idx}
//           onClick={() => setActiveIndex(idx)}
//           className={`min-w-[120px] sm:min-w-[140px] flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl shadow-md border transition-all duration-300 cursor-pointer hover:scale-105
//             ${
//               idx === activeIndex
//                 ? "bg-blue-100 border-blue-500"
//                 : "bg-white border-gray-200"
//             }`}
//         >
//           <div className="text-3xl sm:text-4xl mb-2">{cause.icon}</div>
//           <span className="text-sm sm:text-base font-medium text-gray-700 text-center">
//             {cause.label}
//           </span>
//         </div>
//       ))}
//     </div>

//     {/* Right Button */}
   
//   </div>
//   </div>
//   )
// }

// export default DonateFillter



import React, { useRef, useState } from 'react';

// Sample data for donation campaigns
const campaigns = [
  // { id: 1, title: 'Save the Tigers', category: 'ANIMALS', description: 'Help protect endangered tigers.', images:'https://plus.unsplash.com/premium_photo-1746718185563-9d3782845c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  // { id: 2, title: 'School Supplies for Kids', category: 'EDUCATION', description: 'Provide books and supplies for underprivileged children.' },
  // { id: 3, title: 'Feed the Hungry', category: 'HUNGER', description: 'Support food distribution programs.' },
  // { id: 4, title: 'Support Orphanages', category: 'CHILDREN', description: 'Help children in need with care and support.' },
  // { id: 5, title: 'Wildlife Conservation', category: 'ANIMALS', description: 'Protect wildlife habitats.' },
  // { id: 6, title: 'Accessible Education', category: 'EDUCATION', description: 'Fund online learning for students.' },
  // { id: 7, title: 'Aid for Handicapped', category: 'HANDICAP', description: 'Provide resources for the disabled.' },

];

// Causes array
const causes = [
  { label: 'ALL', icon: '🩺' },
  { label: 'ANIMALS', icon: '🐾' },
  { label: 'EDUCATION', icon: '🎓' },
  { label: 'CHILDREN', icon: '😃' },
  { label: 'HUNGER', icon: '🍲' },
  { label: 'HANDICAP', icon: '♿' },
  
];

const DonateFilter = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Default to 'ALL'
  const [filteredData, setFilteredData] = useState(campaigns); // State for filtered campaigns

  // Handle category click and filter data
  const handleCategoryClick = (index) => {
    setActiveIndex(index);
    const selectedCategory = causes[index].label;
    
    if (selectedCategory === 'ALL') {
      setFilteredData(campaigns); // Show all campaigns
    } else {
      const filtered = campaigns.filter(campaign => campaign.category === selectedCategory);
      setFilteredData(filtered); // Show campaigns of selected category
    }
  };

  return (
    <div className="w-full px-5 py-10 bg-[#fef7f4] text-center">
      <h2 className="text-3xl font-bold text-black">
        Donate for a <span className="text-red-500">Cause</span>!
      </h2>
      <div className="w-20 h-1 bg-red-500 mx-auto my-2 rounded"></div>

      <div className="relative mt-8 w-full flex items-center justify-center">
        {/* Scrollable Cards */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4 px-4 md:px-[5vw] pb-2"
        >
          {causes.map((cause, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(idx)}
              className={`min-w-[120px] sm:min-w-[140px] flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl shadow-md border transition-all duration-300 cursor-pointer hover:scale-105
                ${
                  idx === activeIndex
                    ? 'bg-blue-100 border-blue-500'
                    : 'bg-white border-gray-200'
                }`}
            >
              <div className="text-3xl sm:text-4xl mb-2">{cause.icon}</div>
              <span className="text-sm sm:text-base font-medium text-gray-700 text-center">
                {cause.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filtered Campaigns Display */}
      <div className="mt-10 px-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          {causes[activeIndex].label} Campaigns
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map(campaign => (
              <div
                key={campaign.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <img className='w-[100%] h-[200px] object-cover object-center' src={`${campaign.images}`} alt="" />
                <h4 className="text-xl font-medium text-gray-800">{campaign.title}</h4>
                <p className="text-gray-600 mt-2">{campaign.description}</p>
                <p className="text-sm text-gray-500 mt-3">Category: {campaign.category}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No campaigns found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonateFilter;