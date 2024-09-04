import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SubServiceDetail = () => {
  const { id } = useParams();
  const [subService, setSubService] = useState(null);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Fetch the sub service detail data from the API
    fetch(`https://admin.auun.net/api/show_sub_service/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', // Ensure correct content type
        'lang': i18n.language // Set the current language
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.status && data.data) {
          setSubService(data.data); // Assuming data is an object containing the sub-service details
        } else {
          throw new Error(data.message || 'Invalid data structure');
        }
      })
      .catch(error => {
        console.error('Error fetching sub service detail:', error);
        setError(t('error_message'));
      });
  }, [id, i18n.language]); // Add i18n.language as a dependency

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!subService) {
    return <div>{t('loading')}</div>;
  }

  return (
    <div className="governance-container">
      <div className="financial-consultation">
      <div className="image-container">
          <img src={`https://admin.auun.net/${subService.image}`} alt={subService.title} />
        </div>
        <div className="content-container">
          
          <h2 className="service-title">{subService.title}</h2>
          <p className="" dangerouslySetInnerHTML={{ __html: subService.description }}></p>
        </div>
      
      </div>

      <div className="container governance">
        <h2 className="text-center title">{t('send_message_form')}</h2>
        <div className="contact mb-5">
          <div className="form-container">
            <form action="#" method="post">
              <div className="d-flex">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">{t('name')}</label>
                    <div className="input-group">
                      <input type="text" id="name" name="name" placeholder={t('name')} required />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">{t('email')}</label>
                    <div className="input-group">
                      <input type="email" id="email" name="email" placeholder={t('email')} required />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone">{t('phone')}</label>
                    <div className="input-group">
                      <input type="phone" id="phone" name="phone" placeholder={t('phone')} required />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="companyName">{t('company_name')}</label>
                    <input type="text" id="companyName" name="companyName" placeholder={t('company_name')} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('message')}</label>
                <textarea id="message" rows={5} name="message" placeholder={t('message')}></textarea>
              </div>
              <button type="submit">{t('submit_button')}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServiceDetail;
