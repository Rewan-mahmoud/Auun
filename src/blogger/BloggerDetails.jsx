import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BloggerDetails = () => {
  const { id } = useParams();
  const [blogg, setBlogg] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://admin.auun.net/api/show_blog/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
        'lang': 'ar' 
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
          setBlogg(data.data); 
        } else {
          throw new Error(data.message || 'Invalid data structure');
        }
      })
      .catch(error => {
        console.error('Error fetching blog detail:', error);
        setError('The requested blog could not be found or the endpoint is incorrect.');
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogg) {
    return <div>Loading...</div>;
  }

  return (
    <div className="governance-container">
      <div className="financial-consultation">
        <div className="content-container">
        <div className="image-container">
          <img src={`https://admin.auun.net/${blogg.image}`} alt={blogg.title} />
        </div>
          <h2 className="service-title">{blogg.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: blogg.description }}></p>
        </div>
        
      </div>

      <div className="container governance">
        <h2 className="text-center title">أرسل رسائلك عبر هذا النموذج</h2>
        <div className="contact mb-5">
          <div className="form-container">
            <form action="#" method="post">
              <div className="d-flex">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">الاسم</label>
                    <div className="input-group">
                      <input type="text" id="name" name="name" placeholder="أحمد" required />
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
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="messageType">اسم الشركة</label>
                    <input type="text" placeholder='اسم الشركة' />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea id="message" rows={5} name="message" placeholder="اكتب هنا"></textarea>
              </div>
              <button type="submit">إرسال</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloggerDetails;
