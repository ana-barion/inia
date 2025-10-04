"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ import router
import * as THREE from "three";
import "vanta/dist/vanta.cells.min";

export default function Hero() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [vantaReady, setVantaReady] = useState(false);
  const router = useRouter(); // ✅ hook for navigation

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
        background: vantaReady ? "none" : "#0a2239",
        opacity: vantaReady ? 1 : 0,
        transition: "opacity 0.2s",
      }}
    >
      {vantaReady && (
        <div className="max-w-2xl z-10 pl-6 md:pl-12">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            style={{ color: "var(--inia-primary-teal)", letterSpacing: "-1px" }}
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
            {/* Learn About Our Treatment -> /contact */}
            <button
              onClick={() => router.push("/contact")}
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

            {/* For Healthcare Providers -> /science */}
            <button
              onClick={() => router.push("/science")}
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
    </section>
  );
}
