import React from 'react'
import "./projectCard.css"
import portfolio1 from "../../assets/project11.png";
import ecommorce from "../../assets/magical_shopper.png";
import jioDemo from "../../assets/jio2.png";
import weather from "../../assets/Weather-app.png";


const ProjectCard = () => {
    return (
        <section id="projectSec">
            <div className="pageTitle">
                <h2 className="heading">Recent Works</h2>
                <p className="paragraph">“Bringing ideas to life with diverse projects. From e-commerce solutions to Jio Cinema clone. Exploring creativity through games and portfolios.”</p>
            </div>

            <div className="projects">
            <div className="project">
                <h3 className="proName">E-Commorce</h3>
                <img src={ecommorce} alt="e-commorce img" className="proImg" />
                <li className="list">
                    <ul>javaScript</ul>
                    <ul>reactJs</ul>
                    <ul>CSS|HTML</ul>
                    <ul>APIs</ul>
                    <ul>Firebase</ul>
                    
                </li>
                <p className="proDetail">Magical Shopper is a E-commorce website , i created this with my friends help and our trenner Mr Murthy sir's help.</p>
                <a href="https://github.com/Ashish-1013/Magical_Shopper/" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="https://ashish-1013.github.io/Magica-Shopper-Vite-1/" target="_blank" rel="noopener noreferrer"><button className="button">GO</button></a>
            </div>
            <div className="project">
                <h3 className="proName">jiocinema clone</h3>
                <img src={jioDemo} alt="jio cinema" className="proImg" />
                <li className="list">
                    <ul>javaScript</ul>
                    <ul>reactJS</ul>
                    <ul>nodeDemon api</ul>
                    <ul>HTML|module CSS</ul>
                </li>
                <p className="proDetail">i create this in one youtube live webinar, its great experience for me.</p>
                <a href="https://github.com/Ashish-1013/Jio_Cinema_clone_Demo" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><button className="button">GO</button></a>
            </div>
            <div className="project">
                <h3 className="proName">Weather App</h3>
                <img src={weather} alt="e-commorce img" className="proImg" />
                <li className="list">
                    <ul>reactJs</ul>
                    <ul>Live Weather Track</ul>
                    <ul>CSS|HTML</ul>
                </li>
                <p className="proDetail">JUst a little live weather tracking website.</p>
                <a href="https://github.com/Ashish-1013/weather-app/" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="https://ashish-1013.github.io/weather-app/" target="_blank" rel="noopener noreferrer"><button className="button">GO</button></a>
            </div>
            </div>
            <a href="https://github.com/Ashish-1013" target="_blank" rel="noopener noreferrer"><button className="workBtn">See More</button></a>
        </section>
    )
}
export default ProjectCard;



/*
            <div className="project">
                <h3 className="proName">My Portfolio 2</h3>
                <img src={portfolio1} alt="my portfolio project" className="proImg" />
                <li className="list">
                    <ul>reactJS</ul>
                    <ul>HTML</ul>
                    <ul>CSS</ul>
                    <ul>emailJS</ul>
                    <ul>JavaScript</ul>
                </li>
                <p className="proDetail">This portfolio highlights a full-stack developer's expertise with a sleek design, showcasing projects, skills, and career journey.</p>
                <a href="https://github.com/Ashish-1013/A.K.Giri" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="https://ashish-1013.github.io/A.K.Giri/" target="_blank" rel="noopener noreferrer"><button className="button">GO</button></a>
            </div>


*/