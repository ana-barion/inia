"use client";
import React, { useState } from "react";

export default function News() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Press Releases", "Research", "Media"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <div className="container mx-auto  py-20">
        <h1 className="text-5xl mb-8">Latest News & Updates</h1>
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full md:w-1/3 p-3 border rounded-md border-gray-300 placeholder-black placeholder-font-semibold"
          />
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-4 py-2 rounded-md hover:cursor-pointer ${
                  activeFilter === filter
                    ? "bg-gray-900 text-white"
                    : "bg-white border"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
