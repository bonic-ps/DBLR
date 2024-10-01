import React from "react";
import dbfeatureslider from './featureslider.module.css';
import ControlledCarousel from "../Carousel/ControllerCarousel";

export default function FeatureSlider(props){

    return (
        <>
          <div className={dbfeatureslider["feature-slider-top"]}>
            <div className={dbfeatureslider["feature-slider-container"]}>
                <div className={dbfeatureslider["feature-slider-head"]}>
                    <h4>About Product</h4>
                </div>
                <ControlledCarousel />
            </div>
          </div>
        </>
    )
}