import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file
import logo from "../assest/logo (3).png";
import nozm from "../assest/image 861.png";

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/Home');
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-left">
          <img src={logo} alt="Logo1" className="logo" />
        </div>
        <div className="navbar-center">
          <Link to="/Home" className={`nav-link ${activeLink === '/Home' ? 'active' : ''}`}>الرئيسية</Link>
          <Link to="/Services" className={`nav-link ${activeLink === '/Services' ? 'active' : ''}`}>خدمتنا</Link>
          <Link to="/AboutUs" className={`nav-link ${activeLink === '/AboutUs' ? 'active' : ''}`}>من نحن</Link>
          <Link to="/Blogger" className={`nav-link ${activeLink === '/Blogger' ? 'active' : ''}`}>المدونة</Link>
          <Link to="/Contact" className={`nav-link ${activeLink === '/Contact' ? 'active' : ''}`}>تواصل معنا</Link>
        </div>
        <div className="navbar-right">
          <Link to="/OfferPrice"><button className="price-button">احصل على عرض سعر</button></Link>
        </div>
        <img src={nozm} alt="Logo2" className="logo2" />
      </div>
    </nav>
  );
}

export default Navbar;
