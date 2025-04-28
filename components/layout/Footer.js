"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

/**
 * Site footer component
 */
export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="INIA Logo"
                width={150}
                height={50}
                className="h-12 w-auto transition-all duration-300 hover:scale-105 hover:brightness-110"
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Revolutionizing healthcare through{" "}
              <span className="text-gray-900 font-semibold">
                innovative biomarker research
              </span>{" "}
              and{" "}
              <span className="text-gray-900 font-semibold">
                personalized medicine
              </span>{" "}
              solutions.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 transform hover:rotate-3"
                aria-label="LinkedIn"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 transform hover:-rotate-3"
                aria-label="Twitter"
              >
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 transform hover:rotate-3"
                aria-label="Facebook"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-lg tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Science", href: "/science" },
                { name: "Team", href: "/team" },
                { name: "News", href: "/news" },
                { name: "Contact", href: "/contact" },
                { name: "Join Our Study", href: "/join" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative inline-block text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-gray-900 to-gray-800 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-lg tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-900 mt-1 flex-shrink-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">
                  123 Innovation Drive
                  <br />
                  Cambridge, MA 02139
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-900 mt-1 flex-shrink-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@inibiosciences.com"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-medium"
                >
                  contact@inibiosciences.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-900 mt-1 flex-shrink-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+16175550123"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-medium"
                >
                  +1 (617) 555-0123
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-lg tracking-wide">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Subscribe to our newsletter for the latest updates in{" "}
              <span className="text-gray-900 font-semibold">
                biomarker research
              </span>{" "}
              and{" "}
              <span className="text-gray-900 font-semibold">
                clinical trials
              </span>
              .
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm bg-white/90 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-md shadow-sm hover:from-gray-800 hover:to-gray-700 transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 hover:brightness-110"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} INIA Biosciences. All rights
              reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-medium"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 font-medium"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FDA Compliance Notice */}
      <div className="bg-gray-100 py-3 text-center text-xs text-gray-500 font-medium shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          The statements made on this website have not been evaluated by the
          FDA. Our products and services are not intended to diagnose, treat,
          cure, or prevent any disease.
        </div>
      </div>
    </footer>
  );
}

// Tailwind custom animation utilities (add to your globals.css if not present):
// .animate-fadeIn { animation: fadeSlide 1s ease-out forwards; }
// .animate-pulse-slow { animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
