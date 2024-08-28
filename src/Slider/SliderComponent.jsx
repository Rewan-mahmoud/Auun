import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { useTranslation } from "react-i18next";

const SliderComponent = () => {
  const [clients, setClients] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Fetch data from the clients API
    fetch("https://admin.auun.net/api/clients", {
      headers: {
        lang: i18n.language, // Request the current language
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.data) {
          setClients(data.data);
        }
      })
      .catch((error) =>
        console.error("Error fetching the clients data:", error)
      );
  }, [i18n.language]); // Add i18n.language as a dependency

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
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    initialSlide: initialSlideIndex,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="slider container">
      <h2 className="title text-center">
        {t("trusted_by")} <span className="text-danger">+{clients.length}</span>{" "}
        {t("clients")}
      </h2>
      <p className="subtitle text-center  mb-5">
        {t("expanded_companies")} <span>{clients.length}</span>{" "}
        {t("companies_from")}
      </p>
      <div className="slider-container">
        {clientPairs.length > 0 ? (
          <Slider {...settings}>
            {clientPairs.map((pair, index) => (
              <div key={index} className="slide-item">
                {pair.map((client) => (
                  <div key={client.id} className="client-image">
                    <img
                      src={`https://admin.auun.net/${client.images}`}
                      alt={`Client ${client.id}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        ) : (
          <p>{t("loading")}</p> // Handle loading state
        )}
      </div>
    </div>
  );
};

export default SliderComponent;
