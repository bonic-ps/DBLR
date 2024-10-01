import React from "react";
import './features.css';
// import FeatureCard from "../NewFeatureCard/NewCard";
import NewCard from "../NewFeatureCard/NewCard";
import { newCardData } from "../NewFeatureCard/newCardData";

export default function Features(props){
    const cards = newCardData.map(each => {
        return (
            <NewCard each={each}/>
        )
    })
    return (
        <>
          <div className="features-top">
            <div className="features-container">
                <div className="feature-section-one">
                    <h4 className="feature-section-head">Features</h4>
                </div>
                <div className="feature-section-two">
                    {cards}
                </div>
            </div>
          </div>
        </>
    )
}