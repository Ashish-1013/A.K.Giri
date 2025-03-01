import "./intro.css";        //normal css
import React from 'react'
import { Link } from 'react-scroll';   
import bg from "../../assets/anime 16.png"
import btnImg from "../../assets/hireme.png"

const Intro = () => {
return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText"> I'm <span className="introName">Ashish,<br/></span>Website Devloper</span>
            <p className="introPara">Transforming ideas into seamless, user-centric web experiences<br></br>
            explore my portfolio to see how I bring creativity and functionality to life.</p>
            <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg"/> Hire Me</button></Link>
        </div>
        <img src={bg} alt="my image" className="bg" />
        <hr></hr>
    </section>
)
}

export default Intro;


