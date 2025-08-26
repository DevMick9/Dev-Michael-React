import React from 'react'
export default function Gallery(){
  const items = Array.from({length:6}).map((_,i)=>`https://picsum.photos/seed/md${i}/800/600`)
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gold mb-8">Engineering Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((src,i)=>(<img key={i} src={src} alt={`gallery-${i}`} className="rounded-xl object-cover w-full h-48" />))}
        </div>
      </div>
    </section>
  )
}
