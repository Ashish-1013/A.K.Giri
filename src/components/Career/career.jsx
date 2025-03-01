import React from 'react';
import "./career.css";
import Walmart from "../../assets/walmart.png"
import Adobe from "../../assets/adobe.png"
import Microsoft from "../../assets/microsoft.png"
import Facebook from "../../assets/facebook.png"

const Career = () => {
  return (
    <section id="careerPage">
        <div id="career">
                    <h1 className="careerPageTitle">Career journey</h1>
                    <p className="careerDesc">I have had the opportunity to work with a diverse group of companies.
                        Some of the notable companies I have worked with includes.
                    </p>
                    <div className="careerImgs">
                        <img src={Walmart} alt="Walmart" className="careerImg" />
                        <img src={Adobe} alt="Adobe" className="careerImg" />
                        <img src={Microsoft} alt="Microsoft" className="careerImg" />
                        <img src={Facebook} alt="Facebook" className="careerImg" />
                    </div>
                </div>
    </section>
  )
}

export default Career;