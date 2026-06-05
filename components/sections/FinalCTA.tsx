"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      className="
        relative
        py-10

        overflow-hidden

        bg-[#eef4fb]
        bg-gradient-to-br
        from-[#edf4fb]
        via-[#dbe6f2]
        to-[#c7d8ea]
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]

            w-[500px]
            h-[500px]

            bg-[#9dcf63]/10

            blur-[120px]

            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]

            w-[500px]
            h-[500px]

            bg-[#6f9ed8]/10

            blur-[120px]

            rounded-full
          "
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* CONTAINER */}
        <div
          className="
            grid lg:grid-cols-2
            gap-14
            items-center

            rounded-[38px]

            bg-white/55
            backdrop-blur-2xl

            border border-white/70

            shadow-[0_30px_80px_rgba(46,91,154,0.10)]

            p-10 md:p-14
          "
        >
          {/* LEFT CONTENT */}
          <div>
            <p
              className="
                text-[12px]
                uppercase
                tracking-[0.22em]
                font-medium
                text-[#6b7f97]
                mb-4
              "
            >
              Book a Consultation
            </p>

            <motion.h2
              className="
                text-[#0a1b32]

                font-light

                leading-[1.15]

                text-[32px]
                md:text-[48px]

                tracking-[-0.04em]
              "
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
            >
              Start your
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
                healing journey
              </span>
            </motion.h2>

            {/* BODY */}
            <p
              className="
                mt-6

                text-[#1a2a3a]

                text-[16px]

                leading-[1.9]

                max-w-md
              "
            >
              Book a personalized Ayurvedic consultation with our experts.
              Receive a treatment plan tailored specifically to your condition
              and recovery goals.
            </p>

            {/* POINTS */}
            <div
              className="
                mt-8

                text-[15px]

                text-[#1a2a3a]

                space-y-3
              "
            >
              <p>✓ 35+ Years Clinical Experience</p>

              <p>✓ 10,000+ Patients Treated</p>

              <p>✓ Online & Offline Consultation</p>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            className="
              bg-white/60
              backdrop-blur-xl

              rounded-[28px]

              p-6 md:p-8

              border border-white/70

              shadow-[0_18px_50px_rgba(46,91,154,0.08)]

              space-y-5
            "
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            {/* NAME */}
            <div>
              <label
                className="
                  text-xs

                  text-[#6b7f97]
                "
              >
                Full Name
              </label>

              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  mt-2

                  px-4 py-3

                  rounded-xl

                  border border-[#d9e5f2]

                  bg-white/80

                  focus:border-[#2E5B9A]

                  outline-none

                  text-sm

                  text-[#18314f]

                  placeholder:text-[#94a7bb]

                  transition
                "
              />
            </div>

            {/* PHONE */}
            <div>
              <label
                className="
                  text-xs

                  text-[#6b7f97]
                "
              >
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Phone Number"
                className="
                  w-full
                  mt-2

                  px-4 py-3

                  rounded-xl

                  border border-[#d9e5f2]

                  bg-white/80

                  focus:border-[#2E5B9A]

                  outline-none

                  text-sm

                  text-[#18314f]

                  placeholder:text-[#94a7bb]

                  transition
                "
              />
            </div>

            {/* CONDITION */}
            <div>
              <label
                className="
                  text-xs

                  text-[#6b7f97]
                "
              >
                Condition
              </label>

              <select
                className="
                  w-full
                  mt-2

                  px-4 py-3

                  rounded-xl

                  border border-[#d9e5f2]

                  bg-white/80

                  focus:border-[#2E5B9A]

                  outline-none

                  text-sm

                  text-[#5f738c]

                  transition
                "
              >
                <option>Select Condition</option>

                <option>Kidney Disease (CKD)</option>

                <option>Cancer Support</option>

                <option>Diabetes</option>

                <option>Other / Not Sure</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label
                className="
                  text-xs

                  text-[#6b7f97]
                "
              >
                Message
              </label>

              <textarea
                rows={3}
                placeholder="Briefly describe your condition"
                className="
                  w-full
                  mt-2

                  px-4 py-3

                  rounded-xl

                  border border-[#d9e5f2]

                  bg-white/80

                  focus:border-[#2E5B9A]

                  outline-none

                  text-sm

                  text-[#18314f]

                  placeholder:text-[#94a7bb]

                  transition
                "
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="
                w-full

                py-3.5

                rounded-full

                bg-[#2E5B9A]

                text-white

                font-medium
                text-[15px]

                shadow-[0_20px_40px_rgba(46,91,154,0.18)]

                hover:scale-[1.02]

                transition-all duration-300
              "
            >
              Book Consultation →
            </button>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919075390753"
              target="_blank"
              className="
                block

                text-center

                text-sm

                text-[#5f738c]

                underline

                hover:text-[#2E5B9A]

                transition
              "
            >
              Or book instantly on WhatsApp
            </a>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
