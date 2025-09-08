import React from "react"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Services from "./sections/Services"
import Gallery from "./sections/Gallery"
import Blog from "./sections/Blog"
import Consultation from "./sections/Consultation"
import Contact from "./sections/Contact"
import SectionHeading from "./components/SectionHeading"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-950 via-black to-amber-900 text-white font-sans relative overflow-hidden scroll-smooth">
      {/* ✅ Navbar always on top */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section id="home" className="relative z-10">
        <Hero />
      </section>

      {/* ✅ About Section */}
      <section id="about" className="py-16 px-6 relative z-10 scroll-mt-20">
        <SectionHeading title="About Me" />
        <About />
      </section>

      {/* ✅ Services Section */}
      <section id="services" className="py-20 px-6 relative z-10 scroll-mt-20">
        <SectionHeading title="Our Services" />
        <Services />
      </section>

      {/* ✅ Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-black/20 relative z-10 scroll-mt-20">
        <SectionHeading title="Gallery" />
        <Gallery />
      </section>

      {/* ✅ Blog Section */}
      <section id="blog" className="py-20 px-6 relative z-10 scroll-mt-20">
        <SectionHeading title="Latest Tech Blogs" />
        <Blog />
      </section>

      {/* ✅ Consultation Section */}
      <section id="consultation" className="py-20 px-6 bg-black/20 relative z-10 scroll-mt-20">
        <SectionHeading title="Book a Consultation" />
        <Consultation />
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10 scroll-mt-20">
        <SectionHeading title="Contact Me" />
        <Contact />
      </section>
    </div>
  )
}

export default App
