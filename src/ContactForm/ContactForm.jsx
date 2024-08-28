import React, { useState, useEffect } from 'react';
import vector from '../assest/profile avatar.png';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const [messageTypes, setMessageTypes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mestype: '',
    mes: ''
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Fetch message types from the API with the current language preference
    fetch('https://admin.auun.net/api/message_type', {
      headers: {
        'lang': i18n.language // Set the current language
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status && data.data) {
          setMessageTypes(data.data);
        }
      })
      .catch(error => console.error('Error fetching message types:', error));
  }, [i18n.language]); // Add i18n.language as a dependency

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the API
    fetch('https://admin.auun.net/api/add_contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        mestype: formData.mestype,
        mes: formData.mes,
      })
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
        console.error('Error sending message:', error);
        alert(t('error_message'));
      });
  };

  return (
    <div className="container">
      <h1 className='title'>{t('send_message_form')}</h1>
      <div className="row justify-content-between py-5 formInfo">
        <div className="col-md-6">
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
                  <div className="form-group">
                    <label htmlFor="mestype">{t('message_type')}</label>
                    <select
                      id="mestype"
                      name="mestype"
                      value={formData.mestype}
                      onChange={handleChange}
                      required
                      dir="rtl"
                    >
                      {messageTypes.length > 0 ? (
                        messageTypes.map(type => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))
                      ) : (
                        <option value="">{t('loading')}</option>
                      )}
                    </select>
                  </div>
                </div>
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
              <button type="submit">{t('submit_button')}</button>
            </form>
          </div>
        </div>
        <div className="col-md-6 vector">
          <img src={vector} alt="vector" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
