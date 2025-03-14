import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./Topbar/Topbar";
import Navbar from "./navbar/Navbar";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resome from "./pages/Resome";
import Skill from "./pages/Skill";
import Progect from './pages/Progect';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-black flex">
        <div className="navebar w-[15%] h-screen bg-[#1b1b1b]">
          <Navbar />
        </div>
        <div className="w-[85%] h-screen">
          <Topbar />
          <div className="w-full h-[665px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resome" element={<Resome />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/progect" element={<Progect />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
