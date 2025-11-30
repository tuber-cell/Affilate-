import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { Experience } from "@/components/sections/Experience"
import { Education } from "@/components/sections/Education"
import { Testimonials } from "@/components/sections/Testimonials"
import { Skills } from "@/components/sections/Skills"
import { Awards } from "@/components/sections/Awards"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/layout/Footer"
import { Partners } from "@/components/sections/Partners"

export default function Home() {
  return (
    <main className="min-h-screen text-black overflow-x-hidden" style={{ backgroundColor: 'rgba(255, 140, 0, 0.7)' }}>
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Partners />
      <div id="services">
        <Services />
      </div>
      <div id="experience">
        <Experience />
        <Education />
      </div>
      <div id="testimonials">
        <Testimonials />
        <Awards />
      </div>
      <Skills />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
