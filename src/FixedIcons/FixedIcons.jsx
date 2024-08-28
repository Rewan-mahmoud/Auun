import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import './fixedIcons.css';

const FixedIcons = () => {
  const [hovered, setHovered] = useState(null);
  const { i18n } = useTranslation();

  const handleMouseEnter = (icon) => {
    setHovered(icon);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className={`fixed-icons ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div 
        className={`icon-circle ${hovered === 'whatsapp' ? 'hovered' : ''}`} 
        onMouseEnter={() => handleMouseEnter('whatsapp')}
        onMouseLeave={handleMouseLeave}
      >
        <a href="https://wa.me/544923333" target="_blank" rel="noopener noreferrer" className="icon-link">
          <span className="icon-text"> 544923333</span>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <div 
        className={`icon-circle ${hovered === 'phone' ? 'hovered' : ''}`} 
        onMouseEnter={() => handleMouseEnter('phone')}
        onMouseLeave={handleMouseLeave}
      >
        <a href="tel:536245555" className="icon-link">
          <span className="icon-text"> 536245555 - 544923333</span>
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
      <div 
        className={`icon-circle ${hovered === 'email' ? 'hovered' : ''}`} 
        onMouseEnter={() => handleMouseEnter('email')}
        onMouseLeave={handleMouseLeave}
      >
        <a href="mailto:info@auun.net" className="icon-link">
          <span className="icon-text"> info@auun.net</span>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default FixedIcons;
