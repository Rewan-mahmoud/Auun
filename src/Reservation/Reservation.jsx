import React from 'react';

import governanceImage from '../assest/taxes.png'; // Import the image
import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';

const Reservation = () => {
  return (
    
    <div className="governance-container">
        <div className="mx-auto">
        <div className="governanceImageLayer"></div>
      <div className="governanceImage">
        <img src={governanceImage} alt="Financial Governance" className="governance-image" />
      </div>
      <h3 className="governance-title"> التدقيق الخارجي (المراجعة الخارجية) </h3>
      <p className="governance-description">
      التدقيق الخارجي (المراجعة الخارجية) هي أحد أهم وأكبر الخدمات المهنية التي تقدمها مكتب عون  بالتعاون مع العديد من مكاتب المحاسبه المعتمدة ، يدعمه بذلك نخبة كبيرة من المهنيين والمستشارين والمراجعين المؤهلين وذوي الخبرات الكبيرة والواسعة في المراجعة الخارجية (القوائم المالية) وإبداء الرأي حول القوائم المالية وإعطاء التوصيات المهنية لمنظمات الأعمال بمختلف أنواعها .

لا يتوقف عمل التدقيق الخارجي (المراجعة الخارجية) على إبداء الرأي في القوائم المالية بل نقوم بفحص نظام الرقابة الداخلي ونصدر توصياتنا عن مدى القوة والضعف الرقابة داخل الشركة,كما يتضمن تقريرنا في المراجعة الخارجية (التدقيق الخارجي) على الكثير من التوصيات والملاحظات والاقتراحات لرفع كفاءة وفاعلية العمل لدى الشركات والمنظمات مثل الحد والتقليل من ازدواجية المهام والأعمال وضعف الهيكل الإداري ومدى ملائمته مع الشركة ومدى تناسب المهام والصلاحيات مع الوظائف. 

تتمثل خدماتنا في المراجعة الخارجية تتمثل خدمات التدقيق الخارجي في فحص القوائم المالية التي تعدها المنشأة من قبل مجموعة الكوادر العاملة بها وتقديم تقرير للإدارة عما إذا كانت القوائم المالية تظهر بعدل المركز المالي للمنشأة في نهاية الفترة المراجعة. فريق عمل المراجعة الخارجية لدينا مؤهل تأهيل مهني وعلمي لتفهم المعايير المحاسبة والمراجعة المهنية المستخدمة ومختص للتعرف على أنواع المراجعات المتعارف عليها (على سبيل الحصر):      </p>
     
  <div className="container">
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

    </div>
  );
};

export default Reservation;
