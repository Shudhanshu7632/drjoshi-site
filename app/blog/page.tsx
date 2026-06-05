"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

const featured = {
  category: "Chronic Kidney Disease",
  title: "Why CKD patients should ask about Ayurveda before starting dialysis",
  excerpt: "Dialysis is not always inevitable. For patients at Stage 3–4 CKD, there is a documented clinical window where Ayurvedic protocols — specifically targeting inflammation and residual nephron function — can slow decline measurably. Most patients are never told this.",
  readTime: "8 min read",
  date: "March 2025",
};

const articles = [
  {
    category: "Cancer Support",
    title: "What 'integrative oncology' actually means — and what it doesn't",
    excerpt: "There is a difference between complementary care and alternative care. One runs alongside your oncologist. The other replaces them. The distinction matters clinically.",
    readTime: "6 min",
    date: "Feb 2025",
  },
  {
    category: "Lifestyle",
    title: "HbA1c can change. Here's what Ayurveda does differently for Type 2 diabetes",
    excerpt: "Standard treatment manages the number. Ayurvedic protocols target the metabolic mechanism. The difference shows in labs within 90 days for most patients.",
    readTime: "5 min",
    date: "Jan 2025",
  },
  {
    category: "Overseas",
    title: "Managing CKD from abroad: what remote Ayurvedic care looks like in practice",
    excerpt: "A UK-based patient's account of 14 months on a remote protocol. GFR trajectory, formulation dispatch, lab coordination, and what surprised them most.",
    readTime: "7 min",
    date: "Dec 2024",
  },
  {
    category: "Clinical",
    title: "Panchakarma is not a spa treatment. Here's what it's actually for",
    excerpt: "Detoxification as a clinical intervention for chronic disease. The pharmacological rationale, the conditions it suits, and what to expect during the process.",
    readTime: "6 min",
    date: "Nov 2024",
  },
  {
    category: "Lifestyle",
    title: "PCOS is a systemic condition. Why treating only the cycle doesn't work",
    excerpt: "The endocrine cascade behind polycystic ovary syndrome — and why Ayurvedic protocols address insulin resistance, cortisol, and inflammation alongside reproductive hormones.",
    readTime: "5 min",
    date: "Oct 2024",
  },
  {
    category: "CKD",
    title: "Creatinine reduction in CKD: what the evidence says, and what we've seen clinically",
    excerpt: "A clinical summary of 30 years of CKD protocols. What drives creatinine accumulation, which formulations consistently perform, and how results are tracked.",
    readTime: "9 min",
    date: "Sep 2024",
  },
];

export default function BlogPage() {
  return (
    <main>

      {/* HERO */}
      {/* HERO — editorial, no glass card */}
      <section className="relative w-full min-h-[520px] overflow-hidden bg-[#dfe8f3]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute top-[-200px] left-[-100px] w-[650px] h-[650px] bg-[#5f8fe6]/12 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-160px] right-[-100px] w-[560px] h-[560px] bg-[#8BC34A]/08 blur-[130px] rounded-full" />

        <div className="relative z-20 max-w-[1280px] mx-auto px-6 lg:px-10 pt-[200px] pb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-[1px] bg-[#2E5B9A]" />
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">Clinical Insights</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#0a1b32] font-light leading-[0.92] tracking-[-0.055em] text-[60px] sm:text-[80px] md:text-[100px] max-w-[700px]"
          >
            Clinical
            <br />
            <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
              insight.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="mt-8 text-[#4e647d] text-[17px] leading-[1.85] max-w-[440px]">
            CKD, cancer support, lifestyle disorders — written without jargon.
          </motion.p>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="mt-10 w-24 h-[2px] origin-left bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A]" />
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />
        <div className="absolute top-[-160px] right-[-100px] w-[580px] h-[580px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-4">Featured</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <Link href="#" className="group block rounded-[28px] p-10 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_rgba(46,91,154,0.09)] hover:shadow-[0_30px_70px_rgba(46,91,154,0.14)] transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/75 border border-white/70 text-[#2E5B9A] text-[11px] font-medium uppercase tracking-[0.14em]">{featured.category}</span>
                <span className="text-[#8fa3bb] text-[12px]">{featured.date}</span>
                <span className="text-[#bfd0e6]">·</span>
                <span className="text-[#8fa3bb] text-[12px]">{featured.readTime}</span>
              </div>
              <h2 className="text-[#10233b] text-[26px] md:text-[36px] font-light leading-[1.2] tracking-[-0.03em] mb-5 max-w-[700px]">
                {featured.title}
              </h2>
              <div className="w-14 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A] mb-6" />
              <p className="text-[#5f738c] text-[15px] leading-[1.85] max-w-[680px] mb-8">{featured.excerpt}</p>
              <div className="inline-flex items-center gap-2 text-[#2E5B9A] text-[14px] font-medium group-hover:gap-3 transition-all duration-200">
                Read article <ArrowRight size={16} />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="relative overflow-hidden py-10 pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-4">More articles</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link href="#" className="group block h-full rounded-[22px] p-6 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_10px_30px_rgba(46,91,154,0.07)] hover:shadow-[0_20px_50px_rgba(46,91,154,0.12)] transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-white/75 border border-white/70 text-[#2E5B9A] text-[10px] font-medium uppercase tracking-[0.12em]">{a.category}</span>
                    <span className="text-[#bfd0e6] text-[10px]">·</span>
                    <span className="text-[#8fa3bb] text-[11px]">{a.readTime}</span>
                  </div>
                  <h3 className="text-[#10233b] text-[16px] font-semibold leading-snug mb-3">{a.title}</h3>
                  <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A] mb-3" />
                  <p className="text-[#5f738c] text-[13px] leading-relaxed mb-5">{a.excerpt}</p>
                  <div className="inline-flex items-center gap-1.5 text-[#2E5B9A] text-[12px] font-medium group-hover:gap-2.5 transition-all duration-200">
                    Read more <ArrowRight size={13} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
