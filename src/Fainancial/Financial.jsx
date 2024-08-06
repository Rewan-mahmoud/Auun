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
      <h3 className="governance-title"> اعداد القوائم الماليه ( الميزانيات )  </h3>
      <p className="governance-description">
      تعتبر الخبرة والمعرفة أساس لاحتساب الزكاة والضريبة ومن هذا المنطلق تمكنا من إنشاء جهاز مستقل مزود بأفضل الخبرات في هذا المجال لديه المعرفة الكافية وبما تقتضيه الأنظمة في مصلحة الزكاة والدخل، إضافة إلى أخذ الاعتبار أن سرعة حصول عملائنا على شهادة الزكاة هي أحد أولوياتنا حيث نحصل عليها في أوقات قياسية. تتطلع شركتنا بأن تكون الرائدة في إنهاء الإجراءات المتعلقة بالزكاة وضريبة الدخل لدى الجهات المختصة، لمعرفتنا العميقة بكافة المتطلبات اللازمة لإنهاء وضع المكلف     
      </p>
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
  <div class="fixed-icons">
    <img src={email} alt="Email" class="icon icon1" />
    <img src={call} alt="Phone" class="icon " />
    <img src={whatsapp} alt="WhatsApp" class="icon icon2" />
</div>
    </div>
  );
};

export default Fainancial;
