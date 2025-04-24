"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

/**
 * Main navigation header for the site
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar with email and social links */}
      <div className="w-full bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <a
            href="mailto:contact@inibiosciences.com"
            className="text-sm text-gray-600 hover:text-gray-900 truncate max-w-full transition-colors duration-300 hover:underline decoration-gray-400 hover:decoration-gray-900"
          >
            contact@inibiosciences.com
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 transform hover:rotate-3"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={16}
                height={16}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform hover:-rotate-3"
            >
              <Image src="/twitter.svg" alt="Twitter" width={16} height={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-all duration-300 hover:scale-110 transform hover:rotate-3"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full bg-white [box-shadow:0_1px_1px_rgba(0,0,0,0.025)] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 transition-all duration-300 hover:scale-105 hover:brightness-110"
            >
              <Image
                src="/logo.svg"
                alt="INIA Logo"
                width={120}
                height={40}
                className="w-24 sm:w-32 h-auto"
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium relative group transition-all duration-300"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/science"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium relative group transition-all duration-300"
              >
                Science
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/team"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium relative group transition-all duration-300"
              >
                Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/news"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium relative group transition-all duration-300"
              >
                News
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium relative group transition-all duration-300"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/join"
                className="ml-4 lg:ml-8 inline-flex items-center justify-center px-3 lg:px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 hover:brightness-110"
              >
                Join Our Study
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 -mr-2 transition-all duration-300 hover:scale-110"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon for menu */}
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon for close */}
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white`}>
        <div className="pt-2 pb-3 space-y-1 px-4">
          <Link
            href="/"
            className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-all duration-300 hover:translate-x-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
          >
            Home
          </Link>
          <Link
            href="/science"
            className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-all duration-300 hover:translate-x-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
          >
            Science
          </Link>
          <Link
            href="/team"
            className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-all duration-300 hover:translate-x-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
          >
            Team
          </Link>
          <Link
            href="/news"
            className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-all duration-300 hover:translate-x-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
          >
            News
          </Link>
          <Link
            href="/contact"
            className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-all duration-300 hover:translate-x-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
          >
            Contact
          </Link>
          <Link
            href="/join"
            className="block py-2 pl-3 pr-4 text-base font-medium text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 rounded-md mt-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 hover:brightness-110"
          >
            Join Our Study
          </Link>
        </div>
      </div>
    </header>
  );
}
