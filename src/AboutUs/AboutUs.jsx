import img from "../assest/bussiness.png"
import img2 from "../assest/pngegg 1.png"
import img3 from "../assest/Group 1000007035.png"
import img4 from "../assest/image 1.png"
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
        <div className="aboutUs">
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
        <div className="container">
            <div className="row">
            <div class="service-section">
                <p>رسالتنا</p>
   <h1 class="service-title">تقديم الخدمات بأحدث الوسائل</h1>
  <p class="service-description">
    نقوم باستخدام أحدث الأساليب و الحلول التقنية و المهنية في تقديم الخدمات الفاعلة في مجالنا
  </p>
</div>
          
                <div className="col-md-7">
                    <div className="details">
                    <p>مساعدة متخذي القرار للوصول الي افضل وسائل ادارة السيولة وتعظيم الربحية وادارة المخاطة باستخدام احدث التقنيات تقديم خدمات استشارية مالية وادارية مميزة بمعايير دولية</p>

                    </div>
      </div>
                <div className="col-md-3"> 
                <div class="service-image">
                <img src={img} alt="Data Analysis Illustration"/>
                </div>
                </div>
            </div>
        
        </div>
        </div>
        <div className="container">
            <div className="row">
            <div class="service-section">
                <p>رؤيتنا</p>
   <h1 class="service-title">  المرجع الاول للمستثمرين في تقديم
<br /> الاستشارات

</h1>
  
</div>
<div className="col-md-6"> 
                <div class="service-image">
                <img src={img2} alt="Data Analysis Illustration"/>
                </div>
                </div>
          
                <div className="col-md-6">
                    <div className="details">
<p>ان نكون نموذجا رائدا في مجال الاستشارات المالية و الادارية وان نكون المرجع الاول للمستثمرين في تقديم الاستشارات المالية والادارية ووضع خطط الرقابة والمراجعة الداخلية والخارجية ورسم ووضع الخطط المستقبلية </p>
                    </div>
                   </div>
              
            </div>
        
        </div>
        <div className="container">
            <div className="row">
            <div class="service-section">
                <p>الشهادات</p>
   <h1 class="service-title">  شهادة جدير من منصه منشاءات  <br />التابعه لوزارة التجاريه
   <div className="certificate">
   <img  src={img4} alt="" />

   </div>
</h1>
  
</div>

            </div>
        
        </div>

    
        
             
            </>
    )
}

export default AboutUs;
