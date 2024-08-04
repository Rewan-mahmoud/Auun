import React from 'react';
import './Blogger.css';
import group from "../assest/7.jpg";
import imgCard from "../assest/cardimg.jpeg";
import circle from "../assest/Ellipse 1.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Card from '../Cards/CardContainer';

const Blogger = () => {
  const cardData = [
    {
      imgSrc: imgCard,
      circleSrc: circle,
      title: 'الاستشارات المالية كيفيتها وعلاقتها بلحوكمة ...',
      date: '22/3/2024',
      text: 'الاستشارات المالية لها علاقة كبيرة بالاموال والاستشارات هي كافة الخدمات التي يقدمها مستشار ضريبة القيمة المضافة والمستشار الزكوي والمحاسب القانوني والتي تشمل إعداد ومراجعة الاقرارات الضريبية .',
    },
    {
      imgSrc: imgCard,
      circleSrc: circle,
      title: 'الاستشارات المالية كيفيتها وعلاقتها بلحوكمة ...',
      date: '22/3/2024',
      text: 'الاستشارات المالية لها علاقة كبيرة بالاموال والاستشارات هي كافة الخدمات التي يقدمها مستشار ضريبة القيمة المضافة والمستشار الزكوي والمحاسب القانوني والتي تشمل إعداد ومراجعة الاقرارات الضريبية .',
    },
    {
      imgSrc: imgCard,
      circleSrc: circle,
      title: 'الاستشارات المالية كيفيتها وعلاقتها بلحوكمة ...',
      date: '22/3/2024',
      text: 'الاستشارات المالية لها علاقة كبيرة بالاموال والاستشارات هي كافة الخدمات التي يقدمها مستشار ضريبة القيمة المضافة والمستشار الزكوي والمحاسب القانوني والتي تشمل إعداد ومراجعة الاقرارات الضريبية .',
    },
    {
      imgSrc: imgCard,
      circleSrc: circle,
      title: 'الاستشارات المالية كيفيتها وعلاقتها بلحوكمة ...',
      date: '22/3/2024',
      text: 'الاستشارات المالية لها علاقة كبيرة بالاموال والاستشارات هي كافة الخدمات التي يقدمها مستشار ضريبة القيمة المضافة والمستشار الزكوي والمحاسب القانوني والتي تشمل إعداد ومراجعة الاقرارات الضريبية .',
    },
    {
      imgSrc: imgCard,
      circleSrc: circle,
      title: 'الاستشارات المالية كيفيتها وعلاقتها بلحوكمة ...',
      date: '22/3/2024',
      text: 'الاستشارات المالية لها علاقة كبيرة بالاموال والاستشارات هي كافة الخدمات التي يقدمها مستشار ضريبة القيمة المضافة والمستشار الزكوي والمحاسب القانوني والتي تشمل إعداد ومراجعة الاقرارات الضريبية .',
    },
    {
      imgSrc: imgCard,
      circleSrc: circle,
      title: 'الاستشارات المالية كيفيتها وعلاقتها بلحوكمة ...',
      date: '22/3/2024',
      text: 'الاستشارات المالية لها علاقة كبيرة بالاموال والاستشارات هي كافة الخدمات التي يقدمها مستشار ضريبة القيمة المضافة والمستشار الزكوي والمحاسب القانوني والتي تشمل إعداد ومراجعة الاقرارات الضريبية .',
    },

  ];

  return (
    <>
      <div className="background blogger">
        <img src={group} alt="gif" />
        <div className="overlayy-text">
          <h1>مدونة عون المتميزة</h1>
          <div className="relative bg-gray-900 flex items-center justify-center h-screen">
            <div className="input-with-icon">
              <input
                className="form-control mr-sm-2 pl-4 pr-10 py-2 rounded-full bg-gray-900 text-gray-200 border border-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="search"
                placeholder="ابحث"
                aria-label="Search"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none"
              />
            </div>
            <ul className="nav justify-content-center blogger">
              <li className="nav-item">
                <a className="nav-link active" href="#">الاستشارات المالية</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">الاستشارات الادارية</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">تطوير الاعمال</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">الحوكمة</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">الحلول التقنية</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container cardContainer">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-6 cardGap " key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogger;
