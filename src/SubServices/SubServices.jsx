import React, { useEffect, useState } from 'react';
import './SubServices.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';

const SubServices = () => {
  const [subServicesData, setSubServicesData] = useState([]);
  const [serviceId, setServiceId] = useState(1); // Replace with the appropriate service ID
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the sub services data from the API
    fetch('https://admin.auun.net/api/sub_services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'lang': 'ar' // Request Arabic language
      },
      body: JSON.stringify({ service_id: serviceId }) // Send the service_id
    })
      .then(response => {
        if (!response.ok) {
          // Handle non-200 responses
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Attempt to parse JSON
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
  }, [serviceId]);

  const handleServiceClick = (id) => {
    navigate(`/ServiceDetail/${id}`); // Ensure the path and ID are correct
  };
  

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="serviceCardContainer">
        {subServicesData.length > 0 ? (
          subServicesData.map(service => (
            <div key={service.id} className="serviceCard" onClick={() => handleServiceClick(service.id)}>
              <h5 className="serviceCard-text">{service.title}</h5>
              <button className="serviceCard-button">المزيد</button>
            </div>
          ))
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    
    </div>
  );
};

export default SubServices;
