import React from 'react';
import './basiccard.css';
import {basicCardData} from './basicCardData';

export default function BasicCard(props){
    const result = basicCardData.map(each => { 
        return (
            <div className="dc-basic-card-top">
                <div className="dc-basic-card-design"></div>
                <div className="dc-basic-card-container">
                    <h4 className='dc-basic-card-title'>{each.title}</h4>
                    <div className='dc-basic-card-desc'>{each.description}</div>
                </div>
            </div>
        )
    })

    return (
        <>
          {result}
        </>
    )
}