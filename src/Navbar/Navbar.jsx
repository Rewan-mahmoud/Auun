import React from 'react';
import './navbar.css'; // Import the CSS file
import logo from "../assest/logo (3).png"
import nozm from "../assest/image 861.png"
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar ">
        <div className="container">
        <div className="navbar-left">
        <img src={logo} alt="Logo1" className="logo" />
      </div>
      <div className="navbar-center">
        <Link to="Home" className="nav-link">الرئيسية </Link>
        <Link to="Services" className="nav-link">خدمتنا </Link>
        <Link to="AboutUs" className="nav-link">من نحن</Link>
        <Link to="Blogger" className="nav-link">المدونة</Link>
        <Link to="Contact"  className="nav-link">تواصل معنا</Link>
        <div className="navbar-right">
       <Link to="OfferPrice"><button className="price-button">احصل على عرض سعر</button>
       </Link> 
      </div>
      </div>
      
      <img src={nozm} alt="Logo2" className="logo2" />
        </div>
 

    </nav>
  );
}

export default Navbar;
