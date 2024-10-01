import React from "react";
import './autoslider.css';

export default function AutoSlider(props){


    return (
        <>
          <div className="autoslider-top">
            <div className="autoslider-container">
              <div className="slider-texts">
                <div className="slider-text-title">DATACOB</div>
                <div className="slider-text-desc">Helps Data Teams</div>
                <div className="slider-text-info">Data Transformation. Data Validations . Data Contracts. </div>
              </div>
              {/* <div className="design-path"></div> */}
            </div>
            <div class="custom-shape-divider-bottom-1719145151">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
          </div>
        </>
    )
}