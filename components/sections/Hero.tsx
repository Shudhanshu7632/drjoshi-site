"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const numeric = parseInt(value.replace(/[^0-9]/g, ""));
    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(Math.floor(v));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {value.includes("+") && "+"}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#eef4fb]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,143,230,0.14),transparent_35%)] opacity-80" />
      <div className="absolute top-[-200px] right-[-140px] w-[700px] h-[700px] bg-[#5f8fe6]/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-220px] left-[-120px] w-[620px] h-[620px] bg-[#8BC34A]/10 blur-[120px] rounded-full" />

      <div className="relative z-20 max-w-[1380px] mx-auto px-6 lg:px-10 pt-5 pb-8">
        <div className="relative overflow-hidden rounded-[38px] bg-white/55 backdrop-blur-2xl border border-white/70 shadow-[0_30px_80px_rgba(46,91,154,0.10)] px-8 md:px-14 pt-24 pb-10 md:pt-28 md:pb-14">
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/15 to-transparent pointer-events-none" />
          <div className="absolute inset-[1px] rounded-[37px] border border-white/30 pointer-events-none" />
          <div className="absolute top-[-120px] left-[120px] w-[420px] h-[420px] bg-white/30 blur-[100px] rounded-full" />

          <div className="grid lg:grid-cols-[1.02fr_0.98fr] items-center gap-12 lg:gap-4">
            {/* LEFT */}
            <div className="relative z-10 max-w-[650px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 mb-7"
              >
                <p className="text-[13px] uppercase font-medium tracking-[0.18em] text-[#6b7f97]">
                  Ayurveda · Nephrology · Nutrition · Mumbai
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-light text-[#0a1b32] leading-[1.05] tracking-[-0.03em] text-[48px] sm:text-[66px] md:text-[88px]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Your body heals
                <br />
                <span className="text-[#2D6A4F]">as one system.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10 text-[#1a2a3a] text-[17px] leading-[1.7] max-w-[500px]"
              >
                Most CKD and cancer patients see three specialists who never
                speak to each other. Dr. Joshi coordinates nephrology, Ayurveda,
                and nutrition within one biomarker-driven protocol.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2E5B9A] text-white font-medium text-[15px] tracking-[0.02em] border border-[#5f8fe6]/20 shadow-[0_14px_40px_rgba(46,91,154,0.24)] hover:bg-[#244b82] hover:shadow-[0_18px_45px_rgba(46,91,154,0.30)] hover:scale-[1.03] transition-all duration-300"
                >
                  Begin Assessment →
                </Link>
                <Link
                  href="/treatments"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/55 backdrop-blur-xl border border-[#d1deef] text-[#1f3d63] font-medium text-[15px] tracking-[0.02em] shadow-[0_8px_25px_rgba(255,255,255,0.25)] hover:bg-white/75 hover:border-[#b9cde7] transition-all duration-300"
                >
                  See the Protocol →
                </Link>
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative w-full max-w-[720px]">
                <div
                  className="
        relative
        overflow-hidden

        rounded-[32px]

        bg-white

        border border-[#E6EDF5]

        shadow-[0_20px_60px_rgba(46,91,154,0.10)]
      "
                >
                  <Image
                    src="/heros image.png"
                    alt="Integrated Healthcare"
                    width={1200}
                    height={900}
                    priority
                    className="
          w-full
          h-auto

          object-contain
        "
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* TRUST STRIP */}
          <div className="mt-8 relative z-10 pt-5">
            <div className="absolute top-0 left-8 right-8 md:left-14 md:right-14 h-[1.5px] bg-gradient-to-r from-[#2E5B9A] via-[#3a8f6b] to-[#2D6A4F]" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {[
                { value: "10000+", label: "Patients treated" },
                { value: "35+", label: "Years of practice" },
                { value: "5", label: "Clinic branches" },
              ].map((item, i) => (
                <div key={i} className="relative flex-1 text-center">
                  <p className="text-[32px] md:text-[40px] font-light tracking-tight text-[#0a1b32]">
                    <Counter value={item.value} />
                  </p>
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-[#6b7f97]">
                    {item.label}
                  </p>
                  {i !== 2 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-gradient-to-b from-transparent via-[#ccd9ea] to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
