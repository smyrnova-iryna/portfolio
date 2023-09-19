// import logo from './logo.svg';
import { useState } from 'react';

import './App.css';

import dataEn from './data/dataEn';
import dataUkr from './data/dataUkr';

// import Header from './components/Header';


function App() {
  const [currentData, setCurrentData] = useState(dataEn)
  const changeLanguage = (dataValue) => {
    setCurrentData(dataValue)
  }
 
  return (
    <div className="App">
      <header className="Header">
        <div className="Header-Main-Container">
          <div className="Header-Buttons-Container">
              <button className="Header-Button" onClick={() => {changeLanguage(dataEn)}}>EN</button>
              <button className="Header-Button" onClick={() => {changeLanguage(dataUkr)}}>UKR</button>
          </div>
            <div className="Header-Links-Container">
              <a className="Header-Link" href={`mailto:${currentData.header.email}`}><span className="material-symbols-outlined">mail</span></a>
              <a className="Header-Link" href={currentData.header.linkedInHref}>{currentData.header.linkedIn}</a>
            </div>
        </div>
            {/* <a href="#">{currentData.header.navItems[1]}</a> */}
            <span className="material-symbols-outlined Header-Menu-Button">menu</span>
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
