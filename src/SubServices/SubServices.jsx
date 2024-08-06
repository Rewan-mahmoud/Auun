
import React from 'react';
import './SubServices.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import email from '../assest/Component 53.svg';
import whatsapp from '../assest/Component 54.svg';
import call from '../assest/Component 55.svg';

const cardsData = [
  {
    id: 1,
    text: "الزكاة والضريبة",
    title: 'قوم بتقديم المشوره اللازمة بتقديم الإقرارات الزكوية والضريبية و الرد علي ملاحظات الهيئة الضريبية',
    buttonText: "المزيد",
    link: "/FinancialGovernance" 
  },
  {
    id: 2,
    text: "اعداد القوائم الماليه",
    title: 'نقوم بفحص القوئم المالية بالمعايير المحاسبية المعتمدة من الهيئة السعودية للمحاسبين القانونونين',
    buttonText: "المزيد",
    link: "/Fainancial" 
  },
  {
    id: 3,
    text: " مراجعة الداخليه والخارجية",
    title: 'من المتطلبات الرئيسة لكل من الشركاء وهيئة الزكاة والدخل ووزارة التجارة والصناعه والبنوك …..الخ',
    buttonText: "المزيد",
    link: "/Reservation" 
  },
  {
    id: 4,
    text: "استشارات",
    title: 'نقوم بعمل استشارات مالية وادارية متخصصة لمساعدة الشركات في الاستمرار والتطور',
    buttonText: "المزيد",
    link: "/Consulting" 
  },
  {
    id: 5,
    text: "تصفية الشركات",
    title: 'مهمة تأسيس وتصفية الشركات يجب أن تُنسب إلى جهات مختصة ولها معرفة عالية بالقوانين واللوائح',
    buttonText: "المزيد",
    link: "/Filtring" 
  },
  {
    id: 6,
    text: "ادارة الدفاتر المحاسبية"   ,
    title: 'تأسيس الحسابات على اساس سليم يطور ويفيد المنشأه في الحصول على دفاتر سليمة وتقارير مناسبة ',
    buttonText: "المزيد",
    link: "/Managment"
  },
  {
    id: 7,
    text: "الاستشارات المالية المتخصصة"   ,
    title: 'تبدأ باحتياجات العميل نساعده على تطوير عمله، نراجع معه موقفه المالي وهيكل الشركة التنظيمي  ',
    buttonText: "المزيد",
    link: "/SpecialistConsulting" 
  }
];

const SubServices = () => {
    return (
        <div className="container">
          <h3 className="title">الاستشارات المالية المتكاملة</h3>
          <p className="description mb-5">يتكون فريق عملنا من مجموعة كبري من المحاسبين والمستشارين والمهنين المتخصصين في المجالي المالي والإداري</p>
          <div className="serviceCardContainer">
            {cardsData.map(card => (
              <div key={card.id} className="serviceCard">
                <h5 className="serviceCard-text">{card.text}</h5>
                <p className="serviceCard-title">{card.title}</p>
              <Link to={card.link}><button className="serviceCard-button">{card.buttonText}</button></Link>  
              </div>
            ))}
          </div>
          <div class="fixed-icons">
    <img src={email} alt="Email" class="icon icon1" />
    <img src={call} alt="Phone" class="icon " />
    <img src={whatsapp} alt="WhatsApp" class="icon icon2" />
</div>
        </div>

      );
};

export default SubServices;
