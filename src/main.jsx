import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import AboutPage from './AboutPage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Carousel/>
    <AboutPage/>
  </React.StrictMode>,
)
