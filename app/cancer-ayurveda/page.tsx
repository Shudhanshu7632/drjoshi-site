"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FinalCTA from "@/components/sections/FinalCTA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const duringItems = [
  "Reduce chemotherapy-related fatigue",
  "Manage nausea and appetite loss",
  "Support white blood cell recovery",
  "Reduce peripheral neuropathy symptoms",
  "Emotional regulation and sleep support",
];

const afterItems = [
  "Deep tissue and organ recovery",
  "Hormonal rebalancing post-treatment",
  "Long-term immunity monitoring",
  "Reducing recurrence risk factors",
  "Rebuilding metabolic strength",
];

const protocolItems = [
  {
    n: "01",
    title: "Fatigue and energy management",
    body: "Classical Rasayana formulations to support cellular energy pathways — selected for zero contraindications with standard chemotherapy agents. No guesswork.",
    tag: "Rasayana Protocol",
  },
  {
    n: "02",
    title: "Digestive support during treatment",
    body: "Nausea, appetite loss, and gut lining integrity during treatment are among the most requested interventions. Formulations are chosen based on the specific chemo protocol.",
    tag: "GI Support",
  },
  {
    n: "03",
    title: "Immunity without stimulating tumour pathways",
    body: "Immune modulation through Ayurvedic herbs that support the body without activating inflammatory or proliferative pathways. The distinction matters.",
    tag: "Immune Modulation",
  },
  {
    n: "04",
    title: "Mental resilience",
    body: "Adaptogenic formulations and breathing protocols for the anxiety, fear, and cognitive fatigue that accompany treatment. Addressed directly, not dismissed.",
    tag: "Adaptive Support",
  },
];

const coordinationSteps = [
  {
    n: "1",
    label: "Oncology records reviewed",
    body: "Chemo agents, dosage schedule, and current side effect profile — reviewed before any formulation is recommended.",
  },
  {
    n: "2",
    label: "Protocol tailored to your regimen",
    body: "Every herb and preparation is cross-checked against your specific treatment. Nothing that conflicts. Nothing that competes.",
  },
  {
    n: "3",
    label: "Parallel monitoring",
    body: "Bloodwork, tumour markers, and Ayurvedic indicators tracked together. Adjustments made at each visit based on both.",
  },
];

export default function CancerPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const protocolSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Two-track cards: clip-path reveal from outside edges toward center
    const leftCard = containerRef.current?.querySelector<HTMLElement>(".track-card-left");
    const rightCard = containerRef.current?.querySelector<HTMLElement>(".track-card-right");

    if (leftCard) {
      gsap.fromTo(leftCard,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: leftCard, start: "top 82%" },
        }
      );
    }
    if (rightCard) {
      gsap.fromTo(rightCard,
        { clipPath: "inset(0 0 0 100%)", opacity: 0 },
        {
          clipPath: "inset(0 0 0 0%)", opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: rightCard, start: "top 82%" },
        }
      );
    }

    // Track items stagger inside cards
    gsap.utils.toArray<HTMLElement>(".during-item").forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.45, delay: 0.3 + i * 0.08, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" } }
      );
    });
    gsap.utils.toArray<HTMLElement>(".after-item").forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: 14 },
        { opacity: 1, x: 0, duration: 0.45, delay: 0.3 + i * 0.08, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" } }
      );
    });

    // Protocol progress line scrub
    if (progressLineRef.current && protocolSectionRef.current) {
      gsap.fromTo(progressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1, ease: "none",
          scrollTrigger: {
            trigger: protocolSectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    }

    // Protocol cards: stagger y + fade
    gsap.utils.toArray<HTMLElement>(".protocol-card").forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 36, x: i % 2 === 0 ? -18 : 18 },
        {
          opacity: 1, y: 0, x: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 84%" },
        }
      );
    });

    // Coordination steps: horizontal slide-in
    gsap.utils.toArray<HTMLElement>(".coord-step").forEach((step, i) => {
      gsap.fromTo(step,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.6, delay: i * 0.14, ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 86%" },
        }
      );
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef}>

      {/* HERO */}
      <section className="relative w-full min-h-[680px] md:min-h-[900px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(95,143,230,0.13),transparent_40%)]" />
        <div className="absolute top-[-200px] right-[-120px] w-[660px] h-[660px] bg-[#5f8fe6]/15 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-[#8BC34A]/10 blur-[120px] rounded-full" />

        <div className="relative z-20 max-w-[1380px] mx-auto px-6 lg:px-10 pt-[170px] pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[38px] bg-white/42 backdrop-blur-2xl border border-white/65 shadow-[0_35px_90px_rgba(28,58,107,0.12)] px-8 md:px-20 py-16 md:py-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[37px] border border-white/30 pointer-events-none" />
            <div className="absolute top-[-100px] left-[50%] w-[400px] h-[400px] bg-white/20 blur-[90px] rounded-full" />

            <div className="relative z-10 max-w-[700px] mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-3 mb-8 justify-center"
              >
                <div className="w-10 h-[1px] bg-[#2E5B9A]" />
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">Integrative Cancer Support</p>
                <div className="w-10 h-[1px] bg-[#2E5B9A]" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#0a1b32] font-light leading-[0.96] tracking-[-0.05em] text-[50px] sm:text-[64px] md:text-[80px]"
              >
                Alongside treatment.
                <br />
                <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Never instead of it.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-9 text-[#4e647d] text-[17px] leading-[1.9] max-w-[540px] mx-auto"
              >
                For patients undergoing chemotherapy or radiation — and those in recovery. Protocols that reduce side effects, rebuild strength, and support long-term recovery. Coordinated with your oncology team.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 }}
                className="flex flex-wrap items-center justify-center gap-3 mt-10"
              >
                {["During Chemo", "Post-Treatment", "Side Effect Management", "Recovery Support"].map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + i * 0.07 }}
                    className="px-4 py-2 rounded-full bg-white/75 backdrop-blur-xl border border-white/70 text-[#2E5B9A] text-[12px] font-medium"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-wrap gap-4 justify-center mt-10"
              >
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2E5B9A] text-white font-medium border border-[#5f8fe6]/20 shadow-[0_14px_40px_rgba(46,91,154,0.24)] hover:bg-[#244b82] hover:scale-[1.03] transition-all duration-300">
                  Book a Consultation →
                </Link>
                <Link href="/overseas" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/55 backdrop-blur-xl border border-[#d1deef] text-[#1f3d63] font-medium hover:bg-white/75 transition-all duration-300">
                  International Patients →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TWO TRACKS — clip-path reveal from outer edges */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />
        <div className="absolute top-[-160px] right-[-100px] w-[580px] h-[580px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1180px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">Two tracks</p>
            <h2 className="text-[42px] md:text-[58px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b] max-w-xl">
              When you need it.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                What it covers.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* During Treatment */}
            <div className="track-card-left rounded-[28px] p-8 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_rgba(46,91,154,0.09)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2E5B9A]" />
                <span className="text-[12px] uppercase tracking-[0.28em] text-[#506985]">During Treatment</span>
              </div>
              <h3 className="text-[#10233b] text-[22px] md:text-[26px] font-light leading-snug tracking-[-0.02em] mb-6">
                Supporting the body
                <br />
                <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>through the hardest part.</span>
              </h3>
              <div className="w-10 h-[1.5px] bg-gradient-to-r from-[#2E5B9A] to-transparent mb-6" />
              <div className="flex flex-col gap-3">
                {duringItems.map((item, i) => (
                  <div key={i} className="during-item flex items-start gap-3">
                    <div className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[#2E5B9A] flex-shrink-0" />
                    <p className="text-[#4e647d] text-[14px] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Post Treatment */}
            <div className="track-card-right rounded-[28px] p-8 border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(244,249,255,0.62))] backdrop-blur-2xl shadow-[0_20px_60px_rgba(46,91,154,0.09)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#8BC34A]" />
                <span className="text-[12px] uppercase tracking-[0.28em] text-[#506985]">Post Treatment</span>
              </div>
              <h3 className="text-[#10233b] text-[26px] font-light leading-snug tracking-[-0.02em] mb-6">
                Rebuilding what
                <br />
                <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>treatment cost the body.</span>
              </h3>
              <div className="w-10 h-[1.5px] bg-gradient-to-r from-[#8BC34A] to-transparent mb-6" />
              <div className="flex flex-col gap-3">
                {afterItems.map((item, i) => (
                  <div key={i} className="after-item flex items-start gap-3">
                    <div className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[#8BC34A] flex-shrink-0" />
                    <p className="text-[#4e647d] text-[14px] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOCOL — scrolling progress line + offset cards */}
      <section ref={protocolSectionRef} className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute bottom-[-200px] left-[-120px] w-[600px] h-[600px] bg-[#8BC34A]/08 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[960px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">What the protocol addresses</p>
            <h2 className="text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b]">
              Four areas.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>Addressed directly.</span>
            </h2>
          </motion.div>

          {/* Cards with scrubbed side line */}
          <div className="relative">
            {/* Scrub progress line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-[#dce8f5] hidden md:block" />
            <div
              ref={progressLineRef}
              className="absolute left-[22px] top-0 bottom-0 w-[2px] origin-top hidden md:block"
              style={{ background: "linear-gradient(to bottom, #2E5B9A, #8BC34A)" }}
            />

            <div className="flex flex-col gap-5 md:pl-14">
              {protocolItems.map((item, i) => (
                <div
                  key={i}
                  className="protocol-card relative rounded-[26px] border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_12px_40px_rgba(46,91,154,0.08)] overflow-hidden"
                >
                  {/* Left gradient accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#2E5B9A] to-[#8BC34A]" />

                  {/* Step dot on line (desktop) */}
                  <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#2E5B9A] border-2 border-white hidden md:block" style={{ left: "-calc(14px + 30px)" }} />

                  <div className="px-6 md:px-8 py-6 md:py-7">
                    <div className="flex flex-wrap items-start gap-x-4 gap-y-2 mb-3">
                      <div className="flex items-baseline gap-3 flex-1 min-w-0">
                        <span
                          className="flex-shrink-0 text-[#bfd0e6] font-light leading-none"
                          style={{ fontFamily: "var(--font-cormorant)", fontSize: "48px" }}
                        >
                          {item.n}
                        </span>
                        <h3 className="text-[#10233b] text-[16px] md:text-[18px] font-semibold leading-snug">{item.title}</h3>
                      </div>
                      <span className="flex-shrink-0 px-3 py-1.5 rounded-full bg-white/75 border border-white/70 text-[#2E5B9A] text-[10px] font-medium uppercase tracking-[0.1em]">
                        {item.tag}
                      </span>
                    </div>
                    <div className="w-10 h-[1px] bg-gradient-to-r from-[#2E5B9A] to-transparent mb-4" />
                    <p className="text-[#5f738c] text-[14px] leading-[1.85]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote callout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 relative rounded-[24px] border border-[#dce7f5] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(244,249,255,0.62))] backdrop-blur-2xl px-6 md:px-10 py-8 shadow-[0_15px_40px_rgba(46,91,154,0.06)]"
          >
            <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-[#8BC34A] to-[#2E5B9A]" />
            <p
              className="text-[#10233b] text-[18px] md:text-[22px] italic font-medium leading-[1.7]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              &ldquo;This is not alternative medicine. It is medicine used alongside. Every formulation is reviewed for contraindications with your specific chemotherapy regimen.&rdquo;
            </p>
            <p className="mt-4 text-[#506985] text-[13px]">— Dr. Vyankatesh Joshi, MD Ayurveda</p>
          </motion.div>
        </div>
      </section>

      {/* HOW COORDINATION WORKS */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />
        <div className="absolute top-[-160px] right-[-80px] w-[500px] h-[500px] bg-[#5f8fe6]/08 blur-[110px] rounded-full" />

        <div className="relative z-10 max-w-[1180px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">How it works</p>
            <h2 className="text-[42px] md:text-[56px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b]">
              Coordinated care.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>Not separate.</span>
            </h2>
          </motion.div>

          {/* Horizontal connector steps */}
          <div className="relative">
            {/* Connector line desktop */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#2E5B9A]/20 via-[#2E5B9A]/50 to-[#2E5B9A]/20 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {coordinationSteps.map((step, i) => (
                <div key={i} className="coord-step relative">
                  <div className="relative overflow-hidden rounded-[26px] border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_15px_50px_rgba(46,91,154,0.08)] p-7">
                    <div className="absolute top-[-6px] right-3 text-[#dce8f5] font-light leading-none pointer-events-none select-none" style={{ fontFamily: "var(--font-cormorant)", fontSize: "88px" }}>
                      {step.n}
                    </div>

                    {/* Step dot above card */}
                    <div className="relative z-10 w-14 h-14 rounded-full bg-[#2E5B9A]/08 border border-[#2E5B9A]/20 flex items-center justify-center mb-5">
                      <span className="text-[#2E5B9A] text-[18px] font-semibold">{step.n}</span>
                    </div>

                    <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A] mb-4" />
                    <h3 className="text-[#10233b] text-[16px] font-semibold leading-snug mb-3">{step.label}</h3>
                    <p className="text-[#5f738c] text-[13px] leading-[1.85]">{step.body}</p>
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
            className="flex justify-center mt-16"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#2E5B9A] text-white text-[15px] font-medium shadow-[0_18px_50px_rgba(46,91,154,0.18)] hover:bg-[#244b82] hover:scale-[1.04] transition-all duration-300"
            >
              Begin Your Assessment
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
