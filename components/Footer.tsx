"use client";

import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Leaf } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/success-stories", label: "Stories" },
  { href: "/blog", label: "Blog" },
];

const services = [
  "Kidney Care",
  "Cancer Support",
  "Diabetes",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1628]  overflow-hidden">

      {/* SUBTLE GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1B3A6B]/40 to-[#0a1628]" />

      {/* MAIN */}
      <div className="relative max-w-[1300px] mx-auto px-6 py-20">

        {/* WATERMARK */}
        <div className="absolute bottom-0 left-0 text-[140px] font-bold text-white/5 pointer-events-none select-none">
          Joshi’s
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Leaf size={18} className="text-[#8BC34A]" />
              <span className="text-white font-semibold text-lg">
                Dr. Joshi’s
              </span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Personalized Ayurvedic treatments focused on long-term healing
              and clinical recovery outcomes.
            </p>

            {/* NEWSLETTER */}
            <div className="flex overflow-hidden rounded-lg border border-white/10 focus-within:border-[#8BC34A]/60 transition">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/40 outline-none text-sm"
              />
              <button className="px-2 bg-[#8BC34A] text-white text-sm font-medium hover:opacity-90 transition">
                Subscribe
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {[FaInstagram, FaWhatsapp, FaFacebook].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#8BC34A]/60 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <p className="text-white font-semibold mb-4">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 text-sm hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-white font-semibold mb-4">Treatments</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-white/60 text-sm hover:text-white transition cursor-pointer">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-white font-semibold mb-4">Contact</p>

            <div className="space-y-4 text-sm text-white/60">
              <p>+91 90753 90753</p>
              <p>contact@drjoshis.in</p>

              <p className="leading-relaxed">
                Dadar West, Mumbai <br />
                Maharashtra 400028
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block mt-6 px-5 py-3 bg-[#8BC34A] text-white rounded-md text-sm font-medium hover:scale-[1.03] transition"
            >
              Book Appointment
            </Link>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-5 px-6 text-center text-white text-m">
        © 2025 Dr. Joshi’s Clinic • Privacy Policy • Terms
      </div>
    </footer>
  );
}