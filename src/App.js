import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Login  from "./admin/Pages/Login";
import ErrPage from "./Pages/Errorpage";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(
  {
    once: true,
    easing: 'ease'
  }
);

const App = () => {
  return (

    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        {/*<Route exact path="/Blog" element={<Blog/>} />*/}
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/login" element={<Login/>}/>
        <Route path="*" element={<ErrPage />} />
      </Routes>
    </>


  );
}

export default App;