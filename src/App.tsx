import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import Consultation from './components/Consultation'
import Contact from './components/Contact'

export default function App(){ 
  return (
    <div className="min-h-screen bg-navy text-white">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Blog />
      <Consultation />
      <Contact />
      <footer className="py-8 text-center text-sm text-white/60">© {new Date().getFullYear()} Michael De Developer</footer>
    </div>
  )
}
