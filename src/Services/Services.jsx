import React, { useEffect, useState } from 'react';
import './Services.css';
import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    // Fetch the services data from the API
    axios.get('https://admin.auun.net/api/services', {
      headers: {
          'lang': 'ar' 
      }
  })

      .then(response => {
        if (response.data.status) {
          setServicesData(response.data.data);
        }
      })
      .catch(error => console.error('Error fetching services data:', error));
  }, []);

  return (
    <div className='Services'>
      <h1 className='title serviceTitle text-center'>خدماتنا</h1>
      <p className='text-center mb-5'>
        نظرا لرغبتنا فى تقديم خدمات متكامله لعملائنا وتوحيد منصه تقديم الخدمات لعملائنا نقوم بالتعاون مع شركائنا بتقديم الخدمات التاليه
      </p>
      <div className="card-grid">
        {servicesData.length > 0 ? (
          servicesData.map((service, index) => (
            <div className="card" key={service.id}>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description" dangerouslySetInnerHTML={{ __html: service.description }}></p>
              <Link to="/SubServices">
                <button className="card-button">المزيد</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading services...</p>
        )}
      
      </div>
    </div>
  );
};

export default Services;
