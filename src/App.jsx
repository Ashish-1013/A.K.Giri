// import { useState } from 'react'

import Career from './components/Career/career';
import CareerJourney from './components/Career/careerJourney';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';
import Navbar from './components/Navbar/navbar';
import ProjectCard from './components/Project/projectCard';
import Skills from './components/Skills/skills';
import Certificate from './components/Certificate/myCertificate';


function App() {
  const certificates = [
    {
      name: 'ntroduction to Industry 4.0 and industrial Internet of things |NPTEL',
      imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-industry-4-0-background_52683-160031.jpg?uid=R189587049&ga=GA1.1.2001777702.1720666266&semt=ais_hybrid',
      downloadLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS34S65300326130417637',
    },
    {
      name: 'Management Information System | NPTEL',
      imageUrl: 'https://thumbs.dreamstime.com/b/management-information-system-mis-provides-organizations-require-to-manage-themselves-efficiently-effectively-45574142.jpg',
      downloadLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23MG87S83300428020109581',
    },
    {
      name: 'Intellectual Property | NPTEL',
      imageUrl: 'https://blog.ipleaders.in/wp-content/uploads/2021/09/Nature-of-Intellectual-Property-1.jpg',
      downloadLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24HS38S105300050730417637',
    },
    {
      name: 'Jio Cinema Bootcamp',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/9561f3195231735.Y3JvcCwzNzAzLDI4OTcsMTY1LDA.jpg',
      downloadLink: 'https://verify.letsupgrade.in/certificate/LUEHTMLFEB12550',
    },
  ];






  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <ProjectCard />
      
      <CareerJourney />
      <Certificate certificates={certificates} />
      
      <Contact />
      <Footer />

    </div>
    
  )
}

export default App;