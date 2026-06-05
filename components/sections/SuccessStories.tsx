"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    condition: "CKD · Stage 3",
    outcome: "4.1 → 1.8",
    metric: "Creatinine mg/dL",
    quote: "My nephrologist was stunned. Dr. Joshi's protocol did what three years of conventional management couldn't.",
    name: "Sanjay D.",
    detail: "Mumbai · 14 sessions",
    accentColor: "#2E5B9A",
  },
  {
    condition: "CKD · Stage 4",
    outcome: "Dialysis avoided",
    metric: "After 18 months on protocol",
    quote: "After two years of rising creatinine, it came down and stayed stable. My nephrologist couldn't believe the turnaround.",
    name: "Vikram S.",
    detail: "Pune · 18 sessions",
    accentColor: "#2D6A4F",
  },
  {
    condition: "Cancer Support",
    outcome: "Side-effects halved",
    metric: "During chemotherapy",
    quote: "I could complete my treatment without stopping. The support protocol made the hardest months bearable.",
    name: "Priya M.",
    detail: "Pune · 22 sessions",
    accentColor: "#2E5B9A",
  },
  {
    condition: "Cancer + CKD",
    outcome: "Both stabilised",
    metric: "Concurrent conditions",
    quote: "No one else was treating both together. Dr. Joshi's clinic was the only place that looked at the full picture.",
    name: "Meera R.",
    detail: "Mumbai · 30 sessions",
    accentColor: "#2D6A4F",
  },
];

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-[#eef4fb] py-10">

      <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#8BC34A]/8 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1350px] mx-auto px-6">
        <div className="relative rounded-[38px] overflow-hidden px-8 md:px-16 py-16 md:py-20 bg-white/55 backdrop-blur-2xl border border-white/70 shadow-[0_30px_80px_rgba(46,91,154,0.10)]">

          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

          {/* HEADER */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#6b7f97] mb-5">
                Patient Outcomes
              </p>
              <h2 className="text-[38px] md:text-[54px] font-light text-[#0a1b32] leading-[1.05] tracking-[-0.03em]">
                Real recoveries.{" "}
                <span className="italic text-[#2D6A4F]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Real lives transformed.
                </span>
              </h2>
            </div>
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-[#2E5B9A] hover:gap-3 text-[14px] font-medium transition-all duration-300 whitespace-nowrap"
            >
              View all stories <ArrowRight size={15} />
            </Link>
          </div>

          {/* CARDS */}
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stories.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-[30px] bg-white/60 backdrop-blur-xl border border-white/80 p-7 shadow-[0_18px_50px_rgba(46,91,154,0.08)] hover:shadow-[0_24px_70px_rgba(46,91,154,0.13)] hover:-translate-y-1 transition-all duration-400 flex flex-col"
              >
                {/* CONDITION */}
                <p
                  className="text-[11px] uppercase tracking-[0.22em] font-medium mb-5"
                  style={{ color: s.accentColor }}
                >
                  {s.condition}
                </p>

                {/* OUTCOME */}
                <p className="text-[#0a1b32] text-[26px] font-light tracking-tight leading-none">
                  {s.outcome}
                </p>
                <p className="text-[#6b7f97] text-[11px] uppercase tracking-[0.14em] mt-1.5 mb-5">
                  {s.metric}
                </p>

                {/* DIVIDER */}
                <div className="h-[1px] w-full mb-5" style={{ background: `${s.accentColor}20` }} />

                {/* QUOTE */}
                <p className="text-[#1a2a3a] text-[14px] leading-[1.8] flex-1">
                  {s.quote}
                </p>

                {/* PATIENT — plain text, no avatar */}
                <div className="mt-6 pt-5 border-t border-[#e8eef7]">
                  <p className="text-[#0a1b32] text-[13px] font-semibold">{s.name}</p>
                  <p className="text-[#6b7f97] text-[12px] mt-0.5">{s.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
