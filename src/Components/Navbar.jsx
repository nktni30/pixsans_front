import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/images/logo1.svg";


function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);

  const [color, setColor]= useState(false)
  const changeColor = () =>{
    if (window.scrollY>=70){
      setColor(true)
    }
    else
    setColor(false)
  }

  window.addEventListener('scroll', changeColor)

  return (
    <>
      <nav className={color? 'main-nav nav-bg': 'main-nav'}>
        {/* 1st logo part  */}
        <div className="logo">
          <Link to="/" ><img src={Logo}/></Link>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/services">services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/pixsans22/"
                target="_pixsans">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pix_sans/"
                target="_pixsans">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCT5AkJ49P8aiaqkETrkDibQ"
                target="_pixsans">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu" onClick={handleclick}>
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {click?<HiX/>: <HiMenu/>}
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  )
}


export default Navbar;