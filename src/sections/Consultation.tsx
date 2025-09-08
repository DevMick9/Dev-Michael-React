import React from 'react'
export default function Consultation(){
  return (
    <section id="book" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gold mb-4">Book a Consultation</h2>
        <p className="text-gray-300 mb-6">Secure your slot. Pay with card or crypto (links below are placeholders).</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="px-6 py-3 bg-gold text-black rounded-xl">Pay with Card</a>
          <a href="#" className="px-6 py-3 border border-white/20 rounded-xl">Pay with Crypto</a>
        </div>
      </div>
    </section>
  )
}
