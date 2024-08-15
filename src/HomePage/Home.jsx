import React, { useEffect, useState } from 'react';
import SliderComponent from '../Slider/SliderComponent';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import img3 from "../assest/Group 1000007035.png";
import './Home.css';
import vector from '../assest/profile avatar.png';
import phone from '../assest/3.png';
import mail from '../assest/2.png';
import location from '../assest/1.png';
import gif from '../assest/CC5l.gif';
import group from '../assest/Group 295 (1).png';
import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';
import layer from '../assest/Rectangle 219 (1).png';
import ContactForm from '../ContactForm/ContactForm';
import axios from 'axios';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [sliderData, setSliderData] = useState(null);
    const [howServeData, setHowServeData] = useState([]);
    const [faqData, setFaqData] = useState([]);

    useEffect(() => {
        // Fetch the slider data
        fetch('https://admin.auun.net/api/slider', {
            headers: {
                'lang': 'ar' // Request Arabic language
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status && data.data.length > 0) {
                    setSliderData(data.data[0]); // Assuming you want the first slider item
                }
            })
            .catch(error => console.error('Error fetching the slider data:', error));

        // Fetch the how-serve data
        axios.get('https://admin.auun.net/api/howserve', {
          headers: {
              'lang': 'ar' // Request Arabic language
          }
      })
            .then(response => {
                if (response.data.status) {
                    setHowServeData(response.data.data);
                }
            })
            .catch(error => console.error('Error fetching how serve data:', error));

        // Fetch the FAQ data
        axios.get('https://admin.auun.net/api/question', {
          headers: {
              'lang': 'ar' // Request Arabic language
          }
      })
            .then(response => {
                if (response.data.status) {
                    setFaqData(response.data.data);
                }
            })
            .catch(error => console.error('Error fetching FAQ data:', error));
    }, []);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className="background">
                <div className="image-container">
                    {sliderData ? (
                        <img
                            src={`https://admin.auun.net${sliderData.files}`}
                            alt="slider"
                            className="gif-image"
                        />
                    ) : (
                        <img src={gif} alt="gif" className="gif-image" />
                    )}
                    <div className="layer"></div>
                    <div className="overlay-text">
                        <h1>{sliderData ? sliderData.title : 'عون المتميزة'}</h1>
                        <p>
                            {sliderData ? sliderData.description.replace(/<[^>]+>/g, '') : 'تعتبر شركة عون المتميزة شركة رائدة في مجال الاستشارات المالية والادارية وتطوير الاعمال في السوق السعودي وتضم عون فريق من المحترفين الحاصلين علي شهادات علمية ومهنية دولية وخبرات فنية تصل الي اكثر من عشرون عاما'}
                        </p>
                        <button className="more-button">المزيد</button>
                    </div>
                </div>
            </div>

            <SliderComponent />
            <Services />

            <div className="container">
                <div className="row">
                    <div className="service-section"></div>

                    <div className="col-md-6">
                        <div className="details">
                            <p>من نحن</p>

                            <h1 className="service-title">عون المتميزة <br />
                                للاستشارات المالية والاداريه المتكاملة</h1>
                            <p className="service-description">
                                شركة رائدة في مجال الاستشارات المالية والادارية و تطوير الاعمال في السوق السعودي وتضم عون فريق من المحترفين الحاصلين علي شهادات علمية ومهنية دولية وخبرات فنية
                            </p>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img3">
                            <img src={img3} alt="Data Analysis Illustration" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='howWork'>
                <h1 className='title text-center'>
                    كيف تعمل عون ؟
                </h1>

                <h5 className='text-center'>احصل على خدمات الإستشارات المالية والادارية فقط في ٣ خطوات سهلة</h5>
                <div className='text-center'>
                    <img src={group} alt="" />
                </div>
            </div>

            <div className="how-it-works">
                <h2 className="how-it-works-title">كيف يمكنك طلب خدمة من عون؟</h2>
                <div className="steps-container">
                    {howServeData.length > 0 ? (
                        howServeData.map((item, index) => (
                            <div className="step-card" key={item.id}>
                                <div className="step-number">{index + 1}</div>
                                <h3 className="step-title">{item.title}</h3>
                                <p className="step-description" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </div>
                        ))
                    ) : (
                        <p>Loading steps...</p>
                    )}
                </div>
            </div>

            <div className="faq-container">
                <div className="faq-header">الأسئلة المتكررة</div>
                {faqData.length > 0 ? (
                    faqData.map((item, index) => (
                        <div key={item.id} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                {item.question}
                                <span>{activeIndex === index ? '▲' : '▼'}</span>
                            </div>
                            <div className="faq-answer">
                                {item.answer}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading FAQs...</p>
                )}
            </div>

            <div className="contact">
                <ContactForm />
            </div>

            <div className="fixed-icons">
                <img src={email} alt="Email" className="icon icon1" />
                <img src={call} alt="Phone" className="icon" />
                <img src={whatsapp} alt="WhatsApp" className="icon icon2" />
            </div>
        </>
    );
};

export default Home;
