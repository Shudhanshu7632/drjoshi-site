"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const biomarkers = [
  "Serum Creatinine",
  "eGFR",
  "Blood Urea Nitrogen",
  "Serum Albumin",
  "CA-125",
  "PSA",
  "CEA",
  "C-Reactive Protein",
  "HbA1c",
  "Ferritin",
  "Vitamin D",
  "Potassium",
  "Phosphorus",
  "Magnesium",
  "Hemoglobin",
  "Apolipoprotein B",
  "Thyroglobulin Antibody",
  "Uric Acid",
  "Interleukin-6",
  "Tumour Necrosis Factor",
];

const ITEM_H = 72;

export default function HealthPortal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.min(Math.round(v * (biomarkers.length - 1)), biomarkers.length - 1));
  });

  // Translate list so active item stays centered
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(biomarkers.length - 1) * ITEM_H]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a1b32]"
      style={{ height: `calc(${biomarkers.length * ITEM_H * 1.8}px + 100vh)` }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1b32] to-[#061422]" />
      {/* Seamless fade from light section above */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#c7d8ea] to-transparent opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2D6A4F]/06 blur-[120px] rounded-full" />

      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-between py-16 overflow-hidden z-10 relative">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-white/35 mb-5">
            Integrated Clinical Protocol
          </p>
          <h2 className="text-[32px] md:text-[44px] font-light text-white leading-tight tracking-[-0.02em]">
            Measured. Tracked.{" "}
            <span className="italic text-[#52B788]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Recovered.
            </span>
          </h2>
        </motion.div>

        {/* LIST AREA */}
        <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden">

          {/* CENTER FADE — top */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a1b32] to-transparent z-10 pointer-events-none" />
          {/* CENTER FADE — bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1b32] to-transparent z-10 pointer-events-none" />

          {/* SCROLLING LIST */}
          <div className="relative overflow-hidden" style={{ height: `${ITEM_H * 7}px` }}>
            <motion.div
              style={{ y }}
              className="flex flex-col items-center"
              // Offset so first item starts at center
              initial={{ y: ITEM_H * 3 }}
            >
              {biomarkers.map((name, i) => {
                const distance = Math.abs(i - activeIndex);
                const isActive = i === activeIndex;
                const opacity = isActive ? 1 : Math.max(0.1, 1 - distance * 0.32);
                const fontSize = isActive ? "clamp(32px, 4vw, 48px)" : distance === 1 ? "clamp(20px, 2.5vw, 28px)" : "clamp(16px, 2vw, 22px)";

                return (
                  <div
                    key={i}
                    className="flex items-center justify-center transition-all duration-400"
                    style={{ height: `${ITEM_H}px` }}
                  >
                    <span
                      className="font-light tracking-[-0.01em] transition-all duration-400"
                      style={{
                        opacity,
                        color: isActive ? "#52B788" : "white",
                        fontSize,
                      }}
                    >
                      {name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/35 text-white text-[14px] font-medium transition-all duration-300"
        >
          Book an Assessment →
        </Link>

      </div>
    </section>
  );
}
