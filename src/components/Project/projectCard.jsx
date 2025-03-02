import React from 'react'
import "./projectCard.css"
import portfolio1 from "../../assets/project11.png";


const ProjectCard = () => {
    return (
        <section id="projectSec">
            <div className="pageTitle">
                <h2 className="heading">Recent Works</h2>
                <p className="paragraph">“Bringing ideas to life with diverse projects. From e-commerce solutions to Jio Cinema clone. Exploring creativity through games and portfolios.”</p>
            </div>

            <div className="projects">
            <div className="project">
                <h3 className="proName">Deemo project</h3>
                <img src={portfolio1} alt="" className="proImg" />
                <li className="list">
                    <ul>java</ul>
                    <ul>react</ul>
                    <ul>Spring</ul>
                </li>
                <p className="proDetail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, culpa.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><button className="button">Demo</button></a>
            </div>
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
                <p className="proDetail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, culpa.</p>
                <a href="https://github.com/Ashish-1013/A.K.Giri" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="https://ashish-1013.github.io/A.K.Giri/" target="_blank" rel="noopener noreferrer"><button className="button">Demo</button></a>
            </div>
            <div className="project">
                <h3 className="proName">Deemo project</h3>
                <img src={portfolio1} alt="" className="proImg" />
                <li className="list">
                    <ul>java</ul>
                    <ul>react</ul>
                    <ul>Spring</ul>
                </li>
                <p className="proDetail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, culpa.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer"><button className="button">GitHub</button></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><button className="button">Demo</button></a>
            </div>
            </div>
            <button className="workBtn">See More</button>
        </section>
    )
}
export default ProjectCard;