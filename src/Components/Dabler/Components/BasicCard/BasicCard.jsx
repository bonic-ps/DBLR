import React from 'react';
import './basiccard.css';
import {basicCardData} from './basicCardData';

export default function BasicCard(props){
    const result = basicCardData.map(each => {
        return (
            <div className="basic-card-top">
                <div className="basic-card-design"></div>
                <div className="basic-card-container">
                    <h4 className='basic-card-title'>{each.title}</h4>
                    <div className='basic-card-desc'>{each.description}</div>
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