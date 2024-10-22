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

function changeSlide(data){
   setCurrentSlider(prev => {
      let result = prev + data;
      const sliderCount = sliderData.length
      if(result >= sliderCount) return 0
      else if(result <= 0) return sliderCount-1
      else return result
   })
}

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
             <div className={dbslidersection["db-slide-marker-wrapper"]}>
               {sliderData.map((each, idx) => {
                  return (
                    <div className={`${currentSlider == idx && dbslidersection["db-slide-active-marker"]} ${dbslidersection["db-each-slide-marker"]}`} key={idx}></div>
                  )
               })}
               <div className={dbslidersection["db-slider-btns-wrapper"]}>
                  <button className={dbslidersection["db-slider-btn"]} onClick={() => changeSlide(-1)} >{"<"}</button>
                  <button className={dbslidersection["db-slider-btn"]} onClick={() => changeSlide(1)} >{">"}</button>
               </div>
             </div>
          </div>
        </>
    )
}