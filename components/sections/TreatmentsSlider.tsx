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
    image: "/CKD · Stages 2–5.png",
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
    image: "/Cancer Support · Oncology.png",
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
              <span
                className="italic text-[#2D6A4F]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                One coordinated priority.
              </span>
            </h2>
            <p className="mt-6 text-[#1a2a3a] text-[16px] leading-[1.8] max-w-[620px]">
              Every protocol at Dr. Joshi's clinic is built around CKD and
              cancer. Not general medicine. Three disciplines, coordinated
              around your biomarkers, applied in full.
            </p>
          </div>

          {/* CARDS */}
          {/* CARDS */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8">
            {conditions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                className="
        group

        overflow-hidden

        rounded-[32px]

        bg-white

        border border-[#E6EDF5]

        shadow-[0_15px_40px_rgba(16,35,59,0.06)]

        hover:shadow-[0_25px_60px_rgba(16,35,59,0.10)]

        transition-all
        duration-500
      "
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
            object-cover

            transition-transform
            duration-700

            group-hover:scale-105
          "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
            absolute inset-0

            bg-gradient-to-t
            from-[#081524]/75
            via-[#081524]/15
            to-transparent
          "
                  />

                  {/* TAG */}
                  <div className="absolute top-5 left-5">
                    <span
                      className="
              inline-flex
              items-center

              px-4 py-2

              rounded-full

              bg-white/90
              backdrop-blur-xl

              text-[#2E5B9A]

              text-[11px]

              font-medium

              tracking-[0.05em]
            "
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3
                      className="
              text-white

              text-[30px]
              md:text-[34px]

              leading-[1.1]

              tracking-[-0.03em]

              font-light
            "
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-10">
                  {/* Accent */}
                  <div
                    className="h-[3px] w-12 rounded-full mb-6"
                    style={{
                      background: item.accent,
                    }}
                  />

                  {/* Headline */}
                  <p
                    className="
            text-[#10233B]

            text-[22px]

            leading-[1.45]

            font-medium
          "
                  >
                    {item.headline}
                  </p>

                  {/* Description */}
                  <p
                    className="
            mt-5

            text-[#5F738C]

            text-[15px]

            leading-[1.9]
          "
                  >
                    {item.desc}
                  </p>

                  {/* STATS */}
                  <div
                    className="
            mt-8

            pt-8

            border-t
            border-[#E6EDF5]

            grid
            grid-cols-2

            gap-8
          "
                  >
                    {item.stats.map((stat, idx) => (
                      <div key={idx}>
                        <h4
                          className="
                  text-[#10233B]

                  text-[34px]

                  font-light

                  leading-none

                  tracking-[-0.03em]
                "
                        >
                          {stat.value}
                        </h4>

                        <p
                          className="
                  mt-2

                  text-[#7A8899]

                  text-[12px]

                  leading-relaxed

                  uppercase

                  tracking-[0.04em]
                "
                        >
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      href={item.href}
                      className="
              inline-flex
              items-center

              gap-2

              text-[15px]

              font-medium

              transition-all
              duration-300

              hover:gap-3
            "
                      style={{
                        color: item.accent,
                      }}
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
