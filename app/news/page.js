"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { client } from "../../sanity/lib/client";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDesc(desc) {
  if (desc.length <= 100) {
    return desc;
  }
  return desc.slice(0, 97) + "...";
}

function formatDescFeatured(desc) {
  if (desc.length <= 200) {
    return desc;
  }
  return desc.slice(0, 197) + "...";
}

export const getNewsBySlug = async (slug) => {
  const query = `*[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    description,
    date,
    type,
    featured,
    body,
    "imageURL": image.asset->url
  }`;

  return await client.fetch(query, { slug });
};

export default function News() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsItems, setNewsItems] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["All", "Press Release", "Research", "Media"];

  useEffect(() => {
    const fetchNews = async () => {
      let query = '*[_type == "news"';
      const params = {};

      if (activeFilter !== "All") {
        query += ' && type == $type';
        params.type = activeFilter;
      }

      if (searchQuery) {
        query += ' && (title match $search || description match $search)';
        params.search = `*${searchQuery}*`;
      }

      query += '] | order(date desc){ _id, title, description, date, type, featured, "imageURL": image.asset->url }';

      const data = await client.fetch(query, params);
      setNewsItems(data);
    };

    fetchNews();
  }, [activeFilter, searchQuery]);


  useEffect(() => {
    if (selectedNews) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedNews]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleReadMore = async (slug) => {
    const fullNews = await getNewsBySlug(slug);
    setSelectedNews(fullNews);
  };

  const filteredNews =
    activeFilter === "All"
      ? newsItems
      : newsItems.filter((news) => news.type === activeFilter);

  const totalPages = filteredNews.length;
  const currentNews = filteredNews[currentPage - 1];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl mb-8">Latest News & Updates</h1>
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
          {newsItems
            .filter((news) => news.featured)
            .map((news) => (
              <div
                key={news._id}
                className="bg-white p-10 rounded-lg shadow mb-6 border-gray-900"
              >
                <span className="bg-gray-900 text-white px-2 py-1 rounded text-xs">
                  Featured
                </span>
                <h2 className="text-lg font-semibold mt-2">{news.title}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {formatDescFeatured(news.description)}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-900 mr-6">
                      {formatDate(news.date)}
                    </span>
                    <div className="text-xs text-gray-900 border rounded-md px-3 py-1">
                      {news.type}
                    </div>
                  </div>
                  <button
                    className="text-gray-900 text-sm hover:cursor-pointer"
                    onClick={() => handleReadMore(news.slug.current)}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
        </div>
        {selectedNews && (
          <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6 relative">
              <button
                onClick={() => setSelectedNews(null)}
                className="text-xl font-bold text-gray-700 hover:cursor-pointer"
              >
                ✕
              </button>
              {selectedNews.imageURL && (
                <div className="relative h-64">
                  <Image
                    src={selectedNews.imageURL}
                    alt={selectedNews.title}
                    fill
                    className="object-cover rounded w-full"
                  />
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2 mt-4">
                {selectedNews.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {formatDate(selectedNews.date)} • {selectedNews.type}
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                {selectedNews.body || selectedNews.description}
              </p>
            </div>
          </div>
        )}

        {filteredNews.length > 0 && currentNews && (
          <div className="container mx-auto px-4 py-20 flex flex-col justify-center items-center">
            <div className="w-full h-[450px] max-w-md rounded-lg border border-gray-300 bg-white overflow-hidden shadow-sm">
              <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500 text-sm">
                <Image
                  src={currentNews.imageURL}
                  alt="INIA news page"
                  width={500}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                    {currentNews.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatDate(currentNews.date)}
                  </span>
                </div>

                <h3 className="font-medium text-sm text-gray-900 mb-2">
                  {currentNews.title}
                </h3>
                <p className="text-sm text-gray-600 mb-8">
                  {formatDesc(currentNews.description)}
                </p>

                <button
                  className="text-gray-900 text-sm hover:cursor-pointer"
                  onClick={() => handleReadMore(currentNews.slug.current)}
                >
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

              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={`page-${idx + 1}`}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`px-3 py-1 border rounded text-sm ${
                    currentPage === idx + 1
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border rounded disabled:opacity-50 hover:cursor-pointer"
              >
                <p className="w-4 h-4">→</p>
              </button>
            </div>
          </div>
        )}

        {filteredNews.length === 0 && (
          <div className="container mx-auto px-4 py-20 text-center">
            <p className="text-gray-500">No news found for "{activeFilter}".</p>
          </div>
        )}

        <div className="container mx-auto px-4 py-20 flex flex-col justify-center items-center">
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
      </main>
      <Footer />
    </div>
  );
}
