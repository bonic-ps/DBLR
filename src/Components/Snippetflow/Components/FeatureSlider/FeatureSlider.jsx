import React from "react";
import './featureslider.css';
import ControlledCarousel from "../Carousel/ControllerCarousel";

export default function FeatureSlider(props){

    return (
        <>
          <div className="feature-slider-top">
            <div className="feature-slider-container">
                <div className="feature-slider-head">
                    <h4>About Product</h4>
                </div>
                <ControlledCarousel />
            </div>
          </div>
        </>
    )
}