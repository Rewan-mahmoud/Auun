import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';

const SubServiceDetail = () => {
  const { id } = useParams();
  const [subService, setSubService] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the sub service detail data from the API
    fetch('https://admin.auun.net/api/sub_services', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', // Ensure correct content type
        'lang': 'ar' // Assuming the API expects the 'lang' header for Arabic content
      },
      body: JSON.stringify({ service_id: id }) // Adjust according to the API specification
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.status && data.data) {
          setSubService(data.data[0]); // Assuming the data is in an array
        } else {
          throw new Error(data.message || 'Invalid data structure');
        }
      })
      .catch(error => {
        console.error('Error fetching sub service detail:', error);
        setError('The requested service could not be found or the endpoint is incorrect.');
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!subService) {
    return <div>Loading...</div>;
  }

  return (
    <div className="governance-container">
      <div className="mx-auto">
        <div className="governanceImageLayer"></div>
        <div className="governanceImage">
          <img src={`https://admin.auun.net/${subService.image}`} alt={subService.title} className="governance-image" />
        </div>
        <h3 className="governance-title">{subService.title}</h3>
        <p className="governance-description" dangerouslySetInnerHTML={{ __html: subService.description }}></p>
      </div>
      <div className="container governanceForm">
  <div className="contact mb-5">
<div className="form-container">
              <form action="#" method="post">
                <div className="d-flex">
                <div className="col-md-6">
                    <div className="form-group">
                  <label htmlFor="name">الاسم</label>
                  <div className="input-group">
                    <input type="text" id="name" name="name" placeholder="أحمد" required />
                    {/* <span className="icon">👤</span> */}
                  </div>
                </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <div className="input-group">
                    <input type="email" id="email" name="email" placeholder="البريد الإلكتروني" required />
          
                  </div>
                </div>
                    </div>
             
                </div>
           
             <div className="d-flex">
             <div className="col-md-6">
                    <div className="form-group">
                  <label htmlFor="phone">رقم الجوال</label>
                  <div className="input-group">
                    <input type="phone" id="phone" name="phone" placeholder="رقم الجوال" required />
                    {/* <span className="icon">📞</span> */}
                  </div>
                </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                  <label htmlFor="messageType">اسم الشركة </label>
                 <input type="text" placeholder='اسم الشركة' />
                </div>
                    </div>
             </div>
            
              
              
             
                <div className="form-group">
                  <label htmlFor="message">الرسالة</label>
                  <textarea id="message" rows={5}  name="message" placeholder="اكتب هنا"></textarea>
                </div>

<button type="submit">إرسال</button>

              </form>
            </div>
</div>
  </div>
      <div className="fixed-icons">
        <img src={email} alt="Email" className="icon icon1" />
        <img src={call} alt="Phone" className="icon " />
        <img src={whatsapp} alt="WhatsApp" className="icon icon2" />
      </div>
    </div>
  );
};

export default SubServiceDetail;
