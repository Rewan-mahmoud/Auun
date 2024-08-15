import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderComponent = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch data from the clients API
    fetch('https://admin.auun.net/api/clients')
      .then(response => response.json())
      .then(data => {
        if (data.status && data.data) {
          setClients(data.data);
        }
      })
      .catch(error => console.error('Error fetching the clients data:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of slides to show side by side
    slidesToScroll: 1,
    centerMode: false, // Disable center mode
    arrows: true,
  };

  return (
    <div className="slider container">
      <h2 className="title text-center">شركائنا</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {clients.map(client => (
            <div key={client.id} className="slide-item">
              <img src={`https://admin.auun.net/${client.images}`} alt={`Client ${client.id}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
