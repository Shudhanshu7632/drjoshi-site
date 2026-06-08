"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    image: "/Nephrology & Oncology.png",
    title: "Nephrology & Oncology",
    subtitle: "Specialist-grade care, continuously monitored",
    desc: "Biomarker-driven protocols for CKD and cancer. Every stage tracked, every intervention coordinated. Precision medicine without the gaps.",
    tags: ["CKD Protocols", "Oncology Support", "Biomarker Monitoring"],
  },
  {
    image: "/Ayurveda & Botanicals.png",
    title: "Ayurveda & Botanicals",
    subtitle: "Ancient formulations, clinically validated",
    desc: "Targeted herbal protocols that reduce treatment side-effects, address root causes, and support recovery in ways modern medicine cannot reach alone.",
    tags: ["Herbal Protocols", "Side-effect Management", "Root Cause Care"],
  },
  {
    image: "/Nutraceuticals & Nutrition.png",
    title: "Nutraceuticals & Nutrition",
    subtitle: "Food as medicine, precision-delivered",
    desc: "Disease-specific dietary protocols and evidence-based supplementation to rebuild kidney function, strengthen treatment tolerance, and restore metabolic balance.",
    tags: ["Dietary Protocols", "Supplementation", "Metabolic Health"],
  },
];

export default function IntegratedApproach() {
  return (
    <section className="relative overflow-hidden bg-[#eef4fb] py-10">

      <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-[#7aa5df]/10 blur-[130px] rounded-full" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-[#8BC34A]/8 blur-[130px] rounded-full" />

      <div className="relative z-10 max-w-[1350px] mx-auto px-6">
        <div className="
          relative overflow-hidden
          rounded-[38px]
          bg-white/55 backdrop-blur-2xl
          border border-white/70
          shadow-[0_30px_80px_rgba(46,91,154,0.10)]
          px-8 md:px-16
          py-16 md:py-20
        ">
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

          {/* HEADER */}
          <div className="relative z-10 max-w-2xl mb-16">
            <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#6b7f97] mb-5">
              The Integrated Approach
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#0a1b32] text-[38px] md:text-[54px] font-light leading-[1.08] tracking-[-0.03em]"
            >
              Three systems.
              <span className="italic text-[#2D6A4F]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                {" "}One goal.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 text-[#1a2a3a] text-[16px] leading-[1.8] max-w-[600px]"
            >
              The protocol doesn't rely on one system. It draws from three — each addressing a dimension of recovery that the others can't reach alone.
            </motion.p>
          </div>

          {/* PILLAR CARDS */}
          <div className="relative z-10 grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.35 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[30px] h-[420px] cursor-pointer shadow-[0_18px_50px_rgba(46,91,154,0.10)]"
              >
                {/* IMAGE — always visible */}
                <Image src={pillar.image} alt={pillar.title} fill className="object-cover" />

                {/* DEFAULT overlay — gradient + title/subtitle */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-0">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-[22px] font-semibold leading-tight">{pillar.title}</h3>
                    <p className="text-white/75 text-[14px] mt-2 leading-snug">{pillar.subtitle}</p>
                  </div>
                </div>

                {/* HOVER overlay — glass on top of image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50 backdrop-blur-md rounded-[30px] p-8 flex flex-col">
                  <h3 className="text-white text-[21px] font-semibold leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70 text-[14px] font-medium mt-2">
                    {pillar.subtitle}
                  </p>
                  <p className="text-white/85 text-[14px] leading-[1.85] mt-5 flex-1">
                    {pillar.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {pillar.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-[12px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
