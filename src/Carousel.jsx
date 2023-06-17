import React from 'react';
import slide01 from "./assets/images/slide-01.jpg";
import slide02 from "./assets/images/slide-02.jpg";
import slide03 from "./assets/images/slide-03.jpg";

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src={slide01} className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
          <h1>South Star Restaurant</h1>
            <p>304 E Front St, Plainfield, NJ 07060, United States</p>
            <h3>+19086684900</h3>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src={slide02} className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h1>South Star Restaurant</h1>
            <p>304 E Front St, Plainfield, NJ 07060, United States</p>
            <h3>+19086684900</h3>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src={slide03} className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
          <h1>South Star Restaurant</h1>
            <p>304 E Front St, Plainfield, NJ 07060, United States</p>
            <h3>+19086684900</h3>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
