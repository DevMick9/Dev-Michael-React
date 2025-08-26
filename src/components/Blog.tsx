import React from 'react'
export default function Blog(){
  const posts = [
    {title:'AI + Automation for Businesses in 2025', excerpt:'How to automate 90% of operations.'},
    {title:'Building hardware-ready web apps', excerpt:'Bridging embedded systems with the web.'},
  ]
  return (
    <section id="blog" className="py-20 px-6 bg-[#071126]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gold mb-8">Latest Tech Blogs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p,i)=>(
            <article key={i} className="card p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.excerpt}</p>
              <a className="text-gold mt-4 inline-block" href="#">Read More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
