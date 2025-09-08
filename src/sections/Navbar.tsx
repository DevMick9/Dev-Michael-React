// src/sections/Navbar.tsx
import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Blog", href: "#blog" },
  { name: "Consultation", href: "#consultation" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-navy/60 backdrop-blur-md border-b border-white/5"
      style={{ height: 72 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-full">
        {/* Larger logo/title */}
        <a href="#home" className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-gold">
          Michael De Developer
        </a>

        {/* nav links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-gold font-medium transition"
              onClick={(e) => {
                // smooth scroll with header offset (prevent default anchor jump)
                e.preventDefault();
                const target = document.getElementById(item.href.replace("#", ""));
                const navEl = document.querySelector("nav");
                const headerOffset = navEl ? (navEl as HTMLElement).clientHeight : 72;
                if (target) {
                  const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset - 8;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
