import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Header from './common/header/Header';
import About from './component/About';
import Resome from './component/Resome';
import Contact from './component/Contact';
import Footer from './common/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/resome' element={<Resome/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes> 
      <Footer/>
    </BrowserRouter>
  )
}

export default App