"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const standardProtocol = [
  "Each condition managed by a separate specialist with no shared protocol",
  "Ayurveda and nutrition treated as optional add-ons, not core treatment",
  "No cross-system biomarker review. Kidney, cancer, and diet tracked in isolation.",
  "Reactive: treatment adjusted only after deterioration is visible",
  "No defined recovery target. Ongoing management with no end goal.",
];

const joshiProtocol = [
  "Nephrology, Ayurveda, and nutrition reviewed within one coordinated plan",
  "Botanical and dietary protocols integrated from day one, not as afterthoughts",
  "Shared biomarker oversight across kidney function, tumour markers, and metabolic health",
  "Proactive: protocol adapted continuously based on lab data and treatment response",
  "Defined recovery milestones at every stage. Not indefinite symptom management.",
];

export default function ComparisonSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef4fb] py-28 px-6">

      <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
      <div className="absolute top-[-220px] right-[-120px] w-[620px] h-[620px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-220px] left-[-120px] w-[620px] h-[620px] bg-[#8BC34A]/8 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#6b7f97] mb-6">
            Treatment Method
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[44px] md:text-[64px] leading-[1.02] tracking-[-0.04em] font-light text-[#0a1b32]"
          >
            Standard care versus{" "}
            <span className="italic text-[#2D6A4F]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              our integrated protocol
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-7 text-[#1a2a3a] text-[17px] leading-[1.8] max-w-[680px] mx-auto"
          >
            Standard care separates medicine systems. Our protocol unifies nephrology,
            Ayurveda, and nutrition into one coordinated plan with measurable outcomes at every stage.
          </motion.p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* STANDARD CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[30px] border border-[#dce7f5] bg-white/60 backdrop-blur-2xl shadow-[0_18px_50px_rgba(46,91,154,0.08)]"
          >
            <div className="px-10 py-8 border-b border-[#e5edf7] bg-[#f8fbff]">
              <p className="text-[28px] md:text-[34px] font-light text-[#0a1b32]">
                Standard Protocol
              </p>
              <p className="mt-3 text-[#6b7f97] text-[15px] leading-[1.8]">
                Fragmented care. Each system managed independently without a unified goal.
              </p>
            </div>
            <div className="p-10 space-y-6">
              {standardProtocol.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5"
                >
                  <div className="flex items-center justify-center min-w-[34px] h-[34px] rounded-full bg-[#f2f5f9] border border-[#e2eaf4] mt-0.5">
                    <X size={14} className="text-[#93a3b7]" />
                  </div>
                  <p className="text-[#1a2a3a] text-[15px] leading-[1.8]">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DR. JOSHI CARD — dark navy, not full blue */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[30px] bg-[#0a1b32] shadow-[0_30px_80px_rgba(10,27,50,0.25)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f2340] to-[#061422]" />
            <div className="absolute top-[-80px] right-[-60px] w-[300px] h-[300px] bg-[#2D6A4F]/10 blur-[100px] rounded-full" />

            <div className="relative z-10 px-10 py-8 border-b border-white/10">
              <p className="text-[28px] md:text-[34px] font-light text-white">
                Dr. Joshi's Protocol
              </p>
              <p className="mt-3 text-white/60 text-[15px] leading-[1.8]">
                Three systems unified. Nephrology, Ayurveda, and nutrition working as one.
              </p>
            </div>

            <div className="relative z-10 p-10 space-y-6">
              {joshiProtocol.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5"
                >
                  <div className="flex items-center justify-center min-w-[34px] h-[34px] rounded-full bg-[#2D6A4F]/20 border border-[#2D6A4F]/30 mt-0.5">
                    <Check size={14} className="text-[#52B788]" />
                  </div>
                  <p className="text-white/85 text-[15px] leading-[1.8]">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <p className="text-[#6b7f97] text-[15px] leading-[1.8] max-w-[680px]">
            Integrated care for CKD and cancer across Mumbai, Pune, Nashik, and Thane.
          </p>
          <a
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#2E5B9A] text-white text-[15px] font-medium shadow-[0_18px_50px_rgba(46,91,154,0.18)] hover:bg-[#244b82] hover:scale-[1.04] transition-all duration-300"
          >
            Start Your Assessment
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
