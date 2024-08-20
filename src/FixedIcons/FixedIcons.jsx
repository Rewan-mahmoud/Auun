import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './fixedIcons.css'; // Adjust the path as necessary

const FixedIcons = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (icon) => {
    setHovered(icon);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="fixed-icons">
      <div 
        className={`icon-circle ${hovered === 'whatsapp' ? 'hovered' : ''}`} 
        onMouseEnter={() => handleMouseEnter('whatsapp')}
        onMouseLeave={handleMouseLeave}
      >
        <span className="icon-text"> 544923333</span>
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
      <div 
        className={`icon-circle ${hovered === 'phone' ? 'hovered' : ''}`} 
        onMouseEnter={() => handleMouseEnter('phone')}
        onMouseLeave={handleMouseLeave}
      >
        <span className="icon-text"> 536245555 - 544923333</span>
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div 
        className={`icon-circle ${hovered === 'email' ? 'hovered' : ''}`} 
        onMouseEnter={() => handleMouseEnter('email')}
        onMouseLeave={handleMouseLeave}
      >
        <span className="icon-text"> info@auun.net</span>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
}

export default FixedIcons;
