"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

/**
 * Site footer component
 */
export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{
        background:
          "linear-gradient(120deg, #0a2239 60%, var(--inia-secondary-dark-gray) 100%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center mb-2">
              <Image
                src="/logo.svg"
                alt="INIA Logo"
                width={160}
                height={54}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-[var(--inia-secondary-offwhite)] text-base leading-relaxed font-light">
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
            <div className="flex items-center space-x-4 mt-4">
              {[
                {
                  href: "https://linkedin.com",
                  icon: "/linkedin.svg",
                  hover: "var(--inia-primary-blue)",
                },
                {
                  href: "https://twitter.com",
                  icon: "/twitter.svg",
                  hover: "var(--inia-additional-cyan)",
                },
                {
                  href: "https://facebook.com",
                  icon: "/facebook.svg",
                  hover: "var(--inia-primary-gold)",
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = item.hover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    style={{ filter: "invert(1)" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--inia-primary-gold)] font-bold mb-6 text-lg tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="space-y-4">
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
                    className="relative inline-block text-[var(--inia-secondary-offwhite)] hover:text-[var(--inia-primary-teal)] font-medium transition-all duration-300 group text-base"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-[var(--inia-primary-teal)] to-[var(--inia-primary-gold)] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[var(--inia-primary-gold)] font-bold mb-6 text-lg tracking-widest uppercase">
              Contact
            </h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-[var(--inia-primary-teal)] group-hover:text-[var(--inia-primary-gold)] mt-1 flex-shrink-0 transition-all duration-300"
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
                <span className="text-[var(--inia-secondary-offwhite)] leading-relaxed">
                  123 Innovation Drive
                  <br />
                  Cambridge, MA 02139
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-[var(--inia-primary-teal)] group-hover:text-[var(--inia-primary-gold)] mt-1 flex-shrink-0 transition-all duration-300"
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
                  className="text-[var(--inia-secondary-offwhite)] hover:text-[var(--inia-primary-teal)] transition-all duration-300 font-medium"
                >
                  contact@inibiosciences.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-[var(--inia-primary-teal)] group-hover:text-[var(--inia-primary-gold)] mt-1 flex-shrink-0 transition-all duration-300"
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
                  className="text-[var(--inia-secondary-offwhite)] hover:text-[var(--inia-primary-teal)] transition-all duration-300 font-medium"
                >
                  +1 (617) 555-0123
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[var(--inia-primary-gold)] font-bold mb-6 text-lg tracking-widest uppercase">
              Stay Updated
            </h3>
            <p className="text-base text-[var(--inia-secondary-offwhite)] mb-6 font-light">
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
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-l-full border-none focus:ring-2 focus:ring-[var(--inia-primary-teal)] transition-all duration-300 text-base bg-white/90 shadow-sm placeholder:text-[var(--inia-secondary-light-gray)] font-medium"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-r-full font-bold text-base text-white transition-all duration-300"
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
          className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          style={{ borderColor: "var(--inia-primary-teal)" }}
        >
          <div className="text-[var(--inia-secondary-offwhite)] text-sm font-light">
            © {new Date().getFullYear()} INIA Biosciences. All rights reserved.
          </div>
          <div className="flex space-x-8 text-sm">
            <a
              href="/privacy"
              className="text-[var(--inia-secondary-offwhite)] hover:text-[var(--inia-primary-teal)] transition-all duration-300 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[var(--inia-secondary-offwhite)] hover:text-[var(--inia-primary-teal)] transition-all duration-300 font-medium"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="text-[var(--inia-secondary-offwhite)] hover:text-[var(--inia-primary-teal)] transition-all duration-300 font-medium"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* FDA Compliance Notice */}
      <div
        className="py-4 text-center text-xs font-medium shadow-inner mt-8"
        style={{ background: "var(--inia-primary-teal)", color: "white" }}
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
