import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import Footer from './footer/Footer';
import Contact from './Contact/Contact';
import OfferPrice from './OfferPrice/OfferPrice';
import AboutUs from './AboutUs/AboutUs';
import Home from './HomePage/Home';
import Blogger from './blogger/Blogger';
import SubServices from './SubServices/SubServices';
import FinancialGovernance from './FinancialGovernance/FinancialGovernance ';
import Fainancial from './Fainancial/Financial';
import Reservation from './Reservation/Reservation';
import Consulting from './Consulting/Consulting';
import SpecialistConsulting from './SpecialistConsulting/SpecialistConsulting';
import Filtring from './Filtring/Filtring';
import Managment from './Managment/Managment';
function App() {
  return (
    <Router>
    <Navbar />
    {<Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="Services" element={<Services />} />
      <Route path="/Blogger" element={<Blogger />} /> 
      <Route path="/Contact" element={<Contact />} />
      <Route path="/OfferPrice" element={<OfferPrice />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/SubServices" element={<SubServices />} />
      <Route path="/FinancialGovernance" element={<FinancialGovernance />} /> 
      <Route path="/Fainancial" element={<Fainancial />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/Consulting" element={<Consulting />} />
      <Route path="/SpecialistConsulting" element={<SpecialistConsulting />} />
      <Route path="/Filtring" element={<Filtring />} />
      <Route path="/Managment" element={<Managment />} />
    

    </Routes> }
    <Footer />
  </Router>
  );
}

export default App;
