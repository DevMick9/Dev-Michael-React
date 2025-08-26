import React from 'react'
const items = [
  {title:'Web Development', desc:'Responsive, modern websites and web apps.', price:'From $999'},
  {title:'Hardware Engineering', desc:'Embedded systems and IoT solutions.', price:'From $1,499'},
  {title:'AI & Automation', desc:'Workflow automation, chatbots, and AI assistants.', price:'From $1,299'},
]
export default function Services(){
  return (
    <section id="services" className="py-20 px-6 bg-[#071126]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gold mb-8">Services We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s, i)=>(
            <div key={i} className="card p-6 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="text-gray-300 mt-2">{s.desc}</p>
              <p className="mt-4 text-gold font-medium">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
