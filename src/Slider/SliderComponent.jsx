import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import icon1 from "../assest/stripe.svg"
import icon2 from "../assest/yandex_kassa.png"
import icon3 from "../assest/envato.png"
import './Slider.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: true
  };

  return (
    <div className="slider container">
      <h2 className="title text-center">شركائنا</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide-item">
            <img src={icon3} alt="Image 1" />
          </div>
          <div className="slide-item">
            <img src={icon2} alt="Image 2" />
          </div>
          <div className="slide-item">
            <img src={icon1} alt="Image 3" />
          </div>
          <div className="slide-item">
            <img src={icon3} alt="Image 4" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
