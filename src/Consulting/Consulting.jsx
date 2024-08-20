import React from 'react';
import governanceImage from '../assest/taxes.png'; // Import the image
import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';

const Fainancial = () => {
  return (
    
    <div className="governance-container">
        <div className="mx-auto">
        <div className="governanceImageLayer"></div>
      <div className="governanceImage">
        <img src={governanceImage} alt="Financial Governance" className="governance-image" />
      </div>
      <h3 className="governance-title">  الاستشارات المالية المحاسبية  </h3>
      <p className="governance-description">
      نحن في مكتب عون وبالتعاون مع العديد من مكاتب المحاسبه المعتمدة نحرص على إمداد وتزويد عملائنا بالخدمات والتوصيات الإستشارية التي تمتاز بالكفاءة والجودة والمهنية العالية والخبرات المتراكمة منذ أعوام عندنا مستشارونا الماليين والإداريين الذين يعملون على تزويد العملاء بمختلف أنواع الخدمات المهنية منها الإستشارية والمالية المتخصصة ونبرز في مجالات متعددة مختلفة       </p>
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
  </div>

    </div>
  );
};

export default Fainancial;
