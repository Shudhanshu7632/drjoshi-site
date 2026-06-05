"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FinalCTA from "@/components/sections/FinalCTA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const milestones = [
  { year: "1990", title: "BAMS Degree", desc: "Graduated with distinction. The clinical foundation." },
  { year: "1995", title: "MD Ayurveda", desc: "Post-graduate specialisation in chronic disease management." },
  { year: "2004", title: "First Clinic", desc: "Dadar West, Mumbai. Started with a waitlist." },
  { year: "2010", title: "Panchakarma Centre", desc: "Dedicated therapy centre. One of the first in Maharashtra." },
  { year: "2015", title: "Five Clinics", desc: "Borivali, Thane, Nashik, Pune. Built on outcomes, not marketing." },
  { year: "2020+", title: "Worldwide", desc: "1,000+ overseas patients across 20+ countries." },
];

const pillars = [
  { icon: "◎", title: "Understand the Root", desc: "Every diagnosis starts from constitution, pulse, and lifestyle. Not just a test report." },
  { icon: "◈", title: "Restore, Don't Suppress", desc: "Symptoms are the body signalling. The source is addressed, never silenced." },
  { icon: "◉", title: "Classical Pharmacopoeia Only", desc: "Kashayam, Choorna, Ghrita, Basti — classical Ayurvedic formulations compounded to clinical grade." },
  { icon: "❋", title: "Healing Is a Lifestyle", desc: "Diet, sleep, rhythm, and mindset are part of every protocol. Not afterthoughts." },
];

function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em]"
          initial={{ opacity: 0, y: 28, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: delay + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useGSAP(() => {
    // Animate stats on scroll
    gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el) => {
      const target = parseInt(el.dataset.target || "0");
      gsap.fromTo(el, { textContent: 0 }, {
        textContent: target,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });

    // Timeline line scrub
    if (lineRef.current) {
      gsap.fromTo(lineRef.current, { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      });
    }

    // Milestone cards stagger in
    gsap.utils.toArray<HTMLElement>(".milestone-card").forEach((card, i) => {
      const isLeft = i % 2 === 0;
      gsap.fromTo(card, { opacity: 0, x: isLeft ? -40 : 40 }, {
        opacity: 1, x: 0,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as unknown as string,
        scrollTrigger: { trigger: card, start: "top 80%" },
      });
    });

    // Pillar cards
    gsap.utils.toArray<HTMLElement>(".pillar-card").forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 30, scale: 0.96 }, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.65,
        delay: (i % 2) * 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 82%" },
      });
    });
  }, { scope: heroRef });

  return (
    <main>
      {/* =============================== HERO =============================== */}
      <section ref={heroRef} className="relative w-full min-h-[920px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,143,230,0.14),transparent_35%)]" />
        <div className="absolute top-[-200px] right-[-140px] w-[700px] h-[700px] bg-[#5f8fe6]/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-220px] left-[-120px] w-[620px] h-[620px] bg-[#8BC34A]/10 blur-[120px] rounded-full" />

        <div className="relative z-20 max-w-[1380px] mx-auto px-6 lg:px-10 pt-[170px] pb-16">
          <div className="relative overflow-hidden rounded-[38px] bg-white/42 backdrop-blur-2xl border border-white/65 shadow-[0_35px_90px_rgba(28,58,107,0.12)] px-8 md:px-14 py-14 md:py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[37px] border border-white/30 pointer-events-none" />
            <div className="absolute top-[-120px] left-[120px] w-[420px] h-[420px] bg-white/30 blur-[100px] rounded-full" />

            <div className="relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] items-stretch gap-8 lg:gap-12">

              {/* LEFT — PHOTO with parallax */}
              <motion.div ref={photoRef} style={{ y: photoY }} className="hidden lg:block">
                <div className="relative h-full min-h-[480px] overflow-hidden rounded-[24px] border border-white/70 shadow-[0_20px_60px_rgba(46,91,154,0.10)]">
                  <Image src="/main.jpg" alt="Dr. Vyankatesh Joshi" fill priority className="object-cover object-top scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b32]/55 via-transparent to-transparent" />
                  {/* Floating credential */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
                    className="absolute bottom-5 left-5"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/75 backdrop-blur-xl border border-white/70 text-[#2E5B9A] text-[12px] font-medium shadow-[0_8px_20px_rgba(46,91,154,0.12)]">
                      BAMS · MD Ayurveda · 35+ Years
                    </div>
                  </motion.div>
                  {/* Floating stat */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}
                    className="absolute top-5 right-5"
                  >
                    <div className="px-4 py-3 rounded-[16px] bg-white/75 backdrop-blur-xl border border-white/70 text-center shadow-[0_8px_20px_rgba(46,91,154,0.12)]">
                      <p className="text-[#10233b] font-light leading-none" style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px" }}>10,000+</p>
                      <p className="text-[#6b7f97] text-[10px] uppercase tracking-[0.12em] mt-0.5">Patients</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT — CONTENT */}
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 mb-7">
                    <div className="w-10 h-[1px] bg-[#2E5B9A]" />
                    <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">About the Doctor</p>
                  </motion.div>

                  <h1 className="text-[#0a1b32] font-light leading-[0.96] tracking-[-0.05em] text-[48px] sm:text-[58px] md:text-[76px]">
                    <WordReveal text="Root cause" delay={0.1} />
                    <br />
                    <motion.span
                      className="italic text-[#2E5B9A]"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      medicine.
                    </motion.span>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                    className="mt-8 text-[#4e647d] text-[17px] leading-[1.9] max-w-[460px]"
                  >
                    35 years building protocols for what conventional medicine declared permanent. BAMS and MD qualified. Not a wellness brand — a clinical practice.
                  </motion.p>
                </div>

                <div>
                  {/* Stats grid */}
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="grid grid-cols-3 gap-3 mb-8">
                    {[
                      { n: "10000", display: "10,000+", l: "Patients" },
                      { n: "1000", display: "1,000+", l: "Overseas" },
                      { n: "5", display: "5", l: "Clinics" },
                    ].map((s) => (
                      <div key={s.l} className="rounded-[16px] px-4 py-4 text-center bg-white/50 backdrop-blur-xl border border-white/60">
                        <p className="text-[#10233b] font-light leading-none mb-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px" }}>{s.display}</p>
                        <p className="text-[#6b7f97] text-[11px] uppercase tracking-[0.12em]">{s.l}</p>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4">
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2E5B9A] text-white font-medium border border-[#5f8fe6]/20 shadow-[0_14px_40px_rgba(46,91,154,0.24)] hover:bg-[#244b82] hover:scale-[1.03] transition-all duration-300">
                      Book a Consultation →
                    </Link>
                    <Link href="/treatments" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/55 backdrop-blur-xl border border-[#d1deef] text-[#1f3d63] font-medium hover:bg-white/75 transition-all duration-300">
                      See Treatments →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* TRUST STRIP */}
            <div className="mt-16 relative z-10">
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-6 rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_55px_rgba(46,91,154,0.08)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8BC34A]/5 via-transparent to-[#2E5B9A]/5 pointer-events-none" />
                {[
                  { value: "10,000+", label: "Patients treated" },
                  { value: "35+", label: "Years of practice" },
                  { value: "5", label: "Clinic locations" },
                ].map((item, i) => (
                  <div key={i} className="relative flex-1 text-center">
                    <p className="text-[30px] md:text-[38px] font-light tracking-tight text-[#16304f]">{item.value}</p>
                    <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-[#6b7f97]">{item.label}</p>
                    {i !== 2 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#ccd9ea] to-transparent" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== TIMELINE =============================== */}
      <section ref={timelineRef} className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />
        <div className="absolute top-[-200px] right-[-120px] w-[600px] h-[600px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-120px] w-[600px] h-[600px] bg-[#8BC34A]/08 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-20">
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">Legacy</p>
            <h2 className="text-[42px] md:text-[60px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b] max-w-xl">
              35 years.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>Six milestones.</span>
            </h2>
          </motion.div>

          {/* Desktop alternating timeline */}
          <div className="relative hidden lg:block max-w-[820px] mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#d8e3f0]" />
            <div
              ref={lineRef}
              className="absolute left-1/2 -translate-x-[1px] top-0 w-[2px] origin-top"
              style={{ background: "linear-gradient(to bottom, #2E5B9A, #7aa5df, #8BC34A)", height: "100%" }}
            />

            <div className="flex flex-col">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={m.year} className="milestone-card relative flex items-center py-5">
                    <div className="flex-1 flex justify-end pr-8">
                      {isLeft ? (
                        <div className="w-[280px] rounded-[18px] p-5 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_10px_30px_rgba(46,91,154,0.07)]">
                          <p className="text-[#2E5B9A] text-[10px] font-bold tracking-[0.14em] uppercase mb-2">{m.year}</p>
                          <h3 className="text-[#10233b] text-[14px] font-semibold leading-snug mb-1.5">{m.title}</h3>
                          <p className="text-[#5f738c] text-[12px] leading-relaxed">{m.desc}</p>
                        </div>
                      ) : <div className="w-[280px]" />}
                    </div>

                    <motion.div
                      className="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-[#2E5B9A] border-[3px] border-white shadow-[0_0_0_5px_rgba(46,91,154,0.15)]"
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                    />

                    <div className="flex-1 flex justify-start pl-8">
                      {!isLeft ? (
                        <div className="w-[280px] rounded-[18px] p-5 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_10px_30px_rgba(46,91,154,0.07)]">
                          <p className="text-[#2E5B9A] text-[10px] font-bold tracking-[0.14em] uppercase mb-2">{m.year}</p>
                          <h3 className="text-[#10233b] text-[14px] font-semibold leading-snug mb-1.5">{m.title}</h3>
                          <p className="text-[#5f738c] text-[12px] leading-relaxed">{m.desc}</p>
                        </div>
                      ) : <div className="w-[280px]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2E5B9A] via-[#7aa5df] to-[#8BC34A]" />
            <div className="flex flex-col gap-6">
              {milestones.map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="relative">
                  <div className="absolute left-[-21px] top-3 w-4 h-4 rounded-full bg-[#2E5B9A] border-[3px] border-white shadow-[0_0_0_4px_rgba(46,91,154,0.18)]" />
                  <div className="rounded-[18px] p-4 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_10px_30px_rgba(46,91,154,0.07)]">
                    <p className="text-[#2E5B9A] text-[10px] font-bold tracking-[0.1em] uppercase mb-1">{m.year}</p>
                    <h3 className="text-[#10233b] text-[13px] font-semibold mb-1">{m.title}</h3>
                    <p className="text-[#5f738c] text-[11px] leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================== PHILOSOPHY =============================== */}
      <section className="relative w-full py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#edf4fb] to-[#dfeaf8]" />
        <div className="absolute top-[-220px] right-[-120px] w-[700px] h-[700px] bg-[#7aa5df]/12 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-240px] left-[-120px] w-[700px] h-[700px] bg-[#8BC34A]/10 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-[1180px] mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] px-8 md:px-16 py-16 md:py-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(244,249,255,0.62))] backdrop-blur-2xl border border-white/70 shadow-[0_30px_90px_rgba(46,91,154,0.10)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[39px] border border-white/40 pointer-events-none" />
            <div className="absolute top-[-80px] right-[-80px] w-[360px] h-[360px] bg-[#2E5B9A]/05 blur-[80px] rounded-full" />

            <motion.p className="text-[#8bc34a] text-[13px] uppercase tracking-[0.35em] font-medium text-center mb-6" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              How every case is approached.
            </motion.p>

            <motion.h2
              className="text-[#10233b] leading-[1.08] tracking-[-0.04em] font-light text-[38px] md:text-[56px] text-center max-w-2xl mx-auto mb-4"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
            >
              What guides every{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>decision, every time.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
              className="origin-center w-24 h-[2px] bg-gradient-to-r from-[#8BC34A] via-[#2E5B9A] to-[#8BC34A] mx-auto mt-8 mb-14"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="pillar-card rounded-[24px] p-7 border border-[#dce7f5] bg-white/55 shadow-[0_15px_40px_rgba(46,91,154,0.06)] flex gap-5"
                  whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-[14px] flex items-center justify-center" style={{ background: "rgba(46,91,154,0.08)", border: "1px solid rgba(46,91,154,0.15)" }}>
                    <span className="text-[#2E5B9A] text-[20px]">{p.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[#10233b] text-[15px] font-semibold leading-snug mb-2">{p.title}</h3>
                    <p className="text-[#5f738c] text-[13px] leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}
              className="relative mt-10 rounded-[24px] border border-[#dce7f5] bg-white/55 px-8 py-7 shadow-[0_15px_40px_rgba(46,91,154,0.06)]"
            >
              <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-[#8BC34A] to-[#2E5B9A]" />
              <p className="text-[#10233b] text-[20px] md:text-[24px] italic font-medium leading-[1.7] text-center" style={{ fontFamily: "var(--font-cormorant)" }}>
                &ldquo;I have never treated a disease. I have only ever treated a person.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
