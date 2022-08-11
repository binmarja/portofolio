import { useState } from 'react'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import SideLinks from './components/SideLinks'



function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   <Header /> 
   <SideLinks />
   <Hero />
   <About />
   </>
  )
}

export default App
