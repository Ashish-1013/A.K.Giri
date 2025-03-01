import React, { useRef } from 'react'
import "./contact.css";
import Facebook from "../../assets/facebook_icon1.png" //not added
import Instagram from "../../assets/instagram2.png"
import Linkedin from "../../assets/linkedin.png"
import GitHub from "../../assets/github22.png"
import Telegram from "../../assets/telegram.png"
import Twiter from "../../assets/twitter1.png"  //not added
import YouTube from "../../assets/youtube33.png" //not added
import emailjs from '@emailjs/browser';   //install emailJs =: npm install --save @emailjs/browser


function Contact() {
// auto email send when submit
  const form = useRef();    // for emailJs ----
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_AkGiri10', 'template_wlmohps', form.current, {   //service id , template id ,from the emailJs website
        publicKey: '81QqN3g0dWaDM0eAm',
      })
      .then((result) => {
          console.log(result.text , "SUCESS..!");
          e.target.reset();
          alert("Email Sent..👌,Thank you for Contact me 😁, Stay connected I will connect you soon.");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Email Failed to Send !!😢");
        },
      );
  };

// 


  return (
    <section id="contactPage">
        <div className="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>

          <form action="" className="contactForm" ref={form} onSubmit={sendEmail} >
            <input type="text" className="name" placeholder='Your Name' name="user_name" />
            <input type="email" className="email" placeholder='Your Email' name="user_email" />
            <textarea rows="5" placeholder='Give your message here...' className="msg" name="message" ></textarea>
            <button className="submitBtn" type='submit' value="send" >SEND</button>
            <div className="links">
              

              <a href="https://www.instagram.com/a.k.giri_/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" className="link" /></a>
              <a href="https://www.linkedin.com/in/akgiri10/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin" className="link" /></a>
              <a href="https://github.com/Ashish-1013" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub" className="link" /></a>
              <a href="http://t.me/Das_leo_0" target="_blank" rel="noopener noreferrer"><img src={Telegram} alt="Telegram" className="link" /></a>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;