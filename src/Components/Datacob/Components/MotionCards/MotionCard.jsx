import React from "react";
import './motioncard.css';
import motiontest from '../../Images/motiontest.jpg';
import img1 from '../../Images/check.png';

export default function MotionCard(props){

    return (
        <>
          <div className="motioncard-top" id="progressbar">
            <div className="motioncard-container">
                <img src={img1} alt="img1" className="motioncard-img"/>
                <span className="motioncard-des">Ditch the lines, grab your friends and leave the crowds behind</span>
                <a href="#" className="motioncard-btn">click here</a>
                <picture><img src={motiontest} className="motioncard-bg"/></picture>
            </div>
          </div>
        </>
    )
}