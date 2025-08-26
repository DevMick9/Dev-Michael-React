import React from 'react'
export default function About(){ 
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="card">
          <h2 className="text-3xl font-bold text-gold mb-3">About</h2>
          <p className="text-gray-300">I’m Michael De Developer — a web and hardware engineer who builds revenue-focused websites, embedded systems, and AI-powered automation to scale businesses.</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">What I bring</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Full-stack web apps</li>
            <li>• Hardware integrations & IoT</li>
            <li>• Automation & AI workflows</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
