"use client";
import { useState } from "react";
import Image from "next/image";
import Footer from "../../components/layout/Footer";
import ScienceExtension from "../../components/ScienceExtension";

export default function SciencePage() {
  const ResearchAccordion = () => {
    const items = [
      {
        title: "Preclinical Studies",
        content:
          "INIA's preclinical studies evaluate safety and efficacy using in vitro and in vivo models prior to clinical testing. These early-phase investigations are essential to identify optimal ultrasound parameters, dosage frequency, and biomarkers for tracking treatment effectiveness.",
      },
      {
        title: "Current Clinical Trials",
        content:
          "INIA is actively running Phase II clinical trials, focusing on immune modulation in chronic inflammation patients. These trials assess device performance in real-world settings and evaluate its ability to reduce inflammatory cytokines like TNFa.",
      },
      {
        title: "Future Applications",
        content:
          "Future programs will target rheumatoid arthritis, IBD, and eczema, using the same ultrasound technology. Academic partnerships will further explore long-term health outcomes and cost-saving potential.",
      },
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-300 rounded-lg p-4 transition-all duration-500 ease-in-out hover:scale-[1.01]"
          >
            <div
              className="font-semibold flex justify-between items-center cursor-pointer text-slate-900"
              onClick={() => toggleAccordion(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleAccordion(idx);
              }}
            >
              {item.title}
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === idx ? "rotate-90" : ""
                }`}
              >
                ▶
              </span>
            </div>
            <div
              className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === idx
                  ? "grid-rows-[1fr] opacity-100 mt-2"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-700 text-sm">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        {/* Our Scientific Approach */}
        <section
          className="w-full py-16 text-center relative"
          style={{ zIndex: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1E293B] mb-4">
            Our Scientific Approach
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto px-4">
            Pioneering bioelectronic medicine through advanced ultrasound
            technology for targeted inflammation control
          </p>
        </section>

        {/* Ultrasound Technology through Steps Timeline grouped */}
        <section className="w-full bg-gray-50">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6 items-center px-6 py-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1E293B]">
                Ultrasound Technology
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-[#1E293B]">
                <li>Targets the spleen to activate the inflammatory reflex</li>
                <li>
                  Delivers precise stimulation with no needles or implants
                </li>
                <li>
                  Customizable treatment parameters and real-time monitoring
                </li>
              </ul>
            </div>
            <div className="rounded-2xl shadow-xl bg-white p-6 transition-transform duration-500 ease-in-out hover:scale-[1.03] flex justify-center items-center w-full max-w-xl">
              <Image
                src="/diagram.png"
                alt="Ultrasound Diagram"
                width={800}
                height={600}
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center rounded-xl shadow-lg p-6 bg-white px-6 sm:px-10 py-16">
            <div className="space-y-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="min-w-[36px] min-h-[36px] sm:min-w-[42px] sm:min-h-[42px] rounded-full bg-[#20293a] text-white flex items-center justify-center text-xs sm:text-base font-semibold">
                    {index + 1}
                  </div>
                  <p
                    className="text-[#3D4755] text-sm sm:text-base"
                    dangerouslySetInnerHTML={{
                      __html: [
                        "<strong>Ultrasound</strong>, positioned towards the <strong>spleen</strong>",
                        "Activation of the <strong>splenic nerve</strong>",
                        "Triggering the release of <strong>norepinephrine (NE)</strong> from the nerves",
                        "<strong>NE</strong> binds to <strong>T-cells</strong>, regulating immune response",
                        "<strong>T-cells</strong> release <strong>Acetylcholine (ACh)</strong>",
                        "<strong>ACh</strong> activates <strong>macrophages</strong>, reducing inflammation",
                      ][index],
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex-1 flex justify-end">
              <div className="text-right pl-6 lg:pl-10 self-center group cursor-pointer">
                {[
                  "Fast relief.",
                  "Lasting impact.",
                  <>
                    This is <strong className="text-[#2F5B87]">INIAcore</strong>
                    .
                  </>,
                ].map((line, index) => (
                  <h2
                    key={index}
                    className={`text-4xl sm:text-5xl text-[#3D4755] leading-tight font-light`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {line}
                  </h2>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              3 Minutes a Day
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Suppress inflammation and reduce psoriasis
            </p>
            <p className="text-gray-700 mt-4 max-w-3xl mx-auto px-4">
              Patients want safe, effective, and non-invasive relief. INIAcore
              was designed with them in mind.
            </p>
          </div>

          <div className="py-12">
            <div className="flex justify-center items-center flex-wrap gap-6">
              {[
                { img: "vest.svg", label: "Wear the Vest" },
                { img: "phone.svg", label: "Launch the App" },
                { img: "couch.svg", label: "Relax for 3 Minutes" },
                { img: "battery.svg", label: "Recharge and Repeat" },
              ].map((step, index, arr) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex flex-col items-center transition-transform duration-500 ease-in-out hover:scale-105">
                    <div className="w-20 h-20 border-2 border-[#355D84] rounded-full bg-white flex items-center justify-center p-3">
                      <Image
                        src={`/${step.img}`}
                        alt={step.label}
                        width={40}
                        height={40}
                      />
                    </div>
                    <p className="text-lg mt-2 text-center text-[#1E293B]">
                      {step.label}
                    </p>
                  </div>
                  {index < arr.length - 1 && (
                    <Image
                      src="/arrow.svg"
                      alt="arrow"
                      width={32}
                      height={32}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters through Research Pipeline grouped */}
        <section className="w-full">
          <div className="my-16 px-4 flex justify-center">
            <div className="bg-white border border-slate-300 rounded-xl shadow-md max-w-3xl p-8 w-full text-center">
              <h2 className="text-2xl font-semibold mb-4 text-[#1E293B]">
                Why It Matters
              </h2>
              <p className="text-gray-700">
                Over 8 million Americans suffer from psoriasis, many of whom
                face challenges with conventional therapies — from high costs to
                fear of injections. INIAcore fills a critical gap by offering a
                convenient, at-home, non-invasive alternative with rapid action
                and fewer side effects.
              </p>
            </div>
          </div>

          <div className="mb-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center text-[#1E293B]">
                Inflammation Control
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  {
                    title: "Targeted Treatment",
                    desc: "Precise delivery to affected areas",
                  },
                  {
                    title: "Measured Response",
                    desc: "Controlled inflammatory response",
                  },
                  {
                    title: "Long-lasting Relief",
                    desc: "Sustained therapeutic effects",
                  },
                ].map(({ title, desc }, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-sm p-6 rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
                  >
                    <h3 className="font-semibold mb-2 text-[#1E293B]">
                      {title}
                    </h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center text-[#1E293B]">
                Clinical Evidence
              </h2>
              <div className="flex justify-center">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm max-w-4xl">
                  {[
                    {
                      phase: "Phase I",
                      label: "Completed",
                      percent: 100,
                      color: "bg-green-500",
                    },
                    {
                      phase: "Phase II",
                      label: "In Progress",
                      percent: 60,
                      color: "bg-yellow-400",
                    },
                    {
                      phase: "Phase III",
                      label: "In Preparation",
                      percent: 30,
                      color: "bg-blue-400",
                    },
                  ].map(({ phase, label, percent, color }, idx) => (
                    <div
                      key={idx}
                      className="bg-white border p-4 rounded-lg flex flex-col items-center"
                    >
                      <h4 className="font-semibold mb-1 text-[#1E293B]">
                        {phase}
                      </h4>
                      <span className="text-xs text-gray-500 mb-2">
                        {label}
                      </span>
                      <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                        <div
                          className={`h-full rounded-full ${color}`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <p className="text-gray-600 text-xs">
                        {phase === "Phase I"
                          ? "Safety and initial efficacy established"
                          : phase === "Phase II"
                            ? "Expanded patient trials ongoing"
                            : "Large-scale trials in preparation"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 px-4">
            <div className="space-y-4 max-w-xl mx-auto">
              <ResearchAccordion />
            </div>
          </div>
        </section>
      </main>

      <ScienceExtension />
      <Footer />
    </div>
  );
}
