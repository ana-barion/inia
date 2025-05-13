"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const [inputPos, setInputPos] = useState({ top: 0, left: 0, width: 0 });

  const router = useRouter();

  // Measure position of the input box
  useEffect(() => {
    const measure = () => {
      if (inputRef.current) {
        const rect = inputRef.current.getBoundingClientRect();
        setInputPos({
          top: rect.bottom,
          left: rect.left,
          width: rect.width,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [term]);

  // Debounced fetch
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (term.length > 1) {
        fetch(`/api/search?term=${encodeURIComponent(term)}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("Search results:", data);
            setResults(data);
          });
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [term]);

  const handleClick = (url) => {
    setResults([]);
    setTerm("");
    router.push(url);
  };

  return (
    <>
      <div className="relative w-full max-w-xs">
        <input
          ref={inputRef}
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded text-black placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--inia-primary-teal)]"
          placeholder="Search..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>

      {results.length > 0 && (
        <div
          className="fixed bg-white border border-gray-300 rounded-lg shadow-lg z-[1000] max-h-80 overflow-y-auto"
          style={{
            top: `${inputPos.top + 8}px`,
            left: `${inputPos.left}px`,
            width: `${inputPos.width}px`,
          }}
        >
          <ul className="divide-y divide-gray-200">
            {results.map((r) => (
              <li
                key={r._id}
                onClick={() => handleClick(r.url)}
                className="p-3 hover:bg-gray-100 transition cursor-pointer"
              >
                <span className="block text-sm font-medium text-gray-900">
                  {r.title || r.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
