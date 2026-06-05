"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#eef4fb]">
      {/* PREMIUM BACKGROUND */}
      <div
        className="
          absolute inset-0

          bg-gradient-to-br
          from-[#edf4fb]
          via-[#dbe6f2]
          to-[#c7d8ea]
        "
      />

      {/* RIGHT BLUE GLOW */}
      <div
        className="
          absolute
          top-[-220px]
          right-[-120px]

          w-[700px]
          h-[700px]

          bg-[#7aa5df]/12
          blur-[140px]

          rounded-full
        "
      />

      {/* LEFT GREEN GLOW */}
      <div
        className="
          absolute
          bottom-[-240px]
          left-[-120px]

          w-[700px]
          h-[700px]

          bg-[#8BC34A]/10
          blur-[150px]

          rounded-full
        "
      />

      {/* SOFT OVERLAY */}
      <div
        className="
          absolute inset-0

          bg-gradient-to-b
          from-white/20
          to-transparent
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1180px] mx-auto px-6">
        <div
          className="
            relative

            overflow-hidden

            rounded-[38px]

            px-8 md:px-16
            py-16 md:py-24

            bg-white/55

            backdrop-blur-2xl

            border border-white/70

            shadow-[0_30px_80px_rgba(46,91,154,0.10)]
          "
        >
          {/* INNER LIGHT */}
          <div
            className="
              absolute inset-0

              bg-gradient-to-b
              from-white/40
              via-transparent
              to-transparent

              pointer-events-none
            "
          />

          {/* INNER BORDER */}
          <div
            className="
              absolute inset-[1px]

              rounded-[39px]

              border border-white/40

              pointer-events-none
            "
          />

          {/* TOP TEXT */}
          <motion.p
            className="
              text-[#6b7f97]

              text-[12px]
              uppercase

              tracking-[0.22em]

              font-medium

              text-center
              mb-6
            "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Root cause. Not symptom suppression.
          </motion.p>

          {/* EYEBROW */}
          <motion.div
            className="
              flex items-center justify-center gap-3
              mb-8
            "
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            viewport={{ once: true }}
          >
            <span
              className="
                text-[#6b7f97]
                text-[12px]
                uppercase
                tracking-[0.22em]
                font-medium
              "
            >
              Our Philosophy
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            className="
              text-[#0a1b32]

              leading-[1.08]
              tracking-[-0.04em]

              font-light

              text-[42px]
              md:text-[68px]

              text-center

              max-w-3xl
              mx-auto
            "
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            viewport={{ once: true }}
          >
            Where modern medicine manages,
            <br />
            <span
              className="
                italic
                text-[#1B3A6B]
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Ayurveda heals.
            </span>
          </motion.h2>

          {/* DIVIDER */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              origin-center

              w-24
              h-[2px]

              bg-gradient-to-r
              from-[#8BC34A]
              via-[#2E5B9A]
              to-[#8BC34A]

              mx-auto
              mt-10
              mb-14
            "
          />

          {/* CONTENT */}
          <motion.div
            className="
              max-w-3xl
              mx-auto

              text-[#1a2a3a]

              text-[15px]
              leading-[2]

              text-center

              space-y-7
            "
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
          >
            <p>
              Most chronic diseases today are treated as conditions to manage
              for life. Our approach challenges that belief. Kidney disease,
              diabetes, autoimmune disorders, and even cancer support each has a
              root cause. When addressed correctly, the body begins to restore
              balance naturally.
            </p>

            {/* QUOTE */}
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
                delay: 0.35,
              }}
              viewport={{ once: true }}
              className="
                relative

                mt-10

                rounded-[28px]

                border border-white/70

                bg-white/60

                px-8 py-7

                shadow-[0_15px_40px_rgba(46,91,154,0.06)]
              "
            >
              {/* LEFT BAR */}
              <div
                className="
                  absolute
                  left-0
                  top-8
                  bottom-8

                  w-[3px]

                  rounded-full

                  bg-gradient-to-b
                  from-[#8BC34A]
                  to-[#2E5B9A]
                "
              />

              <p
                className="
                  text-[#0a1b32]

                  text-[20px]
                  md:text-[24px]

                  italic
                  font-medium

                  leading-[1.7]
                "
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                “This philosophy has guided our clinical practice for over 35
                years.”
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
