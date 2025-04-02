"use client";
import React, { useState } from "react";

export default function News() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");

  const filters = ["All", "Press Releases", "Research", "Media"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const newsData = [
    {
      id: 1,
      type: "Research",
      title: "Breakthrough in Ultrasound Technology for Psoriasis Treatment",
      description:
        "INIA Biosciences announces significant advancement in bioelectronic medicine...",
      date: "March 15, 2025",
      featured: true,
    },
    {
      id: 2,
      type: "Press Release",
      title: "INIA Expands Clinical Trial Network",
      description:
        "New partnerships established with leading medical centers...",
      date: "March 1, 2025",
      featured: false,
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-20">
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
      <div className="container mx-auto px-4 py-20 border-b border-gray-300">
        {newsData
          .filter((news) => news.featured)
          .map((news) => (
            <div
              key={news.id}
              className="bg-white p-10 rounded-lg shadow mb-6 border-gray-900"
            >
              <span className="bg-gray-900 text-white px-2 py-1 rounded text-xs">
                Featured
              </span>
              <h2 className="text-lg font-semibold mt-2">{news.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{news.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <span className="text-xs text-gray-900 mr-6">
                    {news.date}
                  </span>
                  <div className="text-xs text-gray-900 border rounded-md px-3 py-1">
                    {" "}
                    {news.type}{" "}
                  </div>
                </div>
                <button className="text-gray-900 text-sm hover:cursor-pointer">
                  Read More →
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="container mx-auto px-4 py-20 flex flex-col justify-center items-center border-b border-gray-300">
        <h3 className="text-xl font-semibold">
          Stay Updated with INIA Biosciences
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Subscribe to our newsletter for the latest updates and breakthroughs
        </p>
        <div className="flex justify-center mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2  border rounded-md mr-2"
          />
          <button className="bg-gray-900 text-white px-4 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
