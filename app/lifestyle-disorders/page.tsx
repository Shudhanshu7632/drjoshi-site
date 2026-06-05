"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FinalCTA from "@/components/sections/FinalCTA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const conditions = [
  {
    title: "Type 2 Diabetes",
    tag: "Metabolic",
    desc: "Insulin resistance treated at the constitution level. Pancreatic support formulations combined with dietary reset. Most patients see measurable HbA1c reduction within 3 months.",
    metric: "HbA1c tracked",
  },
  {
    title: "Hypertension",
    tag: "Cardiovascular",
    desc: "Blood pressure driven by vascular inflammation and chronic stress. Both mechanisms addressed — not just the reading on the cuff.",
    metric: "BP + inflammation",
  },
  {
    title: "Obesity & Weight",
    tag: "Metabolic",
    desc: "Not calorie restriction. Constitution-based metabolic recalibration. The body is retrained to regulate — not disciplined into submission.",
    metric: "BMI + metabolism",
  },
  {
    title: "PCOS & Hormonal",
    tag: "Endocrine",
    desc: "PCOS as a systemic condition — not just a cycle problem. Protocols address the full endocrine cascade: insulin, cortisol, and reproductive hormones.",
    metric: "Hormonal panels",
  },
];

const steps = [
  {
    n: "01",
    title: "Constitution-first assessment",
    body: "Prakriti analysis determines why your metabolism behaves the way it does. The body type determines the prescription — not the diagnosis alone.",
    chip: "Prakriti Analysis",
  },
  {
    n: "02",
    title: "Root cause protocol",
    body: "Formulations, dietary prescription, and lifestyle changes targeting the actual mechanism — not the downstream symptom. No two protocols are identical.",
    chip: "Classical Pharmacopoeia",
  },
  {
    n: "03",
    title: "Measurable outcomes",
    body: "HbA1c, blood pressure, BMI, and hormonal panels tracked over time. Progress is documented. Adjustments are made on data.",
    chip: "Lab-tracked Progress",
  },
];

const heroStats = [
  { n: "3 months", l: "Average to first measurable result" },
  { n: "4", l: "Conditions addressed" },
  { n: "Root", l: "Cause — not symptom management" },
  { n: "Zero", l: "Dependency protocols" },
];

export default function LifestylePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroStatsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero stats: cascade from right
    if (heroStatsRef.current) {
      const statCards = heroStatsRef.current.querySelectorAll<HTMLElement>(".hero-stat");
      statCards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: 32, scale: 0.94 },
          { opacity: 1, x: 0, scale: 1, duration: 0.6, delay: 0.25 + i * 0.1, ease: "power3.out" }
        );
      });
    }

    // Conditions grid: stagger scale reveal — alternating up/down offset
    gsap.utils.toArray<HTMLElement>(".condition-card").forEach((card, i) => {
      const isRight = i % 2 === 1;
      gsap.fromTo(card,
        { opacity: 0, y: isRight ? 48 : 24, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        }
      );
    });

    // How-it-works rows: left stagger slide
    gsap.utils.toArray<HTMLElement>(".step-row").forEach((row, i) => {
      gsap.fromTo(row,
        { opacity: 0, x: -32 },
        {
          opacity: 1, x: 0, duration: 0.65, delay: i * 0.13, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 84%" },
        }
      );
    });

    // Outcome metric numbers: count-up effect
    gsap.utils.toArray<HTMLElement>(".outcome-num").forEach((el) => {
      const target = parseFloat(el.getAttribute("data-target") || "0");
      const isDecimal = String(target).includes(".");
      gsap.fromTo({ val: 0 },
        { val: 0 },
        {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: function () {
            el.textContent = isDecimal
              ? (this.targets()[0] as { val: number }).val.toFixed(1)
              : Math.round((this.targets()[0] as { val: number }).val).toString();
          },
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef}>

      {/* HERO — asymmetric: content left, stat cluster right */}
      <section className="relative w-full min-h-[680px] md:min-h-[900px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,195,74,0.10),transparent_45%)]" />
        <div className="absolute top-[-180px] right-[-100px] w-[650px] h-[650px] bg-[#5f8fe6]/12 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-120px] w-[600px] h-[600px] bg-[#8BC34A]/10 blur-[120px] rounded-full" />

        <div className="relative z-20 max-w-[1380px] mx-auto px-6 lg:px-10 pt-[170px] pb-20">
          <div className="relative overflow-hidden rounded-[38px] bg-white/42 backdrop-blur-2xl border border-white/65 shadow-[0_35px_90px_rgba(28,58,107,0.12)] px-8 md:px-14 py-14 md:py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[37px] border border-white/30 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-10 lg:gap-16">

              {/* LEFT — CONTENT */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="inline-flex items-center gap-3 mb-7"
                >
                  <div className="w-10 h-[1px] bg-[#2E5B9A]" />
                  <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">Lifestyle Disorders</p>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#0a1b32] font-light leading-[0.96] tracking-[-0.05em] text-[52px] sm:text-[66px] md:text-[84px]"
                >
                  Not managed.
                  <br />
                  <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                    Resolved.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 text-[#4e647d] text-[17px] leading-[1.9] max-w-[480px]"
                >
                  Diabetes, hypertension, obesity, PCOS — conditions modern medicine treats as permanent. Our protocols address constitution and root cause. Measurable results without lifelong dependency.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex flex-wrap gap-4 mt-10"
                >
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2E5B9A] text-white font-medium border border-[#5f8fe6]/20 shadow-[0_14px_40px_rgba(46,91,154,0.24)] hover:bg-[#244b82] hover:scale-[1.03] transition-all duration-300">
                    Book a Consultation →
                  </Link>
                </motion.div>
              </div>

              {/* RIGHT — STAT CLUSTER (GSAP animated) */}
              <div ref={heroStatsRef} className="hidden lg:flex flex-col gap-4">
                {heroStats.map((s, i) => (
                  <div
                    key={s.l}
                    className="hero-stat rounded-[18px] px-5 py-4 bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_8px_20px_rgba(46,91,154,0.06)]"
                  >
                    <p
                      className="text-[#10233b] font-light leading-none mb-1.5"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px" }}
                    >
                      {s.n}
                    </p>
                    <p className="text-[#6b7f97] text-[11px] leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS GRID — alternating offset */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />
        <div className="absolute top-[-160px] right-[-100px] w-[580px] h-[580px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">Conditions</p>
            <h2 className="text-[42px] md:text-[58px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b] max-w-xl">
              Four conditions.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                One approach.
              </span>
            </h2>
          </motion.div>

          {/* Grid with alternating top offset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:items-start">
            {conditions.map((c, i) => (
              <div
                key={c.title}
                className={`condition-card rounded-[28px] p-7 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_15px_50px_rgba(46,91,154,0.08)] ${i % 2 === 1 ? "sm:mt-10" : ""}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/75 border border-white/70 text-[#2E5B9A] text-[10px] font-medium uppercase tracking-[0.12em]">{c.tag}</span>
                  <span
                    className="text-[#bfd0e6] font-light leading-none"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "52px" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-[#10233b] text-[22px] font-light leading-snug tracking-[-0.02em] mb-1">{c.title}</h3>
                <div className="w-10 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A] mb-4" />
                <p className="text-[#5f738c] text-[13px] leading-[1.8] mb-5">{c.desc}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E5B9A]/08 border border-[#2E5B9A]/15 text-[#2E5B9A] text-[11px] font-medium">
                  {c.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME METRICS — count-up strip */}
      <section className="relative overflow-hidden py-14">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="relative z-10 max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { target: 87, suffix: "%", label: "Report reduced medication dependency" },
              { target: 3, suffix: " mo", label: "Average to first measurable result" },
              { target: 4, suffix: "", label: "Conditions treated by constitution" },
              { target: 12, suffix: "+", label: "Years average clinical experience" },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative overflow-hidden rounded-[24px] p-6 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(46,91,154,0.07)] text-center"
              >
                <div className="flex items-baseline justify-center gap-0.5 mb-2">
                  <span
                    className="outcome-num text-[#10233b] font-light leading-none"
                    data-target={m.target}
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "52px" }}
                  >
                    0
                  </span>
                  <span
                    className="text-[#2E5B9A] font-light"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px" }}
                  >
                    {m.suffix}
                  </span>
                </div>
                <p className="text-[#506985] text-[12px] leading-snug">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — GSAP row reveals inside glass container */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#edf4fb] to-[#dfeaf8]" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[600px] h-[600px] bg-[#8BC34A]/08 blur-[120px] rounded-full" />
        <div className="absolute top-[-180px] left-[-100px] w-[580px] h-[580px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">How it works</p>
            <h2 className="text-[42px] md:text-[58px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b] max-w-xl">
              From constitution
              <br />
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>to resolution.</span>
            </h2>
          </motion.div>

          {/* Glass container */}
          <div className="relative overflow-hidden rounded-[40px] px-8 md:px-14 py-12 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(244,249,255,0.62))] backdrop-blur-2xl border border-white/70 shadow-[0_30px_90px_rgba(46,91,154,0.10)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[39px] border border-white/40 pointer-events-none" />

            <div className="relative z-10 flex flex-col divide-y divide-white/60">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="step-row py-8 first:pt-0 last:pb-0 flex gap-8 md:gap-12 items-start"
                >
                  <div
                    className="flex-shrink-0 text-[#bfd0e6] leading-none font-light tracking-[-0.04em] w-16 pt-1"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "64px" }}
                  >
                    {step.n}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-[#10233b] text-[19px] md:text-[22px] font-semibold leading-snug tracking-[-0.01em]">
                        {step.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-white/75 border border-white/70 text-[#2E5B9A] text-[10px] font-medium uppercase tracking-[0.12em]">
                        {step.chip}
                      </span>
                    </div>
                    <p className="text-[#5f738c] text-[14px] leading-[1.85]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#2E5B9A] text-white text-[15px] font-medium shadow-[0_18px_50px_rgba(46,91,154,0.18)] hover:bg-[#244b82] hover:scale-[1.04] transition-all duration-300"
            >
              Start Your Protocol
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
