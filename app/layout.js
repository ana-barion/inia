"use client";

import PropTypes from "prop-types";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

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
