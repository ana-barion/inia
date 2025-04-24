import Link from "next/link"; // Keep Link for potential navigation

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Harnessing ultrasound bioelectronics for the future of healthcare
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Revolutionizing psoriasis treatment through innovative
              bioelectronic medicine
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 transition-colors">
                Learn About Our Treatment
              </button>
              <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded hover:bg-gray-100 transition-colors">
                For Healthcare Providers
              </button>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-sm uppercase text-gray-500 font-semibold mb-8">
              Trusted by Leading Institutions
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="text-gray-400">[Logo 1]</div>
              <div className="text-gray-400">[Logo 2]</div>
              <div className="text-gray-400">[Logo 3]</div>
              <div className="text-gray-400">[Logo 4]</div>
              <div className="text-gray-400">[Logo 5]</div>
            </div>
          </div>
        </section>

        {/* Why Choose INIA Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose INIA
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-4xl mb-4">[ICON]</div> {/* Placeholder */}
              <h3 className="text-xl font-semibold mb-2">
                Non-Invasive Treatment
              </h3>
              <p className="text-gray-600">
                Advanced ultrasound technology for gentle, effective treatment.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">[ICON]</div> {/* Placeholder */}
              <h3 className="text-xl font-semibold mb-2">At-Home Use</h3>
              <p className="text-gray-600">
                Convenient treatment in the comfort of your own home.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">[ICON]</div> {/* Placeholder */}
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Clinically validated outcomes for lasting relief.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Minutes a Day Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              3 Minutes a Day
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="text-center">
                <div className="text-4xl mb-4">[ICON]</div> {/* Placeholder */}
                <h4 className="font-semibold">Put on vest</h4>
                <p className="text-sm text-gray-500">Quick and easy to wear</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">[ICON]</div> {/* Placeholder */}
                <h4 className="font-semibold">Use App</h4>
                <p className="text-sm text-gray-500">
                  Simple one-touch control
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">[ICON]</div> {/* Placeholder */}
                <h4 className="font-semibold">Relax</h4>
                <p className="text-sm text-gray-500">
                  Gentle treatment session
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">[ICON]</div> {/* Placeholder */}
                <h4 className="font-semibold">Recharge</h4>
                <p className="text-sm text-gray-500">Ready for next use</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
