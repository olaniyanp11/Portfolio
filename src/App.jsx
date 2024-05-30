import React from 'react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
function App() {

  return (
    <>
      <div class=" top-0 z-[-2]  w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen h-full pb-5">
      <div>
          <Navbar />
          <Hero />
          <About/>
      </div>
    </div>

    </>
  )
}

export default App
