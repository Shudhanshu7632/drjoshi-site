"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Can Ayurveda actually reduce creatinine levels in CKD?",
    a: "Yes one of our most documented outcomes. Our protocols have helped patients reduce creatinine, slow GFR decline, and delay dialysis. Results are tracked against lab values.",
  },
  {
    q: "How is Dr. Joshi's treatment different?",
    a: "35+ years of focused clinical experience. Every protocol is built from diagnosis and reports — not generic wellness templates.",
  },
  {
    q: "Can I continue my current medication?",
    a: "Yes. We follow an integrative approach. Any reduction is done gradually with your physician.",
  },
  {
    q: "What is Panchkarma?",
    a: "A clinical detox protocol (not spa therapy) used for chronic and deep-rooted conditions, performed under supervision.",
  },
  {
    q: "How long to see results?",
    a: "Most patients see measurable improvements within 6–12 weeks. Complex conditions may take longer.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gradient-to-b from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea] py-16">
      <div className="max-w-[1300px] mx-auto px-6">


        <div className="rounded-[38px] bg-white/55 backdrop-blur-2xl border border-white/70 shadow-[0_30px_80px_rgba(46,91,154,0.10)] p-12">
        <div className="grid lg:grid-cols-[420px_1fr] gap-20 items-start">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-32">
            <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#6b7f97] mb-4">
              FAQ's
            </p>

            <h2 className="text-[35px] md:text-[50px] font-light text-[#0a1b32] leading-[1.1] mb-6">
              Everything you
              <br />
              need to know
            </h2>

            <p className="text-[#6b7f97] text-lg leading-relaxed mb-10">
              Still have questions? Speak directly with our team and get
              personalized guidance for your condition.
            </p>

            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                bg-[#2e5b9a]
                text-white
                px-6 py-4
                rounded-full
                font-medium
                shadow-md
                hover:scale-[1.04]
                transition
              "
            >
              Book Consultation →
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">

            {faqs.map((faq, i) => (
              <div key={i} className="rounded-[30px] bg-white/60 backdrop-blur-xl shadow-[0_18px_50px_rgba(46,91,154,0.08)] border-b border-[#d1deef] py-6 px-6 mb-3">

                {/* QUESTION */}
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center gap-6 text-left"
                >
                  <span className="text-[#0a1b32] text-[20px] md:text-[22px] font-medium leading-snug">
                    {faq.q}
                  </span>

                  {/* ICON */}
                  <span
                    className={`
                      text-[#2E5B9A]
                      text-2xl
                      transition-transform duration-300
                      ${open === i ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <motion.div
                  initial={false}
                  animate={{
                    height: open === i ? "auto" : 0,
                    opacity: open === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-[#1a2a3a] text-[16px] leading-relaxed max-w-[700px]">
                    {faq.a}
                  </p>
                </motion.div>

              </div>
            ))}

          </div>

        </div>
        </div>
      </div>
    </section>
  );
}