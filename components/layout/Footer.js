"use client";

import Link from "next/link";

/**
 * Site footer component
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-bold mb-4">INIA</h2>
            <p className="text-gray-300">
              A modern website showcasing INIA&apos;s work and services.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <address className="not-italic text-gray-300">
              <p>123 Main Street</p>
              <p>Boston, MA 02125</p>
              <p className="mt-2">Email: info@inia.org</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} INIA. All rights reserved.</p>
          <p className="mt-2 text-sm">
            A project for CS410 Intro to Software Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
