import React, { useState } from 'react';
import background from '../assest/background.png';
import overlay from '../assest/objects.png';
import phone from '../assest/3.png';
import mail from '../assest/2.png';
import location from '../assest/1.png';
import { useTranslation } from 'react-i18next';

const OfferPrice = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    service_id: '',
    mes: ''
  });
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the API
    fetch('https://admin.auun.net/api/add_priceoffer', {
      method: 'POST',
      body: new FormData(e.target) // Automatically appends all form fields
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          alert(t('success_message'));
        } else {
          alert(t('error_message'));
        }
      })
      .catch(error => {
        console.error('Error sending price offer:', error);
        alert(t('error_message'));
      });
  };

  return (
    <>
      <div className="contact">
        <div className='ContactUs'>
          <div className='image-container'>
            <img src={background} alt="Background" />
            <div className='overlay'>
              <img src={overlay} alt="Overlay" />
            </div>
            <div className='titles'>
              <h1>{t('get_price_offer')}</h1>
              <p>{t('contact_description')}</p>
            </div>
          </div>
        </div>
        <div className="container priceOfferForm mb-5">
          <h1 className='text-center title'>{t('send_request_form')}</h1>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="d-flex">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">{t('name')}</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder={t('name')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">{t('email')}</label>
                    <div className="input-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t('email')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone">{t('phone')}</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder={t('phone')}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="company_name">{t('company_name')}</label>
                  <div className="input-group">
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      placeholder={t('company_name')}
                      value={formData.company_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service_id">{t('services')}</label>
                <select
                  id="service_id"
                  name="service_id"
                  value={formData.service_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('select_service')}</option>
                  <option value="1">{t('financial_consulting')}</option>
                  <option value="2">{t('administrative_consulting')}</option>
                  <option value="3">{t('investor_services')}</option>
                  <option value="4">{t('technical_solutions')}</option>
                  <option value="5">{t('business_development')}</option>
                  <option value="6">{t('partner_services')}</option>
                  <option value="7">{t('governance')}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mes">{t('message')}</label>
                <textarea
                  id="mes"
                  rows={5}
                  name="mes"
                  placeholder={t('message')}
                  value={formData.mes}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button className='pricebutton' type="submit">{t('submit_button')}</button>
            </form>
          </div>
        </div>
        <div className="container info text-center my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="phone-contact">
                <div className="phone-icon">
                  <img src={phone} alt="Phone Icon" />
                </div>
                <div className="phone-info">
                  <h2>{t('phone_label')}</h2>
                  <p>0544923333</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="phone-contact">
                <div className="phone-icon">
                  <img src={mail} alt="Mail Icon" />
                </div>
                <div className="phone-info">
                  <h2>{t('email_label')}</h2>
                  <p>info@auun.net</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="phone-contact">
                <div className="phone-icon">
                  <img src={location} alt="Location Icon" />
                </div>
                <div className="phone-info">
                  <h2>{t('address_label')}</h2>
                  <p>{t('location')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-container map text-center my-5">
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
  );
}

export default OfferPrice;
