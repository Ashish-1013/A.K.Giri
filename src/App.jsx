// import { useState } from 'react'

import Intro from './components/Intro/intro';
import Navbar from './components/navbar/navbar';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works />
    </div>
  )
}

export default App