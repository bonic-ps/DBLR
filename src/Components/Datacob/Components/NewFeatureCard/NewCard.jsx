import React from 'react';
import './newcard.css';


export default function NewCard(props){

    return (
        <> 
          <div className="feat-card-top">
            <div className="feat-card-container">
                <div className="feat-card-texts">
                    <div className="feat-card-head">{props.each.title}</div>
                    <div className="feat-card-desc">{props.each.desc}</div>
                </div>
                <img src={props.each.img} alt="something" className="feat-card-img"/>
            </div>
          </div>
        </>
    )
}