import React, { useEffect, useState } from 'react';
import SliderComponent from '../Slider/SliderComponent';
import Services from '../Services/Services';
import img3 from "../assest/Group 1000007035.png";
import './Home.css';
import group from '../assest/Group 295 (1).png';
import ContactForm from '../ContactForm/ContactForm';
import axios from 'axios';


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [sliderData, setSliderData] = useState(null);
    const [howServeData, setHowServeData] = useState([]);
    const [faqData, setFaqData] = useState([]);
    const [aboutData, setAboutData] = useState(null);
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
                    setSliderData(data.data[0]); 
                }
            })
            .catch(error => console.error('Error fetching the slider data:', error));

    
        axios.get('https://admin.auun.net/api/howserve', {
          headers: {
              'lang': 'ar' 
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
              'lang': 'ar'
          }
      })
            .then(response => {
                if (response.data.status) {
                    setFaqData(response.data.data);
                }
            })
            .catch(error => console.error('Error fetching FAQ data:', error));
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
    }, []);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className="background">
                <div className="image-container">
                {sliderData && (
    <video
        src={`https://admin.auun.net${sliderData.files}`}
        autoPlay
        loop
        muted
        className="gif-image"
    />
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

               {/* About Section */}
               <div className="container">
                <div className="row ">
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
            <div className="container">
            <div className='howWork'>
                <h1 className='title text-center'>
                    كيف تعمل عون ؟
                </h1>

                <h5 className='text-center'>احصل على خدمات الإستشارات المالية والادارية فقط في ٣ خطوات سهلة</h5>
                <div className='text-center'>
                    <img src={group} alt="" />
                </div>
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
                <div className="faq-header">الأسئلة الشائعة</div>
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


        </>
    );
};

export default Home;
