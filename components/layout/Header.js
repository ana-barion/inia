"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

/**
 * Main navigation header for the site
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className="w-full sticky top-0 z-50 shadow-lg"
      style={{ background: "var(--background)" }}
    >
      {/* Top bar with email and social links */}
      <div
        className="w-full flex items-center justify-between px-4 h-7 md:h-8 lg:h-9 header-topbar overflow-hidden"
        style={{ background: "var(--inia-primary-teal)" }}
      >
        <a
          href="mailto:contact@inibiosciences.com"
          className="text-sm tracking-wide font-medium transition-colors duration-300 header-contact-email"
          style={{ color: "#fff", textShadow: "0 2px 4px rgba(0,0,0,0.18)" }}
        >
          contact@inibiosciences.com
        </a>
        <div className="flex items-center space-x-3 sm:space-x-2 md:space-x-3">
          {[
            {
              href: "https://www.linkedin.com/company/inia-biosciences/",
              icon: "/linkedin.svg",
              hover: "var(--inia-primary-blue)",
              label: "LinkedIn",
            },
            {
              href: "https://twitter.com/IniaBiosciences",
              icon: "/twitter.svg",
              hover: "var(--inia-additional-cyan)",
              label: "Twitter",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="header-social-icon p-2 focus-visible:ring-2 focus-visible:ring-white"
              style={{ background: "transparent" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background =
                  item.label === "LinkedIn" ? "#1793b6" : "#0e7c86")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <span className="py-1 flex items-center justify-center">
                <div className="icon-glow-wrapper w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    className="w-full h-full"
                    width={24}
                    height={24}
                    style={{ filter: "invert(1)" }}
                  />
                </div>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <div
        className="w-full border-b"
        style={{
          borderColor: "var(--inia-primary-teal)",
          background: "var(--background)",
        }}
      >
        <div className="w-full px-2 sm:px-4 md:px-8 flex items-center h-14 md:h-16 lg:h-20 justify-between flex-nowrap overflow-x-hidden gap-x-2">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0 h-full">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center self-center py-0 pr-2 sm:py-0 sm:pr-4 h-full"
              style={{ minWidth: 0 }}
            >
              <Image
                src="/logo.png"
                alt="INIA Logo"
                className="w-full max-w-[120px] h-8 sm:max-w-[170px] sm:h-10 md:max-w-[210px] md:h-12 lg:h-14 object-contain align-middle"
                width={210}
                height={56}
                priority
                style={{ position: "relative", top: "3px" }}
              />
            </Link>
          </div>

          {/* Center: Navigation (hidden on mobile) */}
          <nav className="min-w-0 flex-1 justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 hidden lg:flex">
            {[
              { href: "/", label: "Home" },
              { href: "/science", label: "Science" },
              { href: "/team", label: "Team" },
              { href: "/news", label: "News" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-2 py-1 text-sm font-semibold tracking-widest uppercase text-[var(--inia-primary-blue)] hover:text-[var(--inia-primary-gold)] transition-colors duration-200 group nav-link-underline"
                style={{ letterSpacing: 2 }}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[var(--inia-primary-blue)] to-[var(--inia-primary-gold)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right: CTA and Hamburger */}
          <div className="flex items-center flex-shrink-0 min-w-0 justify-end">
            <Link
              href="/join"
              className="mr-1 sm:ml-4 md:ml-6 inline-flex items-center justify-center px-2 sm:px-4 py-1.5 sm:py-2 lg:py-3 rounded-full shadow text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 join-cta-btn whitespace-nowrap w-full max-w-[100px] sm:max-w-[140px] md:max-w-[180px] min-w-[60px] hidden lg:inline-flex flex-shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, var(--inia-primary-gold), var(--inia-primary-teal))",
                color: "white",
                boxShadow: "0 2px 12px 0 rgba(46,196,182,0.15)",
                letterSpacing: 2,
              }}
            >
              <span className="block lg:hidden">Join</span>
              <span className="hidden lg:block">Join Our Study</span>
            </Link>
            {/* Hamburger button (mobile only) */}
            <button
              className="ml-2 sm:ml-4 flex lg:hidden items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded focus:outline-none focus:ring-2 focus:ring-[var(--inia-primary-teal)] relative"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {/* Hamburger icon */}
              <svg
                className={`w-7 h-7 transition-all duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`w-7 h-7 absolute transition-all duration-200 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center animate-fadeIn px-4 sm:px-8"
          style={{ background: "rgba(44, 62, 80, 0.98)" }}
        >
          {/* Logo/brand mark at the top */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="INIA Logo"
              className="w-full max-w-xs h-12 sm:h-16 object-contain mx-auto mb-8"
              width={320}
              height={64}
              priority
            />
          </div>
          <nav className="flex flex-col space-y-8 text-center w-full max-w-xs mx-auto mt-20">
            {[
              { href: "/", label: "Home" },
              { href: "/science", label: "Science" },
              { href: "/team", label: "Team" },
              { href: "/news", label: "News" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-[var(--inia-secondary-offwhite)] nav-link-underline w-full block py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--inia-primary-teal)]"
                style={{ letterSpacing: 3, background: "transparent" }}
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-4 rounded-full shadow text-lg sm:text-xl font-bold uppercase tracking-widest join-cta-btn w-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--inia-primary-gold), var(--inia-primary-teal))",
                color: "#fff",
                boxShadow: "0 2px 12px 0 rgba(46,196,182,0.15)",
                letterSpacing: 3,
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Join Our Study
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

// TODO: For full mobile responsiveness, implement a hamburger menu and mobile nav in a future step.
