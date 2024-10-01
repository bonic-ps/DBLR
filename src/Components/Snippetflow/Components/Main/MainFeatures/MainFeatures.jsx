import React from 'react';
import './mainfeatures.css';
import interfaceImg from '../../../Images/FeatCardImg/interface.png';
import gitImg from '../../../Images/FeatCardImg/git.png';
import scaleImg from '../../../Images/FeatCardImg/scalable.png';
import pipelineImg from '../../../Images/FeatCardImg/pipeline.png';
import savingsImg from '../../../Images/FeatCardImg/savings.png';
import marketImg from '../../../Images/FeatCardImg/market.png';
import deploymentImg from '../../../Images/FeatCardImg/deployment.png';
import codingImg from '../../../Images/FeatCardImg/coding.png';
import cloudImg from '../../../Images/FeatCardImg/cloudsupport.png';

const cardData = [
    {cardImg : interfaceImg, head : "Single Interface", desc : "Single interface to create, monitor and troubleshoot pipeline and code."},
    {cardImg : gitImg, head : "GIT", desc : "Code first with code deployed to git repo of your choice."},
    {cardImg : scaleImg, head : "Infinite Scale", desc : "Scale task to any size and run any number of parallel tasks."},
    {cardImg : cloudImg, head : "Cloud Independant", desc : "Run on cloud provider of your choice. Supports AWS, Azure, GCP etc"},
    {cardImg : marketImg, head : "Marketplace", desc : "One click deploy for commonly use data pipelines."},
    {cardImg : savingsImg, head : "Cheaper", desc : "20 - 60% cheaper compute cost compared to alternate solution."},
    {cardImg : deploymentImg, head : "Deployment", desc : "Can be easily deployed to on-premise servers or cloud provider of your choice(AWS, Azure, GCP).  "},
    {cardImg : pipelineImg, head : "CI/CD", desc : "Continuous integration and continuous deployment integrated as part of the platform itself."},
    {cardImg : codingImg, head : "Programming Languages", desc : "Support Python, Scala, R, Spark, Java "},
]

export default function MainFeatures(){

    return (
        <>
          <div className="main-feature-container">
            <div className="main-feature-wrapper">
                <div className="main-feature-head-container">
                    <h2>Main Features</h2>
                </div>
                <div className="main-feature-card-container">

                    {cardData.map((each, key) => {
                        return (
                            <div className="main-feat-card-holder" key={key}>
                                <div className="main-feat-card-upper">
                                    <h3>{each.head}</h3>
                                    <img src={each.cardImg} alt="img" />
                                </div>
                                <div className="main-feat-card-bottom">
                                    <p>{each.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="main-feat-card-holder">
                        <div className="main-feat-card-upper">
                            <h3>Heading</h3>
                            <img src={interfaceImg} alt="img" />
                        </div>
                        <div className="main-feat-card-bottom">
                            <p>This si a very good application and it ti s the futeure of the country and all those things.</p>
                        </div>
                    </div> */}
                </div>
            </div>
          </div>
        </>
    )
}