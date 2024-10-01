import React from 'react';
import './card.css';
import rightArr from '../../Images/arrow-right.svg';
// import img1 from '../../Images/imageOne.jpg';
// import img2 from '../../Images/imageFour.jpg';


export default function Card(props){
console.log(props.cardData)
        return (
            <div className="card-container">
                    <img src={props.cardData.bgImg} alt="card-background" className='card-bg-img'/>
                    <h3>{props.cardData.title}</h3>
                    <p>{props.cardData.description}</p> 
                    <a className="card-button">
                        <img src={rightArr} alt="arrow-right" />
                        <div>{props.cardData.buttonText}</div>
                    </a>
            </div>
    )
}