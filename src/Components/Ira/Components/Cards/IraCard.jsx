import React from 'react';
import './iracard.css';
import img1 from '../../Images/PNG/IraCards/ai.png';
import img2 from '../../Images/PNG/IraCards/ai.png';
import img3 from '../../Images/PNG/IraCards/ai.png';


export default function IraCard(){ 

    return (
        <>
          <div className="ira-card-card-container" >
            <div className="ira-card-card-wrapper">
                <div className="ira-card-each-card">
                    <div className="ira-card-img-container"><img src={img1} alt="img1" className="main-basic-img" /></div>
                    <div className="ira-card-des-container">
                        <h3 className="ira-card-head">Compute</h3>
                        <p className="ira-card-text">Automatically deploys serverless compute tasks. No limit on parallelism or compute power.</p>
                    </div>
                </div>
                <div className="ira-card-each-card">
                    <div className="ira-card-img-container"><img src={img2} alt="img2" className="main-basic-img" /></div>
                    <div className="ira-card-des-container">
                        <h3 className="ira-card-head">Orchestration</h3>
                        <p className="ira-card-text">Create pipeline which can run independent compute tasks. Support Python, Scala, Spark, DBT, R, Bash, Java etc. </p>
                    </div>
                </div>
                <div className="ira-card-each-card">
                    <div className="ira-card-img-container"><img src={img3} alt="img2" className="main-basic-img" /></div>
                    <div className="ira-card-des-container">
                        <h3 className="ira-card-head">Cloud Agnostic</h3>
                        <p className="ira-card-text">Deploy to cloud provider of your choice. Deploys tasks on AWS, Azure, GCP etc.</p>
                    </div>
                </div>
                {/* <div className="main-basic-each-card">
                    <div className="main-basic-img-container"><img src={img2} alt="" className="main-basic-img" /></div>
                    <div className="main-basic-des-container">
                        <h4 className="main-basic-head">Heading</h4>
                        <p className="main-basic-text">There is something going on bro. lets check it out come on.</p>
                    </div>
                </div>
                <div className="main-basic-each-card">
                    <div className="main-basic-img-container"><img src="" alt="" className="main-basic-img" /></div>
                    <div className="main-basic-des-container">
                        <h4 className="main-basic-head">Heading</h4>
                        <p className="main-basic-text">There is something going on bro. lets check it out come on.</p>
                    </div>
                </div> */}

            </div>
          </div>
        </>
    )
}