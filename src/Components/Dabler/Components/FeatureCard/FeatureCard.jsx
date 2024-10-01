import React from "react";
import './featurecard.css';



export default function FeatureCard(props){


    return (
        <>
          <div className="feature-card-top">
            <div className="feature-card-container">
               <div className="feature-card-texts">
                 <h4 className="fc-text-title">Data Transformation</h4>
                 <p className="fc-text-description">Model the data the way you want as tables, views, materialized views etc. SQL, Python and Scala supported as Modelling languages.</p>
               </div>
            </div>
          </div>
        </>
    )
}