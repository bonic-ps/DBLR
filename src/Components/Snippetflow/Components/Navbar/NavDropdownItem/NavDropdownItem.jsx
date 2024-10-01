import React from "react";
import logo from '../../../logo.svg';
import './navdropdownitem.css';
export default function NavDropdownItem(props){
    return (
        <a href={'/about'} className="navdropdownitem-container" key={props.idx}>
            <div className="navdropdownitem-img-container">
                <img src={logo} alt="each product" width={"48px"}/>
            </div>
            <div className="navdropdownitem-details-container">
                <h4>{props.eachItem.title}</h4>
                <p>{props.eachItem.description}</p>
            </div>
        </a>
    )
}