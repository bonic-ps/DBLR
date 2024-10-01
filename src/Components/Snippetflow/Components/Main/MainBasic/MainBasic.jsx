import React from 'react';
import './mainbasic.css';
import img1 from '../../../Images/basic-card1.png';
import img2 from '../../../Images/basic-card2.png';
import img3 from '../../../Images/basic-card3.png';
import { motion } from 'framer-motion';

export default function MainBasic(){ 

    return (
        <>
          <motion.div className="main-basic-card-container" initial={ {opacity : 0} } animate={{opacity : 1}} transition={{delay : 0.5}}>
            <div className="main-basic-card-wrapper">
                <div className="main-basic-each-card">
                    <div className="main-basic-img-container"><img src={img1} alt="img1" className="main-basic-img" /></div>
                    <div className="main-basic-des-container">
                        <h3 className="main-basic-head">Compute</h3>
                        <p className="main-basic-text">Automatically deploys serverless compute tasks. No limit on parallelism or compute power.</p>
                    </div>
                </div>
                <div className="main-basic-each-card">
                    <div className="main-basic-img-container"><img src={img2} alt="img2" className="main-basic-img" /></div>
                    <div className="main-basic-des-container">
                        <h3 className="main-basic-head">Orchestration</h3>
                        <p className="main-basic-text">Create pipeline which can run independent compute tasks. Support Python, Scala, Spark, DBT, R, Bash, Java etc. </p>
                    </div>
                </div>
                <div className="main-basic-each-card">
                    <div className="main-basic-img-container"><img src={img3} alt="img2" className="main-basic-img" /></div>
                    <div className="main-basic-des-container">
                        <h3 className="main-basic-head">Cloud Agnostic</h3>
                        <p className="main-basic-text">Deploy to cloud provider of your choice. Deploys tasks on AWS, Azure, GCP etc.</p>
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
          </motion.div>
        </>
    )
}