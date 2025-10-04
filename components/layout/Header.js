"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import PropTypes from "prop-types";

import { client } from "@/sanity/lib/client";

// Separate component for social icons
function SocialIcon({ item }) {
  const imageProps = useNextSanityImage(client, item.icon);

  return (
    <a
      key={item.url}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.platform}
      className="header-social-icon p-1.5 focus-visible:ring-2 focus-visible:ring-white rounded-full transition-all duration-300"
      style={{ background: "transparent" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background =
          item.platform === "linkedin" ? "#1793b6" : "#0e7c86")
      }
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 relative overflow-hidden flex items-center justify-center">
        {item.icon && (
          <Image
            {...imageProps}
            alt={item.platform}
            className="w-full h-full object-contain"
            style={{
              filter: "brightness(0) invert(1)",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            width={20}
            height={20}
          />
        )}
      </div>
    </a>
  );
}

SocialIcon.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }).isRequired,
};

/**
 * Main navigation header for the site
 */
export default function Header({ header }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize image props
  const logoProps = useNextSanityImage(client, header?.logo);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const hasValidLogo = mounted && header?.logo && logoProps?.src;

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

  // Filter enabled navigation links
  const enabledNavLinks =
    header?.navigationLinks?.filter((link) => link.isEnabled) || [];
  const ctaButton = header?.ctaButton;

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <header
      className={`w-full ${header?.isSticky ? "sticky" : "relative"} top-0 z-50 shadow-lg`}
      style={{ background: "white" }}
    >
      {/* Top bar with email and social links */}
      <div
        className="w-full flex items-center justify-between px-4 h-7 md:h-8 lg:h-11 header-topbar overflow-hidden"
        style={{
          background: "var(--inia-primary-teal)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <a
          href={`mailto:${header?.contactEmail}`}
          className="text-sm tracking-wide font-medium transition-colors duration-300 header-contact-email"
          style={{
            color: "#fff",
            textShadow: "0 2px 4px rgba(0,0,0,0.18)",
            paddingLeft: "4px",
          }}
        >
          {header?.contactEmail}
        </a>
        <div className="flex items-center space-x-3 sm:space-x-2 md:space-x-3 pr-2">
          {header?.socialLinks?.map((item) => (
            <SocialIcon key={item.url} item={item} />
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <div
        className="w-full border-b"
        style={{
          borderColor: "var(--inia-primary-teal)",
          background: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12 flex items-center h-14 md:h-16 lg:h-28 justify-between flex-nowrap overflow-x-hidden gap-x-2">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0 h-full pl-4 md:pl-6">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center self-center py-0 pr-4 sm:py-0 sm:pr-6 h-full logo-hover"
              style={{ minWidth: 0, position: "relative", overflow: "visible" }}
            >
              {hasValidLogo ? (
                <Image
                  {...logoProps}
                  alt={header?.logo?.alt || "INIA Logo"}
                  className="w-full max-w-[140px] h-9 sm:max-w-[200px] sm:h-12 md:max-w-[240px] md:h-14 lg:max-w-[300px] lg:h-24 object-contain align-middle transition-transform duration-300 ease-in-out"
                  style={{
                    position: "relative",
                    top: "3px",
                    transition: "all 0.3s ease",
                    transformOrigin: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.05) translateX(2px)";
                    e.currentTarget.style.filter =
                      "drop-shadow(0 0 4px rgba(46, 196, 182, 0.4))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "none";
                  }}
                />
              ) : (
                <span className="text-lg font-bold">INIA</span>
              )}
            </Link>
          </div>

          {/* Center: Navigation (hidden on mobile) */}
          <nav className="min-w-0 flex-1 justify-center items-center hidden xl:flex xl:space-x-8 2xl:space-x-10">
            {enabledNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 text-sm lg:text-lg font-semibold tracking-widest uppercase text-[var(--inia-primary-blue)] hover:text-[var(--inia-primary-gold)] transition-colors duration-200 group nav-link-underline ${
                  link.style === "secondary" ? "nav-secondary" : ""
                }`}
                style={{ letterSpacing: 2 }}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[var(--inia-primary-blue)] to-[var(--inia-primary-gold)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right: CTA and Hamburger */}
          <div className="flex items-center flex-shrink-0 min-w-0 justify-end">
            {ctaButton?.isEnabled && (
              <Link
                href={ctaButton.href}
                className={`mr-2 sm:ml-6 md:ml-8 inline-flex items-center justify-center px-3 sm:px-5 lg:px-7 py-2 sm:py-2.5 lg:py-4 rounded-full shadow text-[10px] sm:text-xs md:text-sm lg:text-lg font-bold uppercase tracking-widest transition-all duration-300 join-cta-btn whitespace-nowrap w-full max-w-[110px] sm:max-w-[150px] md:max-w-[190px] lg:max-w-[220px] min-w-[70px] hidden xl:inline-flex flex-shrink-0 ${
                  ctaButton.style === "secondary" ? "cta-secondary" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(90deg, var(--inia-primary-gold), var(--inia-primary-teal))",
                  color: "white",
                  boxShadow: "0 3px 12px 0 rgba(46,196,182,0.2)",
                  letterSpacing: 2,
                }}
                {...(ctaButton.url?.openInNewTab
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="block lg:hidden">{ctaButton.mobileText}</span>
                <span className="hidden lg:block">{ctaButton.text}</span>
              </Link>
            )}
            {/* Hamburger button (mobile & smaller desktop) */}
            <button
              className="ml-2 sm:ml-4 flex xl:hidden items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded focus:outline-none focus:ring-2 focus:ring-[var(--inia-primary-teal)] relative"
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
                stroke="var(--inia-primary-blue)"
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
                stroke="var(--inia-primary-blue)"
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
            {hasValidLogo ? (
              <Image
                {...logoProps}
                alt={header?.logo?.alt || "INIA Logo"}
                className="w-full max-w-xs h-12 sm:h-16 object-contain mx-auto mb-8"
                priority
              />
            ) : (
              <span className="text-2xl font-bold text-white">INIA</span>
            )}
          </div>
          <nav className="flex flex-col space-y-8 text-center w-full max-w-xs mx-auto mt-20">
            {enabledNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl sm:text-2xl font-bold uppercase tracking-widest text-white nav-link-underline w-full block py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--inia-primary-teal)] ${
                  link.style === "secondary" ? "nav-secondary" : ""
                }`}
                style={{ letterSpacing: 3, background: "transparent" }}
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
              >
                {link.label}
              </Link>
            ))}
            {ctaButton?.isEnabled && (
              <Link
                href={ctaButton.href}
                className={`mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-4 rounded-full shadow text-lg sm:text-xl font-bold uppercase tracking-widest join-cta-btn w-full ${
                  ctaButton.style === "secondary" ? "cta-secondary" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(90deg, var(--inia-primary-gold), var(--inia-primary-teal))",
                  color: "#fff",
                  boxShadow: "0 2px 12px 0 rgba(46,196,182,0.15)",
                  letterSpacing: 3,
                }}
                onClick={() => setIsMenuOpen(false)}
                {...(ctaButton.url?.openInNewTab
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {ctaButton.mobileText || ctaButton.text}
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  header: PropTypes.shape({
    isSticky: PropTypes.bool,
    logo: PropTypes.shape({
      alt: PropTypes.string,
      // Image fields handled by useNextSanityImage
    }),
    contactEmail: PropTypes.string,
    navigationLinks: PropTypes.arrayOf(
      PropTypes.shape({
        isEnabled: PropTypes.bool,
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        style: PropTypes.oneOf(["primary", "secondary"]),
      }),
    ),
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        platform: PropTypes.string.isRequired,
        icon: PropTypes.object, // Image fields handled by useNextSanityImage
      }),
    ),
    ctaButton: PropTypes.shape({
      isEnabled: PropTypes.bool,
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      mobileText: PropTypes.string,
      style: PropTypes.oneOf(["primary", "secondary"]),
      url: PropTypes.shape({
        openInNewTab: PropTypes.bool,
      }),
    }),
  }),
};

// TODO: For full mobile responsiveness, implement a hamburger menu and mobile nav in a future step.
