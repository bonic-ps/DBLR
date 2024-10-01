import React from "react";
import dbfooter from './footer.module.css';
import linkedinImg from '../../Images/linkedin.png';
import xImg from '../../Images/twitter.png';
import fbImg from '../../Images/instagram.png';
import igImg from '../../Images/facebook.png';
import { productLinks } from "../../App";

export default function Footer(props){

    return (
        <>
          <div className={dbfooter["footer-top"]}>
             <div className={dbfooter["company-details"]}>
                <div className={dbfooter["about-company"]}>
                  <img src="https://dabler.online/assets/dabler_logo_02-7083de9b.svg" alt="dabler" />
                </div>
                <div className={dbfooter["company-add"]}>
                  <h4>Address</h4>
                  <p>128 City Road, London, United Kingdom, EC1V 2NX</p>
                </div>
                <div className={dbfooter["company-email"]}>
                  <div className={dbfooter["email-texts"]}>
                    <h4>Email</h4>
                    <p>dabler@gmail.com</p>
                  </div>
                </div>
             </div>

             <div className={dbfooter["about-products"]}>
                <div className={dbfooter["footer-col-head"]}>PRODUCTS</div>
                <a href={"/datacob"}>Datacob</a>
                <a href={"/snippetflow"}>SnippetFlow</a>
                <a href={"/ira"}>Ira AI</a>
             </div>

             <div className={dbfooter["social-media"]}>
                <div className={dbfooter["footer-col-head"]}>Social Media</div>
                <div className={dbfooter["social-container"]}>
                  <a href="#"><img src={linkedinImg} alt="linkedIn" className={dbfooter["social-icon"]}/></a>
                  <a href="#"><img src={xImg} alt="x" className={dbfooter["social-icon"]}/></a>
                  <a href="#"><img src={igImg} alt="ig" className={dbfooter["social-icon"]}/></a>
                  <a href="#"><img src={fbImg} alt="fb" className={dbfooter["social-icon"]}/></a>
                </div>
             </div>

             <div className={dbfooter["copyright"]}>
                <p className="mbr-text mb-0 mbr-fonts-style display-7">© Copyright DABLER - All Rights Reserved</p>
             </div>
          </div>
        </>
    )
}