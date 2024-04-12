import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./components/Projects";
import Background from "./components/Background";
import About from "./components/About";
import Contact from "./components/Contact";
import AllProjects from "./components/AllProjects";
import Nav from "./components/Nav";
import IamSection from "./components/IamSection";
import MoreAbout from "./components/MoreAbout";
import Imperialdicechess from "./components/pages/Imperialdicechess";
import VIFDM from "./components/pages/VIFDM";
import Rebirth from "./components/pages/Rebirth";
import Blok1 from "./components/pages/Blok1";
import TandemBicycle from "./components/pages/TandemBicycle";
import Batmobile from "./components/pages/Batmobile";


import "./AllProjects.css";
import Footer from "./components/Footer";
function App() {
  let count = 1;

 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            
            element={
             
              <>
                <div className="container FirstSection_css">
                  <Nav />
                  <IamSection />
                </div>
                  <Projects />
                <Background count={count} />
                <About />
                <Background count={count + 1} />
                <Contact   />
                </>
                
            }
          />
        </Routes>
        <Routes>
          <Route path="/allprojects" element={<AllProjects />} />
        </Routes>
        <Routes>
          <Route path="/allprojects/imperialdicechess" element={<Imperialdicechess />} />

          <Route path="/allprojects/VIFDM" element={<VIFDM />} />
          <Route path="/allprojects/Rebirth" element={<Rebirth />} />
          <Route path="/allprojects/Blok1" element={<Blok1 />} />
          <Route path="/allprojects/TandemBicycle" element={<TandemBicycle />} />
          <Route path="/allprojects/Batmobile" element={<Batmobile />} />

        </Routes>
        <Routes>
          <Route path="/about" element={<MoreAbout />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
