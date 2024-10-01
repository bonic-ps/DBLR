import React from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg' ;
import menuIcon from '../../menu-line.svg';
import sfnavbar from "./Navbar.css"
import NavDropdown from "./NavDropDown/NavDropdown";
import {dropdownData, data} from "../../Data/navData";
import HamburgerDropdown from "./HamburgerDropdown/HamburgerDropdown";
import arrowDown from '../../Images/arrow-down.svg'

export default function Navbar(){
  let [hbDropdown, setHbDropdown] = React.useState(false);
    
   return (
        <>
           <nav className={"sf-navbar-container"} id="world">
            
             <div className={"sf-logo-name"}>
                <img src={logo} width={"50px"} alt="logo"/>
                <p>SnippetFlow</p>
             </div>

             <div id={"sf-hamburger-icon-container"} onClick={() => setHbDropdown(!hbDropdown)}>
                 <img src={menuIcon} alt="menuicon" id={"sf-hamburger-menu-icon"}/>
             </div>

             <HamburgerDropdown hbDropdown={hbDropdown} setHbDropdown={setHbDropdown}/>

             <div className={"sf-nav-left-right-wrapper"}>
             <div className={"sf-nav-left-section"} id={"sf-nav-left-section"}>

                <Link to={"/"}>Home</Link>
              
                {/* <div className={"sf-nav-dropdown-container"}>
                  <div className={"sf-service-name-dropdownicon"}>
                    <div>Products</div>
                    <div className={"sf-dropdown-icon"}></div>
                  </div>
                  <NavDropdown data = {dropdownData}/>
                </div> */}


                <div className={"sf-nav-dropdown-container"}> 
                  <div className={"sf-service-name-dropdownicon"}>
                    <div>Developers</div>
                    <div className={"sf-dropdown-icon"}></div>
                  </div>
                  <NavDropdown data = {data}/>
                </div>


                {/* <div className={"sf-nav-dropdown-container"}> 
                  <div className={"sf-service-name-dropdownicon"}>
                    <div>Developers</div>
                    <div className={"sf-dropdown-icon"}></div>
                  </div>
                </div> */}

                <a href="#">Contact Us</a>
                <a href="#">Login</a>
             </div>


             <div className={"sf-nav-right-section"}>
              <div>Try free</div>
              <div>Pricing</div>
             </div>
          </div>
         </nav>
        </>
    )
}