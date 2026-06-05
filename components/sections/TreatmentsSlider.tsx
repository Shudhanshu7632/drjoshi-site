"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const conditions = [
  {
    tag: "CKD · Stages 2–5",
    title: "Chronic Kidney Disease",
    headline: "Stabilise. Improve. Stay off dialysis.",
    desc: "A biomarker-tracked protocol built around your kidney function from first assessment through long-term recovery.",
    stats: [
      { value: "74%", label: "Creatinine stabilised or reduced" },
      { value: "68%", label: "Dialysis avoided in Stages 2–4" },
    ],
    cta: "View CKD Protocol →",
    href: "/ckd-kidney-treatment",
    image: "/Kidney health.png",
    accent: "#2E5B9A",
  },
  {
    tag: "Cancer Support · Oncology",
    title: "Integrative Cancer Support",
    headline: "Support that runs alongside your treatment.",
    desc: "Coordinated cancer support with live monitoring of tumour markers, kidney function, and side-effect load throughout your treatment arc.",
    stats: [
      { value: "82%", label: "Reported reduced side-effect load" },
      { value: "3,200+", label: "Cancer patients supported" },
    ],
    cta: "View Cancer Protocol →",
    href: "/cancer-ayurveda",
    image: "/Cancer Activity.jpg",
    accent: "#2D6A4F",
  },
];

export default function ConditionSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef4fb] py-10">

      <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
      <div className="absolute top-[-180px] left-[-120px] w-[500px] h-[500px] bg-[#8BC34A]/8 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-[#7aa5df]/12 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1350px] mx-auto px-6">
        <div className="relative rounded-[38px] overflow-hidden px-8 md:px-16 py-16 md:py-20 bg-white/55 backdrop-blur-2xl border border-white/70 shadow-[0_30px_80px_rgba(46,91,154,0.10)]">

          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

          {/* HEADER */}
          <div className="relative z-10 max-w-2xl mb-16">
            <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#6b7f97] mb-5">
              Where all three pillars focus
            </p>
            <h2 className="text-[38px] md:text-[54px] leading-[1.08] tracking-[-0.03em] text-[#0a1b32] font-light">
              Two conditions.{" "}
              <span className="italic text-[#2D6A4F]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                One coordinated priority.
              </span>
            </h2>
            <p className="mt-6 text-[#1a2a3a] text-[16px] leading-[1.8] max-w-[620px]">
              Every protocol at Dr. Joshi's clinic is built around CKD and cancer. Not general medicine. Three disciplines, coordinated around your biomarkers, applied in full.
            </p>
          </div>

          {/* CARDS */}
          <div className="relative z-10 grid md:grid-cols-2 gap-8">
            {conditions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[30px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_18px_50px_rgba(46,91,154,0.08)] hover:shadow-[0_24px_70px_rgba(46,91,154,0.14)] transition-all duration-500"
              >
                {/* TOP IMAGE STRIP */}
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
                  {/* TAG over image */}
                  <div className="absolute top-5 left-6">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 text-[#2E5B9A] text-[11px] font-medium tracking-[0.08em]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-10 pt-6">
                  {/* Accent line */}
                  <div className="h-[2px] w-10 mb-6 rounded-full" style={{ background: item.accent }} />

                  <h3 className="text-[24px] font-semibold leading-tight text-[#0a1b32]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[#1a2a3a] text-[17px] font-medium leading-relaxed">
                    {item.headline}
                  </p>
                  <p className="mt-4 text-[#6b7f97] text-[15px] leading-[1.8]">
                    {item.desc}
                  </p>

                  {/* STATS */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#e8eef7]">
                    {item.stats.map((stat, idx) => (
                      <div key={idx}>
                        <p className="text-[28px] font-light tracking-tight text-[#0a1b32]">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-[12px] text-[#6b7f97] leading-snug">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-[15px] font-medium transition-all duration-300"
                      style={{ color: item.accent }}
                    >
                      {item.cta}
                    </Link>
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
