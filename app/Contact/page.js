import Link from "next/link"; // Keep Link for potential navigation

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-lg">[LOGO]</div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/science" className="hover:text-blue-600">
              Science
            </Link>
            <Link href="/team" className="hover:text-blue-600">
              Team
            </Link>
            <Link href="/news" className="hover:text-blue-600">
              News
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
              Join Our Study
            </button>
            {/* Add a Mobile Menu Button Here if needed */}
          </div>
        </div>
      </header>

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

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Logo & Tagline */}
            <div>
              <div className="font-bold text-lg text-white mb-2">[LOGO]</div>
              <p className="text-sm">
                Innovating healthcare through bioelectronic medicine.
              </p>
            </div>
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/science" className="hover:text-white">
                    Science
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 3: Contact */}
            <div>
              <h4 className="font-semibold text-white mb-3">Contact</h4>
              <address className="not-italic text-sm space-y-2">
                <p>contact@iniabiosciences.com</p>
                <p>+1 (555) 123-4567</p>
                <p>123 Innovation Drive, Boston, MA</p>
              </address>
            </div>
            {/* Column 4: Follow Us */}
            <div>
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Replace with actual icons */}
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="hover:text-white"
                >
                  [T]
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="hover:text-white"
                >
                  [in]
                </a>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="hover:text-white"
                >
                  [f]
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} INIA Biosciences. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
