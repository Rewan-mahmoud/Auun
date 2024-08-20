import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';

const Card = ({ imgSrc, circleSrc, title, date, text }) => (
  <div className="BloggerCard">
    <img className="card-img-top" src={imgSrc} alt="Card cap" />
    <div className="card-body">
      <div className="d-flex justify-content-between">
        <div>
          <img src={circleSrc} alt="Circle" className="circle-img" />
        </div>
        <div>
          <h5 className="card-title">{title}</h5>
          <span>{date}</span>
        </div>
      </div>
      <p className="card-text mt-3">{text}</p>
      <FontAwesomeIcon className="arrow-icon" icon={faArrowLeft} />
    </div>

  </div>
);

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  circleSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
