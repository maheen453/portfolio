import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
    <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-image w-screen h-screen"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero/>
        <Navbar/>
        <Projects/>
        <Contact/>
        
      </div>
    </div>
  )
}

export default App