import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-navy-light relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-white/5 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-bold text-gold drop-shadow-md"
        >
          About Me
        </motion.h2>

        {/* Subtitle / Mission */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          I’m <span className="text-gold font-semibold">Michael De Developer</span>, 
          a passionate <span className="text-white font-semibold">web developer</span>, 
          <span className="text-white font-semibold"> hardware engineer</span>, and 
          <span className="text-white font-semibold"> AI innovator</span>.  
          My mission is to create digital solutions that are 
          <span className="text-gold"> beautiful</span>, 
          <span className="text-gold"> functional</span>, and 
          <span className="text-gold"> financially impactful</span>.
        </motion.p>

        {/* Cards with values / strengths */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "Always ahead with the latest technology trends and creative solutions."
            },
            {
              title: "Quality",
              desc: "Clean, scalable, and reliable work built to stand the test of time."
            },
            {
              title: "Impact",
              desc: "Focused on delivering results that grow businesses and brands."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-navy shadow-lg border border-gold/30 hover:scale-105 hover:shadow-gold/40 transition transform"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
