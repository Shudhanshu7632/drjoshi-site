"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FinalCTA from "@/components/sections/FinalCTA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const faqGroups = [
  {
    category: "General",
    items: [
      {
        q: "How is Dr. Joshi's approach different from a regular Ayurvedic doctor?",
        a: "35+ years of focused clinical practice. Every protocol is built from a full constitution assessment and your current lab results — not a generic wellness template. For CKD and cancer support, conventional biomarkers are reviewed alongside the Ayurvedic findings.",
      },
      {
        q: "Can I continue my current allopathic medication?",
        a: "Yes. We follow an integrative model. No medication is stopped without coordination with your existing physician. Any changes are gradual, evidence-tracked, and done in consultation.",
      },
      {
        q: "How long does it take to see results?",
        a: "Most patients see measurable improvements within 6–12 weeks. Complex chronic conditions may take longer. Progress is tracked against lab values — not subjective reporting alone.",
      },
    ],
  },
  {
    category: "Chronic Kidney Disease",
    items: [
      {
        q: "Can Ayurveda actually reduce creatinine levels?",
        a: "Yes — one of our most documented outcomes. Protocols have helped patients reduce creatinine, slow GFR decline, and delay dialysis. Results are tracked against lab values at every follow-up.",
      },
      {
        q: "What CKD stages do you treat?",
        a: "Stage 1 through Stage 5, including patients already on dialysis who want to support residual function. Protocols are stage-specific and adjusted based on your GFR trend.",
      },
      {
        q: "Do I need to stop dialysis to start treatment?",
        a: "No. Ayurvedic protocols are designed to run alongside dialysis, supporting residual function and reducing the frequency required over time — where clinically possible.",
      },
    ],
  },
  {
    category: "Cancer Support",
    items: [
      {
        q: "Is Ayurveda safe during chemotherapy?",
        a: "Yes — when prescribed correctly. Every formulation is reviewed for contraindications with your specific chemotherapy regimen. This is integrative care, not alternative care.",
      },
      {
        q: "What does integrative mean in practice?",
        a: "It means your oncology team and Ayurvedic protocol work in parallel — not in opposition. Your chemo schedule, drug interactions, and side effect profile all inform the formulation decisions.",
      },
    ],
  },
  {
    category: "Lifestyle Disorders",
    items: [
      {
        q: "Can diabetes be resolved through Ayurveda?",
        a: "For Type 2 diabetes, significant HbA1c reduction — and in some cases, reduced medication dependency — is achievable. This is metabolic recalibration, not symptom suppression. Results vary by constitution and stage.",
      },
      {
        q: "Do I have to follow a strict diet?",
        a: "A dietary prescription is part of every protocol — but it is designed for your constitution, not a generic restriction plan. The goal is sustainability, not discipline-based compliance.",
      },
    ],
  },
  {
    category: "Overseas & Remote",
    items: [
      {
        q: "Can formulations be shipped internationally?",
        a: "Yes. We ship to the UK, US, UAE, Canada, Australia, and most of Europe. All customs documentation is provided. Typical delivery is 7–14 days.",
      },
      {
        q: "Are video consultations as effective as in-person visits?",
        a: "For most conditions, yes. CKD and cancer support protocols have been managed entirely remotely for patients across 20+ countries — with the same lab-tracked rigour as in-person follow-ups.",
      },
    ],
  },
];

export default function FAQsPage() {
  const [open, setOpen] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Group headers: slide from left
    gsap.utils.toArray<HTMLElement>(".faq-group-header").forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -24 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%" },
        }
      );
    });

    // FAQ items: stagger clip-path from bottom
    gsap.utils.toArray<HTMLElement>(".faq-item").forEach((item, i) => {
      gsap.fromTo(item,
        { clipPath: "inset(0 0 100% 0)", opacity: 0 },
        {
          clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 90%" },
        }
      );
    });

    // Category accent lines: scaleX reveal
    gsap.utils.toArray<HTMLElement>(".cat-line").forEach((line) => {
      gsap.fromTo(line,
        { scaleX: 0 },
        {
          scaleX: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: line, start: "top 90%" },
        }
      );
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef}>

      {/* HERO — stripped editorial */}
      <section className="relative w-full min-h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute top-[-200px] right-[-140px] w-[600px] h-[600px] bg-[#5f8fe6]/12 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#8BC34A]/07 blur-[120px] rounded-full" />

        <div className="relative z-20 max-w-[1280px] mx-auto px-6 lg:px-10 pt-[200px] pb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-[1px] bg-[#2E5B9A]" />
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">FAQs</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#0a1b32] font-light leading-[0.93] tracking-[-0.055em] text-[44px] sm:text-[62px] md:text-[90px] max-w-[640px]"
          >
            Questions.
            <br />
            <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Answered clearly.
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 w-full h-[1px] origin-left bg-gradient-to-r from-[#2E5B9A]/40 via-[#7aa5df]/20 to-transparent"
          />
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="relative w-full py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#edf4fb] to-[#dfeaf8]" />
        <div className="absolute top-[-220px] right-[-120px] w-[700px] h-[700px] bg-[#7aa5df]/12 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-[1000px] mx-auto px-6">
          <div className="relative overflow-hidden rounded-[28px] md:rounded-[40px] px-5 md:px-16 py-10 md:py-14 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(244,249,255,0.62))] backdrop-blur-2xl border border-white/70 shadow-[0_30px_90px_rgba(46,91,154,0.10)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[27px] md:rounded-[39px] border border-white/40 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-12">
              {faqGroups.map((group, gi) => (
                <div key={group.category}>
                  {/* Category header */}
                  <div className="faq-group-header flex items-center gap-4 mb-6">
                    <div className="cat-line origin-left h-[2px] w-8 rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A]" />
                    <p className="text-[#8bc34a] text-[12px] uppercase tracking-[0.35em] font-medium">{group.category}</p>
                  </div>

                  <div className="flex flex-col divide-y divide-white/60">
                    {group.items.map((item, ii) => {
                      const key = `${gi}-${ii}`;
                      return (
                        <div key={key} className="faq-item py-5">
                          <button
                            onClick={() => setOpen(open === key ? null : key)}
                            className="w-full flex justify-between items-center gap-6 text-left group"
                          >
                            <span className="text-[#10233b] text-[15px] md:text-[17px] font-medium leading-snug group-hover:text-[#2E5B9A] transition-colors duration-200">
                              {item.q}
                            </span>
                            <motion.span
                              animate={{ rotate: open === key ? 45 : 0 }}
                              transition={{ duration: 0.25 }}
                              className="text-[#2E5B9A] text-[22px] leading-none flex-shrink-0"
                            >
                              +
                            </motion.span>
                          </button>
                          <motion.div
                            initial={false}
                            animate={{ height: open === key ? "auto" : 0, opacity: open === key ? 1 : 0 }}
                            transition={{ duration: 0.35 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-[#5f738c] text-[14px] leading-relaxed max-w-[680px]">{item.a}</p>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Still unsure card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 relative overflow-hidden rounded-[28px] p-8 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_15px_40px_rgba(46,91,154,0.07)] flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#2E5B9A] to-[#8BC34A]" />
            <div>
              <p className="text-[#10233b] text-[18px] font-semibold mb-1">Still have questions?</p>
              <p className="text-[#5f738c] text-[14px]">Speak directly with the team. No forms, no waiting.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#2E5B9A] text-white text-[14px] font-medium shadow-[0_10px_28px_rgba(46,91,154,0.20)] hover:bg-[#244b82] hover:scale-[1.03] transition-all duration-300"
              >
                Book a Consultation →
              </Link>
              <a
                href="https://wa.me/919075390753"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/55 backdrop-blur-xl border border-[#d1deef] text-[#1f3d63] text-[14px] font-medium hover:bg-white/75 transition-all duration-300"
              >
                WhatsApp Us →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
