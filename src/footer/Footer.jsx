import React from 'react';
import './Footer.css'; // Import the CSS file
import footer from "../assest/footer.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faXTwitter ,faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-column">
          <img src={footer} alt="Auun Logo" className="footer-logo" />
          <p className="footer-slogan">تميز عون المتخصصة بعمل استشارات مهنية مالية وإدارية عالية الجودة</p>
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
          <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faXTwitter} />
         
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">معلومات التواصل</h3>
          <p><FontAwesomeIcon icon={faLocationDot} /> مدينة جدة - حي البوادي</p>
          <p><FontAwesomeIcon icon={faPhone} /> 0536245555-0544923333</p>
          <p><FontAwesomeIcon icon={faWhatsapp} /> 0590400593</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@aun.net</p>
        </div>
      
      </div>
      <div className="footer-bottom">
        <p>حقوق الطبع والنشر © 2024محفوظة، جميع الحقوق محفوظة
             
             </p>
      </div>
    </footer>
  );
}

export default Footer;
