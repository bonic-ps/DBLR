import React from "react";
import './featureItems.css';
import rightarrow from '../../Images/arrow-right.svg';

export default function FeatureItems(props){
    // let n;
    // require(`../../../Images/imageFour.jpg`).then(s => n = s.default); // we can also use import instead of require method.
    // console.log(n)
console.log(props.eachItem.imgDetails)
    return (
        <>
          <div className="featureItems-container">
            <div className="featureItems-sectionOne-wrapper">
                <h3 className="featureItems-heading">{props.eachItem.title}</h3>
                <div className="featureItems-description">{props.eachItem.description}<br /><br />{" So everyone should atleast have one of these softwares installed at their homes for them and their family"}</div>
                <div className="button-large">
                    <a href="#" className="featureItems-button" >
                        <img src={rightarrow} alt="right-arrow" />
                        <div>{props.eachItem.buttonDetails.buttonText}</div>
                    </a>
                </div>
            </div>

            <div className="featureItems-sectionTwo-wrapper">
                <img src={props.eachItem.imgDetails.src} alt={props.eachItem.imgDetails.alt} className="featureItems-images"/>
            </div>
          </div>
        </>
    )
}