import React, { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

// Sample gallery images (replace with your actual hardware images later)
const images = [
  { src: "https://via.placeholder.com/400x300?text=Hardware+1", alt: "Hardware 1" },
  { src: "https://via.placeholder.com/400x300?text=Hardware+2", alt: "Hardware 2" },
  { src: "https://via.placeholder.com/400x300?text=Hardware+3", alt: "Hardware 3" },
  { src: "https://via.placeholder.com/400x300?text=Hardware+4", alt: "Hardware 4" },
  { src: "https://via.placeholder.com/400x300?text=Hardware+5", alt: "Hardware 5" },
  { src: "https://via.placeholder.com/400x300?text=Hardware+6", alt: "Hardware 6" },
]

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 px-6 bg-navy relative overflow-hidden">
      {/* Background gradient accent */}
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
          Engineering Hardware Gallery
        </motion.h2>

        {/* Image Grid */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gold/30 shadow-md hover:shadow-gold/40"
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-gold text-lg font-medium">Click to View</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={selected}
              alt="Selected"
              className="rounded-xl shadow-lg border border-gold/30 w-full"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 bg-gold text-navy rounded-full p-2 shadow-lg hover:bg-gold-dark transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
