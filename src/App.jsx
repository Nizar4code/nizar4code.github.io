import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/ABout'
import MyProject from './components/MyProject'
import Contact from './components/Contact'


function App() {

  return (
    <>
      <Hero/>
      <About/>
      <MyProject/>
      <Contact/>
    </>
  )
}

export default App
