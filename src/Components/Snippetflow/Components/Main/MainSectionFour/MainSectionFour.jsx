import React from "react";
import './MainSectionFour.css';
import Card from "../../CardComponent/Card";
import { sectionFourCardData } from "../../../Data/allCardData";

export default function MainSectionFour(props){
    let cards = sectionFourCardData.map((cardData, idx) => {
        return <Card cardData = {cardData} key={idx}/>
    })
    return (
        <div className="main-section-four-container">
            <div className="sectionfour-heading">
                <h1>Deploy your pipeline here</h1>
                <p>Self-hosted or cloud-hosted, connectors for your own usage or embedded in your own product.</p>
            </div>
            <div className="sectionfour-cards">
                {cards}
            </div>
        </div>
    )
}