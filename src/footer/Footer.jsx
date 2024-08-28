import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faWhatsapp,
  faTiktok,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"; // Import the CSS file
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation(); // Get the current location
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Fetch the footer data from the API
    fetch("https://admin.auun.net/api/setting", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        lang: i18n.language, // Set the language based on the current selection
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status && data.data) {
          setFooterData(data.data);
        } else {
          throw new Error(data.message || "Invalid data structure");
        }
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
        setError(error.message);
      });
  }, [i18n.language]); // Add i18n.language as a dependency to refetch on language change

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]); // Dependency on location

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!footerData) {
    return <div>Loading...</div>; // Display a loading message or spinner while fetching data
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img
            src={`https://admin.auun.net${footerData.logo}`}
            alt="Auun Logo"
            className="footer-logo"
          />
          <p className="footer-slogan">
            {i18n.language === "ar" ? footerData.title_ar : footerData.title_en}
          </p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">{t("quick_links")}</h3>
          <Link to="/Home">
            <p>{t("home")}</p>
          </Link>
          <Link to="/AboutUs">
            <p>{t("about_us")}</p>
          </Link>
          <Link to="/Services">
            <p>{t("services")}</p>
          </Link>
          <Link to="/Contact">
            <p>{t("contact_us")}</p>
          </Link>
          <a
            href="https://nozzm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{t("nozzm")}</p>
          </a>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">{t("help")}</h3>
          <p>{t("faq")}</p>
          <p>{t("terms_conditions")}</p>
          <p>{t("follow_us")}</p>
          <div className="social-icons">
            <a
              href={footerData.instgram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="text-white" icon={faInstagram} />
            </a>
            <a
              href={footerData.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="text-white" icon={faFacebookF} />
            </a>
            <a href={footerData.x} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="text-white" icon={faXTwitter} />
            </a>
            <a
              href={footerData.tiktok}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="text-white" icon={faTiktok} />
            </a>
            <a
              href={footerData.snapchat}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="text-white" icon={faSnapchat} />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">{t("contact_info")}</h3>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            {i18n.language === "ar"
              ? footerData.location_ar
              : footerData.location_en}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> {footerData.phone_one} -{" "}
            {footerData.phone_two}
          </p>
          <p>
            <FontAwesomeIcon icon={faWhatsapp} /> {footerData.whatsapp}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> {footerData.email}
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
