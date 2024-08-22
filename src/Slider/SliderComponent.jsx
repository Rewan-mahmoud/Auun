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

  // Ensure the initial slide is the middle one
  const initialSlideIndex = Math.floor(clients.length / 2);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    initialSlide: initialSlideIndex, // Start with the middle slide
    responsive: [
      {
        breakpoint: 1024, // For screens up to 1024px wide
        settings: {
          slidesToShow: 2, // Show 2 slides
          centerPadding: '20px', // Adjust padding
        }
      },
      {
        breakpoint: 768, // For screens up to 768px wide
        settings: {
          slidesToShow: 1, // Show 1 slide
          centerPadding: '20px', // Adjust padding
        }
      },
      {
        breakpoint: 480, // For screens up to 480px wide
        settings: {
          slidesToShow: 1, // Show 1 slide
          centerPadding: '0px', // Remove padding for small screens
        }
      }
    ]
  };

  return (
    <div className="slider container">
      <h2 className="title text-center">شركائنا</h2>
      <div className="slider-container">
        {clients.length > 0 ? (
          <Slider {...settings}>
            {clients.map(client => (
              <div key={client.id} className="slide-item">
                <img src={`https://admin.auun.net/${client.images}`} alt={`Client ${client.id}`} />
              </div>
            ))}
          </Slider>
        ) : (
          <p>Loading...</p> // Handle loading state
        )}
      </div>
    </div>
  );
};

export default SliderComponent;
