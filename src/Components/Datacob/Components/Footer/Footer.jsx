import React from "react";
import dcfooter from './footer.module.css';
import linkedinImg from '../../Images/linkedin.png';
import xImg from '../../Images/twitter.png';
import fbImg from '../../Images/instagram.png';
import igImg from '../../Images/facebook.png';

export default function Footer(props){

    return (
        <>
          <div className={dcfooter["footer-real-top"]}>
            <div className={dcfooter["footer-top"]}>
                <div className={dcfooter["company-details"]}>
                    <div className={dcfooter["about-company"]}>
                        Product Logo
                        {/* <img src="https://dabler.online/assets/dabler_logo_02-7083de9b.svg" alt="dabler" /> */}
                    </div>
                    <div className={dcfooter["company-add"]}>
                        <h4>Address</h4>
                        <p>128 City Road, London, United Kingdom, EC1V 2NX</p>
                    </div>
                    <div className={dcfooter["company-email"]}>
                        <div className={dcfooter["email-texts"]}>
                            <h4>Email</h4>
                            <p>dabler@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className={dcfooter["about-products"]}>
                    <div className={dcfooter["footer-col-head"]}>Developers</div>
                    <a href="#">Documentation</a>
                    <a href="#">Blogs</a>
                </div>

                <div className={dcfooter["social-media"]}>
                    <div className={dcfooter["footer-col-head"]}>Social Media</div>
                    <div className={dcfooter["social-container"]}>
                        <a href="#"><img src={linkedinImg} alt="linkedIn" className={dcfooter["social-icon"]}/></a>
                        <a href="#"><img src={xImg} alt="x" className={dcfooter["social-icon"]}/></a>
                        <a href="#"><img src={igImg} alt="ig" className={dcfooter["social-icon"]}/></a>
                        <a href="#"><img src={fbImg} alt="fb" className={dcfooter["social-icon"]}/></a>
                    </div>
                </div>
            </div>
            
            <div className={dcfooter["copyright"]}>
                <p className="mbr-text mb-0 mbr-fonts-style display-7">© Copyright DABLER - All Rights Reserved</p>
            </div>
          </div>
        </>
    )
}