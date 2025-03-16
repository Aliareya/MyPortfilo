import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./Topbar/Topbar";
import Navbar from "./navbar/Navbar";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resome from "./pages/Resome";
import Progect from "./pages/Progect";
import Contact from './pages/Contact';
import { useState } from "react";


function App() {
  // Global Varibles For Site
  const [showNavbar , setShowNavbar] = useState(true)
  
  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-black flex">
        <div className={`${showNavbar ?'w-[15%] navbar_animation' : 'w-[5%] navbar_animation'} h-screen bg-[#1b1b1b]`}>
          <Navbar showNavbar={showNavbar} />
        </div>
        <div className={`${showNavbar ?'w-[85%] navbar_animation' : 'w-[95%] navbar_animation'} h-screen`}>
          <Topbar setShowNavbar={setShowNavbar} showNavbar={showNavbar} />
          <div className="w-full h-[665px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resome" element={<Resome />} />
              <Route path="/progect" element={<Progect />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
