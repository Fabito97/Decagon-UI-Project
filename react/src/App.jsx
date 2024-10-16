import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import { Company } from './components/Company'
import { Talent } from './components/Talents'
import Choose from './components/Choose'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skill from './components/Skill'



function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Company />
    <Talent />
    <Choose />
    <Features />
    <Testimonial />
    <Skill />
    <Contact />
    <Footer />

    </>
  )
}

export default App



