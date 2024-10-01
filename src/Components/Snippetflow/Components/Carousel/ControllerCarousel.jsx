import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './controlledcarousel.css'
import img1 from '../../Images/imageOne.jpg';
import img2 from '../../Images/imageTwo.jpg';
import img3 from '../../Images/imageThree.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

 
  return (
    <Carousel data-bs-theme="light" interval={3000}>
    <Carousel.Item>
      <img
        className="d-block w-100 h-600 img-basic-styles"
        src={img1}
        alt="First slide"
        style={{borderRadius : '10px'}}
      />
      <Carousel.Caption style={{background : 'rgba(5, 5, 5, 0.4)', borderRadius : '6px'}}>
        <h5 style={{color : 'white'}}>Find your data</h5>
        <p className='caption-desc'>Discover your database objects and related documentation</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-600 img-basic-styles"
        src={img2}
        alt="Second slide"
        style={{borderRadius : '10px'}}
      />
      <Carousel.Caption style={{background : 'rgba(5, 5, 5, 0.4)', borderRadius : '6px'}}>
        <h5>Project Details</h5>
        <p className='caption-desc'>group related transformations</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-600 img-basic-styles"
        src={img3}
        alt="Third slide"
        style={{borderRadius : '10px'}}
      />
      <Carousel.Caption style={{background : 'rgba(5, 5, 5, 0.4)', borderRadius : '6px'}}>
        <h5>Model Page</h5>
        <p className='caption-desc'>model / transform your data based on business requirements</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default ControlledCarousel;