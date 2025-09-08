// src/sections/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  // smooth scroll helper (accounts for fixed navbar height)
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // detect navbar height if present
    const nav = document.querySelector("nav");
    const headerOffset = nav ? (nav as HTMLElement).offsetHeight : 72;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset - 8; // small extra gap
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 bg-navy relative overflow-hidden"
    >
      {/* animated bright sweep (stronger) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 4, ease: "linear" }}
          className="absolute top-0 left-[-50%] w-[250%] h-full bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent"
          style={{ mixBlendMode: "screen" }}
        />
      </div>

      {/* Heading (less aggressive glow) */}
      <motion.h1
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-gold"
        style={{ textShadow: "0 0 12px rgba(255,215,0,0.35)" }} // softer glow
      >
        Michael De Developer
      </motion.h1>

      {/* Subtitle (bigger but not as big as title) */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="mt-6 text-lg md:text-2xl lg:text-3xl text-gray-200 max-w-3xl leading-relaxed"
        style={{ textShadow: "0 0 8px rgba(255,215,0,0.18)" }}
      >
        Building <span className="text-gold font-semibold">modern websites</span>, crafting{" "}
        <span className="text-white font-semibold">Computer hardware engineering </span>, and powering the future with{" "}
        <span className="text-gold font-semibold">AI & Automation</span>.
      </motion.p>

      {/* CTA Buttons — use onClick to guarantee they work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="mt-10 flex gap-6 flex-wrap justify-center"
      >
        <button
          onClick={() => scrollToId("consultation")}
          className="group px-8 py-4 rounded-2xl bg-gold text-navy text-lg md:text-xl font-semibold flex items-center gap-3 hover:bg-gold-dark transition shadow-[0_0_20px_rgba(255,215,0,0.35)]"
        >
          Book Consultation
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => scrollToId("services")}
          className="px-8 py-4 rounded-2xl border border-gold text-gold text-lg md:text-xl font-semibold hover:bg-gold/10 transition shadow-[0_0_16px_rgba(255,215,0,0.28)]"
        >
          View Services
        </button>
      </motion.div>
    </section>
  );
}
