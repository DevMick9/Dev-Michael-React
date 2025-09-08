import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Web Development",
    desc: "Responsive, modern websites and powerful web apps that look stunning and perform flawlessly.",
    price: "From $999",
  },
  {
    title: "Hardware Engineering",
    desc: "Custom embedded systems, IoT devices, and hardware solutions designed for performance and reliability.",
    price: "From $1,499",
  },
  {
    title: "AI & Automation",
    desc: "Smart workflows, chatbots, and AI-driven tools that save time and increase efficiency.",
    price: "From $1,299",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-navy relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-gold/5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-center text-gold drop-shadow-md"
        >
          Services We Offer
        </motion.h2>

        {/* Services Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-navy-light border border-gold/30 shadow-lg hover:shadow-gold/40 hover:scale-105 transition transform overflow-hidden"
            >
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <h3 className="text-2xl font-semibold text-white relative z-10">{s.title}</h3>
              <p className="mt-3 text-gray-300 relative z-10">{s.desc}</p>
              <p className="mt-5 text-gold font-medium relative z-10">{s.price}</p>

              {/* Subtle hover popup detail */}
              <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition duration-500 bg-navy-light/95 text-gray-200 p-4 text-sm rounded-t-xl">
                <p>
                  ✨ Get in touch to tailor <span className="text-gold">custom solutions</span> for your project.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
