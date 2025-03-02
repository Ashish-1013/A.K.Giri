// import { useState } from 'react'

import Career from './components/Career/career';
import CareerJourney from './components/Career/careerJourney';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';
import Navbar from './components/navbar/navbar';
import ProjectCard from './components/Project/projectCard';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <ProjectCard />
      
      <CareerJourney />
      
      <Contact />
      <Footer />
    </div>
  )
}

export default App