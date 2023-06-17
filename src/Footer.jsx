import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
            South Star Restaurant is renowned for its mouthwatering lunch and dinner options. From our comforting comfort food to our delectable small plates, every dish is crafted with the finest ingredients and utmost care. Our menu caters to all tastes, making it perfect for a family outing, a casual dinner with friends, or even a solo dining experience.
            </p>
          </div>
          <div className="col-md-3">
            <h3>Opening Hours</h3>
            <ul className="list-unstyled">
              <li>Monday - Friday: 11am - 12pm</li>
              <li>Saturday: 10am - 11pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>304 E Front St, Plainfield, NJ 07060, United States</li>
              <li>nasirahamad017@gmail.com</li>
              <li>+19086684900</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Restaurant Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
