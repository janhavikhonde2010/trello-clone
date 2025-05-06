import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegQuestionCircle, FaBullhorn } from "react-icons/fa";
import { BsTag } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const InnerNavbar = () => {
  const navigate = useNavigate();

  // Function to handle create button click
  const handleCreateClick = () => {
    navigate("/create"); // Navigate to the create page (update the path if needed)
  };

  return (
    <div className="flex flex-col bg-[#1d2125] text-white">
      {/* Navbar */}
      <nav className="bg-[#1d2125] text-white px-4 py-2 flex items-center justify-between flex-wrap w-full shadow-sm border-b border-[#a6c5e229]">
        {/* Left Section */}
        <div className="flex items-center gap-3 min-w-[150px]">
          <HiViewGrid className="text-gray-400 text-xl" />
          <img
            src="https://cdn.worldvectorlogo.com/logos/trello.svg"
            alt="Trello"
            className="w-6 h-6"
          />
          <span className="font-semibold text-white text-lg hidden sm:inline">Trello</span>
        </div>

        {/* Search & Create Section */}
        <div className="flex-grow max-w-[500px] flex items-center gap-2 mx-4 w-full">
          <div className="flex items-center bg-[#22272b] border border-[#a6c5e229] rounded px-2 py-1 w-full">
            <FiSearch className="text-[#b6c2cf]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm text-white px-2 w-full focus:outline-none placeholder:text-[#b6c2cf]"
            />
          </div>
          <button
            onClick={handleCreateClick}
            className="bg-[#579dff] text-[#1d2125] font-medium text-sm px-4 py-1.5 rounded hover:bg-[#85b8ff] whitespace-nowrap"
          >
            Create
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 min-w-[120px] justify-end">
          <button className="hover:bg-[#a6c5e229] p-2 rounded">
            <FaBullhorn className="text-[#b6c2cf]" />
          </button>
          <button className="hover:bg-[#a6c5e229] p-2 rounded">
            <BsTag className="text-[#b6c2cf]" />
          </button>
          <button className="hover:bg-[#a6c5e229] p-2 rounded">
            <FaRegQuestionCircle className="text-[#b6c2cf]" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default InnerNavbar;
