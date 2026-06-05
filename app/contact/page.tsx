"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const clinics = [
  { name: "Dadar West", city: "Mumbai", address: "Dr. Joshi Ayurvedic Clinic, Dadar West, Mumbai 400028", hours: "Mon–Sat: 9am–7pm" },
  { name: "Borivali", city: "Mumbai", address: "Dr. Joshi Clinic, Borivali West, Mumbai 400092", hours: "Mon–Sat: 10am–6pm" },
  { name: "Thane", city: "Maharashtra", address: "Dr. Joshi Clinic, Thane West, Maharashtra 400601", hours: "Tue, Thu, Sat: 10am–5pm" },
  { name: "Nashik", city: "Maharashtra", address: "Dr. Joshi Clinic, Nashik, Maharashtra 422001", hours: "Mon, Wed, Fri: 10am–5pm" },
  { name: "Pune", city: "Maharashtra", address: "Dr. Joshi Clinic, Pune, Maharashtra 411001", hours: "Mon–Fri: 9am–6pm" },
  { name: "Online", city: "Worldwide", address: "Video consultation via Google Meet or WhatsApp", hours: "By appointment" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", condition: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useGSAP(() => {
    // Contact info rows: stagger from left
    gsap.utils.toArray<HTMLElement>(".contact-info-row").forEach((row, i) => {
      gsap.fromTo(row,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, delay: 0.3 + i * 0.1, ease: "power2.out" }
      );
    });

    // Clinic cards: stagger from bottom with alternating scale
    gsap.utils.toArray<HTMLElement>(".clinic-card").forEach((card, i) => {
      const col = i % 3;
      gsap.fromTo(card,
        { opacity: 0, y: 28 + col * 8, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, delay: col * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%" },
        }
      );
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef}>

      {/* HERO = FORM */}
      <section className="relative w-full min-h-[680px] md:min-h-[920px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,143,230,0.14),transparent_35%)]" />
        <div className="absolute top-[-200px] right-[-140px] w-[700px] h-[700px] bg-[#5f8fe6]/14 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-220px] left-[-120px] w-[620px] h-[620px] bg-[#8BC34A]/10 blur-[120px] rounded-full" />

        <div className="relative z-20 max-w-[1380px] mx-auto px-6 lg:px-10 pt-[170px] pb-20">
          <div className="relative overflow-hidden rounded-[38px] bg-white/42 backdrop-blur-2xl border border-white/65 shadow-[0_35px_90px_rgba(28,58,107,0.12)] px-8 md:px-14 py-14 md:py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
            <div className="absolute inset-[1px] rounded-[37px] border border-white/30 pointer-events-none" />
            <div className="absolute top-[-120px] left-[120px] w-[420px] h-[420px] bg-white/30 blur-[100px] rounded-full" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_1.1fr] items-start gap-12 lg:gap-16">

              {/* LEFT — INFO */}
              <div className="flex flex-col gap-8">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-3 mb-7"
                  >
                    <div className="w-10 h-[1px] bg-[#2E5B9A]" />
                    <p className="text-[12px] uppercase tracking-[0.32em] text-[#506985]">Book a Consultation</p>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#0a1b32] font-light leading-[0.96] tracking-[-0.05em] text-[46px] sm:text-[58px] md:text-[70px]"
                  >
                    Book your
                    <br />
                    <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                      consultation.
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-[#4e647d] text-[16px] leading-[1.85] max-w-[380px]"
                  >
                    In-person at any of our five clinics across Maharashtra. Or via video for international patients.
                  </motion.p>
                </div>

                {/* Contact info rows */}
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Phone", value: "+91 90753 90753" },
                    { label: "WhatsApp", value: "+91 90753 90753" },
                    { label: "Email", value: "clinic@drjoshi.in" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="contact-info-row flex items-center gap-4 rounded-[16px] px-5 py-4 bg-white/50 backdrop-blur-xl border border-white/60"
                    >
                      <span className="text-[#506985] text-[11px] uppercase tracking-[0.14em] w-16 flex-shrink-0">{item.label}</span>
                      <span className="text-[#10233b] text-[14px] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="relative overflow-hidden rounded-[18px] px-6 py-5 bg-white/50 backdrop-blur-xl border border-white/60">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#2E5B9A] to-[#8BC34A]" />
                    <p className="text-[#506985] text-[11px] uppercase tracking-[0.14em] mb-3">Clinic Hours</p>
                    <p className="text-[#10233b] text-[14px] leading-relaxed">
                      Mon–Sat: 9am – 7pm
                      <br />
                      <span className="text-[#6b7f97] text-[13px]">Appointments recommended. Walk-ins accepted where available.</span>
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT — FORM */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="rounded-[28px] p-7 md:p-9 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_rgba(46,91,154,0.09)]">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#8BC34A]/15 border border-[#8BC34A]/30 flex items-center justify-center mx-auto mb-5">
                        <span className="text-[#8BC34A] text-[28px]">✓</span>
                      </div>
                      <h3 className="text-[#10233b] text-[22px] font-light mb-2">Request received.</h3>
                      <p className="text-[#5f738c] text-[14px]">We&apos;ll confirm your appointment within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-[1px] bg-[#2E5B9A]" />
                        <p className="text-[#10233b] text-[16px] font-semibold">Your details</p>
                      </div>

                      <input
                        required
                        placeholder="Full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-[14px] bg-white/70 border border-white/80 text-[#10233b] placeholder:text-[#8fa3bb] text-[14px] outline-none focus:border-[#2E5B9A]/50 focus:bg-white/90 transition-all duration-200"
                      />
                      <input
                        required
                        placeholder="Phone / WhatsApp"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-5 py-4 rounded-[14px] bg-white/70 border border-white/80 text-[#10233b] placeholder:text-[#8fa3bb] text-[14px] outline-none focus:border-[#2E5B9A]/50 focus:bg-white/90 transition-all duration-200"
                      />
                      <input
                        type="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-[14px] bg-white/70 border border-white/80 text-[#10233b] placeholder:text-[#8fa3bb] text-[14px] outline-none focus:border-[#2E5B9A]/50 focus:bg-white/90 transition-all duration-200"
                      />
                      <select
                        value={form.condition}
                        onChange={(e) => setForm({ ...form, condition: e.target.value })}
                        className="w-full px-5 py-4 rounded-[14px] bg-white/70 border border-white/80 text-[#10233b] text-[14px] outline-none focus:border-[#2E5B9A]/50 transition-all duration-200"
                      >
                        <option value="">Condition / reason for visit</option>
                        <option>Chronic Kidney Disease (CKD)</option>
                        <option>Integrative Cancer Support</option>
                        <option>Diabetes / Metabolic</option>
                        <option>Hypertension</option>
                        <option>PCOS / Hormonal</option>
                        <option>Other</option>
                      </select>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe your condition or question (optional)"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-5 py-4 rounded-[14px] bg-white/70 border border-white/80 text-[#10233b] placeholder:text-[#8fa3bb] text-[14px] outline-none focus:border-[#2E5B9A]/50 focus:bg-white/90 transition-all duration-200 resize-none"
                      />

                      <button
                        type="submit"
                        className="mt-2 w-full py-4 rounded-full bg-[#2E5B9A] text-white font-medium text-[15px] border border-[#5f8fe6]/20 shadow-[0_14px_40px_rgba(46,91,154,0.24)] hover:bg-[#244b82] hover:scale-[1.02] transition-all duration-300"
                      >
                        Request Appointment →
                      </button>

                      <p className="text-center text-[11px] text-[#8fa3bb] mt-1">We respond within 24 hours. No spam.</p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC LOCATIONS */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#eef4fb] to-[#e2edf8]" />
        <div className="absolute top-[-160px] right-[-100px] w-[580px] h-[580px] bg-[#7aa5df]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[13px] uppercase tracking-[0.35em] text-[#a0db55] mb-5">Locations</p>
            <h2 className="text-[38px] md:text-[52px] leading-[1.02] tracking-[-0.04em] font-light text-[#10233b] max-w-xl">
              Five clinics.{" "}
              <span className="italic text-[#2E5B9A]" style={{ fontFamily: "var(--font-cormorant)" }}>
                One standard.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clinics.map((c, i) => (
              <div
                key={i}
                className="clinic-card relative overflow-hidden rounded-[22px] p-6 border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_10px_30px_rgba(46,91,154,0.07)]"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#2E5B9A]/30 to-transparent" />

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[#10233b] text-[16px] font-semibold">{c.name}</p>
                    <p className="text-[#2E5B9A] text-[11px] font-medium uppercase tracking-[0.12em]">{c.city}</p>
                  </div>
                  {c.city === "Worldwide" && (
                    <span className="px-3 py-1 rounded-full bg-white/75 border border-white/70 text-[#2E5B9A] text-[10px] font-medium">Online</span>
                  )}
                </div>
                <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-[#2E5B9A] to-[#8BC34A] mb-4" />
                <p className="text-[#5f738c] text-[13px] leading-relaxed mb-3">{c.address}</p>
                <p className="text-[#8fa3bb] text-[11px] uppercase tracking-[0.1em]">{c.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
