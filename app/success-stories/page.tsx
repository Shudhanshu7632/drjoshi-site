"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FinalCTA from "@/components/sections/FinalCTA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const featured = [
  {
    condition: "Chronic Kidney Disease",
    tag: "CKD",
    patient: "Ramesh K., 58 — Mumbai",
    outcome: "GFR improved from 18 to 29 over 14 months. No dialysis.",
    quote: "I was told my kidneys were too far gone. Two years later, I'm still off dialysis. I check my labs now without dreading the numbers.",
    duration: "14 months",
    location: "Mumbai, India",
  },
  {
    condition: "Integrative Cancer Support",
    tag: "Cancer",
    patient: "Priya S., 44 — London, UK",
    outcome: "Completed full chemotherapy cycle. Fatigue significantly reduced. WBC count maintained.",
    quote: "The treatment was brutal but manageable. Dr. Joshi's protocol ran alongside my oncology team's plan — they were surprised how well I held up.",
    duration: "8 months",
    location: "London, UK",
  },
  {
    condition: "Type 2 Diabetes",
    tag: "Lifestyle",
    patient: "Anil M., 52 — Dubai, UAE",
    outcome: "HbA1c reduced from 9.2 to 6.4 in 6 months. Metformin dosage halved.",
    quote: "My doctor asked what I had changed. I told him. He asked for the name of the protocol.",
    duration: "6 months",
    location: "Dubai, UAE",
  },
];

const grid = [
  { name: "Sunita R.", location: "Pune", condition: "Hypertension", outcome: "BP normalised in 10 weeks. Off one medication." },
  { name: "James T.", location: "Manchester, UK", condition: "CKD Stage 3", outcome: "GFR stable for 2 years. No progression." },
  { name: "Fatima A.", location: "Dubai, UAE", condition: "PCOS", outcome: "Regular cycles restored. Hormonal panels normalised." },
  { name: "Vikram S.", location: "Thane", condition: "Obesity", outcome: "18kg reduction over 5 months. Sustainable." },
  { name: "Meena P.", location: "Toronto, Canada", condition: "Cancer Support", outcome: "Completed radiation. Energy and appetite maintained." },
  { name: "Deepak N.", location: "Nashik", condition: "Type 2 Diabetes", outcome: "HbA1c from 8.7 to 5.9. Off insulin." },
];

const statsData = [
  { value: 10000, suffix: "+", label: "Patients treated" },
  { value: 35, suffix: "+", label: "Years of practice" },
  { value: 20, suffix: "+", label: "Countries served" },
  { value: 5, suffix: "", label: "Clinic locations" },
];

export default function SuccessStoriesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Featured stories: alternating clip-path reveal left/right
    gsap.utils.toArray<HTMLElement>(".featured-card").forEach((card, i) => {
      const fromLeft = i % 2 === 0;
      gsap.fromTo(card,
        { clipPath: fromLeft ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0%)", opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        }
      );
    });

    // Grid cards: column-based stagger — col 0 delayed +0, col 1 delayed +0.1, col 2 delayed +0.2
    gsap.utils.toArray<HTMLElement>(".grid-card").forEach((card, i) => {
      const col = i % 3;
      gsap.fromTo(card,
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, delay: col * 0.12, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%" },
        }
      );
    });

    // Divider line draw
    if (dividerRef.current) {
      gsap.fromTo(dividerRef.current,
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: dividerRef.current, start: "top 85%" },
        }
      );
    }

    // Stats count-up
    gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
      const target = parseInt(el.getAttribute("data-target") || "0");
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = target >= 1000
            ? (Math.round(obj.val / 1000) * 1000).toLocaleString()
            : Math.round(obj.val).toString();
        },
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef}>

      {/* HERO */}
      <section className="relative w-full min-h-[720px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,143,230,0.14),transparent_35%)]" />
        <div className="absolute top-[-200px] right-[-140px] w-[700px] h-[700px] bg-[#5f8fe6]/14 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-[#8BC34A]/10 blur-[120px] rounded-full" />

        <div className="relative z-20 max-w-[1380px] mx-auto px-6 lg:px-10 pt-[170px] pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[38px] bg-white/42 backdrop-blur-2xl border border-white/65 shadow-[0_35px_90px_rgba(28,58,107,0.12)] px-8 md:px-20 py-14 md:py-20"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[37px] border border-white/30 pointer-events-none" />

            <div className="relative z-10 max-w-[660px] mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-3 mb-8 justify-center"
              >
                <div className="w-10 h-[1px] bg-[#2E5B9A]" />
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">Success Stories</p>
                <div className="w-10 h-[1px] bg-[#2E5B9A]" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#0a1b32] font-light leading-[0.96] tracking-[-0.05em] text-[50px] sm:text-[64px] md:text-[76px]"
              >
                Outcomes speak.
                <br />
                <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Patients confirm.
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                className="flex flex-wrap items-center justify-center gap-3 mt-8"
              >
                {["CKD", "Cancer Support", "Lifestyle Disorders", "Overseas"].map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className="px-4 py-2 rounded-full bg-white/75 backdrop-blur-xl border border-white/70 text-[#2E5B9A] text-[12px] font-medium"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED STORIES — alternating clip-path reveal */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />
        <div className="absolute top-[-160px] right-[-100px] w-[600px] h-[600px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1000px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">Featured outcomes</p>
            <h2 className="text-[42px] md:text-[56px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b] max-w-xl">
              Three patients.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                Three conditions.
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {featured.map((s, i) => (
              <div
                key={i}
                className="featured-card rounded-[28px] p-8 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_rgba(46,91,154,0.09)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/75 border border-white/70 text-[#2E5B9A] text-[10px] font-medium uppercase tracking-[0.14em]">{s.tag}</span>
                    <span className="text-[#506985] text-[12px]">{s.condition}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#6b7f97] text-[12px]">{s.location}</span>
                    <span className="text-[#bfd0e6]">·</span>
                    <span className="text-[#6b7f97] text-[12px]">{s.duration}</span>
                  </div>
                </div>

                <p className="text-[#10233b] text-[13px] font-semibold uppercase tracking-[0.1em] mb-4">{s.patient}</p>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="text-[#2E5B9A] text-[13px] font-semibold uppercase tracking-[0.1em] mb-2">Outcome</p>
                    <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A] mb-3" />
                    <p className="text-[#4e647d] text-[14px] leading-relaxed">{s.outcome}</p>
                  </div>
                  <div className="md:w-1/2 relative pl-6">
                    <div className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full bg-gradient-to-b from-[#8BC34A] to-[#2E5B9A]" />
                    <p
                      className="text-[#10233b] text-[16px] italic leading-[1.7]"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      &ldquo;{s.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="relative max-w-[900px] mx-auto px-6 py-2">
        <div
          ref={dividerRef}
          className="h-[1px] origin-left"
          style={{ background: "linear-gradient(to right, transparent, #bfd0e6, transparent)" }}
        />
      </div>

      {/* STORY GRID — column-stagger */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-4">More outcomes</p>
            <h2 className="text-[36px] md:text-[48px] leading-[1.06] tracking-[-0.03em] font-light text-[#10233b]">
              Across conditions.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>Across the world.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grid.map((s, i) => (
              <div
                key={i}
                className="grid-card rounded-[20px] p-6 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_10px_30px_rgba(46,91,154,0.07)]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[#10233b] text-[14px] font-semibold">{s.name}</p>
                    <p className="text-[#6b7f97] text-[11px] mt-0.5">{s.location}</p>
                  </div>
                  <span
                    className="text-[#bfd0e6] font-light leading-none"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "42px" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[#2E5B9A] text-[11px] font-medium uppercase tracking-[0.12em] mb-2">{s.condition}</p>
                <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A] mb-3" />
                <p className="text-[#5f738c] text-[13px] leading-relaxed">{s.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP — count-up */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-7 rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_55px_rgba(46,91,154,0.08)]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8BC34A]/05 via-transparent to-[#2E5B9A]/05 pointer-events-none" />
            {statsData.map((item, i) => (
              <div key={i} className="relative flex-1 text-center">
                <div className="flex items-baseline justify-center gap-0.5">
                  <span
                    className="stat-num text-[#16304f] font-light leading-none"
                    data-target={item.value}
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "42px" }}
                  >
                    0
                  </span>
                  <span
                    className="text-[#2E5B9A] font-light"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px" }}
                  >
                    {item.suffix}
                  </span>
                </div>
                <p className="mt-1.5 text-[12px] uppercase tracking-[0.18em] text-[#6b7f97]">{item.label}</p>
                {i !== statsData.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#ccd9ea] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
