import React from "react";
import { useLocation } from "react-router-dom";
import './aboutdabler.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import communitylogo from "../../Images/AboutUs/community.png";
import expansionlogo from "../../Images/AboutUs/expansion.png";
import innovationlogo from "../../Images/AboutUs/innovation1.png";
import sustainablelgo from "../../Images/AboutUs/sustainable1.png";
import groupbg from "../../Images/AboutUs/groupbg.jpg";
import innovationbg from "../../Images/AboutUs/innovationbg.jpg";
import businessbg from "../../Images/AboutUs/businessbg.jpg";

export default function AboutDabler(){
    // const location = useLocation();
    // console.log("the current location is ", location)
    return (
        <>
          <Navbar />
          <div className="db-about-container">
            <div className="db-about-wrapper">

                <div className="db-about-intro-container">
                    <div className="db-about-intro-texts">
                        Dabler is a registered company in the UK, established in 2021. We specialize in
                        delivering innovative solutions for data engineering, generative AI, and large
                        language models (LLMs). Our mission is to empower organizations to optimize their
                        data processes and harness advanced AI technologies, enabling data teams to
                        unlock valuable insights and drive impactful decision-making.
                    </div>
                </div>

                <div className="db-about-sections">

                    <div className="db-about-each-section">
                        <div className="db-about-each-section-texts">
                            <div className="db-about-each-section-head">Our Vision</div>
                            <div className="db-about-each-section-description">
                                To be a leading innovator in data engineering and AI solutions, transforming how
                                organizations harness the power of data to drive intelligent decision-making and
                                foster sustainable growth.

                            </div>
                        </div>
                        <div className="db-about-each-section-img-container">
                        <img src={innovationbg} alt="bg" className="db-about-each-section-img" />
                        </div>
                    </div>

                    <div className="db-about-each-section">
                        <div className="db-about-each-section-texts">
                            <div className="db-about-each-section-head">Our Mission</div>
                            <div className="db-about-each-section-description">
                                Dabler is dedicated to providing cutting-edge tools and technologies that empower
                                businesses to optimize their data processes, unlock valuable insights, and leverage
                                generative AI and large language models for enhanced productivity and
                                collaboration.
                            </div>
                        </div>
                        <div className="db-about-each-section-img-container">
                            <img src={businessbg} alt="bg" className="db-about-each-section-img" />
                        </div>
                    </div>
                </div>

                <div className="db-about-core-container">
                      <div className="db-about-core-value-head">Core Values</div>
                      <div className="db-about-core-values-wrapper">

                        <div className="db-about-each-core-value">
                            <div className="db-about-each-core-value-head">Innovation</div>
                            <div className="db-about-each-core-value-desc">We strive to push the boundaries of technology and creativity to develop
                                cutting-edge solutions that meet our clients' evolving needs.
                            </div>
                        </div>

                        <div className="db-about-each-core-value">
                            <div className="db-about-each-core-value-head">Collaboration</div>
                            <div className="db-about-each-core-value-desc">We believe in the power of teamwork and open communication,
                                working closely with clients and partners to achieve shared goals.
                            </div>
                        </div>

                        <div className="db-about-each-core-value">
                            <div className="db-about-each-core-value-head">Integrity</div>
                            <div className="db-about-each-core-value-desc">We uphold the highest standards of honesty and transparency in all our
                                interactions, ensuring trust and accountability.
                            </div>
                        </div>

                        <div className="db-about-each-core-value">
                            <div className="db-about-each-core-value-head">Excellence</div>
                            <div className="db-about-each-core-value-desc">We are committed to delivering high-quality products and services that
                                exceed expectations and drive meaningful results.
                            </div>
                        </div>

                        <div className="db-about-each-core-value">
                            <div className="db-about-each-core-value-head">Customer-Centricity</div>
                            <div className="db-about-each-core-value-desc">We prioritize our clients' needs, focusing on delivering value
                                and tailored solutions that empower their success.
                            </div>
                        </div>

                      </div>
                </div>

                <div className="db-about-futuregoals-container">
                    <div className="db-about-core-value-head">Future Goals</div>
                    <div className="db-about-futuregoals">

                        <div className="db-about-each-futuregoals">
                            <div className="db-about-each-futuregoals-logo-cont"><img src={expansionlogo} alt="logo" className="db-about-each-futuregoals-logo"/></div>
                            <div className="db-about-each-futuregoals-head">Expansion</div>
                            <div className="db-about-each-futuregoals-desc">To broaden our reach into new markets and industries, providing innovative solutions to a wider audience.</div>
                        </div>

                        <div className="db-about-each-futuregoals">
                            <div className="db-about-each-futuregoals-logo-cont"><img src={innovationlogo} alt="logo" className="db-about-each-futuregoals-logo"/></div>
                            <div className="db-about-each-futuregoals-head">Continuous Innovation</div>
                            <div className="db-about-each-futuregoals-desc">To invest in research and development, enhancing our product offerings with the latest advancements in AI and data engineering.</div>
                        </div>

                        <div className="db-about-each-futuregoals">
                            <div className="db-about-each-futuregoals-logo-cont"><img src={communitylogo} alt="logo" className="db-about-each-futuregoals-logo"/></div>
                            <div className="db-about-each-futuregoals-head">Community Engagement</div>
                            <div className="db-about-each-futuregoals-desc">To build a robust community of data professionals through workshops, webinars, and collaborative projects, fostering knowledge sharing and growth.</div>
                        </div>

                        <div className="db-about-each-futuregoals">
                            <div className="db-about-each-futuregoals-logo-cont"><img src={sustainablelgo} alt="logo" className="db-about-each-futuregoals-logo"/></div>
                            <div className="db-about-each-futuregoals-head">Sustainability</div>
                            <div className="db-about-each-futuregoals-desc">To incorporate sustainable practices in our operations and promote eco-friendly solutions within the data and AI landscape.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
          </div>
          <Footer />
        </>
    )
}