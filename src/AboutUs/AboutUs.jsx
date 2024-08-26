import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import './AboutUs.css';


const AboutUs = () => {
    const [aboutData, setAboutData] = useState(null);
    const [visionData, setVisionData] = useState(null);
    const [missionData, setMissionData] = useState(null);

    useEffect(() => {
  
        axios.get('https://admin.auun.net/api/about' , {
            headers: {
                'lang': 'ar' // Request Arabic language
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

   
        axios.get('https://admin.auun.net/api/vision'
            , {
                headers: {
                    'lang': 'ar' // Request Arabic language
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
                'lang': 'ar' // Request Arabic language
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
    }, []);

    return (
        <div className="aboutUs">
            {/* About Section */}
            <div className="container">
                <div className="row">
                    <div className="service-section"></div>
                    <div className="col-md-6">
                        <div className="details">
                            <p>من نحن</p>
                            <h1 className="service-title">
                                {aboutData ? aboutData.title : "Loading..."}
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
                    <div className="service-section">
                        <p>رسالتنا</p>
                        <h1 className="service-title">
                            {missionData ? missionData.title : "Loading..."}
                        </h1>
        <p>نقوم باستخدام احدث الاساليب و الحلول التقنية والمهنية في تقديم الخدمات الفاعلة في مجالنا</p>                    </div>
                    <div className="col-md-7">
                        <div className="details">
                        <p className="service-description" dangerouslySetInnerHTML={{ __html: missionData ? missionData.description : "" }}></p>
                        </div>
                    </div>
                    <div className="col-md-3"> 
                        <div className="service-image">
                            <img src={missionData ? `https://admin.auun.net/${missionData.image}` : ""} alt="Mission Illustration" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="container">
                <div className="row">
                    <div className="service-section">
                        <p>رؤيتنا</p>
                        <h1 className="service-title">
                            {visionData ? visionData.title : "Loading..."}
                        </h1>
                    </div>
                    <div className="col-md-6"> 
                        <div className="service-image">
                            <img src={visionData ? `https://admin.auun.net/${visionData.image}` : ""} alt="Vision Illustration" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="details">
                            <p className="service-description"  dangerouslySetInnerHTML={{ __html: visionData ? visionData.description : "" }}></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Icons */}
       
        </div>
    );
}

export default AboutUs;
