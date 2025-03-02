import React, {useState} from "react";
import style from'./navbar.module.css';    //module css
import logo from '../../assets/letter-gr-a.png';
import { Link } from 'react-scroll';  //npm i react-scroll
import contactImg from '/src/assets/contact.png';
import Menu from "../../assets/main-menu.png";


const Navbar =()=>{

    //for reminding and scroll
    const contactMe = () => {
        const contactPage = document.getElementById('contactPage');
        const offset = 30; // Adjust this value based on your needs (e.g., height of your fixed header)
    
        // Calculate the position of the element minus the offset
        const elementPosition = contactPage.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
    
        // Scroll to the adjusted position
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };



    //react hook for mobile view
    const [showMenu, setShowMenu] = useState(false);




    //offset={-100} ------------use  for perfect view , no override page
    return(
        <nav className={style.navbar}>
            <img src={logo} alt="logo" className={style.logo} />

            <div className={style.desktopMenu}>
                <Link activeClass={style.active} to="intro" spy={true} smooth={true} offset={-100} duration={500} className={style.desktopMenuListItem}>Home</Link>
                <Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={-30} duration={500} className={style.desktopMenuListItem}>About</Link>
                <Link activeClass={style.active} to="projectSec" spy={true} smooth={true} offset={-30} duration={500} className={style.desktopMenuListItem}>Projects</Link>
                <Link activeClass={style.active} to="journey" spy={true} smooth={true} offset={-30} duration={500} className={style.desktopMenuListItem}>Career Journey</Link>
            </div>
            <button className={style.desktopMenuBtn} onClick={contactMe}>
                <img src={contactImg} alt="" className={style.desktopMenuImg} />Contact Me
            </button>


            <img src={Menu} alt="Menu" className={style.mobMenu} onClick={()=>setShowMenu(!showMenu)} />
            <div className={style.mobnavMenu} style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass={style.active} to="intro" spy={true} smooth={true} offset={-100} duration={500} className={style.mobMenuListItem} onClick={()=>setShowMenu(false)} >Home</Link>
                <Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={-60} duration={500} className={style.mobMenuListItem} onClick={()=>setShowMenu(false)} >About</Link>
                <Link activeClass={style.active} to="projectSec" spy={true} smooth={true} offset={-60} duration={500} className={style.mobMenuListItem} onClick={()=>setShowMenu(false)} >Projects</Link>
                <Link activeClass={style.active} to="journey" spy={true} smooth={true} offset={-60} duration={500} className={style.mobMenuListItem} onClick={()=>setShowMenu(false)} >Career</Link>
                <Link activeClass={style.active} to="contact" spy={true} smooth={true} offset={-60} duration={500} className={style.mobMenuListItem} onClick={()=>setShowMenu(false)} >Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar