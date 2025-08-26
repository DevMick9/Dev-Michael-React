import React from 'react'
export default function Hero(){
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold"><span className="text-white">Michael De</span> <span className="text-gold">Developer</span></h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">Innovating hardware & web. AI automation + high-conversion web experiences.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#book" className="px-6 py-3 bg-gold text-black rounded-xl font-semibold">Book Consultation</a>
          <a href="#services" className="px-6 py-3 border border-white/20 rounded-xl text-white">Our Services</a>
        </div>
      </div>
    </section>
  )
}
