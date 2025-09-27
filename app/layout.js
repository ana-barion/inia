"use client";

import PropTypes from "prop-types";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";

// keep the same variable names your CSS expects:
const GeistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const GeistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dolphin.png" type="image/svg+xml" />
        <title>INIA Biosciences</title>
        <meta
          name="description"
          content="INIA Biosciences - Revolutionizing healthcare through innovative biomarker research and personalized medicine solutions."
        />
      </head>
      <body className="antialiased bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
