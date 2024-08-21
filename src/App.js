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
import SubServiceDetail from './SubServiceDetail/SubServiceDetail';
import Reservation from './Reservation/Reservation';
import ContactForm from './ContactForm/ContactForm';
import FixedIcons from './FixedIcons/FixedIcons';
function App() {
  return (
    <>
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
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/ContactForm" element={<ContactForm />} />
      <Route path="/ServiceDetail/:id" element={<SubServiceDetail />} />
      <Route path="/SubServices/:serviceId" element={<SubServices />} />
    

    </Routes> }
    <Footer />
  </Router>
  <FixedIcons/>
    </>
  
  );
}

export default App;