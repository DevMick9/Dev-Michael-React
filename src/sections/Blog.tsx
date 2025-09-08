import React from "react"
import { motion } from "framer-motion"

// Sample blog posts (replace with your actual blog data or CMS content later)
const posts = [
  {
    title: "The Future of Web Development in 2025",
    desc: "Exploring the latest frameworks, tools, and AI-driven trends shaping modern web development.",
    url: "https://blog.example.com/future-of-web-dev",
  },
  {
    title: "AI & Automation: Transforming Businesses",
    desc: "How artificial intelligence and automation are driving efficiency, innovation, and customer engagement.",
    url: "https://blog.example.com/ai-automation",
  },
  {
    title: "Engineering Hardware for IoT",
    desc: "A deep dive into hardware design and prototyping for Internet of Things (IoT) solutions.",
    url: "https://blog.example.com/iot-hardware",
  },
]

export default function BlogSection() {
  return (
    <section id="blogs" className="py-20 px-6 bg-[#071126] relative overflow-hidden">
      {/* Background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-gold/5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-center text-gold drop-shadow-md"
        >
          Latest Tech Blogs
        </motion.h2>

        {/* Blog Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="block bg-navy border border-gold/30 rounded-2xl p-6 shadow-md hover:shadow-gold/40 hover:scale-105 transition relative group"
            >
              <h3 className="text-xl font-semibold text-gold group-hover:text-white transition">
                {post.title}
              </h3>
              <p className="mt-3 text-gray-300 group-hover:text-gray-100 transition">
                {post.desc}
              </p>
              <p className="mt-4 text-sm text-gold/80 group-hover:text-gold font-medium">
                Read More →
              </p>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gold/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
