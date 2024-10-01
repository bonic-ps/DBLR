import React from "react";
import dbslidersection from './slidersection.module.css';
import sliderData from "./sliderData";

export default function SliderSection(props){

   const sliders = sliderData.map(each => {
      return (
        <>
         <div className={dbslidersection["slider-img-container"]}>
                <img src={each.sliderImg} className={dbslidersection["slider-img"]} />
                <div className={dbslidersection["slider-img-overlay"]}></div>
         </div>
         <div className={dbslidersection["slider-text-container"]}>
               <h4 className={dbslidersection["slider-text-heading"]}>{each.title}</h4>
               <p className={dbslidersection["slider-text-description"]}>{each.description}</p>
         </div>
        </>
      )
   })



const [currentSlider, setCurrentSlider] = React.useState(0);

React.useEffect(() => {
   let intervalCode = setInterval(() => {
      setCurrentSlider(prev => {
         if (prev < sliders.length - 1) {
            return prev + 1;
         } else {
            return 0;
         }
      });
   }, 8000);

   return () => clearInterval(intervalCode);
}, []);


    return (
        <>
          <div className={dbslidersection["slider-top-section"]}>
             {sliders[currentSlider]}
          </div>
        </>
    )
}