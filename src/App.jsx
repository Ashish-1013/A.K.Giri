// import { useState } from 'react'

import Intro from './components/Intro/intro';
import Navbar from './components/navbar/navbar';
import Skills from './components/Skills/skills';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
    </div>
  )
}

export default App