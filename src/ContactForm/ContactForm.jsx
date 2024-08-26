import React, { useState, useEffect } from 'react';
import vector from '../assest/profile avatar.png';

const ContactForm = () => {
  const [messageTypes, setMessageTypes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mestype: '',  // Changed from messageType to mestype
    mes: ''       // Changed from message to mes
  });

  useEffect(() => {
    // Fetch message types from the API with Arabic language preference
    fetch('https://admin.auun.net/api/message_type', {
      headers: {
        'lang': 'ar' // Request Arabic language
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status && data.data) {
          setMessageTypes(data.data);
        }
      })
      .catch(error => console.error('Error fetching message types:', error));
  }, []);

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
        mestype: formData.mestype, // This now matches the key expected by the API
        mes: formData.mes,         // This now matches the key expected by the API
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          alert('تم إرسال الرسالة بنجاح!');
        } else {
          alert('حدث خطأ أثناء إرسال الرسالة.');
        }
      })
      .catch(error => {
        console.error('Error sending message:', error);
        alert('حدث خطأ أثناء إرسال الرسالة.');
      });
  };

  return (
    <div className="container">
      <h1 className='title'>أرسل رسائلك عبر هذا النموذج</h1>
      <div className="row justify-content-between py-5 formInfo">
        <div className="col-md-6">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="d-flex">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">الاسم</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="أحمد"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">البريد الإلكتروني</label>
                    <div className="input-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="البريد الإلكتروني"
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
                    <label htmlFor="phone">رقم الجوال</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="رقم الجوال"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="mestype">نوع الرسالة</label> {/* Updated name attribute */}
                    <select
                      id="mestype"
                      name="mestype"  // Updated name attribute
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
                        <option value="">تحميل...</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mes">الرسالة</label> {/* Updated name attribute */}
                <textarea
                  id="mes"  // Updated id attribute
                  rows={5}
                  name="mes"  // Updated name attribute
                  placeholder="اكتب هنا"
                  value={formData.mes}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">إرسال</button>
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
