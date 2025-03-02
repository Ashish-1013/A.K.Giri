import React from 'react'
import  "./works.css"
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">“Bringing ideas to life with diverse projects. From e-commerce solutions to Jio Cinema clone. Exploring creativity through games and portfolios.”</span>

        <div className="workImgs">
            <img src={portfolio1} alt="proj 1" className="workImg" />
            <img src={portfolio2} alt="proj 2" className="workImg" />
            <img src={portfolio3} alt="proj 3" className="workImg" />
            <img src={portfolio4} alt="proj 4" className="workImg" />
            <img src={portfolio5} alt="proj 5" className="workImg" />
            <img src={portfolio6} alt="proj 6" className="workImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works;