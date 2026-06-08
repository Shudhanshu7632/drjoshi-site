"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },

  {
    href: "/treatments",
    label: "Treatments",
    hasDropdown: true,
  },
  { href: "/success-stories", label: "Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const treatmentLinks = [
  { href: "/ckd-kidney-treatment", label: "Chronic Kidney Disease" },
  { href: "/cancer-ayurveda", label: "Integrative Cancer Support" },
  { href: "/lifestyle-disorders", label: "Lifestyle Disorders" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed top-5 left-0 w-full z-[999] flex justify-center px-4">
        <div
          className={`
            relative w-full max-w-[1240px] h-[68px] md:h-[74px]
            flex items-center justify-between
            px-5 md:px-8 lg:px-10
            rounded-full
            transition-all duration-500
            ${
              scrolled
                ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(241,247,255,0.92))] backdrop-blur-2xl border border-white/70 shadow-[0_12px_40px_rgba(46,91,154,0.08)]"
                : "bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(236,244,252,0.90),rgba(222,235,248,0.95))] backdrop-blur-2xl border border-white/65 shadow-[0_18px_45px_rgba(46,91,154,0.08)]"
            }
          `}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent pointer-events-none rounded-full" />
          <div className="absolute top-[-80px] right-[-40px] w-[260px] h-[220px] bg-[#7aa5df]/20 blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-120px] left-[-60px] w-[220px] h-[220px] bg-[#8BC34A]/10 blur-[90px] rounded-full pointer-events-none" />

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMobile}
            className="relative z-20 flex items-center min-w-0 flex-shrink-0"
          >
            <Image
              src="/transparent.png"
              alt="logo"
              width={165}
              height={54}
              priority
              className="object-contain w-auto h-auto max-h-[44px] md:max-h-[54px]"
            />
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 z-20">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1.5 text-[15px] font-medium text-[#16304f] hover:text-[#2E5B9A] transition-all duration-300"
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)] w-[240px]
                      rounded-2xl p-2
                      bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(238,245,255,0.96))]
                      backdrop-blur-2xl border border-white/70
                      shadow-[0_20px_50px_rgba(46,91,154,0.10)]
                      transition-all duration-300
                      ${dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}
                    `}
                  >
                    {treatmentLinks.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center px-4 py-3 rounded-xl text-[14px] text-[#16304f] hover:bg-[#eef5ff] hover:text-[#2E5B9A] transition-all duration-300"
                      >
                        {t.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-[#16304f] hover:text-[#2E5B9A] transition-all duration-300"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center relative z-20">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#2E5B9A] text-white text-[14px] font-medium shadow-[0_12px_28px_rgba(46,91,154,0.18)] hover:bg-[#244b82] hover:scale-[1.05] transition-all duration-300"
            >
              Book Appointment
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/60 border border-white/70 text-[#16304f] hover:bg-white/80 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[998] bg-[#0a1b32]/30 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[88px] left-4 right-4 z-[999] lg:hidden"
            >
              <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(238,246,255,0.97))] backdrop-blur-2xl border border-white/70 shadow-[0_24px_64px_rgba(46,91,154,0.14)] px-5 py-6">
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-[28px]" />
                <div className="absolute inset-[1px] rounded-[27px] border border-white/40 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-1">
                  {/* Main links */}
                  {navLinks.map((link) =>
                    link.hasDropdown ? (
                      <div key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className="flex items-center px-4 py-3 rounded-2xl text-[16px] font-medium text-[#16304f] hover:bg-[#eef5ff] hover:text-[#2E5B9A] transition-all duration-200"
                        >
                          {link.label}
                        </Link>
                        {/* Sub-links flat under Treatments */}
                        <div className="ml-4 flex flex-col gap-0.5 mb-1">
                          {treatmentLinks.map((t) => (
                            <Link
                              key={t.href}
                              href={t.href}
                              onClick={closeMobile}
                              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[14px] text-[#506985] hover:bg-[#eef5ff] hover:text-[#2E5B9A] transition-all duration-200"
                            >
                              <div className="w-[4px] h-[4px] rounded-full bg-[#2E5B9A]/40 flex-shrink-0" />
                              {t.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobile}
                        className="flex items-center px-4 py-3 rounded-2xl text-[16px] font-medium text-[#16304f] hover:bg-[#eef5ff] hover:text-[#2E5B9A] transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    ),
                  )}

                  {/* Divider */}
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d1deef] to-transparent my-3" />

                  {/* CTA */}
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="flex items-center justify-center px-6 py-4 rounded-full bg-[#2E5B9A] text-white text-[15px] font-medium shadow-[0_12px_28px_rgba(46,91,154,0.20)] hover:bg-[#244b82] transition-all duration-300"
                  >
                    Book Appointment →
                  </Link>

                  {/* Overseas shortcut */}
                  <Link
                    href="/overseas"
                    onClick={closeMobile}
                    className="flex items-center justify-center px-6 py-3.5 rounded-full bg-white/60 border border-[#d1deef] text-[#1f3d63] text-[14px] font-medium hover:bg-white/80 transition-all duration-300 mt-1"
                  >
                    International Patients →
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
