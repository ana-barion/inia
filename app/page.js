import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "white" }}>
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

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
              {[
                { src: "/antlerLogo.svg", alt: "Antler" },
                { src: "/idea2-logo-cobranded.png", alt: "MIT Idea Squared" },
                { src: "/natureLogo.png", alt: "Nature" },
                { src: "/nucleateLogo.png", alt: "Nucleate" },
                { src: "/Sandbox-Logo-Square-650x650.png", alt: "Sandbox" },
              ].map((logo, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
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
                icon: "/waves.svg",
                title: "Non-Invasive Treatment",
                desc: "Advanced ultrasound technology for gentle, effective treatment.",
              },
              {
                icon: "/heart-pulse.svg",
                title: "At-Home Use",
                desc: "Convenient treatment in the comfort of your own home.",
              },
              {
                icon: "/check.svg",
                title: "Proven Results",
                desc: "Clinically validated outcomes for lasting relief.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center flex flex-col items-center"
              >
                {/* Gold circle with icon */}
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-full mb-6 shadow-lg"
                  style={{ background: "var(--inia-primary-gold)" }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
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
