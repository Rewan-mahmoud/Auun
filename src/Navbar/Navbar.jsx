import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file
import logo from "../assest/logo (3).png";
import nozm from "../assest/image 861.png";
import i18n from '../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const switchLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
  };

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

  useEffect(() => {
    if (i18n.language === 'ar') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      
        <div className={`navbar-center ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/Home" className={`nav-link ${activeLink === '/Home' ? 'active' : ''}`} onClick={toggleMenu}>
            {t('home')}
          </Link>
          <Link to="/Services" className={`nav-link ${activeLink === '/Services' ? 'active' : ''}`} onClick={toggleMenu}>
            {t('services')}
          </Link>
          <Link to="/AboutUs" className={`nav-link ${activeLink === '/AboutUs' ? 'active' : ''}`} onClick={toggleMenu}>
            {t('about_us')}
          </Link>
          <Link to="/Blogger" className={`nav-link ${activeLink === '/Blogger' ? 'active' : ''}`} onClick={toggleMenu}>
            {t('blogger')}
          </Link>
          <Link to="/Contact" className={`nav-link ${activeLink === '/Contact' ? 'active' : ''}`} onClick={toggleMenu}>
            {t('contact')}
          </Link>
          <div className="language" onClick={switchLanguage} style={{ cursor: 'pointer' }}>
               <FontAwesomeIcon icon={faGlobe} /> {/* Globe icon */}
          </div>
          <Link to="/OfferPrice">
            <button className="price-button-inside-toggle">{t('offer_price')}</button>
          </Link>
          <img src={nozm} alt="Logo2" className="logo2-inside-toggle" />
        </div>

        <div className="navbar-right">
          <Link to="/OfferPrice">
            <button className="price-button">{t('offer_price')}</button>
          </Link>
          <a href="https://nozzm.com/"
             target="_blank"
             rel="noopener noreferrer">
          <img src={nozm} alt="Logo2" className="logo2" />
          </a>
       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
