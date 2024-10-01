import React from "react";
import './footerItem.css';

export default function FooterItem(props){

    let requiredLinks = props.linksArr.map(each => {
        return (<a href={each.link} className="each-link">{each.name}</a>)
    })
    
    return (
                <div className="each-item">
                       <div className="each-item-title">{props.title}</div> 
                       <div className="each-item-links-wrapper">
                          {requiredLinks}
                       </div>
                </div>
    )
}