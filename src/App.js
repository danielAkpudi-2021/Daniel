import React from 'react'
import { Toaster } from "react-hot-toast";


import {Header, About, Works, Skills, Testimonials, Contact} from './container'
import { NavBar, Footer } from './components'
import "./App.scss"

const App = () => {
  return (
    <div className='app'> 
      <NavBar />
      <Toaster />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
