"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: 74,
    suffix: "%",
    label: "CKD patients show measurable creatinine improvement within 3 months",
    color: "#2E5B9A",
  },
  {
    value: 68,
    suffix: "%",
    label: "Patients avoid dialysis after completing the full integrated protocol",
    color: "#7AA5DF",
  },
  {
    value: 82,
    suffix: "%",
    label: "Reduction in oncology side-effect burden with integrative support",
    color: "#2D6A4F",
  },
  {
    value: 94,
    suffix: "%",
    label: "Patients who would recommend Dr. Joshi's protocol to others",
    color: "#5E87C5",
  },
];

const R = 90;
const CIRC = 2 * Math.PI * R;

export default function TrustMarquee() {
  return (
    <section className="bg-gradient-to-b from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea] py-10">
      <div className="max-w-[1350px] mx-auto px-6">
        <div className="rounded-[38px] bg-white/55 backdrop-blur-2xl border border-white/70 shadow-[0_30px_80px_rgba(46,91,154,0.10)] px-8 py-14">

          {/* HEADING */}
          <div className="text-center mb-14">
            <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#6b7f97] mb-4">
              Clinical Outcomes
            </p>
            <h2 className="text-[38px] md:text-[54px] text-[#0a1b32] font-light leading-[1.08] tracking-[-0.03em]">
              Numbers that speak{" "}
              <span className="italic text-[#2D6A4F]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                for themselves.
              </span>
            </h2>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center px-6 py-8 relative">

                {i !== 0 && (
                  <div className="hidden md:block absolute left-0 top-12 bottom-12 w-[1px] bg-[#d8e3f0]" />
                )}

                {/* CIRCLE */}
                <div className="relative w-[180px] h-[180px] mb-6">
                  <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r={R} stroke="#dbe7f5" strokeWidth="10" fill="none" />
                    <motion.circle
                      cx="100" cy="100" r={R}
                      stroke={item.color}
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={CIRC}
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: CIRC }}
                      whileInView={{ strokeDashoffset: CIRC * (1 - item.value / 100) }}
                      transition={{ duration: 1.4, ease: "easeOut", delay: i * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[38px] font-light text-[#0a1b32] tracking-tight">
                      {item.value}{item.suffix}
                    </span>
                  </div>
                </div>

                <p className="text-[14px] text-[#6b7f97] leading-[1.7] max-w-[200px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
