import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage1 from './assets/images/about-thumb-01.jpg';
import aboutImage2 from './assets/images/about-thumb-02.jpg';
import aboutImage3 from './assets/images/about-thumb-03.jpg';

const AboutPage = () => {
  return (
    <div className="about-page my-5 p-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="about-text">
              <h2>About Us</h2>
              <h4>Welcome to South Star Restaurant!</h4>
              <p>Indulge in a culinary journey like no other at South Star Restaurant. With a wide range of services and offerings, we strive to provide an unforgettable dining experience for every guest.</p>
              <p>Whether you're looking for a quick bite on-the-go or prefer to savor your meal in a relaxed ambiance, we have you covered. Our restaurant offers three convenient dining options to suit your preferences: Takeaway, Dine-in, and Solo Dining. You can enjoy our delectable dishes at your convenience, or immerse yourself in the inviting atmosphere of our cozy restaurant.</p>
              <p>South Star Restaurant is renowned for its mouthwatering lunch and dinner options. From our comforting comfort food to our delectable small plates, every dish is crafted with the finest ingredients and utmost care. Our menu caters to all tastes, making it perfect for a family outing, a casual dinner with friends, or even a solo dining experience.</p>
              <p>
              We believe in inclusivity, which is why our establishment is wheelchair-accessible, ensuring everyone can enjoy their time with us. We also provide amenities like clean and well-maintained toilets for your convenience.
              </p>
              <p>
              At South Star Restaurant, we pride ourselves on creating a casual and welcoming atmosphere. Whether you're visiting with friends, family, or colleagues, our friendly staff will make you feel right at home.
              </p>
              <p>
              For your convenience, we accept credit cards as a payment option, making your dining experience hassle-free.

Come and experience the magic of South Star Restaurant. Join us today and treat yourself to an exceptional dining experience filled with delightful flavors, warm hospitality, and unforgettable moments.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="about-image p-4">
              <img src={aboutImage1} alt="About" />
            </div>
            <div className="about-image p-4">
              <img src={aboutImage2} alt="About" />
            </div>
            <div className="about-image p-4">
              <img src={aboutImage3} alt="About" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
