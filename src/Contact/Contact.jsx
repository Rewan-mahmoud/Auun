import React from 'react';
import background from '../assest/background.png';
import overlay from '../assest/objects.png';
import vector from '../assest/profile avatar.png';
import phone from '../assest/3.png';
import mail from '../assest/2.png';
import location from '../assest/1.png';
import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';

import './contact.css';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <>
    <div className="contact">
  
    <div className='ContactUs'>

            <div className='image-container'>
                <img src={background} alt="Background" />
                <div className='overlay'>    <img src={overlay} alt="Background" /></div> 
                <div className='titles'>
                    <h1>تواصل معنا</h1>
                    <p>تواصل معنا من خلال النموذج او عبر وسائل التواصل الظاهره نحن بخدمتكم</p>
                </div>
            </div>
      

        </div>
     <ContactForm/>

        <div className="container text-center info mb-5">
        <div className="row">
          <div className="col-md-4">
          <div className="phone-contact">
        <div className="phone-icon">
        <img src={phone} alt="Phone Icon" />
      </div>
      <div className="phone-info">
        <h2>الهاتف</h2>
        <p>0544923333</p>
      </div>
     
    </div>
          </div>
          <div className="col-md-4">
          <div className="phone-contact">
        <div className="phone-icon">
        <img src={mail} alt="Phone Icon" />
      </div>
      <div className="phone-info">
        <h2>البريد الإلكتروني</h2>
        <p>info@auun.net</p>
      </div>
     
    </div>
          </div>
          <div className="col-md-4">
          <div className="phone-contact">
        <div className="phone-icon">
        <img src={location} alt="Phone Icon" />
      </div>
      <div className="phone-info">
        <h2>العنوان</h2>
        <p>جدة – حي البوادي</p>
      </div>
     
    </div>
          </div>
        </div>
        </div>
        <div className="map-container map text-center mb-5">
      <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2085674.3596422914!2d43.350693829035926!3d23.88594289122369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155eebcd95fd30b9%3A0x7ff7e9a9a2c2e833!2sSaudi%20Arabia!5e0!3m2!1sen!2sus!4v1690721966400!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Saudi Arabia Map"
      ></iframe>
  </div>

    </div>
    
        
             
            </>
    )
}

export default Contact;
