import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import IntroImage from './components/IntroImage';
import AboutMe from './components/AboutMe';


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
      <section class="bg-light py-5" id="about">
          <div class="container px-5">
              <div class="row gx-5 justify-content-center">
                  <div class="">
                      <AboutMe/>
                  </div>
              </div>
          </div>
      </section>


    </div>
  );
}

export default App;
