"use client";

import React from "react";

export default function ScienceExtension() {
  return (
    <section className="w-full py-16 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-4">
          Science Highlights &amp; Updates
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Stay tuned for the latest breakthroughs, publications, and news from
          the INIA research team. We are committed to transparency and sharing
          our journey in advancing bioelectronic medicine.
        </p>
        {/* Placeholder for future dynamic content, e.g., news, publications, or research spotlights */}
        <div className="bg-white rounded-lg shadow p-8 text-gray-500 text-base">
          <span className="italic">
            No updates yet. Check back soon for new science stories!
          </span>
        </div>
      </div>
    </section>
  );
}
