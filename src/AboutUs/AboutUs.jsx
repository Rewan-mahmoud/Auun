import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const [aboutData, setAboutData] = useState(null);
    const [visionData, setVisionData] = useState(null);
    const [missionData, setMissionData] = useState(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        axios.get('https://admin.auun.net/api/about', {
            headers: {
                'lang': i18n.language // Request the current language
            }
        })
            .then(response => {
                if (response.data.status) {
                    setAboutData(response.data.data);
                }
            })
            .catch(error => {
                console.error("Error fetching about data:", error);
            });

        axios.get('https://admin.auun.net/api/vision', {
            headers: {
                'lang': i18n.language // Request the current language
            }
        })
            .then(response => {
                if (response.data.status) {
                    setVisionData(response.data.data);
                }
            })
            .catch(error => {
                console.error("Error fetching vision data:", error);
            });

        axios.get('https://admin.auun.net/api/mission', {
            headers: {
                'lang': i18n.language // Request the current language
            }
        })
            .then(response => {
                if (response.data.status) {
                    setMissionData(response.data.data);
                }
            })
            .catch(error => {
                console.error("Error fetching mission data:", error);
            });
    }, [i18n.language]); // Add i18n.language as a dependency

    return (
        <div className={`aboutUs container ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* About Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="details">
                            <p>{t('about_us')}</p>
                            <h1 className="service-title">
                                {aboutData ? aboutData.title : t('loading')}
                            </h1>
                            <p className="service-description" dangerouslySetInnerHTML={{ __html: aboutData ? aboutData.description : "" }}></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img3">
                            <img src={aboutData ? `https://admin.auun.net/${aboutData.image}` : ""} alt="About Us Illustration" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="details">
                            <p>{t('our_mission')}</p>
                            <h1 className="service-title">
                                {missionData ? missionData.title : t('loading')}
                            </h1>
                            <p className="service-description" dangerouslySetInnerHTML={{ __html: missionData ? missionData.description : "" }}></p>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="service-image">
                            <img src={missionData ? `https://admin.auun.net/${missionData.image}` : ""} alt="Mission Illustration" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6"> 
                        <div className="service-image">
                            <img src={visionData ? `https://admin.auun.net/${visionData.image}` : ""} alt="Vision Illustration" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="details">
                            <p>{t('our_vision')}</p>
                            <h1 className="service-title">
                                {visionData ? visionData.title : t('loading')}
                            </h1>
                            <p className="service-description" dangerouslySetInnerHTML={{ __html: visionData ? visionData.description : "" }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
