import React from 'react';
import './Services.css';
import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';

import { Link } from 'react-router-dom';
const Services = () => {
  const cardData = [
    {
      title: "تطوير الاعمال والتخطيط الاستراتيجي",
      description: "تقدم خدمة التخطيط الاستراتيجي الرؤية والتوجيه للشركات من خلال وضع استراتيجيات طويلة الأجل تساعد على تحقيق الأهداف المحددة",
      buttonText: "المزيد",
    },
    {
      title: "الاستشارات الادارية المتكاملة",
      description:"تهدف هذه الخدمة إلى تعزيز قدرات القادة والمديرين في اتخاذ القرارات الاستراتيجية، وتنسيق الفرق، وتحفيز الموظفين، وتطوير ثقافة عمل إيجابية.", 
      buttonText: "المزيد",
    },
    {
      title: "الاستشارات المالية المتكاملة",
      description:" هي كافة الخدمات التي يقدمها مستشار ضريبة القيمة المضافة والمستشار الزكوي والمحاسب القانوني والتي تشمل إعداد ومراجعة الاقرارات الضريبية (الشهرية)",

      buttonText: "المزيد",
    },
    {
      title: "خدمات مع شركائنا",
      description: " نظرا لرغبتنا فى تقديم خدمات متكامله لعملائنا وتوحيد منصه تقديم الخدمات لعملائنا نقوم بالتعاون مع شركائنا بتقديم الخدمات  ",
      buttonText: "المزيد",
    },
    {
      title: "الحلول التقنية والبرامج المحاسبية",
      description: "هي كافة الخدمات التي يقدمها مستشار ضريبة القيمة المضافة والمستشار الزكوي والمحاسب القانوني والتي تشمل إعداد ومراجعة الاقرارات الضريبية (الشهرية)",
      buttonText: "المزيد",
    },
    {
      title: "ESG الحوكمة",
      description: "تتعلق الحوكمة بإدارة الشركات والمؤسسات بطريقة فعالة ومسؤولة",
      buttonText: "المزيد",
    },
    {
      title: "رخصة الاستثمار",
      description: " ترغب في التحويل الى مستثمر داخل المملكة العربية السعودية و تواجه الصعوبات والمشاكل فى ذلك الحل لدينا هدفنا هو سرعة انهاء الاجراءات  و تسهيل العقبات أمامك وتسليمك جميع الأوراق الرسمية الخاصة بشركتك حسب الفئة التى تختارها بدون مجهود منك ودون عناء   ",
      buttonText: "المزيد",
    },
    {
      title: "الخدمات المساندة",
      description: "نقوم بتقديم العديد من الخدمات اللازمة والضرورية للمحافظة على الشركات الناشئة وتنميتها ومساعدة الملاك ومتخذي القرار داخل هذه الشركات على العمل في السوق مع مراعاة الالتزام بكافة القوانيين والتعليمات الضريبية او التجارية أو القانونية ",
      buttonText: "المزيد",
    }
  ];

  return (
 <div div className='Services'>
 <h1 className='title serviceTitle text-center'>خدماتنا</h1>
 <p className='text-center mb-5'>نظرا لرغبتنا فى تقديم خدمات متكامله لعملائنا وتوحيد منصه تقديم الخدمات لعملائنا نقوم بالتعاون مع شركائنا بتقديم الخدمات التاليه</p>
 <div className="card-grid">
    
    {cardData.map((card, index) => (
      <div className="card" key={index}>
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
       <Link to="/SubServices"> <button  className="card-button">{card.buttonText}</button></Link>
 
      </div>
    ))}
   <div class="fixed-icons">
    <img src={email} alt="Email" class="icon icon1" />
    <img src={call} alt="Phone" class="icon " />
    <img src={whatsapp} alt="WhatsApp" class="icon icon2" />
</div>
  </div>

 </div>
 
  );
};

export default Services;
