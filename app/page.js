import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "white" }}>
      <Header />
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="w-full flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-4 md:px-0 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(120deg, #0a2239 60%, var(--inia-primary-blue) 100%)",
            color: "white",
            paddingTop: "6rem",
            paddingBottom: "6rem",
          }}
        >
          <div className="max-w-2xl z-10">
            <h1
              className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
              style={{
                color: "var(--inia-primary-teal)",
                letterSpacing: "-1px",
              }}
            >
              Harnessing ultrasound bioelectronics
              <br />
              for the future of healthcare
            </h1>
            <p className="text-2xl mb-10 font-light" style={{ color: "white" }}>
              Revolutionizing psoriasis treatment through innovative
              bioelectronic medicine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center text-center w-full">
              <button
                className="w-full max-w-xs sm:w-auto px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105 whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(90deg, var(--inia-primary-gold), var(--inia-primary-teal))",
                  color: "white",
                  boxShadow: "0 2px 12px 0 rgba(46,196,182,0.15)",
                }}
              >
                Learn About Our Treatment
              </button>
              <button
                className="w-full max-w-xs sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-2 transition-transform hover:scale-105 whitespace-nowrap"
                style={{
                  borderColor: "var(--inia-primary-teal)",
                  color: "var(--inia-primary-teal)",
                  background: "white",
                }}
              >
                For Healthcare Providers
              </button>
            </div>
          </div>
          {/* Abstract SVG background */}
          <svg
            className="absolute right-0 bottom-0 z-0 opacity-30 hidden md:block"
            width="600"
            height="600"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ right: "-100px", bottom: "-100px" }}
          >
            <circle cx="300" cy="300" r="300" fill="var(--inia-primary-gold)" />
            <circle cx="400" cy="400" r="180" fill="var(--inia-primary-teal)" />
          </svg>
        </section>

        {/* Trusted By Section */}
        <section style={{ background: "white" }} className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2
              className="text-lg uppercase font-bold mb-10 tracking-widest"
              style={{ color: "var(--inia-primary-gold)", letterSpacing: 4 }}
            >
              Trusted by Leading Institutions
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  style={{
                    color: "var(--inia-secondary-light-gold)",
                    fontSize: 28,
                    fontWeight: 700,
                  }}
                >
                  [Logo {i}]
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose INIA Section */}
        <section
          className="container mx-auto px-4 py-24"
          style={{
            background:
              "linear-gradient(120deg, #0a2239 60%, var(--inia-primary-blue) 100%)",
          }}
        >
          <h2
            className="text-3xl font-extrabold text-center mb-16 uppercase tracking-widest"
            style={{ color: "var(--inia-primary-teal)", letterSpacing: 4 }}
          >
            Why Choose INIA
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "[ICON]",
                title: "Non-Invasive Treatment",
                desc: "Advanced ultrasound technology for gentle, effective treatment.",
              },
              {
                icon: "[ICON]",
                title: "At-Home Use",
                desc: "Convenient treatment in the comfort of your own home.",
              },
              {
                icon: "[ICON]",
                title: "Proven Results",
                desc: "Clinically validated outcomes for lasting relief.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-full mb-6 shadow-lg"
                  style={{
                    background: "var(--inia-primary-gold)",
                    color: "white",
                    fontSize: 36,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-2 uppercase tracking-wider"
                  style={{
                    color: "var(--inia-primary-teal)",
                    letterSpacing: 2,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-base font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3 Minutes a Day Section */}
        <section style={{ background: "white" }} className="py-24">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl font-extrabold text-center mb-16 uppercase tracking-widest"
              style={{ color: "var(--inia-primary-blue)", letterSpacing: 4 }}
            >
              3 Minutes a Day
            </h2>
            <div className="flex justify-center items-center flex-wrap gap-10">
              {[
                { img: "vest.svg", label: "Wear the Vest" },
                { img: "phone.svg", label: "Launch the App" },
                { img: "couch.svg", label: "Relax for 3 Minutes" },
                { img: "battery.svg", label: "Recharge and Repeat" },
              ].map((step, index, arr) => (
                <div key={index} className="flex items-center gap-0 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 border-4 rounded-full bg-white flex items-center justify-center p-3 mb-2 shadow-lg"
                      style={{ borderColor: "var(--inia-primary-teal)" }}
                    >
                      <Image
                        src={`/${step.img}`}
                        alt={step.label}
                        width={40}
                        height={40}
                        style={{ color: "var(--inia-primary-blue)" }}
                      />
                    </div>
                    <p
                      className="text-lg mt-2 text-center font-semibold"
                      style={{ color: "var(--inia-primary-blue)" }}
                    >
                      {step.label}
                    </p>
                  </div>
                  {index < arr.length - 1 && (
                    <div className="flex items-center justify-center">
                      <svg
                        width="48"
                        height="4"
                        viewBox="0 0 48 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="48"
                          height="4"
                          rx="2"
                          fill="var(--inia-primary-gold)"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
