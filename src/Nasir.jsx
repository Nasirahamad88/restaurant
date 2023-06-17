import React from 'react';
import { Card } from 'react-bootstrap';
import nasir from './assets/images/nasir1.jpg';

const Nasir = () => {
  return (
    <Card className="my-5 py-5 mx-auto  btn btn-outline-primary" style={{ maxWidth: '1240px ' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Card.Img src={nasir} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">MD.Nasir Ahamad</h5>
            <p className="card-text">Hello There,<br />
            Are you looking for a skilled and experienced web developer? Look no further! I am a professional web developer proficient in HTML, CSS, JavaScript, React, Next.js, and API integration. With my expertise, I can bring your ideas to life and create stunning websites and web applications.

Whether you need a simple yet elegant website, a dynamic and interactive web application, or an API integration for seamless data exchange, I have got you covered. I am well-versed in modern web development techniques and best practices, ensuring that your project is built with the latest technologies and standards.

My attention to detail, creativity, and problem-solving skills enable me to deliver high-quality solutions tailored to your specific requirements. I am dedicated to providing efficient and optimized code, ensuring fast loading times and smooth user experiences.

I also have experience with backend development using frameworks like Express.js and databases like MongoDB. This allows me to develop full-stack applications and create robust, scalable, and secure solutions.

Whether you need a website revamp, custom web application, or API integration, I am ready to collaborate with you and turn your vision into reality. Let's work together to create a powerful online presence and drive your business forward.

Contact me now to discuss your project requirements and let's embark on this exciting web development journey together!
            </p>
            <h2 className="text-body-secondary">
  Let's Connect!
</h2>
<p className="contact-info">
  <i className="fas fa-phone"></i> Whatsapp: +8801759277464
</p>
<p className="contact-info">
  <i className="fas fa-envelope"></i> Email: nasirahamad017@gmail.com
</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Nasir;
