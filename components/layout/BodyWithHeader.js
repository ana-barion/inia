"use client";
import React from "react";

import { usePathname } from "next/navigation";
import PropTypes from "prop-types";

import Header from "./Header";

export default function BodyWithHeader({ header, children }) {
  const pathname = usePathname();
  const isSanityRoute = pathname.startsWith("/studio");
  return (
    <body className="antialiased bg-white text-black dark:bg-black dark:text-white">
      {!isSanityRoute && <Header header={header} />}
      {children}
    </body>
  );
}

BodyWithHeader.propTypes = {
  header: PropTypes.any,
  children: PropTypes.node.isRequired,
};
