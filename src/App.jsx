import React from 'react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Social } from './components/Social'
import { Footer } from './components/Footer'
function App() {

  return (

    <div className='overflow-x-hidden antialiased'>
      <div className='fixed top-0 -z-10 h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      </div>
      <div className='container mx-auto'>
        <Navbar />
        <Hero />
        <About />
        <Social />
        <Footer />
      </div>
    </div>

  )
}

export default App
