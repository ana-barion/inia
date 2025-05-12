"use client";
import { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import "vanta/dist/vanta.cells.min"; // side-effect import

export default function Hero() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [vantaReady, setVantaReady] = useState(false);

  useEffect(() => {
    let fallbackTimeout;
    if (
      !vantaEffect.current &&
      vantaRef.current &&
      typeof window !== "undefined" &&
      window.VANTA &&
      window.VANTA.CELLS
    ) {
      vantaEffect.current = window.VANTA.CELLS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        color1: 0x0a2239,
        color2: 0x2ec4b6,
        colorMode: "lerpGradient",
        size: 1.2,
      });
      setVantaReady(true);
    } else {
      // fallback: show hero after 1.2s if Vanta fails
      fallbackTimeout = setTimeout(() => setVantaReady(true), 1200);
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="w-full flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-4 md:px-0 relative overflow-hidden"
      style={{
        color: "white",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: vantaReady ? "none" : "#0a2239", // fallback color
        opacity: vantaReady ? 1 : 0, // hide until ready
        transition: "opacity 0.2s",
      }}
    >
      {vantaReady && (
        <div className="max-w-2xl z-10">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            style={{
              color: "var(--inia-primary-teal)",
              letterSpacing: "-1px",
            }}
          >
            Harnessing ultrasound bioelectronics
            <br />
            for the future of healthcare
          </h1>
          <p className="text-2xl mb-10 font-light" style={{ color: "white" }}>
            Revolutionizing psoriasis treatment through innovative bioelectronic
            medicine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center text-center w-full">
            <button
              className="w-full max-w-xs sm:w-auto px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105 whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(90deg, var(--inia-primary-gold), var(--inia-primary-teal))",
                color: "white",
                boxShadow: "0 2px 12px 0 rgba(46,196,182,0.15)",
              }}
            >
              Learn About Our Treatment
            </button>
            <button
              className="w-full max-w-xs sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-2 transition-transform hover:scale-105 whitespace-nowrap"
              style={{
                borderColor: "var(--inia-primary-teal)",
                color: "var(--inia-primary-teal)",
                background: "white",
              }}
            >
              For Healthcare Providers
            </button>
          </div>
        </div>
      )}
      {/* Abstract SVG background */}
      <svg
        className="absolute right-0 bottom-0 z-0 opacity-30 hidden md:block"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ right: "-100px", bottom: "-100px" }}
      >
        <circle cx="300" cy="300" r="300" fill="var(--inia-primary-gold)" />
        <circle cx="400" cy="400" r="180" fill="var(--inia-primary-teal)" />
      </svg>
    </section>
  );
}
