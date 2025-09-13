// import React from 'react'
// import "./projectCard.css"
// import portfolio1 from "../../assets/project11.png";
// import ecommorce from "../../assets/magical_shopper.png";
// import jioDemo from "../../assets/jio2.png";
// import weather from "../../assets/Weather-app.png";


// const ProjectCard = () => {
//     return (
//         <section id="projectSec">
//             <div className="pageTitle">
//                 <h2 className="heading">Recent Works</h2>
//                 <p className="paragraph">“Bringing ideas to life with diverse projects. From e-commerce solutions to Jio Cinema clone. Exploring creativity through games and portfolios.”</p>
//             </div>

//             <div className="projects">
//             <div className="project">
//                 <h3 className="proName">E-Commorce</h3>
//                 <img src={ecommorce} alt="e-commorce img" className="proImg" />
//                 <li className="list">
//                     <ul>javaScript</ul>
//                     <ul>reactJs</ul>
//                     <ul>CSS|HTML</ul>
//                     <ul>APIs</ul>
//                     <ul>Firebase</ul>
                    
//                 </li>
//                 <p className="proDetail">Magical Shopper is a E-commorce website , i created this with my friends help and our trenner Mr Murthy sir's help.</p>
//                 <a href="https://github.com/Ashish-1013/Magical_Shopper/" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
//                 <a href="https://ashish-1013.github.io/Magica-Shopper-Vite-1/" target="_blank" rel="noopener noreferrer"><button className="button">GO</button></a>
//             </div>
//             <div className="project">
//                 <h3 className="proName">jiocinema clone</h3>
//                 <img src={jioDemo} alt="jio cinema" className="proImg" />
//                 <li className="list">
//                     <ul>javaScript</ul>
//                     <ul>reactJS</ul>
//                     <ul>nodeDemon api</ul>
//                     <ul>HTML|module CSS</ul>
//                 </li>
//                 <p className="proDetail">i create this in one youtube live webinar, its great experience for me.</p>
//                 <a href="https://github.com/Ashish-1013/Jio_Cinema_clone_Demo" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
//                 <a href="http://" target="_blank" rel="noopener noreferrer"><button className="button">GO</button></a>
//             </div>
//             <div className="project">
//                 <h3 className="proName">Weather App</h3>
//                 <img src={weather} alt="e-commorce img" className="proImg" />
//                 <li className="list">
//                     <ul>reactJs</ul>
//                     <ul>Live Weather Track</ul>
//                     <ul>CSS|HTML</ul>
//                 </li>
//                 <p className="proDetail">JUst a little live weather tracking website.</p>
//                 <a href="https://github.com/Ashish-1013/weather-app/" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
//                 <a href="https://ashish-1013.github.io/weather-app/" target="_blank" rel="noopener noreferrer"><button className="button">GO</button></a>
//             </div>
//             </div>
//             <a href="https://github.com/Ashish-1013" target="_blank" rel="noopener noreferrer"><button className="workBtn">See More</button></a>
//         </section>
//     )
// }
// export default ProjectCard;



// /*
//             <div className="project">
//                 <h3 className="proName">My Portfolio 2</h3>
//                 <img src={portfolio1} alt="my portfolio project" className="proImg" />
//                 <li className="list">
//                     <ul>reactJS</ul>
//                     <ul>HTML</ul>
//                     <ul>CSS</ul>
//                     <ul>emailJS</ul>
//                     <ul>JavaScript</ul>
//                 </li>
//                 <p className="proDetail">This portfolio highlights a full-stack developer's expertise with a sleek design, showcasing projects, skills, and career journey.</p>
//                 <a href="https://github.com/Ashish-1013/A.K.Giri" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
//                 <a href="https://ashish-1013.github.io/A.K.Giri/" target="_blank" rel="noopener noreferrer"><button className="button">GO</button></a>
//             </div>


// */




import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./projectCard.css";

// Projects data
const projectsData = [
  {
    id: 1,
    name: "CarrerPulse",
    image: "https://i0.wp.com/pscareers.com.au/wp-content/uploads/2023/03/cropped-A16959_PS-Careers_Logo_HG-2.png?fit=250%2C250&ssl=1",
    technologies: ["JavaScript", "ReactJS", "CSS|HTML", "Springboot", "MongoDB"],
    description: "The Career Pulse is an AI-based platform for career guidance and wellness insights, built with React and Spring Boot.",
    // githubUrl: "https://github.com/Ashish-1013",
    liveUrl: "https://thecareerpulse.vercel.app/"
  },
  {
  id: 2,
    name: "E-Commerce",
    image: "https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg",
    technologies: ["JavaScript", "ReactJS", "CSS|HTML", "APIs", "Firebase"],
    description: "Magical Shopper is an E-commerce website created with my friends and our trainer Mr. Murthy sir's help.",
    githubUrl: "https://github.com/Ashish-1013/Magical_Shopper/",
    liveUrl: "https://ashish-1013.github.io/Magica-Shopper-Vite-1/"
  },
   {
    id: 3,
    name: "Simple Portfoleo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPd8r_wImVXYsPCr20z52MbV1OGUPuj7RRrQ&s",
    technologies: ["JavaScript", "HTML|CSS"],
    description: "Created this when am learning the frontend developement.",
    githubUrl: "https://github.com/Ashish-1013/MY-Portfolio1",
    liveUrl: "https://ashish-1013.github.io/MY-Portfolio1/"
  },
  {
    id: 4,
    name: "Weather App",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbXH-0PYIUPfty0xhJU3Nb1FIKEMtK14rHxQ&s",
    technologies: ["ReactJS", "Live Weather Track", "CSS|HTML"],
    description: "Just a little live weather tracking website.",
    githubUrl: "https://github.com/Ashish-1013/weather-app/",
    liveUrl: "https://ashish-1013.github.io/weather-app/"
  },
  {
    id: 5,
    name: "JioCinema Clone",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_tfzool7CU-pieDeRCsL5uUGMEsofPXCSA&s",
    technologies: ["JavaScript", "ReactJS", "NodeDemon API", "HTML|Module CSS"],
    description: "Created this in one YouTube live webinar. It was a great experience for me.",
    githubUrl: "https://github.com/Ashish-1013/Jio_Cinema_clone_Demo",
    liveUrl: "#"
  },
  {
    id: 6,
    name: "Birthday Wish",
    image: "https://parade.com/.image/w_1080,q_auto:good,c_fill,ar_4:3/MjAzMzU3NzQxMzU4NTIzOTgz/happy-birthday-wishes-messages.jpg",
    technologies: ["JavaScript", "CSS|HTML"],
    description: "Little wish to a Friend.",
    githubUrl: "https://github.com/Ashish-1013",
    liveUrl: "https://ashish-1013.github.io/happy-birthday-main/"
  }
];

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="project">
      <h3 className="proName">{project.name}</h3>
      <img src={project.image} alt={project.name} className="proImg" />
      <div className="techList">
        {project.technologies.map((tech, index) => (
          <span key={index} className="techTag">{tech}</span>
        ))}
      </div>
      <p className="proDetail">{project.description}</p>
      <div className="buttonGroup">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <button className="proButton">GitHub</button>
        </a>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <button className="proButton">Live Demo</button>
        </a>
      </div>
    </div>
  );
};

// Main Projects Page (shows 3 projects)
const ProjectsMain = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.slice(0, 3));
  }, []);

  return (
    <section id="projectSec">
      <div className="pageTitle">
        <h2 className="heading">Recent Works</h2>
        <p className="paragraph">"Bringing ideas to life with diverse projects. From e-commerce solutions to Jio Cinema clone. Exploring creativity through games and portfolios."</p>
      </div>

      <div className="projectsGrid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <Link to="/all-projects" className="seeMoreLink">
        <button className="seeMoreBtn">See More Projects</button>
      </Link>
    </section>
  );
};

// All Projects Page (shows all projects)
const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="allProjectsContainer">
      <section id="projectSec">
        <div className="pageTitle">
          <h2 className="heading">All Projects</h2>
          <p className="paragraph">Here's a complete collection of my work.</p>
        </div>

        <div className="projectsGrid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <Link to="/" className="backLink">
          <button className="backBtn">Back to Home</button>
        </Link>
      </section>
    </div>
  );
};

// App Component with Routing
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectsMain />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
};

export default App;