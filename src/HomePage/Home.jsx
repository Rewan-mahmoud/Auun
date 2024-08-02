import React, { useState } from 'react';
import SliderComponent from '../Slider/SliderComponent';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import img3 from "../assest/Group 1000007035.png"
import './Home.css';
import vector from '../assest/profile avatar.png';
import phone from '../assest/3.png';
import mail from '../assest/2.png';
import location from '../assest/1.png';
import gif from '../assest/CC5l.gif';
import group from '../assest/Group 295 (1).png';
import layer from '../assest/Rectangle 219 (1).png';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
  return (
<>
<div className="background">
      <div className="image-container">
        <img src={gif} alt="gif" className="gif-image" />
        <div className="layer"></div>
        <div className="overlay-text">
          <h1>عون المتميزة</h1>
          <p>
            تعتبر شركة عون المتميزة شركة رائدة في مجال الاستشارات المالية والادارية وتطوير الاعمال في السوق السعودي وتضم عون فريق من المحترفين الحاصلين علي شهادات علمية ومهنية دولية وخبرات فنية تصل الي اكثر من عشرون عاما
          </p>
          <button className="more-button">المزيد</button>
        </div>
      </div>
    </div>



<SliderComponent/>
<Services/>

<div className="container">
            <div className="row">
            <div class="service-section">
     
</div>
          
                <div className="col-md-6">
                    <div className="details">
                    <p>من نحن</p>
 
                    <h1 class="service-title">عون المتميزة <br />
                    للاستشارات المالية والاداريه المتكاملة   </h1>
  <p class="service-description">
   شركة رائدة في مجال الاستشارات المالية والادارية و تطوير الاعمال في السوق السعودي وتضم عون فريق من المحترفين الحاصلين علي شهادات علمية ومهنية دولية وخبرات فنية   </p>

                    </div>
      </div>
                <div className="col-md-6"> 
                <div className="img3">
                <img src={img3} alt="Data Analysis Illustration"/>
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
        <img src= {group} alt="" />
        </div>

    </div>
        <div className="how-it-works">
      <h2 className="how-it-works-title">كيف يمكنك طلب خدمة من عون؟</h2>
      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3 className="step-title">سجل حسابك</h3>
          <p className="step-description">
            قم بإنشاء حساب جديد لدينا من أيقونة (إنشاء حساب)
          </p>
        </div>
        <div className="step-card">
          <div className="step-number">2</div>
          <h3 className="step-title">طلب الخدمة</h3>
          <p className="step-description">
            اختيار الخدمة التي ترغب بها قم بالضغط على خانة (خدماتنا) في أعلى الصفحة واختيار الخدمة الأنسب لك وإرسال طلبك
          </p>
        </div>
        <div className="step-card">
          <div className="step-number">3</div>
          <h3 className="step-title">سنتواصل معك</h3>
          <p className="step-description">
            سيتواصل معك مدير الحساب الخاص بك وربطك مع مقدمي الخدمات لاستلام عروض أسعار تنافسية
          </p>
        </div>
      </div>
    </div>

        <div className="faq-container">
            <div className="faq-header">الأسئلة المتكررة</div>
            {[...Array(3)].map((_, index) => (
                <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                     ما هي الخدمات المتاحة على المنصة ؟
                        <span>{activeIndex === index ? '▲' : '▼'}</span>
                    </div>
                    <div className="faq-answer">
                    خدمات المحاسبة والمراجعة خدمات الزكاة وضريبة الدخل خدمات ضريبة القيمة المضافة خدمات المحاسبة ومسك الدفاتر خدمات الاستشارات الإدارية والمالية
                    </div>
                </div>
            ))}
        </div>
        <div className="contact">
 
      <div className="container">
      <h1 className='title'>أرسل رسائلك عبر هذا النموذج</h1>
      <div className="d-flex justify-content-between py-5 formInfo">
          <div className="col-md-6">
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
                <label htmlFor="messageType">نوع الرسالة</label>
                <select id="messageType" name="messageType">
                  <option value="service">طلب خدمة</option>
                  <option value="complaint">شكوى</option>
                </select>
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
          <div className="col-md-6 vector">
              <img src={vector} alt="" />
          </div>
      </div>
      </div>

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
  );
};

export default Home;
