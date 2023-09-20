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
          {/* {!animateBurgerMenu ? <MenuIcon className='Header-Menu-Button Header-Animated-Element' onClick={() => {setAnimateBurgerMenu(!animateBurgerMenu); setNavVisibility('Visible-Nav')}}/> : <CloseIcon className="Close-Button"/>} */}
            <MenuIcon className='Header-Menu-Button Header-Animated-Element' onClick={() => {setAnimateBurgerMenu(true); setNavVisibility("Visible-Nav"); setcloseIconDisplay("block")}}/>
            <CloseIcon style={{display: `${closeIconDisplay}`}} className='Header-Menu-Hide-Button' onClick={() => {setAnimateBurgerMenu("reverse"); setNavVisibility(""); setcloseIconDisplay("none")}} />

        </div>
        </header>
        <nav className={`Nav ${navVisibility}`}>
            {currentData.header.navItems.map((item) => 
                 <a className="Nav-Link" href={`#${item}`} key={item}>{item}</a> 
                )}
        </nav>
      <section className="Main-Section">
        <article className="About">


        </article>
      </section>
      <footer className="Footer">

      </footer>
    </div>
  );
}

export default App;
