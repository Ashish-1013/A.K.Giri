import React from 'react'
import "./contact.css";
import Facebook from "../../assets/facebook_icon1.png"
import Instagram from "../../assets/instagram2.png"
import Linkedin from "../../assets/linkedin.png"
import GitHub from "../../assets/github22.png"
import Telegram from "../../assets/telegram.png"
import Twiter from "../../assets/twitter1.png"
import YouTube from "../../assets/youtube33.png"


function Contact() {
  return (
    <section id="contactPage">
        <div className="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
          <form action="" className="contactForm">
            <input type="text" className="name" placeholder='Your Name' />
            <input type="email" className="email" placeholder='Your Email' />
            <textarea name="message" rows="5" placeholder='Give your message here...' className="msg"></textarea>
            <button className="submitBtn" type='submit' value="send" >Submit</button>
            <div className="links">
              
              <img src={Instagram} alt="Instagram" className="link" />
              <img src={Twiter} alt="Twiter" className="link" />
              <img src={Linkedin} alt="Linkedin" className="link" />
              <img src={GitHub} alt="GitHub" className="link" />
              <img src={Telegram} alt="Telegram" className="link" />
              
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;