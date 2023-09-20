// import logo from './logo.svg';
import { useState, useLayoutEffect, useRef } from 'react';

import './App.css';

import dataEn from './data/dataEn';
import dataUkr from './data/dataUkr';

import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { gsap } from "gsap";




function App() {

  const [currentData, setCurrentData] = useState(dataEn)
  const changeLanguage = (dataValue) => {
    setCurrentData(dataValue)
  }

  const comp = useRef();
  

  useLayoutEffect(() => {
  

    let ctx = gsap.context(() => {
      
      let tl = gsap.timeline()

      tl.from(".Header", 
      { 
        duration: 2,
        x: -5000
      }); 

      tl.from(".Header-Animated-Element", 
      { 
        duration: 1,
        y: -50,
        ease: "bounce.out",
        stagger: 0.5
      }); 
    }, comp); 
    
    return () => ctx.revert(); 
    
  }, []);


 
  return (
    <div className="App" ref={comp} >
      <header className="Header">
        <div className="Header-Main-Container">
          <div className="Header-Buttons-Container">
              <button className="Header-Button Header-Animated-Element" onClick={() => {changeLanguage(dataEn)}}>EN</button>
              <button className="Header-Button Header-Animated-Element" onClick={() => {changeLanguage(dataUkr)}}>UKR</button>
          </div>
            <div className="Header-Links-Container">
              <a className="Header-Link Header-Animated-Element" href={`mailto:${currentData.header.email}`}><MailOutlineIcon/></a>
              <a className="Header-Link Header-Animated-Element" href={currentData.header.linkedInHref}>{currentData.header.linkedIn}</a>
            </div>
        </div>
            {/* <a href="#">{currentData.header.navItems[1]}</a> */}

            <MenuIcon className='Header-Menu-Button Header-Animated-Element'/>
            {/* <span className="material-symbols-outlined Header-Menu-Button">menu</span> */}
            {/* <Nav currentData={currentData}/> */}
        </header>
     {/* <Header changeLanguage={changeLanguage} currentData={currentData}/>  */}
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
