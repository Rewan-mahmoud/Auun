import React, { useEffect, useState } from 'react';
import './SubServices.css'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SubServices = () => {
  const { serviceId } = useParams(); // Get the serviceId from the URL
  const [subServicesData, setSubServicesData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Fetch the sub services data from the API
    fetch('https://admin.auun.net/api/sub_services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'lang': i18n.language // Set the current language
      },
      body: JSON.stringify({ service_id: serviceId }) // Send the service_id
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.status && data.data) {
          setSubServicesData(data.data);
        } else {
          throw new Error(data.message || 'Invalid data structure');
        }
      })
      .catch(error => {
        console.error('Error fetching sub services:', error);
        setError(error.message);
      });
  }, [serviceId, i18n.language]); // Add i18n.language as a dependency

  const handleServiceClick = (id) => {
    navigate(`/ServiceDetail/${id}`);
  };

  if (error) {
    return <div>{t('error_message')}{error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="serviceCardContainer">
        {subServicesData.length > 0 ? (
          subServicesData.map(service => (
            <div key={service.id} className="serviceCard" onClick={() => handleServiceClick(service.id)}>
              <h5 className="serviceCard-text">{service.title}</h5>
              <button className="serviceCard-button">{t('more_button')}</button>
            </div>
          ))
        ) : (
          <p>{t('loading_services')}</p>
        )}
      </div>
    </div>
  );
};

export default SubServices;
