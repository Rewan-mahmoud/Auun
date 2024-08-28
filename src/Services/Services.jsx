import React, { useEffect, useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Fetch the services data from the API
    axios.get('https://admin.auun.net/api/services', {
      headers: {
        'lang': i18n.language // Request the current language
      }
    })
      .then(response => {
        if (response.data.status) {
          setServicesData(response.data.data);
        }
      })
      .catch(error => console.error('Error fetching services data:', error));
  }, [i18n.language]); // Add i18n.language as a dependency

  return (
    <div className='Services'>
      <h1 className='title serviceTitle text-center'>{t('our_services')}</h1>
      <p className='text-center serviceseDescription mb-5'>
        {t('services_description')}
      </p>
      <div className="card-grid">
        {servicesData.length > 0 ? (
          servicesData.map((service, index) => (
            <div className="card" key={service.id}>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description" dangerouslySetInnerHTML={{ __html: service.description }}></p>
              <Link to={`/SubServices/${service.id}`}>
                <button className="card-button">{t('more_button')}</button>
              </Link>
            </div>
          ))
        ) : (
          <p>{t('loading_services')}</p>
        )}
      </div>
    </div>
  );
};

export default Services;
