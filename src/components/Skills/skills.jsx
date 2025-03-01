import React from 'react';
import './skills.css';
import UIDesgine from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesgine from '../../assets/app-design.png';
import DataBase from '../../assets/DataBase3.png';



const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a passionate full-stack web developer with expertise in both backend and frontend technologies. I specialize in building scalable, user-friendly, and high-performance web applications. With a strong foundation in programming and a keen eye for design, I strive to create seamless digital experiences that solve real-world problems.</span>

        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesgine} alt="ui image" className="skillBarImg" />
                <div className="skillBarText">
                <h2>UI/UX Desgine</h2>
                <p>UI/UX design focuses on creating intuitive, visually appealing, and user-friendly interfaces that enhance user satisfaction and deliver seamless digital experiences.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="web design" className="skillBarImg" />
                <div className="skillBarText">
                <h2>Frontend (Client-Side)</h2>
                <p>Transforming ideas into interactive, responsive, and visually stunning web experiences through clean code and innovative design.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesgine} alt="app design" className="skillBarImg" />
                <div className="skillBarText">
                <h2>Backend (Server-Side)</h2>
                <p>Building robust, scalable, and efficient server-side systems that power seamless user experiences and drive application performance.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={DataBase} alt="Database" className="skillBarImg" />
                <div className="skillBarText">
                <h2>Database</h2>
                <p>Designing and optimizing databases to ensure secure, efficient, and reliable storage and retrieval of data for seamless application functionality.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills