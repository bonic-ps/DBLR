import React from "react";
import './mainabout.css';
import img1 from '../../../Images/about2.jpg';
import img2 from '../../../Images/about1.svg';

export default function MainAbout(){

    return (
        <>
          <div className="main-about-container">
            <div className="main-about-wrapper">
                <div className="main-about-left">
                    <div className="main-about-img-section">
                        <img src={img1} alt="img1" className="about-img1"/>
                        <img src={img2} alt="img2" className="about-img2"/>
                    </div>
                </div>
                <div className="main-about-right"> 
                    <div className="main-about-content-wrapper">
                        <div className="main-about-head-section">
                            <h3 className="main-about-heading">What Is Snippetflow?</h3>
                        </div>
                        <div className="main-about-desc-section">
                            <p className="main-about-description">
                               SnippetFlow is a task orchestration tool which helps to run compute tasks in a serverless manner at infinite scale. SnippetFlow can deploy your tasks in any cloud provider.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}