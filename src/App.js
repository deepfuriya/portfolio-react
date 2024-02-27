import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import IntroImage from './components/IntroImage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import React from 'react';
import { SKILLS } from './constants';


function App() {
  return (
    <div className='App'>
      <Navbar/>     
      
      <header className="py-5">
          <div className="container px-5 pb-5">
              <div className="row gx-5 align-items-center">
                  <Intro/>
                  <IntroImage/>
              </div>
            </div>
      </header>

      {/* About Section  */}
      <section className="bg-light py-5" id="about">
          <div className="container px-5">
              <div className="row gx-5 justify-content-center">
                  <div className="">
                      <AboutMe/>
                  </div>
              </div>
          </div>
      </section>

      {/* Skills Section */}
      <section className="py-5" id="skills">
                
        <div className="row justify-content-center mt-5 m-0 ps-3 pe-3">

          <div className="text-center mb-3">
              <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Skills</span></h2>
          </div>
                {Object.values(SKILLS).map((key, index) => (
                  <Skills key={index} heading={key.title} skillsArray={key.content} icon={key.icon}/>
                ))}
                

          </div>
       
      </section>


    </div>
  );
}

export default App;
