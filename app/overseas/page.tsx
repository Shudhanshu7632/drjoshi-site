"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FinalCTA from "@/components/sections/FinalCTA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    n: "01",
    title: "Video Consultation",
    desc: "A full 45-minute consultation via Google Meet or WhatsApp video. Medical reports reviewed 24 hours in advance. Pulse guidance provided remotely.",
  },
  {
    n: "02",
    title: "Formulations Dispatched",
    desc: "Authentic Ayurvedic formulations prepared and shipped to your location. UK, US, UAE, Canada, Australia, and most of Europe. 7–14 days delivery.",
  },
  {
    n: "03",
    title: "Lab Coordination",
    desc: "A protocol for local labs is provided. You share results. Monitoring continues remotely — the same rigour as an in-person visit.",
  },
  {
    n: "04",
    title: "Follow-Up Cycle",
    desc: "Regular video follow-ups every 6–8 weeks. Protocol refined based on results. No travel required.",
  },
];

const faqs = [
  {
    q: "Can formulations be shipped to my country?",
    a: "Yes. We ship to the UK, US, UAE, Canada, Australia, and most of Europe. All customs documentation is provided. Delivery typically takes 7–14 days.",
  },
  {
    q: "How does the video consultation work?",
    a: "45 minutes via Google Meet or WhatsApp video. Please share all recent medical reports 24 hours before your appointment. Pulse analysis is guided remotely.",
  },
  {
    q: "Is the remote protocol as effective as in-person?",
    a: "For most conditions, yes. CKD and cancer support protocols have been managed entirely remotely for patients in 20+ countries — with lab-tracked outcomes.",
  },
  {
    q: "What languages are consultations available in?",
    a: "Hindi, Marathi, and English.",
  },
  {
    q: "How often are follow-ups needed?",
    a: "Every 6–8 weeks for most conditions. CKD Stage 4–5 patients are typically reviewed more frequently — every 4–6 weeks.",
  },
];

const countries = ["UK", "USA", "UAE", "Canada", "Australia", "Singapore", "Germany", "NZ"];

export default function OverseasPage() {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero stat cards: stagger from right
    gsap.utils.toArray<HTMLElement>(".os-stat").forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, x: 28, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.6, delay: 0.2 + i * 0.1, ease: "power3.out" }
      );
    });

    // Country pills: stagger cascade
    gsap.utils.toArray<HTMLElement>(".country-pill").forEach((pill, i) => {
      gsap.fromTo(pill,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.35, delay: 0.45 + i * 0.05, ease: "back.out(1.4)" }
      );
    });

    // Horizontal connector line scrub
    if (lineRef.current && timelineRef.current) {
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1, ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 65%",
            end: "center 50%",
            scrub: 0.8,
          },
        }
      );
    }

    // Step cards: scale+y cascade
    gsap.utils.toArray<HTMLElement>(".step-card").forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.65, delay: i * 0.13, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 86%" },
        }
      );
    });

    // Step dots: pulse burst when entering view
    gsap.utils.toArray<HTMLElement>(".step-dot").forEach((dot, i) => {
      gsap.fromTo(dot,
        { scale: 0 },
        {
          scale: 1, duration: 0.4, delay: i * 0.13 + 0.25, ease: "back.out(2)",
          scrollTrigger: { trigger: dot, start: "top 88%" },
        }
      );
    });

    // FAQ items: stagger y reveal
    gsap.utils.toArray<HTMLElement>(".faq-item").forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, delay: i * 0.09, ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 88%" },
        }
      );
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef}>

      {/* HERO */}
      <section className="relative w-full min-h-[680px] md:min-h-[900px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,143,230,0.14),transparent_35%)]" />
        <div className="absolute top-[-200px] right-[-140px] w-[700px] h-[700px] bg-[#5f8fe6]/14 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-[#8BC34A]/10 blur-[120px] rounded-full" />

        <div className="relative z-20 max-w-[1380px] mx-auto px-6 lg:px-10 pt-[170px] pb-20">
          <div className="relative overflow-hidden rounded-[38px] bg-white/42 backdrop-blur-2xl border border-white/65 shadow-[0_35px_90px_rgba(28,58,107,0.12)] px-8 md:px-14 py-14 md:py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[37px] border border-white/30 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-10 lg:gap-16">

              {/* LEFT */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="inline-flex items-center gap-3 mb-7"
                >
                  <div className="w-10 h-[1px] bg-[#2E5B9A]" />
                  <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">International Patients</p>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#0a1b32] font-light leading-[0.96] tracking-[-0.05em] text-[40px] sm:text-[54px] md:text-[78px]"
                >
                  Distance is not
                  <br />
                  <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                    a barrier to care.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-7 text-[#4e647d] text-[17px] leading-[1.9] max-w-[460px]"
                >
                  From the UK to Dubai to the US — patients come to Dr. Joshi&apos;s protocols when local medicine has run out of answers. Full protocol delivered remotely.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex flex-wrap gap-4 mt-10"
                >
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2E5B9A] text-white font-medium border border-[#5f8fe6]/20 shadow-[0_14px_40px_rgba(46,91,154,0.24)] hover:bg-[#244b82] hover:scale-[1.03] transition-all duration-300">
                    Book a Video Consultation →
                  </Link>
                </motion.div>
              </div>

              {/* RIGHT — stat cluster (GSAP animated) */}
              <div className="hidden lg:flex flex-col gap-4">
                <div className="os-stat rounded-[22px] p-6 bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_8px_24px_rgba(46,91,154,0.07)]">
                  <p className="text-[#10233b] text-[42px] font-light leading-none mb-1.5" style={{ fontFamily: "var(--font-cormorant)" }}>1,000+</p>
                  <p className="text-[#6b7f97] text-[12px] uppercase tracking-[0.14em]">Overseas patients treated</p>
                </div>
                <div className="os-stat rounded-[22px] p-6 bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_8px_24px_rgba(46,91,154,0.07)]">
                  <p className="text-[#10233b] text-[42px] font-light leading-none mb-1.5" style={{ fontFamily: "var(--font-cormorant)" }}>20+</p>
                  <p className="text-[#6b7f97] text-[12px] uppercase tracking-[0.14em]">Countries served</p>
                </div>
                <div className="os-stat rounded-[22px] p-5 bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_8px_24px_rgba(46,91,154,0.07)] flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <span key={c} className="country-pill px-3 py-1.5 rounded-full bg-white/75 border border-white/70 text-[#2E5B9A] text-[11px] font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — animated connecting line + step cards */}
      <section ref={timelineRef} className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />
        <div className="absolute top-[-160px] left-[-100px] w-[580px] h-[580px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">How it works</p>
            <h2 className="text-[42px] md:text-[58px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b] max-w-xl">
              Four steps.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                No flights needed.
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Background line track */}
            <div className="hidden lg:block absolute top-[26px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-[2px] bg-[#dce8f5]" />
            {/* Animated fill line */}
            <div
              ref={lineRef}
              className="hidden lg:block absolute top-[26px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-[2px] origin-left"
              style={{ background: "linear-gradient(to right, #2E5B9A, #7aa5df, #8BC34A)" }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col">
                  {/* Dot on line */}
                  <div className="flex justify-center mb-6">
                    <div className="step-dot w-[22px] h-[22px] rounded-full bg-[#2E5B9A] border-[4px] border-white shadow-[0_0_0_5px_rgba(46,91,154,0.15)]" />
                  </div>
                  {/* Card */}
                  <div className="step-card rounded-[22px] p-6 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_15px_40px_rgba(46,91,154,0.08)] flex-1">
                    <div className="flex items-baseline justify-between mb-3">
                      <p
                        className="text-[#bfd0e6] font-light leading-none"
                        style={{ fontFamily: "var(--font-cormorant)", fontSize: "52px" }}
                      >
                        {step.n}
                      </p>
                    </div>
                    <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A] mb-3" />
                    <h3 className="text-[#10233b] text-[16px] font-semibold leading-snug mb-3">{step.title}</h3>
                    <p className="text-[#5f738c] text-[13px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT PATIENTS SAY — quote strip */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="relative z-10 max-w-[960px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] border border-[#dce7f5] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(244,249,255,0.62))] backdrop-blur-2xl px-10 py-8 shadow-[0_15px_40px_rgba(46,91,154,0.06)]"
          >
            <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-[#2E5B9A] to-[#8BC34A]" />
            <p
              className="text-[#10233b] text-[18px] md:text-[22px] italic font-medium leading-[1.7]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              &ldquo;I was in the UK with Stage 4 CKD. I had my first consultation over video. Within three months my eGFR had improved enough that my nephrologist asked what I was doing differently.&rdquo;
            </p>
            <p className="mt-4 text-[#506985] text-[13px]">— Patient, London, UK</p>
          </motion.div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />

        <div className="relative z-10 max-w-[900px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">Overseas patients</p>
            <h2 className="text-[38px] md:text-[52px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b]">
              Common questions.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                Direct answers.
              </span>
            </h2>
          </motion.div>

          <div className="relative overflow-hidden rounded-[32px] px-8 md:px-12 py-8 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(244,249,255,0.62))] backdrop-blur-2xl border border-white/70 shadow-[0_30px_90px_rgba(46,91,154,0.10)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col divide-y divide-white/60">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item py-5">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex justify-between items-center gap-6 text-left"
                  >
                    <span className="text-[#10233b] text-[16px] md:text-[18px] font-medium leading-snug">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-[#2E5B9A] text-[22px] leading-none flex-shrink-0"
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-[#5f738c] text-[14px] leading-relaxed">{faq.a}</p>
                  </motion.div>
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
              Book a Video Consultation
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
