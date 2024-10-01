import React from 'react';
import './about.css';
import FeatureCard from '../FeatureCard/FeatureCard';
import BasicCard from '../BasicCard/BasicCard';


export default function About(props){


    return (
        <>
          <div className="about-top">
            <div className="about-container">
               <h3 className="about-head">What is DABLER?</h3>
               <div className="about-description"><span className='about-description-head'>DABLER</span> is a data platform which helps in enabling data in a data warehouse to meet business needs.</div>
            </div>
            <div className="about-cards-wrapper">
               <BasicCard />
            </div>
          </div>

          {/* <div className="parallax-container">
            <div className="parallax-texts">
                <h4>DABLER</h4>
                <p>This is new cloud and data management platform designed to do certain they stuff</p>
            </div>
          </div>

          <div className="new-parallax-container">
            <div className="new-parallax-bg para"></div>
            <div className="new-parallax-texts para">
                <h4>DABLER</h4>
                <p>This is new cloud and data management platform designed to do certain they stuff</p>
            </div>
          </div> */}
        </>
    )
}