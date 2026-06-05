"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book Your Checkup",
    desc: "Schedule your visit and complete a short intake. Our team confirms details and prepares your protocol review.",
    tags: ["Intake Form", "Protocol Review", "Confirmation"],
    image: "/book your checkup.png",
  },
  {
    number: "02",
    title: "Visit the Clinic",
    desc: "Complete bloodwork, imaging, kidney function analysis, and integrated biomarker testing in one streamlined visit.",
    tags: ["Bloodwork", "Imaging", "Biomarker Testing"],
    image: "/Visit Our Clinic.png",
  },
  {
    number: "03",
    title: "Review Your Results",
    desc: "Your results reviewed in one session. Kidney function, oncology markers, Ayurvedic assessment, and nutritional status interpreted together as one clinical picture.",
    tags: ["Kidney Function", "Oncology Markers", "Nutritional Status"],
    image: "/get your plan.png",
  },
  {
    number: "04",
    title: "Act on Your Plan",
    desc: "Leave with a personalised integrated protocol. Dietary guidance, herbal formulations, and next clinical steps you can begin immediately.",
    tags: ["Personalised Protocol", "Dietary Plan", "Herbal Formulations"],
    image: "/Act on your plan.png",
  },
  {
    number: "05",
    title: "Follow-Up & Refinement",
    desc: "Regular check-ins to assess progress, adjust treatment direction, and track biomarkers continuously over time.",
    tags: ["Progress Tracking", "Biomarker Review", "Protocol Adjustment"],
    image: "/followups.png",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-[#eef4fb] py-28">

      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0

          bg-gradient-to-br
          from-[#edf4fb]
          via-[#dbe6f2]
          to-[#c7d8ea]
        "
      />

      {/* GLOW */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-200px]
          right-[-120px]

          w-[600px]
          h-[600px]

          bg-[#7aa5df]/10
          blur-[120px]

          rounded-full
        "
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-200px]
          left-[-120px]

          w-[600px]
          h-[600px]

          bg-[#8BC34A]/10
          blur-[120px]

          rounded-full
        "
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div
          className="
            rounded-[38px]
            bg-white/55
            backdrop-blur-2xl
            border border-white/70
            shadow-[0_30px_80px_rgba(46,91,154,0.10)]
            px-8 py-16
            md:px-16
          "
        >

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >

          <p
            className="
              text-[12px]
              uppercase
              tracking-[0.22em]
              font-medium
              text-[#6b7f97]

              mb-5
            "
          >
            Integrated Clinical Process
          </p>

          <h2
            className="
              text-[42px]
              md:text-[64px]

              leading-[1.02]
              tracking-[-0.04em]

              font-light

              text-[#0a1b32]
            "
          >
            One coordinated process.
            <br />

            <span
              className="italic text-[#2D6A4F]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              From assessment to recovery.
            </span>
          </h2>

          <p
            className="
              mt-7

              text-[#1a2a3a]

              text-[17px]
              leading-[1.9]

              max-w-2xl
              mx-auto
            "
          >
            Every stage of care is connected. Nephrology, Ayurveda, and nutrition reviewed together, tracked by biomarkers, and adapted through one integrated protocol.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-28">

          {/* CENTER LINE */}
          <div
            className="
              hidden lg:block

              absolute
              left-1/2
              top-0
              bottom-0

              w-[1px]

              bg-gradient-to-b
              from-[#d8e3f0]
              via-[#b7cde8]
              to-[#d8e3f0]
            "
          />

          {/* ANIMATED LINE */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{
              height: "100%",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="
              hidden lg:block

              absolute
              left-1/2
              top-0

              w-[2px]

              bg-gradient-to-b
              from-[#2E5B9A]
              via-[#7aa5df]
              to-[#8BC34A]

              origin-top
            "
          />

          <div className="space-y-28">

            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                  }}
                  className="
                    relative

                    grid
                    lg:grid-cols-2

                    gap-12
                    lg:gap-20

                    items-center
                  "
                >

                  {/* IMAGE */}
                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`
                      ${
                        isLeft
                          ? "lg:pr-16"
                          : "lg:order-2 lg:pl-16"
                      }
                    `}
                  >

                    <div
                      className="
                        relative

                        overflow-hidden

                        rounded-[30px]

                        border border-white/70

                        bg-white/60
                        backdrop-blur-xl

                        shadow-[0_18px_50px_rgba(46,91,154,0.08)]

                        aspect-[1.28/1]

                        group
                      "
                    >

                      {/* IMAGE */}
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.6,
                        }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* OVERLAY */}
                      <div
                        className="
                          absolute inset-0

                          bg-gradient-to-t
                          from-[#10233b]/35
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* STEP FLOAT */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.25,
                        }}
                        className="
                          absolute
                          left-5
                          top-5

                          px-4 py-2

                          rounded-full

                          bg-white/75
                          backdrop-blur-xl

                          border border-white/70

                          text-[#6b7f97]

                          text-[12px]
                          font-medium
                        "
                      >
                        Step {step.number}
                      </motion.div>

                    </div>
                  </motion.div>

                  {/* CONTENT */}
                  <div
                    className={`
                      relative

                      ${
                        isLeft
                          ? "lg:pl-16"
                          : "lg:order-1 lg:pr-16"
                      }
                    `}
                  >

                    {/* TIMELINE DOT */}
                    <motion.div
                      initial={{
                        scale: 0,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2,
                      }}
                      className="
                        hidden lg:flex

                        absolute
                        top-6

                        items-center justify-center

                        w-6 h-6

                        rounded-full

                        bg-white

                        border-[6px]
                        border-[#2E5B9A]

                        shadow-[0_0_0_8px_rgba(122,165,223,0.15)]
                      "
                      style={{
                        left: isLeft
                          ? "-12px"
                          : "auto",
                        right: isLeft
                          ? "auto"
                          : "-12px",
                      }}
                    />

                    {/* STEP */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isLeft
                          ? 30
                          : -30,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                    >

                      {/* NUMBER */}
                      <div
                        className="
                          text-[#bfd0e6]

                          text-[70px]
                          md:text-[92px]

                          leading-none
                          font-light
                          tracking-[-0.05em]
                        "
                      >
                        {step.number}
                      </div>

                      {/* TITLE */}
                      <h3
                        className="
                          mt-3

                          text-[32px]
                          md:text-[42px]

                          leading-[1.08]
                          tracking-[-0.03em]

                          font-light

                          text-[#0a1b32]
                        "
                      >
                        {step.title}
                      </h3>

                      {/* DESC */}
                      <p
                        className="
                          mt-5

                          text-[#1a2a3a]

                          text-[16px]
                          leading-[1.9]

                          max-w-[520px]
                        "
                      >
                        {step.desc}
                      </p>

                      {/* TAGS */}
                      <div className="flex flex-wrap gap-3 mt-8">
                        {step.tags.map((tag, idx) => (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/75 border border-[#dce7f5] text-[#6b7f97] text-[13px]"
                          >
                            <CheckCircle2 size={14} className="text-[#2D6A4F]" />
                            {tag}
                          </div>
                        ))}
                      </div>

                    </motion.div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
          }}
          className="flex justify-center mt-28"
        >

          <Link
            href="/contact"
            className="
              group

              inline-flex items-center gap-3

              px-10 py-5

              rounded-full

              bg-[#2E5B9A]
              text-white

              text-[15px]
              font-medium

              shadow-[0_18px_50px_rgba(46,91,154,0.18)]

              hover:bg-[#244b82]
              hover:scale-[1.04]

              transition-all duration-300
            "
          >
            Begin Assessment

            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
