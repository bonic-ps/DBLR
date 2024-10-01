import React from "react";
import './mainintro.css'; 
import  img from '../../../Images/imageOne.jpg';
import Button from "../../ButtonComponent/Button";

export default function MainIntroSection(props){

// let observer = new IntersectionObserver(entries => {
//     entries.forEach(each => {
//         console.log(each.isIntersecting)
//     })
// })
// observer.observe("give that element here");

    return (    <div className="main-intro-real-top">
        <div className="main-intro-top-section">
            <div className="main-intro-wrapper">
                <div className="main-intro-details">
                    <h1>Welcome to Snippetflow</h1>
                    <div className="main-sub-heading">Serverless compute platform</div>
                    {/* <div className="main-intro-alt-titles-wrapper">
                        <div className="main-intro-alt-titles-container">
                            <div className="main-intro-each-title  color-text">LLMs</div>
                            <div className="main-intro-each-title  color-text">Data Engineers</div>
                            <div className="main-intro-each-title  color-text">AI Engineers</div>
                            <div className="main-intro-each-title  color-text">Data Analysts</div>
                        </div>
                    </div> */}
                    <div className="main-intro-description">
                     Task Orchestration . Cloud Agnostic .  Cost Saving                    </div>
                    <div className="main-intro-button-wrapper">
                        {/* <Button title={"Try snippetflow for free"} bg={'#433bfb'} textColor={'white'} hbg={'blue'}/> */}
                        <Button title={"Try Snippetflow"} bg={'#f4f4ff'} textColor={'#433bfb'} hbg={'rgb(224 224 231)'}/>
                    </div>
                </div>
                {/* <div className="main-intro-img-container">
                    <img src={img} alt="Image" className="main-intro-img" />
                </div> */}
            </div>
        </div>  </div>
    )
} 