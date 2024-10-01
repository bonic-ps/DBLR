import React from "react";
import './slidermanual.css';
import sm1 from '../../Images/sm1.jpg';
import sm2 from '../../Images/sm2.jpg';
import sm3 from '../../Images/sm3.jpg';


export default function SliderManual(){
    
    let slides = [sm1,sm2,sm3];
    const [currentIndex, setCurrentIndex] = React.useState(0);
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };

    return (
        <>
          <div className="slider-manual-top">
            <div className="slider-manual-container">
             <div className="slider-container">
                <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                      <img src={slide} alt="slides" />
                      <div className="slide-texts"><h1>World</h1></div>
                    </div>
                  ))}
                </div>
                <div className="slider-manual-controls">
                  <button className="prev-btn" onClick={goToPrevSlide}>Prev</button>
                  <button className="next-btn" onClick={goToNextSlide}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}