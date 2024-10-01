import React from "react";
import './button.css';

export default function Button(props){

  return ( 
      <>
        <a href="#" className="buttoncomp-container" 
          onMouseOver={(e) => {e.target.style.backgroundColor = props.hbg}}
          onMouseOut={(e) => {e.target.style.backgroundColor = props.bg}}
          style={{backgroundColor: props.bg ? props.bg : "red", 
                  color: props.textColor ? props.textColor : "black", 
                  borderColor: props.bg ? props.bg : "white"
                }}>
          {props.title}
        </a>
      </>
  )
}