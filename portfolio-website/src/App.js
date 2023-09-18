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
            <button onClick={() => {changeLanguage(dataEn)}}>EN</button>
            <button onClick={() => {changeLanguage(dataUkr)}}>UKR</button>
            <a href={currentData.header.linkedInHref}>{currentData.header.linkedIn}</a>
            <a href={`tel:${currentData.header.phoneNumber}`}><span className="material-symbols-outlined">call</span></a>
            {/* <a href="#">{currentData.header.navItems[1]}</a> */}
            <span className="material-symbols-outlined">menu</span>
            {/* <Nav/> */}
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
