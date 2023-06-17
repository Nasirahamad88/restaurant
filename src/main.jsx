import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import AboutPage from './AboutPage.jsx';
import Nasir from './Nasir.jsx';
// import CardGroups from './CardGroups.jsx';
import MenuSection from './MenuSection.jsx';
// import Map from './Map.jsx';
import ContactSection from './ContactSection.jsx';
import Footer from './Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Carousel/>
    <AboutPage/>
    <Nasir/>
    
    <MenuSection/>
    {/* <Map/> */}
    <ContactSection/>
    <Footer/>
  </React.StrictMode>,
)
