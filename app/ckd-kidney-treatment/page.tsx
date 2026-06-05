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

const labRows = [
  { label: "eGFR", context: "mL/min/1.73m²", value: "29", note: "↑ from 18" },
  { label: "Creatinine", context: "mg/dL", value: "2.8", note: "↓ from 4.2" },
  { label: "CKD Stage", context: "Reversed", value: "Stage 3", note: "was Stage 4" },
  { label: "Dialysis", context: "36 months on protocol", value: "Avoided", note: "was imminent" },
];

const addressItems = [
  { title: "Inflammation reduction", desc: "Chronic kidney inflammation is the primary driver of GFR decline. Formulations are selected specifically for their anti-inflammatory action on renal tissue." },
  { title: "Toxin load clearance", desc: "Urea, creatinine, and metabolic waste accumulate when filtration falls. Classical Ayurvedic Basti protocols directly target this mechanism." },
  { title: "Residual function support", desc: "Stage 3 and 4 kidneys retain working nephrons. Protocols are designed to protect and support residual function — not wait for further decline." },
  { title: "Dietary and fluid protocol", desc: "Protein, potassium, and phosphorus balance matter. Every patient receives a dietary prescription aligned to their current GFR and constitution." },
];

const steps = [
  { n: "01", title: "Full constitution and lab review", chip: "Nadi Pariksha · Lab Review", body: "Pulse analysis, lifestyle assessment, and a detailed review of your creatinine, GFR, urine protein, and eGFR trend. The Ayurvedic picture and the clinical picture are read together." },
  { n: "02", title: "Personalised formulation protocol", chip: "Classical Pharmacopoeia", body: "Kashayam and Choorna combinations selected for your specific GFR stage and constitution. No standard CKD formula. Every prescription is built from the assessment findings." },
  { n: "03", title: "Tracked follow-up and protocol refinement", chip: "Lab-tracked Progress", body: "Follow-up every 6–8 weeks with lab review. GFR, creatinine, urea, and urine protein are tracked at every visit. The protocol is adjusted on data — not on how the patient feels alone." },
];

export default function CKDPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Lab rows stagger in
    gsap.utils.toArray<HTMLElement>(".lab-row").forEach((row, i) => {
      gsap.fromTo(row,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.5, delay: 0.4 + i * 0.1, ease: "power2.out", scrollTrigger: { trigger: row, start: "top 90%" } }
      );
    });

    // Address items
    gsap.utils.toArray<HTMLElement>(".address-item").forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: 24 },
        { opacity: 1, x: 0, duration: 0.6, delay: i * 0.1, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 82%" } }
      );
    });

    // Protocol cards
    gsap.utils.toArray<HTMLElement>(".protocol-card").forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 28, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as unknown as string, scrollTrigger: { trigger: card, start: "top 83%" } }
      );
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef}>

      {/* HERO */}
      <section className="relative w-full min-h-[920px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,143,230,0.14),transparent_35%)]" />
        <div className="absolute top-[-200px] right-[-140px] w-[700px] h-[700px] bg-[#5f8fe6]/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-220px] left-[-120px] w-[620px] h-[620px] bg-[#8BC34A]/10 blur-[120px] rounded-full" />

        <div className="relative z-20 max-w-[1380px] mx-auto px-6 lg:px-10 pt-[170px] pb-20">
          <div className="relative overflow-hidden rounded-[38px] bg-white/42 backdrop-blur-2xl border border-white/65 shadow-[0_35px_90px_rgba(28,58,107,0.12)] px-8 md:px-14 py-14 md:py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[37px] border border-white/30 pointer-events-none" />
            <div className="absolute top-[-120px] left-[120px] w-[420px] h-[420px] bg-white/30 blur-[100px] rounded-full" />

            <div className="relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] items-stretch gap-8 lg:gap-12">

              {/* LEFT — Clinical data panel */}
              <motion.div initial={{ opacity: 0, x: -40, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="hidden lg:block">
                <div className="relative h-full min-h-[480px] overflow-hidden rounded-[24px] border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_rgba(46,91,154,0.10)] p-8 flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb]/80 to-[#d8e8f7]/40" />
                  <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] bg-[#2E5B9A]/06 blur-[60px] rounded-full" />

                  <div className="relative z-10 flex flex-col h-full gap-4">
                    {/* Panel header */}
                    <div className="mb-2">
                      <p className="text-[#506985] text-[10px] uppercase tracking-[0.28em] mb-1.5">Patient Lab Trend</p>
                      <div className="w-10 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A]" />
                    </div>

                    {/* Lab rows */}
                    <div className="flex flex-col gap-3 flex-1">
                      {labRows.map((row, i) => (
                        <div key={row.label} className="lab-row rounded-[14px] px-5 py-4 bg-white/55 border border-white/70 flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <p className="text-[#506985] text-[11px] font-semibold uppercase tracking-[0.18em]">{row.label}</p>
                            <p className="text-[#8fa3bb] text-[10px]">{row.context}</p>
                          </div>
                          <div className="w-full h-[1px] bg-white/60" />
                          <div className="flex items-baseline justify-between mt-1">
                            <span className="text-[#10233b] font-light leading-none" style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px" }}>{row.value}</span>
                            <span className="text-[#8BC34A] text-[11px] font-medium">{row.note}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom chip */}
                    <div className="mt-2">
                      <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/75 backdrop-blur-xl border border-white/70 text-[#2E5B9A] text-[12px] font-medium shadow-[0_8px_20px_rgba(46,91,154,0.12)]">
                        Stage 3–5 CKD · GFR Tracking
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT — Content */}
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 mb-7">
                    <div className="w-10 h-[1px] bg-[#2E5B9A]" />
                    <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">Chronic Kidney Disease</p>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                    className="text-[#0a1b32] font-light leading-[0.96] tracking-[-0.05em] text-[46px] sm:text-[56px] md:text-[72px]"
                  >
                    When GFR declines,
                    <br />
                    <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>most stop. We don&apos;t.</span>
                  </motion.h1>

                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 text-[#4e647d] text-[17px] leading-[1.9] max-w-[460px]">
                    35 years of CKD protocols. Ayurvedic formulations that reduce inflammation, support residual kidney function, and delay dialysis — all tracked against your lab values.
                  </motion.p>
                </div>

                <div>
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-3 gap-3 mb-8">
                    {[{ n: "Stage 3–5", l: "CKD treated" }, { n: "GFR", l: "Tracked every visit" }, { n: "35+", l: "Years of protocols" }].map((s) => (
                      <div key={s.l} className="rounded-[16px] px-4 py-4 text-center bg-white/50 backdrop-blur-xl border border-white/60">
                        <p className="text-[#10233b] font-light leading-none mb-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "26px" }}>{s.n}</p>
                        <p className="text-[#6b7f97] text-[11px] uppercase tracking-[0.12em]">{s.l}</p>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }} className="flex flex-wrap gap-4">
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2E5B9A] text-white font-medium border border-[#5f8fe6]/20 shadow-[0_14px_40px_rgba(46,91,154,0.24)] hover:bg-[#244b82] hover:scale-[1.03] transition-all duration-300">
                      Book a Consultation →
                    </Link>
                    <Link href="/overseas" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/55 backdrop-blur-xl border border-[#d1deef] text-[#1f3d63] font-medium hover:bg-white/75 transition-all duration-300">
                      Overseas Patients →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE ADDRESS — clinical split */}
      <section className="relative w-full py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#edf4fb] to-[#dfeaf8]" />
        <div className="absolute top-[-200px] right-[-120px] w-[600px] h-[600px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">

            {/* LEFT */}
            <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-3 mb-7">
                <div className="w-10 h-[1px] bg-[#2E5B9A]" />
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">Clinical Approach</p>
              </div>
              <h2 className="text-[38px] md:text-[52px] leading-[1.05] tracking-[-0.04em] font-light text-[#10233b] mb-6">
                What the decline actually looks like.{" "}
                <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>And what we do about it.</span>
              </h2>
              <p className="text-[#5f738c] text-[16px] leading-[1.9] mb-10 max-w-[480px]">
                Kidneys don&apos;t fail overnight. They decline across months and years — tracked in numbers most patients are only shown once. Our protocols work with those numbers.
              </p>

              {/* 2x2 stat glass cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "GFR", l: "tracked at every visit" },
                  { n: "Creatinine", l: "monitored for reduction" },
                  { n: "Stage 3–5", l: "CKD protocols" },
                  { n: "Zero", l: "dialysis for eligible patients" },
                ].map((s) => (
                  <div key={s.n} className="rounded-[20px] px-5 py-5 bg-white/60 backdrop-blur-2xl border border-white/70 shadow-[0_10px_30px_rgba(46,91,154,0.07)]">
                    <p className="text-[#10233b] font-light leading-none mb-1.5" style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px" }}>{s.n}</p>
                    <p className="text-[#6b7f97] text-[11px] uppercase tracking-[0.1em] leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="divide-y divide-[#dce8f5]">
                {addressItems.map((item, i) => (
                  <div key={item.title} className="address-item py-7 first:pt-0 last:pb-0 flex gap-5 items-start">
                    <div className="flex-shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center mt-0.5" style={{ background: "rgba(46,91,154,0.08)", border: "1px solid rgba(46,91,154,0.12)" }}>
                      <span className="text-[#2E5B9A] text-[13px] font-semibold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h3 className="text-[#10233b] text-[15px] font-semibold mb-2">{item.title}</h3>
                      <p className="text-[#5f738c] text-[13px] leading-[1.85]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROTOCOL STEPS — stacked full-width cards */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />
        <div className="absolute top-[-200px] right-[-120px] w-[600px] h-[600px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1000px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">The Protocol</p>
            <h2 className="text-[42px] md:text-[58px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b]">
              Three steps.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>One outcome.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <div key={i} className="protocol-card rounded-[26px] border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_12px_40px_rgba(46,91,154,0.08)] overflow-hidden">
                <div className="grid md:grid-cols-[140px_1fr] items-stretch">
                  {/* Number block */}
                  <div className="relative flex items-center justify-center px-8 py-8 md:py-0 bg-gradient-to-br from-[#edf4fb] to-[#d8e8f7] border-b md:border-b-0 md:border-r border-white/70">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2E5B9A]/04 to-transparent" />
                    <span className="relative text-[#bfd0e6] font-light leading-none tracking-[-0.06em]" style={{ fontFamily: "var(--font-cormorant)", fontSize: "88px" }}>
                      {step.n}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="px-8 py-7 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[#10233b] text-[20px] md:text-[24px] font-semibold leading-snug tracking-[-0.02em]">{step.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-white/75 border border-white/70 text-[#2E5B9A] text-[10px] font-medium uppercase tracking-[0.12em]">{step.chip}</span>
                    </div>
                    <div className="w-10 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A]" />
                    <p className="text-[#5f738c] text-[14px] leading-[1.85] max-w-[580px]">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex justify-center mt-12">
            <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#2E5B9A] text-white text-[15px] font-medium shadow-[0_18px_50px_rgba(46,91,154,0.18)] hover:bg-[#244b82] hover:scale-[1.04] transition-all duration-300">
              Begin CKD Assessment
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight size={18} /></motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
