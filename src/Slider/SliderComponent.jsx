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

  // Group clients into pairs
  const clientPairs = [];
  for (let i = 0; i < clients.length; i += 2) {
    clientPairs.push(clients.slice(i, i + 2));
  }

  const initialSlideIndex = Math.floor(clientPairs.length / 2);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Display 3 pairs of images per slide
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    initialSlide: initialSlideIndex,
    responsive: [
      {
        breakpoint: 1024, // For screens up to 1024px wide
        settings: {
          slidesToShow: 2, // Show 2 pairs per slide
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 768, // For screens up to 768px wide
        settings: {
          slidesToShow: 1, // Show 1 pair per slide
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 480, // For screens up to 480px wide
        settings: {
          slidesToShow: 1, // Show 1 pair per slide
          centerPadding: '0px',
        }
      }
    ]
  };

  return (
    <div className="slider container">
      <h2 className="title text-center">
        نحن موثوقون من قبل <span className='text-danger'>+{clients.length}</span> عميل
      </h2>
      <p className="subtitle text-center  mb-5">
        لقد ساعدنا في توسيع <span>{clients.length} </span>شركة من 14 دولة عبر 20 صناعة.
      </p>
      <div className="slider-container">
        {clientPairs.length > 0 ? (
          <Slider {...settings}>
            {clientPairs.map((pair, index) => (
              <div key={index} className="slide-item">
                {pair.map(client => (
                  <div key={client.id} className="client-image">
                    <img src={`https://admin.auun.net/${client.images}`} alt={`Client ${client.id}`} />
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        ) : (
          <p>جارٍ التحميل...</p> // Handle loading state
        )}
      </div>
    </div>
  );
};

export default SliderComponent;
