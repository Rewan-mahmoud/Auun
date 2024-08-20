import React, { useEffect, useState } from 'react';
import './Footer.css'; // Import the CSS file
import footer from "../assest/footer.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the footer data from the API
    fetch('https://admin.auun.net/api/setting')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.status && data.data) {
          setFooterData(data.data);
        } else {
          throw new Error(data.message || 'Invalid data structure');
        }
      })
      .catch(error => {
        console.error('Error fetching footer data:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!footerData) {
    return <div>Loading...</div>; // Display a loading message or spinner while fetching data
  }



  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
      <img 
            src={`https://admin.auun.net${footerData.logo}`} 
            alt="Auun Logo" 
            className="footer-logo" 
          />
          <p className="footer-slogan">{footerData.title_ar}</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">روابط سريعة</h3>
          <p>الصفحة الرئيسية</p>
          <p>من نحن</p>
          <p>خدماتنا</p>
          <p>تواصل معنا</p>
          <p>نظم</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">للمساعدة</h3>
          <p>الأسئلة المتكررة</p>
          <p>الشروط والأحكام</p>
          <p>Follow us on</p>
          <div className="social-icons">
            <a href={footerData.instgram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='text-white' icon={faInstagram} />
            </a>
            <a href={footerData.facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon   className='text-white' icon={faFacebookF} />
            </a>
            <a href={footerData.x} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon  className='text-white' icon={faXTwitter} />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">معلومات التواصل</h3>
          <p><FontAwesomeIcon icon={faLocationDot} /> {footerData.location_ar}</p>
          <p><FontAwesomeIcon icon={faPhone} /> {footerData.phone_one} - {footerData.phone_two}</p>
          <p><FontAwesomeIcon icon={faWhatsapp} /> {footerData.whatsapp}</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> {footerData.email}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>حقوق الطبع والنشر © 2024محفوظة، جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;
