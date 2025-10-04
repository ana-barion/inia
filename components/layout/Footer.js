"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

/**
 * Site footer component with enhanced accessibility, SEO and responsive design
 */
export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{
        background:
          "linear-gradient(120deg, #0a2239 60%, var(--inia-secondary-dark-gray) 100%)",
      }}
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <h2 className="text-white text-xl font-semibold tracking-wider">
                <span className="text-[var(--inia-primary-teal)]">INIA</span>{" "}
                BIOSCIENCES
              </h2>
            </div>
            <p className="text-white text-base leading-relaxed">
              Revolutionizing healthcare through{" "}
              <span className="text-[var(--inia-primary-teal)] font-semibold">
                innovative biomarker research
              </span>{" "}
              and{" "}
              <span className="text-[var(--inia-primary-teal)] font-semibold">
                personalized medicine
              </span>{" "}
              solutions.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              {[
                {
                  href: "https://www.linkedin.com/company/inia-biosciences/",
                  icon: "/linkedin.svg",
                  label: "LinkedIn",
                },
                {
                  href: "https://twitter.com/IniaBiosciences",
                  icon: "/twitter.svg",
                  label: "Twitter",
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--inia-primary-teal)]"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={18}
                    height={18}
                    style={{ filter: "invert(1)" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-[var(--inia-primary-gold)] font-bold mb-2 text-lg tracking-widest uppercase">
              QUICK LINKS
            </h3>
            <div className="h-1 w-12 bg-[var(--inia-primary-teal)] mb-6"></div>
            <ul className="space-y-3 mt-8">
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
                    className="relative inline-block text-white hover:text-[var(--inia-primary-teal)] font-medium transition-all duration-300 group text-base py-1"
                  >
                    <span className="relative inline-flex items-center group">
                      <span className="opacity-0 -left-4 absolute transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="group-hover:translate-x-3 transition-transform duration-300">
                        {link.name}
                      </span>
                    </span>
                    <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[var(--inia-primary-teal)] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-[var(--inia-primary-gold)] font-bold mb-2 text-lg tracking-widest uppercase">
              CONTACT
            </h3>
            <div className="h-1 w-12 bg-[var(--inia-primary-teal)] mb-6"></div>
            <ul
              className="space-y-5 mt-8 text-base"
              itemScope
              itemType="http://schema.org/Organization"
            >
              <li
                className="flex items-start space-x-3 group"
                itemProp="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <div className="w-8 h-8 rounded-full bg-[rgba(46,196,182,0.15)] flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[rgba(46,196,182,0.25)] transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-[var(--inia-primary-teal)] transition-transform duration-300 group-hover:scale-110"
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
                </div>
                <span className="text-white leading-relaxed group-hover:text-[var(--inia-primary-teal)] transition-colors duration-300">
                  <span itemProp="streetAddress">123 Innovation Drive</span>
                  <br />
                  <span itemProp="addressLocality">Cambridge</span>,{" "}
                  <span itemProp="addressRegion">MA</span>{" "}
                  <span itemProp="postalCode">02139</span>
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-[rgba(46,196,182,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[rgba(46,196,182,0.25)] transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-[var(--inia-primary-teal)] transition-transform duration-300 group-hover:scale-110"
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
                </div>
                <a
                  href="mailto:contact@inibiosciences.com"
                  className="text-white hover:text-[var(--inia-primary-teal)] transition-all duration-300 font-medium relative"
                  itemProp="email"
                >
                  contact@inibiosciences.com
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[var(--inia-primary-teal)] transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-[rgba(46,196,182,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[rgba(46,196,182,0.25)] transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-[var(--inia-primary-teal)] transition-transform duration-300 group-hover:scale-110"
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
                </div>
                <a
                  href="tel:+16175550123"
                  className="text-white hover:text-[var(--inia-primary-teal)] transition-all duration-300 font-medium relative"
                  itemProp="telephone"
                >
                  +1 (617) 555-0123
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[var(--inia-primary-teal)] transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-[var(--inia-primary-gold)] font-bold mb-2 text-lg tracking-widest uppercase">
              STAY UPDATED
            </h3>
            <div className="h-1 w-12 bg-[var(--inia-primary-teal)] mb-6"></div>
            <p className="text-base text-white mb-6 mt-8">
              Subscribe to our newsletter for the latest updates in{" "}
              <span className="text-[var(--inia-primary-teal)] font-semibold">
                biomarker research
              </span>{" "}
              and{" "}
              <span className="text-[var(--inia-primary-teal)] font-semibold">
                clinical trials
              </span>
              .
            </p>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address for newsletter"
                    className="w-full px-5 py-3 rounded-l-md sm:rounded-r-none rounded-r-md border-none focus:ring-2 focus:ring-[var(--inia-primary-teal)] transition-all duration-300 text-base bg-white/90 shadow-sm placeholder:text-gray-400 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-r-md sm:rounded-l-none rounded-l-md font-bold text-base text-white transition-all duration-300 hover:brightness-110 mt-2 sm:mt-0"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--inia-primary-gold), var(--inia-primary-teal))",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          style={{ borderColor: "rgba(46,196,182,0.2)" }}
        >
          <div className="text-white/80 text-sm">
            © {new Date().getFullYear()} INIA Biosciences. All rights reserved.
          </div>
          <div className="flex space-x-4 md:space-x-8 text-sm flex-wrap justify-center gap-y-2">
            <a
              href="/privacy"
              className="text-white/80 hover:text-[var(--inia-primary-teal)] transition-all duration-300 font-medium relative group"
            >
              Privacy Policy
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[var(--inia-primary-teal)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/terms"
              className="text-white/80 hover:text-[var(--inia-primary-teal)] transition-all duration-300 font-medium relative group"
            >
              Terms of Service
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[var(--inia-primary-teal)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/cookies"
              className="text-white/80 hover:text-[var(--inia-primary-teal)] transition-all duration-300 font-medium relative group"
            >
              Cookie Policy
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[var(--inia-primary-teal)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>

      {/* FDA Compliance Notice */}
      <div
        className="py-4 text-center text-xs font-medium shadow-inner mt-8"
        style={{
          background: "var(--inia-primary-teal)",
          color: "white",
        }}
        role="contentinfo"
        aria-label="FDA Compliance Notice"
      >
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
