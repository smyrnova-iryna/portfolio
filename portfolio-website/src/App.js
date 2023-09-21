// import logo from './logo.svg';
import { useState, useLayoutEffect, useRef } from 'react';

import './App.css';

import dataEn from './data/dataEn';
import dataUkr from './data/dataUkr';


import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';

import { gsap } from "gsap";




function App() {

  const [currentData, setCurrentData] = useState(dataEn);

  const [animateBurgerMenu, setAnimateBurgerMenu] = useState(false);

  const [navVisibility, setNavVisibility] = useState("");

  const [closeIconDisplay, setcloseIconDisplay] = useState("none")
  
  const changeLanguage = (dataValue) => {
    setCurrentData(dataValue);
  }

  const comp = useRef();
  

  useLayoutEffect(() => {
  

    let ctx = gsap.context(() => {
      
      let tl = gsap.timeline()

      tl.from(".Header", 
      { 
        duration: 1.2,
        x: -5000
      }); 

      tl.from(".Header-Animated-Element", 
      { 
        duration: 1,
        y: -50,
        ease: "bounce.out",
        stagger: 0.5
      }); 

      tl.from(".Nav-Desctop-Link", 
      { 
        duration: 1,
        y: -50,
        ease: "bounce.out",
        stagger: 0.5
      }); 
      
      gsap.from(".About-Sidebar", 
      { 
        duration: 1,
        x: -500,
      });

    }, comp); 
    
    return () => ctx.revert(); 
    
  }, []);

  useLayoutEffect(() => {
    if (animateBurgerMenu === true) {
      let ctx = gsap.context(() => {
        
        let tl1 = gsap.timeline()

        tl1.from(".Nav", 
        { 
          duration: 0.5,
          x: 5000
        }); 

        tl1.to(".Header-Menu-Button", 
        { 
          duration: 0.5,
          x: 500
        }); 
        
        gsap.from(".Header-Menu-Hide-Button", 
        { 
          duration: 0.5,
          x: 500,
          delay: 1
        });


      }, comp); 
      
      return () => ctx.revert(); 
    } 
    
  }, [animateBurgerMenu])

 
  return (
    <div className="App" ref={comp}>
      <header className="Header">
        <div className="Header-Main-Container">
          <div className="Header-Buttons-Container">
              <button className="Header-Button Header-Animated-Element" onClick={() => {changeLanguage(dataEn)}}>EN</button>
              <button className="Header-Button Header-Animated-Element" onClick={() => {changeLanguage(dataUkr)}}>UKR</button>
          </div>
            <div className="Header-Links-Container">
              <a className="Header-Link Header-Animated-Element" href={`mailto:${currentData.header.email}`}><MailOutlineIcon className='Header-Email-Icon'/></a>
              <a className="Header-Link Header-Animated-Element" href={currentData.header.linkedInHref}>{currentData.header.linkedIn}</a>
            </div>
        </div>
        <div className="Header-Right-Container">
            <nav className="Desctop-Nav">
                {currentData.header.navItems.map((item) => 
                    <a className="Nav-Desctop-Link" href={`#${item}`} key={item}>{item}</a> 
                    )}
            </nav>
            <MenuIcon className="Header-Menu-Button Header-Animated-Element" onClick={() => {setAnimateBurgerMenu(true); setNavVisibility("Visible-Nav"); setcloseIconDisplay("block")}}/>
            <CloseIcon style={{display: `${closeIconDisplay}`}} className="Header-Menu-Hide-Button" onClick={() => {setAnimateBurgerMenu("reverse"); setNavVisibility(""); setcloseIconDisplay("none")}} />

        </div>
        </header>
        <nav className={`Nav ${navVisibility}`}>
            {currentData.header.navItems.map((item) => 
                 <a onClick={() => {setAnimateBurgerMenu("reverse"); setNavVisibility(""); setcloseIconDisplay("none")}} className="Nav-Link" href={`#${item}`} key={item}>{item}</a> 
                )}
        </nav>
      <section className="Main-Section">
        <article className="About">
          <div className="About-Top-Container">
              <div className="About-Sidebar">
                <img src={require('./data/img/app-photo.jpg')} alt="Foto"></img>
                <a className="About-Sidebar-Text About-Sidebar-Link" href={currentData.mainSection.about.phoneNumber}>{currentData.mainSection.about.phoneNumberTitle}</a>
                <a className="About-Sidebar-Text About-Sidebar-Link" href={`mailto:${currentData.header.email}`}>{currentData.header.email}</a>
                <p className="About-Sidebar-Text">{currentData.mainSection.about.location}</p>
              </div>
              <div className="About-Main-Page">
                <h2 className="About-Name">{currentData.mainSection.about.name}</h2>
                <h1 className="About-Position">{currentData.mainSection.about.position}</h1>
                <p className="About-Description">{currentData.mainSection.about.description}</p>
              </div>
          </div>  
        </article>
        <article className="Portfolio">
        <div className="Portfolio-anchor" id="Portfolio"></div>
          <h2 className="Standart-Heading">{currentData.mainSection.portfolio.heading}</h2>
          <div className="Projects">
            <h3 className="Standart-Subheading">{currentData.mainSection.portfolio.projects[0].title}</h3>
            <div className="Projects-Container">
              <p className="Project-Description">{currentData.mainSection.portfolio.projects[0].description}</p>
              <a className="Project-Link" href={currentData.mainSection.portfolio.projects[0].link}>
                <p>{currentData.mainSection.portfolio.projects[0].link}</p>
                <img src={require("./data/img/ferrometals-preview-image.png")} target="blank" alt="FerroMetals website preview"></img>
              </a>
            </div>
          </div>
          <div className="Pet-Projects">
            
          </div>
        </article>
      </section>
      <footer className="Footer">

      </footer>
    </div>
  );
}

export default App;
