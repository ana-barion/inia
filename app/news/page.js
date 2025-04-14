"use client";
import React, { useState } from "react";

import Image from "next/image";

const newsData = [
  {
    id: 1,
    type: "Research",
    title: "Breakthrough in Ultrasound Technology for Psoriasis Treatment",
    description:
      "INIA Biosciences announces significant advancement in bioelectronic medicine...",
    date: "March 30, 2025",
    featured: true,
    imageURL: "/next.svg",
  },
  {
    id: 2,
    type: "Press Release",
    title: "INIA Expands Clinical Trial Network",
    description: "New partnerships established with leading medical centers...",
    date: "March 15, 2025",
    featured: false,
    imageURL: "/next.svg",
  },
  {
    id: 3,
    type: "Media",
    title: "Test data",
    description: "This is test data...",
    date: "March 1, 2025",
    featured: false,
    imageURL: "/next.svg",
  },
  {
    id: 3,
    type: "Research",
    title: "Study Highlights IL-17's Role in Psoriasis Inflammation",
    description:
      "Recent findings underscore the pivotal role of interleukin-17 in promoting inflammation and keratinocyte activation in psoriasis, reinforcing its status as a key therapeutic target.",
    date: "March 10, 2025",
    featured: false,
    imageURL: "/next.svg",
  },
  {
    id: 4,
    type: "Research",
    title: "Ultrasound Therapy Shows Promise in Plaque Psoriasis Treatment",
    description:
      "Low-frequency ultrasound therapy has been found to aid in the treatment of chronic plaque psoriasis, offering a non-invasive alternative to traditional methods.",
    date: "March 5, 2025",
    featured: false,
    imageURL: "/next.svg",
  },
  {
    id: 5,
    type: "Press Release",
    title:
      "Advancements in High-Frequency Ultrasound for Psoriatic Skin Assessment",
    description:
      "High-frequency ultrasonography emerges as a valuable tool for non-invasive evaluation of psoriatic skin, enabling detailed assessment of inflammation and skin thickness.",
    date: "February 25, 2025",
    featured: false,
    imageURL: "/next.svg",
  },
  {
    id: 6,
    type: "Research",
    title: "IL-23 Identified as a Key Driver in Psoriasis Pathogenesis",
    description:
      "New research identifies interleukin-23 as a central cytokine in the development of psoriasis, paving the way for targeted therapies aimed at this specific pathway.",
    date: "February 15, 2025",
    featured: false,
    imageURL: "/next.svg",
  },
  {
    id: 7,
    type: "Research",
    title:
      "Ultrasound Monitoring Enhances Evaluation of Biologic Treatments in Psoriasis",
    description:
      "Combining clinical, dermoscopic, and ultrasonic assessments provides a comprehensive approach to monitor the efficacy of biologic treatments in moderate-to-severe plaque psoriasis.",
    date: "February 5, 2025",
    featured: false,
    imageURL: "/next.svg",
  },
];

export default function News() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsItems, setNewsItems] = useState(newsData);

  const filters = ["All", "Press Releases", "Research", "Media"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setNewsItems(newsData);
    } else {
      setNewsItems(
        newsData.filter(
          (news) =>
            news.type === filter ||
            (filter === "Press Releases" && news.type === "Press Release"),
        ),
      );
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const totalPages = newsItems.length;
  const currentNews = newsItems[currentPage - 1];

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
        <div className="w-full h-[400px] max-w-md rounded-lg border border-gray-300 bg-white overflow-hidden shadow-sm">
          <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500 text-sm">
            <Image
              src={currentNews.imageURL}
              alt="INIA news page"
              width={500}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                {currentNews.type}
              </span>
              <span className="text-sm text-gray-500">{currentNews.date}</span>
            </div>

            <h3 className="font-medium text-sm text-gray-900 mb-2">
              {currentNews.title}
            </h3>
            <p className="text-sm text-gray-600 mb-8">
              {currentNews.description}
            </p>

            <button className="text-gray-900 text-sm hover:cursor-pointer">
              Read More →
            </button>
          </div>
        </div>

        <div className="flex gap-2 items-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 border rounded disabled:opacity-50 hover:cursor-pointer"
          >
            <p className="w-4 h-4">←</p>
          </button>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 border rounded disabled:opacity-50 hover:cursor-pointer"
          >
            <p className="w-4 h-4">→</p>
          </button>
        </div>
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
