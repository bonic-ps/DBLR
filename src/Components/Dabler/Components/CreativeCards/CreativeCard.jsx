import React from "react";
import dbcreativecard from './creativeCard.module.css';

export default function CreativeCard(props){

    return (
        <>
          <div className={dbcreativecard["creative-card-wrapper"]}>
              <div className={dbcreativecard["creativecard-data-container"]}>
                  <div className={dbcreativecard["creativecard-data-heading-section"]}>
                    <h3>{props.data.name}</h3>
                    <div className={dbcreativecard["creativecard-data-title"]}>some data about the comapany</div>
                  </div>
                  <div className={dbcreativecard["creativecard-data-description-section"]}>
                    <p>This is some description regarding the services offered by the company. In future we are going to offer many new features for the customers to use.</p>
                    <p>This is some description regarding the services offered by the company. In future we are going to offer many new features for the customers to use.</p>
                  </div>
                  <div className={dbcreativecard["creativecard-data-btn-container"]}>
                    <a href={props.data.link} className={`${dbcreativecard["creativecard-btn"]} ${dbcreativecard['apg']}`}>
                      Visit Webpage
                    </a>
                  </div>
              </div>
          </div>
        </>
    )
}