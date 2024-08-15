import React, { useEffect, useState } from 'react';
import background from '../assest/background.png';
import overlay from '../assest/objects.png';
import vector from '../assest/profile avatar.png';
import phone from '../assest/3.png';
import mail from '../assest/2.png';
import location from '../assest/1.png';

const OfferPrice = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        messageType: '',
        message: ''
    });

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
                    alert('تم إرسال طلب عرض السعر بنجاح!');
                } else {
                    alert('حدث خطأ أثناء إرسال طلب عرض السعر.');
                }
            })
            .catch(error => {
                console.error('Error sending price offer:', error);
                alert('حدث خطأ أثناء إرسال طلب عرض السعر.');
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
                            <h1>أحصل على عرض السعر</h1>
                            <p>تواصل معنا من خلال النموذج أو عبر وسائل التواصل الظاهرة نحن بخدمتكم</p>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <h1 className='text-center title'>أرسل طلبك عبر هذا النموذج</h1>
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
                                    <label htmlFor="company_name">اسم الشركة</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            id="company_name"
                                            name="company_name"
                                            placeholder="اسم الشركة"
                                            value={formData.company_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="messageType">الخدمات</label>
                               <input type="text" />
                            </div>
                  
                            <div className="form-group">
                                <label htmlFor="message">الرسالة</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    name="mes"
                                    placeholder="اكتب هنا"
                                  
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button className='pricebutton' type="submit">إرسال</button>
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
                                    <h2>الهاتف</h2>
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
                                    <h2>البريد الإلكتروني</h2>
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
                                    <h2>العنوان</h2>
                                    <p>جدة – حي البوادي</p>
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
