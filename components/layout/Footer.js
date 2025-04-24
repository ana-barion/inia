"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter as TwitterIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa";

/**
 * Site footer component
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo-white.svg"
              alt="INIA Logo"
              width={120}
              height={40}
              className="w-32 h-auto mb-4"
            />
            <p className="text-gray-400 text-sm mt-4 max-w-xs">
              Revolutionizing healthcare through innovative biomarker research
              and personalized medicine solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/science"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Join Our Study
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="block font-medium text-white">Address:</span>
                123 Innovation Drive
                <br />
                Cambridge, MA 02139
              </p>
              <p className="text-gray-400">
                <span className="block font-medium text-white">Email:</span>
                <a
                  href="mailto:contact@inibiosciences.com"
                  className="hover:text-white transition-colors"
                >
                  contact@inibiosciences.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="block font-medium text-white">Phone:</span>
                <a
                  href="tel:+1-617-555-0123"
                  className="hover:text-white transition-colors"
                >
                  +1 (617) 555-0123
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} INIA Biosciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
