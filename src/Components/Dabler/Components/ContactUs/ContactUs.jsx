import React from "react";
import './contactus.css';

export default function ContactUs(props){

    return (
        <>
         <div className="contact-top" id='contact-us'>
            <div className="contact-container">
                <h4>Contact Us</h4>
                <form action="#" className='contact-us-form' >
                    <div className="contact-sect-one">
                        <input type="text" placeholder="Name" className="contact-us-en"/>
                        <input type="text" placeholder="Email" className="contact-us-en"/>
                    </div>
                    <div className="contact-sect-two">
                        <textarea type="text" placeholder="Message" className="contact-us-msg"/>
                        <button type="submit" className="contact-us-btn">Send Message</button>
                    </div>
                </form>
            </div>
         </div>
        </>
    )
}