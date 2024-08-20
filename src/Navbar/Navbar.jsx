import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file
import logo from "../assest/logo (3).png";
import nozm from "../assest/image 861.png";

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      
        <div className={`navbar-center ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/Home" className={`nav-link ${activeLink === '/Home' ? 'active' : ''}`} onClick={toggleMenu}>الرئيسية</Link>
          <Link to="/Services" className={`nav-link ${activeLink === '/Services' ? 'active' : ''}`} onClick={toggleMenu}>خدمتنا</Link>
          <Link to="/AboutUs" className={`nav-link ${activeLink === '/AboutUs' ? 'active' : ''}`} onClick={toggleMenu}>من نحن</Link>
          <Link to="/Blogger" className={`nav-link ${activeLink === '/Blogger' ? 'active' : ''}`} onClick={toggleMenu}>المدونة</Link>
          <Link to="/Contact" className={`nav-link ${activeLink === '/Contact' ? 'active' : ''}`} onClick={toggleMenu}>تواصل معنا</Link>
         
          {/* Move these into the toggle menu on small screens */}
          <Link to="/OfferPrice"><button className="price-button-inside-toggle">احصل على عرض سعر</button></Link>
          <img src={nozm} alt="Logo2" className="logo2-inside-toggle" />
        </div>

        <div className="navbar-right">
          <Link to="/OfferPrice"><button className="price-button">احصل على عرض سعر</button></Link>
          <img src={nozm} alt="Logo2" className="logo2" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
