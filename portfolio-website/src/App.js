
import { useState, useLayoutEffect, useRef} from 'react';

import './App.css';

import dataEn from './data/dataEn';
import dataUkr from './data/dataUkr';


import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

function App() {

  const [currentData, setCurrentData] = useState(dataEn);

  const [animateBurgerMenu, setAnimateBurgerMenu] = useState(false);

  const [animateWebsiteLinkTo, setAnimateWebsiteLinkTo] = useState(false);

  const [animateWebsiteLinkFrom, setAnimateWebsiteLinkFrom] = useState(false);

  const [navVisibility, setNavVisibility] = useState("");

  const [closeIconDisplay, setcloseIconDisplay] = useState("none");

  const [menuDisplay, setMenuDisplay] = useState("block")
  
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

      gsap.from(".About-Main-Page", 
      { 
        duration: 1,
        x: 500,
      });

      // gsap.from(".Skills-Heading", 
      // { 
      //   duration: 0.5,
      //   x: 500,
      //   delay: 1,
      //   scrollTrigger: {
      //     trigger: "#Skills"
      //   }
      // });


    }, comp); 
    
    return () => ctx.revert(); 
    
  }, []);


  

  // Scroll animation test

  // const circleRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      // Headings animation ///////////////////////////////////////////////////////////////////////////////////////////
      
      gsap.from(".Experience-Heading", {
        x: 30,
        duration: 2,
        ease: "bounce",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Experience-Heading"
        }
      });
      
      gsap.from(".Portfolio-Heading", {
        x: 30,
        duration: 2,
        ease: "bounce",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Portfolio-Heading"
        }
      });

      gsap.from(".Skills-Heading", {
        x: 30,
        duration: 2,
        ease: "bounce",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Skills-Heading"
        }
      });

      gsap.from(".CV-Heading", {
        x: 30,
        duration: 2,
        ease: "bounce",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".CV-Heading"
        }
      });

      gsap.from(".ContactMe-Heading", {
        x: 30,
        duration: 2,
        ease: "bounce",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".ContactMe-Heading"
        }
      });

      // Headings animation ///////////////////////////////////////////////////////////////////////////////////////////

      // Blocks animation /////////////////////////////////////////////////////////////////////////////////////////////

      gsap.from(".Experience-Block", {
        x: 30,
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Experience-Block"
        }
      });

      gsap.from(".Experience-Volunteering-Block", {
        x: 30,
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Experience-Volunteering-Block"
        }
      });

      gsap.from(".Languages", {
        x: 30,
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Languages"
        }
      });

      gsap.from(".Courses", {
        x: 30,
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Courses"
        }
      });

      gsap.from(".Portfolio-Subheading", {
        x: 30,
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Portfolio-Subheading"
        }
      });

      gsap.from(".Portfolio-Container", {
        x: 30,
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Portfolio-Container"
        }
      });

      gsap.from(".Project-Link", {
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Project-Link"
        }
      });

      gsap.from(".Pet-Projects-Heading", {
        x: 30,
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Pet-Projects-Heading"
        }
      });     

      gsap.from(".Hard-Skills-Heading", {
        x: 30,
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Hard-Skills-Heading"
        }
      }); 

      gsap.from(".Soft-Skills-Heading", {
        x: 30,
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".Soft-Skills-Heading"
        }
      }); 

      gsap.from(".CV-Preview", {
        scale: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".CV-Preview"
        }
      });

      gsap.from(".CV-Link", {
        scale: 0,
        duration: 1.5,
        delay: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".CV-Link"
        }
      });

      gsap.from(".ContactMe-Contact-Form-Container", {
        scale: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".ContactMe-Contact-Form-Container"
        }
      });
     
    // Blocks animation /////////////////////////////////////////////////////////////////////////////////////////////

      gsap.from(".Courses-Item", {
        x: 300,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".Courses-Item"
        }
      });

      gsap.from(".Languages-Item", {
        x: 300,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".Languages-Item"
        }
      });

      gsap.from(".Pet-Project-Item", {
        x: 300,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".Pet-Project-Item"
        }
      });

      gsap.from(".Hard-Skills-Item", {
        x: 300,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".Hard-Skills-Item"
        }
      });

      gsap.from(".ContactMe-Link", {
        x: 400,
        duration: 1,
        delay: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".ContactMe-Link"
        }
      });  

      // Languages
      


    }, comp); 
    
    return () => ctx.revert(); 

    
  }, []);

  // Scroll animation test

  // Scroll animation for About-Main-Page
  // const aboutRef = useRef();

  // useEffect(() => {
  //   gsap.to(".About-Main-Page", {
  //     x: 100,
  //     duration: 2,
  //     ease: "bounce",
  //     delay: 1,
  //     scrollTrigger: {
  //       trigger: ".About-Main-Page"
  //     }
  //   });
  // }, [circleRef]);
   // Scroll animation for About-Main-Page

// Scroll animation for Contact Me
  // const contactMeRef = useRef();

  // useEffect(() => {
  //   gsap.from(".ContactMe-Heading", {
  //     x: -100,
  //     duration: 2,
  //     ease: "bounce",
  //     delay: 0.3,
  //     scrollTrigger: {
  //       trigger: ".ContactMe-Heading"
  //     }
  //   });
  // }, [comp]);
   // Scroll animation for Contact Me

  useLayoutEffect(() => {
    if (animateBurgerMenu === true) {
      let ctx = gsap.context(() => {
        
        let tl1 = gsap.timeline()

        tl1.from(".Nav", 
        { 
          duration: 0.5,
          x: 5000
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

 
  useLayoutEffect(() => {
    if (animateWebsiteLinkTo === true) {
      let ctxTo = gsap.context(() => {

        gsap.to(".Project-Link", 
        { 
          duration: 1,
          scale: 1.1
        }); 

      }, comp); 

      return () => ctxTo.revert(); 

    } else if (animateWebsiteLinkFrom === true) {
      let ctxFrom = gsap.context(() => {

        gsap.from(".Project-Link", 
        { 
          duration: 1,
          scale: 1.1
        }); 

      }, comp); 

      return () => ctxFrom.revert(); 

    }
    
  }, [animateWebsiteLinkTo, animateWebsiteLinkFrom]);
  


  return (
    <div className="App" ref={comp}>
      <header className="Header">
        <div className="Header-Main-Container">
          <div className="Header-Buttons-Container">
              <button className="Header-Button Header-Animated-Element" onClick={() => {changeLanguage(dataEn)}}>EN</button>
              <button className="Header-Button Header-Animated-Element" onClick={() => {changeLanguage(dataUkr)}}>UKR</button>
          </div>
            <div className="Header-Links-Container">
              <a className="Header-Link Header-Animated-Element" href={currentData.header.emailHref}><MailOutlineIcon className='Header-Email-Icon'/></a>
              <a className="Header-Link Header-Animated-Element" href={currentData.header.linkedInHref} target='blank'>{currentData.header.linkedIn}</a>
            </div>
        </div>
        <div className="Header-Right-Container">
            <nav className="Desctop-Nav">
                {currentData.header.navItems.slice(1,6).map((item) => 
                    <a className="Nav-Desctop-Link" href={`#${item}`} key={item}>{item}</a> 
                    )}
            </nav>
            <MenuIcon style={{display: `${menuDisplay}`}} className="Header-Menu-Button Header-Animated-Element" onClick={() => {setMenuDisplay("none"); setNavVisibility("Visible-Nav"); setAnimateBurgerMenu(true); setcloseIconDisplay("block")}}/>
            <CloseIcon style={{display: `${closeIconDisplay}`}} className="Header-Menu-Hide-Button" onClick={() => {setMenuDisplay("block"); setAnimateBurgerMenu("reverse"); setNavVisibility(""); setcloseIconDisplay("none")}} />

        </div>
        </header>
        <nav className={`Nav ${navVisibility}`}>
            {currentData.header.navItems.map((item) => 
                 <a onClick={() => {setMenuDisplay("block"); setAnimateBurgerMenu("reverse"); setNavVisibility(""); setcloseIconDisplay("none")}} className="Nav-Link" href={`#${item}`} key={item}>{item}</a> 
                )}
        </nav>
      <section className="Main-Section">
        <article className="About">
        <div className="About-anchor" id="About"></div>
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
        <article className="Standart-Section-Container">
        <div className="Portfolio-anchor" id="Portfolio"></div>
          <h2 className="Standart-Heading Portfolio-Heading">{currentData.mainSection.portfolio.heading}</h2>
          <div className="Standart-Block">
            <h3 className="Standart-Subheading Portfolio-Subheading">{currentData.mainSection.portfolio.projects[0].title}</h3>
            <div className="Projects-Container">
              <p className="Standart-Description Portfolio-Container" id="Portfolio-Description" >{currentData.mainSection.portfolio.projects[0].description}</p>
              <div className="Project-Link-Extra-Container">
                <a className="Project-Link" onMouseEnter={() => {setAnimateWebsiteLinkTo(true); setAnimateWebsiteLinkFrom(false)}} onMouseLeave={() => {setAnimateWebsiteLinkFrom(true); setAnimateWebsiteLinkTo(false)}} href={currentData.mainSection.portfolio.projects[0].link} target='blank'>
                  <p className="Project-Link-Title">{currentData.mainSection.portfolio.projects[0].linkTitle} <ArrowForwardIcon className='Standart-Icon' /></p>
                  <img src={require("./data/img/ferrometals-preview-image.png")} target="blank" alt="FerroMetals website preview"></img>
                </a>
              </div>
            </div>
          </div>
          <div className="Standart-List-Outer-Container">
          <h3 className="Standart-Subheading Pet-Projects-Heading">{currentData.mainSection.portfolio.petProjects.heading}</h3>
          <ul className="Standart-List">
            {currentData.mainSection.portfolio.petProjects.projects.map((item) => 
                      <li key={item.title} className="Standart-List-Container Pet-Project-Item">
                          <p><span>{item.title}</span> - [ <span>{item.technologies}</span> ]</p>
                          <a className="Pet-Project-Link" href={item.link} target='blank'>{item.link}</a>
                      </li> 
                      )}
          </ul>

          </div>
        </article>
        <article className="Standart-Section-Container">
          <div className="Experience-anchor" id="Experience"></div>
          <h2 className="Standart-Heading Experience-Heading" ref={comp}>{currentData.mainSection.experience.heading}</h2>
          <div className='Standart-Block Experience-Block'>
            <h3 className="Standart-Subheading">{currentData.mainSection.experience.job.title}</h3>
            <p className="Standart-Description">{currentData.mainSection.experience.job.description}</p>
            <p>[ {currentData.mainSection.experience.job.date} ]</p>
          </div>
          <div className='Standart-Block Experience-Volunteering-Block' ref={comp}>
            <h3 className="Standart-Subheading">{currentData.mainSection.experience.volunteering.title}</h3>
            <h4 className="Standart-Micro-Heading">{currentData.mainSection.experience.volunteering.subTitle}</h4>
            <p className="Standart-Description">{currentData.mainSection.experience.volunteering.description}</p>
            <p>[ {currentData.mainSection.experience.volunteering.date} ]</p>
          </div>
          <div className='Standart-Block' ref={comp}>
            <div className='Standart-List-Outer-Container'>
            <h3 className="Standart-Subheading Courses">{currentData.mainSection.experience.courses.title}</h3>
              <ul className="Standart-List">
              {currentData.mainSection.experience.courses.coursesList.map((item) => 
                        <li key={item.title} className="Standart-List-Container Courses-Item">
                            <p>{item.title}</p>
                            <p>[ {item.date} ]</p>
                        </li> 
                        )}
             </ul>
            </div>
          </div>
          <div className="Standart-Block">
            <div className='Standart-List-Outer-Container'>
              <h3 className="Standart-Subheading Languages">{currentData.mainSection.experience.languages.title}</h3>
                <ul className="Standart-List">
                {currentData.mainSection.experience.languages.languagesList.map((item) => 
                          <li key={item.title} className="Standart-List-Container Languages-Item">
                              <p>{item.title} - {item.level}</p>
                          </li> 
                          )}
              </ul>
              </div>
          </div>
        </article>
        <article className="Standart-Section-Container">
          <div className="Skills-anchor" id="Skills"></div>
          <h2 className="Standart-Heading Skills-Heading">{currentData.mainSection.skills.heading}</h2>
          <div className="Standart-Block">
            <div className="Skills-Extra-Container">
            <div className="Standart-List-Outer-Container Skills-List-Outer-Container">
              <h3 className="Standart-Subheading Hard-Skills-Heading">{currentData.mainSection.skills.hardSkills.title}</h3>
                <ul className="Standart-List">
                {currentData.mainSection.skills.hardSkills.skillsList.map((item) => 
                          <li key={item} className="Standart-List-Container Hard-Skills-Item">
                              <p>{item}</p>
                          </li> 
                          )}
              </ul>
              </div>
              <div className="Standart-List-Outer-Container Skills-List-Outer-Container">
              <h3 className="Standart-Subheading Soft-Skills-Heading">{currentData.mainSection.skills.softSkills.title}</h3>
                <ul className="Standart-List">
                {currentData.mainSection.skills.softSkills.skillsList.map((item) => 
                          <li key={item} className="Standart-List-Container Hard-Skills-Item">
                              <p>{item}</p>
                          </li> 
                          )}
              </ul>
              </div>
            </div>
          </div>
        </article>
        <article className="Standart-Section-Container">
          <div className="CV-anchor" id="CV"></div>
          <h2 className="Standart-Heading CV-Heading">{currentData.mainSection.cV.heading}</h2>
          <div className="Standart-Block CV-Block">
                <img className="CV-Preview" src={require("./data/img/cv-preview-image.png")} alt="CV preview"></img>
                <div className="CV-Links-Container">
                  <a className="Project-Link-Title CV-Link" href={require("./data/img/cv_smyrnova_iryna.pdf")} target='blank'>{currentData.mainSection.cV.view}<ArrowForwardIosIcon className='Standart-Icon' /></a>
                  <a className="Project-Link-Title CV-Link" href={require("./data/img/cv_smyrnova_iryna.pdf")} download="CV_Smyrnova_Iryna" >{currentData.mainSection.cV.download}<DownloadIcon className='Standart-Icon' /></a>
                </div>
          </div>
        </article>
        <article className="Standart-Section-Container ContactMe-Section-Container">
          <div className="Contacts-anchor" id="Contacts"></div>
          <h2 className="Standart-Heading ContactMe-Heading" id='ContactMe-Heading'>{currentData.mainSection.contactMe.heading}</h2>
          <div className="Standart-Block ContactMe-Block">
               <div className="ContactMe-Contacts-Container">
                  <a href={currentData.mainSection.about.phoneNumber} className="Standart-List-Container ContactMe-Link"><LocalPhoneIcon className='Standart-Icon' /> {currentData.mainSection.about.phoneNumberTitle}</a>
                  <a href={currentData.header.linkedInHref} target='blank' className="Standart-List-Container ContactMe-Link"><LinkedInIcon className='Standart-Icon' /> {currentData.header.linkedInHref}</a>
                  <a href={currentData.header.emailHref} className="Standart-List-Container ContactMe-Link"><MailOutlineIcon className='Standart-Icon' /> {currentData.header.email}</a>
                  <a href={currentData.mainSection.contactMe.contactsList.github} target='blank' className="Standart-List-Container ContactMe-Link"><GitHubIcon className='Standart-Icon' /> {currentData.mainSection.contactMe.contactsList.github}</a>
                </div> 
               <form className="ContactMe-Contact-Form-Container">
                  <h3 className="Standart-Subheading">{currentData.mainSection.contactMe.contactForm.title}</h3>
                  <input style={{backgroundColor: "#F8F8FF", color: "purple"}} className="ContactMe-Input" required placeholder={currentData.mainSection.contactMe.contactForm.name}></input>
                  <input style={{backgroundColor: "#F8F8FF", color: "purple"}} className="ContactMe-Input" required placeholder={currentData.mainSection.contactMe.contactForm.subject}></input>
                  <input style={{backgroundColor: "#F8F8FF", color: "purple"}} className="ContactMe-Input" placeholder={currentData.mainSection.contactMe.contactForm.contactInformation}></input>
                  <button className="Project-Link-Title ContactMe-Button">{currentData.mainSection.contactMe.contactForm.submitText}<ArrowForwardIosIcon className='Standart-Icon' /></button>
               </form>
          </div>
        </article>
      </section>
      <footer className="Standart-Section-Container Footer">
      <div className="Footer-Nav-Container">
      <nav className="Footer-Nav">
        {currentData.header.navItems.slice(0,3).map((item) => 
          <a className="Footer-Link" href={`#${item}`} key={item}>{item}</a> 
        )}
      </nav>
      <nav className="Footer-Nav">
        {currentData.header.navItems.slice(3,6).map((item) => 
          <a className="Footer-Link" href={`#${item}`} key={item}>{item}</a> 
        )}
      </nav>
      </div>
      <div className="Footer-Contacts">
        <p className="Footer-Text"><LocationOnIcon className='Standart-Icon' />{currentData.mainSection.about.location}</p>
        <a className="Footer-Contact-Link" href={currentData.mainSection.about.phoneNumber}><LocalPhoneIcon className='Standart-Icon' />{currentData.footer.contacts.phone}</a>
        <a className="Footer-Contact-Link" href={`mailto:${currentData.header.email}`}><MailOutlineIcon className='Standart-Icon' />{currentData.footer.contacts.email}</a>
        <a href={currentData.header.linkedInHref} target='blank' className="Footer-Contact-Link"><LinkedInIcon className='Standart-Icon' /> {currentData.footer.contacts.linkedIn}</a>
        <a href={currentData.mainSection.contactMe.contactsList.github} target='blank' className="Footer-Contact-Link"><GitHubIcon className='Standart-Icon' /> {currentData.footer.contacts.github}</a>
      </div>
      </footer>
    </div>
  );
}

export default App;
