"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const conditions = [
  {
    n: "01", eyebrow: "Nephrology",
    title: "Slowing decline.\nRestoring function.",
    body: "CKD managed through Ayurvedic protocols that target inflammation, reduce toxin load, and support residual kidney function — alongside conventional monitoring.",
    chip: "GFR — Tracked at every visit", href: "/ckd-kidney-treatment",
  },
  {
    n: "02", eyebrow: "Oncology Support",
    title: "Supportive care\nthat runs parallel.",
    body: "Ayurvedic protocols designed to run alongside chemotherapy and radiation — reducing side effects, rebuilding strength, and supporting the body through treatment.",
    chip: "Side effect mitigation focus", href: "/cancer-ayurveda",
  },
  {
    n: "03", eyebrow: "Metabolic Health",
    title: "Metabolic reset\nfrom the root.",
    body: "Diabetes, hypertension, obesity, PCOS — addressed through constitution-based protocols that recalibrate metabolism without lifelong dependency on medication.",
    chip: "Root cause resolution", href: "/lifestyle-disorders",
  },
];

const principles = [
  { n: "01", title: "Every protocol starts with constitution", body: "Pulse, tongue, and lifestyle history give more diagnostic clarity than a test report alone. The Ayurvedic assessment precedes every prescription." },
  { n: "02", title: "Conventional medicine is a partner, not a rival", body: "For CKD and cancer support, bloodwork, imaging, and biomarkers are reviewed alongside Ayurvedic findings. The plan integrates both." },
  { n: "03", title: "Formulations are authentic, not diluted", body: "Kashayam, Choorna, Ghrita, Basti — prepared to clinical standard from classical pharmacopoeia. Not supplement approximations." },
  { n: "04", title: "Progress is tracked, not assumed", body: "Follow-up protocols monitor GFR trends, tumour markers, inflammatory indicators, and subjective wellbeing simultaneously. Adjustments are data-driven." },
];

export default function TreatmentsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".condition-card").forEach((card, i) => {
      gsap.fromTo(card,
        { clipPath: "inset(100% 0 0 0)", opacity: 0 },
        { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 0.8, delay: i * 0.12, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 85%" } }
      );
    });

    gsap.utils.toArray<HTMLElement>(".principle-card").forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.92, y: 28 },
        { opacity: 1, scale: 1, y: i % 2 === 1 ? 28 : 0, duration: 0.65, delay: i * 0.1, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 82%" } }
      );
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef}>

      {/* HERO */}
      <section className="relative w-full min-h-[760px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,143,230,0.14),transparent_35%)]" />
        <div className="absolute top-[-200px] right-[-140px] w-[700px] h-[700px] bg-[#5f8fe6]/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-220px] left-[-120px] w-[620px] h-[620px] bg-[#8BC34A]/10 blur-[120px] rounded-full" />

        <div className="relative z-20 max-w-[1380px] mx-auto px-6 lg:px-10 pt-[170px] pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-[820px] mx-auto">
            <div className="relative overflow-hidden rounded-[38px] bg-white/42 backdrop-blur-2xl border border-white/65 shadow-[0_35px_90px_rgba(28,58,107,0.12)] px-8 md:px-16 py-14 md:py-20 text-center">
              <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
              <div className="absolute inset-[1px] rounded-[37px] border border-white/30 pointer-events-none" />
              <div className="absolute top-[-120px] left-[120px] w-[420px] h-[420px] bg-white/30 blur-[100px] rounded-full" />

              <div className="relative z-10">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-3 mb-7 justify-center">
                  <div className="w-10 h-[1px] bg-[#2E5B9A]" />
                  <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">Treatment Approach</p>
                  <div className="w-10 h-[1px] bg-[#2E5B9A]" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-[#0a1b32] font-light leading-[0.96] tracking-[-0.05em] text-[46px] sm:text-[58px] md:text-[74px]"
                >
                  Conditions we treat.
                  <br />
                  <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>Protocols that work.</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8 text-[#4e647d] text-[17px] leading-[1.9] max-w-[560px] mx-auto">
                  Three condition categories. Each addressed through Ayurvedic diagnostics, authentic formulations, and where appropriate — coordinated with conventional medicine.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="flex flex-wrap gap-3 justify-center mt-8 mb-10">
                  {["CKD", "Cancer Support", "Lifestyle Disorders"].map((chip) => (
                    <span key={chip} className="px-4 py-2 rounded-full bg-white/75 backdrop-blur-xl border border-white/70 text-[#2E5B9A] text-[12px] font-medium">{chip}</span>
                  ))}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2E5B9A] text-white font-medium border border-[#5f8fe6]/20 shadow-[0_14px_40px_rgba(46,91,154,0.24)] hover:bg-[#244b82] hover:scale-[1.03] transition-all duration-300">
                    Book a Consultation →
                  </Link>
                  <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/55 backdrop-blur-xl border border-[#d1deef] text-[#1f3d63] font-medium hover:bg-white/75 transition-all duration-300">
                    About Dr. Joshi →
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />
        <div className="absolute top-[-200px] right-[-120px] w-[600px] h-[600px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">Conditions</p>
            <h2 className="text-[42px] md:text-[60px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b]">
              Three categories.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>One practice.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {conditions.map((c) => (
              <div key={c.n} className="condition-card group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_rgba(46,91,154,0.08)] p-8 flex flex-col">
                <div className="absolute top-[-8px] right-3 text-[#dce8f5] font-light leading-none pointer-events-none select-none" style={{ fontFamily: "var(--font-cormorant)", fontSize: "100px" }}>
                  {c.n}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col flex-1 gap-4">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-6 h-[1px] bg-[#2E5B9A]" />
                    <p className="text-[11px] uppercase tracking-[0.26em] text-[#506985]">{c.eyebrow}</p>
                  </div>
                  <h3 className="text-[#10233b] text-[22px] md:text-[26px] font-light leading-[1.15] tracking-[-0.03em] whitespace-pre-line">{c.title}</h3>
                  <div className="w-12 h-[1.5px] bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A]" />
                  <p className="text-[#5f738c] text-[14px] leading-[1.85] flex-1">{c.body}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-full bg-white/75 border border-white/70 text-[#2E5B9A] text-[10px] font-medium uppercase tracking-[0.1em]">{c.chip}</span>
                    <Link href={c.href} className="inline-flex items-center gap-2 text-[#2E5B9A] text-[13px] font-medium group-hover:gap-3 transition-all duration-300">
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute bottom-[-200px] left-[-120px] w-[600px] h-[600px] bg-[#8BC34A]/08 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">How it works</p>
            <h2 className="text-[42px] md:text-[60px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b]">
              Clinical rigour.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>Classical roots.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {principles.map((p, i) => (
              <div key={p.n} className="principle-card relative overflow-hidden rounded-[26px] border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_15px_50px_rgba(46,91,154,0.08)]">
                <div className="absolute top-[-8px] right-3 text-[#dce8f5] font-light leading-none pointer-events-none select-none" style={{ fontFamily: "var(--font-cormorant)", fontSize: "96px" }}>
                  {p.n}
                </div>
                <div className="relative z-10 p-7 pt-10">
                  <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A] mb-4" />
                  <h3 className="text-[#10233b] text-[15px] font-semibold leading-snug mb-3">{p.title}</h3>
                  <p className="text-[#5f738c] text-[13px] leading-[1.85]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex justify-center mt-16">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#2E5B9A] text-white font-medium shadow-[0_18px_50px_rgba(46,91,154,0.18)] hover:bg-[#244b82] hover:scale-[1.04] transition-all duration-300">
              Begin Assessment
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
