import React from "react";
import './footer.css';
import insta from '../../Images/PNG/SocialMedia/insta.png';
import fb from '../../Images/PNG/SocialMedia/fb.png';
import linkedin from '../../Images/PNG/SocialMedia/linkedin.png';
import yt from '../../Images/PNG/SocialMedia/yt.png';

export default function Footer(props){

    return (
        <>
          <div className="ira-footer-container" id="footers">
            <div className="ira-footer-wrapper">
                <div className="ira-footer-sections">
                    <h6 className="ira-footer-head">About</h6>
                    <div className="address-email">Address</div>
                    <div>128 City Road, London, United Kingdom, EC1V 2NX</div>
                    <div className="address-email">Email</div>
                    <div>dabler@gmail.com</div>
                </div>
                <div className="ira-footer-sections">
                    <h6 className="ira-footer-head">Documentation</h6>
                </div>
                <div className="ira-footer-sections">
                    <h6 className="ira-footer-head">Social Media</h6>
                    <div className="ira-social-container">
                        <a href=""><img src={insta} alt="1" className="ira-social-medias" /></a>
                        <a href=""><img src={fb} alt="1" className="ira-social-medias" /></a>
                        <a href=""><img src={yt} alt="1" className="ira-social-medias" /></a>
                        <a href=""><img src={linkedin} alt="1" className="ira-social-medias" /></a>
                    </div>
                </div>
            </div>
            <div className="ira-footer-tm">© Copyright DABLER - All Rights Reserved</div>
          </div>
        </>
    )
}