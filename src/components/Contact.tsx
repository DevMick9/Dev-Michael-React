import React, {useState} from 'react'
export default function Contact(){
  const [status,setStatus]=useState<'idle'|'sent'|'error'>('idle')
  async function onSubmit(e:any){
    e.preventDefault(); setStatus('sent')
  }
  return (
    <section id="contact" className="py-20 px-6 bg-[#071126]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gold mb-6">Contact</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
          <input name="name" required className="p-3 rounded-xl bg-transparent border border-white/10" placeholder="Your name" />
          <input name="email" type="email" required className="p-3 rounded-xl bg-transparent border border-white/10" placeholder="Email" />
          <textarea name="message" required className="p-3 rounded-xl bg-transparent border border-white/10 md:col-span-2" placeholder="Message" rows={5}></textarea>
          <button className="px-6 py-3 bg-gold text-black rounded-xl md:col-span-2">Send Message</button>
        </form>
        {status==='sent' && <p className="mt-4 text-green-400">Thanks — message sent (demo).</p>}
      </div>
    </section>
  )
}
