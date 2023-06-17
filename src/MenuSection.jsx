import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from './assets/images/menu-item-01.jpg';
import image2 from './assets/images/menu-item-02.jpg';
import image3 from './assets/images/menu-item-03.jpg';
import image4 from './assets/images/menu-item-04.jpg';
import image5 from './assets/images/menu-item-05.jpg';


const MenuSection = () => {
    
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2500, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  const items = [
    {
      title: 'Moda',
      artist: 'Plan B',
      rating: 4.5,
      price: '9,99 $',
      image: image1
    },
    {
      title: 'Indie City',
      artist: 'Pixies',
      rating: 4,
      price: '14,99 $',
      image: image2
    },
    {
      title: 'Item 3',
      artist: 'Artist 3',
      rating: 3.5,
      price: '19,99 $',
      image: image3
    },
    {
      title: 'Item 4',
      artist: 'Artist 4',
      rating: 4,
      price: '24,99 $',
      image: image4
    },
    {
      title: 'Item 5',
      artist: 'Artist 5',
      rating: 4.5,
      price: '29,99 $',
      image: image5
    }
  ];

  return (
    
    <div className="multi-carousel my-5 py-5
    ">
        <div className="about-text mx-5 my-5 py-5" style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
            <h1>OUR MENU <br /></h1>
            <h4>Our selection of cakes with quality taste</h4> 

        </div>
  
  

      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        containerClass="multi-carousel-inner"
      >
        {items.map((item, index) => (
          <div className="multi-carousel-item" key={index}>
            <div className="card my-5 mx-5" style={{ width: '250px', height: 'auto' }}>
              <img className="card-img-top" src={item.image} alt="Card image cap" style={{ objectFit: 'cover', width: '100%', height: '250px' }} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.artist}</p>
                <ul className="list-unstyled list-inline my-2">
                  {[...Array(5)].map((_, i) => (
                    <li className="list-inline-item mx-0" key={i}>
                      <i className={`fas fa-star${item.rating > i ? '' : '-half-alt'}`}></i>
                    </li>
                  ))}
                </ul>
                <p className="price mb-0">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MenuSection;
