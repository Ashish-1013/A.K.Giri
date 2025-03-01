import "./intro.css";        //normal css
import React from 'react'
import { Link } from 'react-scroll';   
import bg from "../../assets/anime 16.png";
import btnImg from "../../assets/hireme.png";
import cv from "../../assets/Ashish Kumar Giri - .pdf"

const Intro = () => {


    const myCvDown = () => {
        const pdfUrl = cv;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "ak_cv.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
    };





return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText"> I'm <span className="introName">Ashish,<br/></span>Website Devloper</span>
            <p className="introPara">Transforming ideas into seamless, user-centric web experiences<br></br>
            explore my portfolio to see how I bring creativity and functionality to life.</p>
            <Link><button className="btn" onClick={myCvDown}><img src={btnImg} alt="hire me" className="btnImg"/> Download CV </button></Link>
        </div>
        <img src={bg} alt="my image" className="bg" />
        <hr></hr>
    </section>
)
}

export default Intro;


