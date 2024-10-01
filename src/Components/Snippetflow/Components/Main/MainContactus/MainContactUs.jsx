import React from "react";
import './maincontactus.css';


export default function MainContactUs(){

    return (
        <>
          <div className="main-contact-container">
            <div className="main-contact-contents">
                <h2>Contact Us</h2>
                <div className="main-contact-input-wrapper">
                    <div className="main-contact-inputs-holder">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <textarea id="message" name="message" rows="4" cols="50" placeholder="Type your message here" style={{resize: 'none'}}></textarea>
                    <div className="main-contact-btn"><button>Send</button></div>
                </div>
            </div>
          </div>
        </>
    )
}