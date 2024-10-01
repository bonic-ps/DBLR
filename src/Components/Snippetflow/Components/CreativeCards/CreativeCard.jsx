import React from "react";
import './creativeCard.css';

export default function CreativeCard(props){

    return (
        <>
          <div className="creative-card-wrapper">
              <div className="creativecard-data-container">
                  <div className="creativecard-data-heading-section">
                    <h3>COMPANY NAME</h3>
                    <div className="creativecard-data-title">some data about the comapany</div>
                  </div>
                  <div className="creativecard-data-description-section">
                    <p>This is some description regarding the services offered by the company. In future we are going to offer many new features for the customers to use.</p>
                    <p>This is some description regarding the services offered by the company. In future we are going to offer many new features for the customers to use.</p>
                  </div>
              </div>
          </div>
        </>
    )
}