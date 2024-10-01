import React from "react";
// import {Link} from 'react-router-dom';
import dbnavbar from './navbar.module.css';
import hbImg from '../../Images/hb.svg';
// import arrowDown from '../../Images/SliderImages/Images/arrow-down.svg';
import ddImg from '../../Images/ddImg.png';
// import SliderSection from '../SliderSection/SliderSection';
import { productLinks } from "../../App";

export default function Navbar(props){
// console.log(productLinks)
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    // console.log(windowWidth)
    
    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [showSubItems, setShowSubItems] = React.useState(false);

    function handleShowSubItems(){
       setShowSubItems(!showSubItems);
    }

    const [showDropdown, setShowDropdown] = React.useState(false)
    function handleDropdown(){
        if(showDropdown){
            setShowSubItems(false)
        }
        setShowDropdown(!showDropdown);
    }
    
    if(windowWidth > 1086){
        if(showDropdown || showSubItems){
            setShowDropdown(false);
            setShowSubItems(false);
        }
    }
    
    return (
        <>
         <div className={dbnavbar["nav-top-section"]}>
            <div className={dbnavbar["name-logo-container"]}>
                <img src="https://dabler.online/assets/dabler_logo_02-7083de9b.svg" alt="logo"/>
            </div>

            <div className={dbnavbar["nav-options"]}>

                <div className={dbnavbar["nav-each-option"]}>
                    <a href="#">Who We Are</a>
                    <div className={dbnavbar["nav-each-hov-section"]}>
                        <div className={dbnavbar["nav-hov-description"]}>We believe that people are the most important resource in any organization. We are always on the lookout for people who can embrace change to drive transformation for our customers and the communities we operate in.</div>
                        {/* <div className="nav-hov-options">
                            
                            <div className="nav-hov-each-option">
                                <a href="#" className="open-sub-menu">Products</a>
                                <div className="nav-hov-sub-options">
                                    <a href="#">Dabler</a>
                                    <a href="#">SnippetFlow</a>
                                    <a href="#">Aerospace</a>
                                    <a href="#">WindTech</a>
                                    <a href="#">super</a>
                                    <a href="#">fire</a>
                                    <a href="#">winter</a>
                                    <a href="#">summer</a>
                                </div>
                            </div>

                            <div className="nav-hov-each-option">
                                <a href="#">Services</a> 
                            </div>   
                        </div> */}
                    </div>
                </div>

                <div className={dbnavbar["nav-each-option"]}>
                    <a href="#">What We Do</a>
                    <div className={dbnavbar["nav-each-hov-section"]}>
                        <div className={dbnavbar["nav-hov-description"]}>Here is the list of features available to the customers. We are always on the lookout for people who can embrace change to drive transformation for our customers and the communities we operate in</div>
                        <div className={dbnavbar["nav-hov-options"]}>
                            
                            <div className={dbnavbar["nav-hov-each-option"]}>
                                <a href="#" className={dbnavbar["open-sub-menu"]}>Products</a>
                                <div className={dbnavbar["nav-hov-sub-options"]}>
                                    <a href={"/datacob"}>Datacob</a>
                                    <a href={"/snippetflow"}>SnippetFlow</a>
                                    <a href="/ira">Ira AI</a>
                                    {/* <a href="#">WindTech</a> */}
                                    {/* <a href="#">super</a>
                                    <a href="#">fire</a>
                                    <a href="#">winter</a>
                                    <a href="#">summer</a> */}
                                </div>
                            </div>

                            <div className={dbnavbar["nav-hov-each-option"]}>
                                <a href="#">Documentation</a> 
                            </div>   
                        </div>
                    </div>
                </div>

                <div className={dbnavbar["nav-each-option"]}>
                    <a href="#">Insights</a>
                </div>

                <div className={dbnavbar["nav-each-option"]}>
                    <a href="#">People</a>
                </div>     

            </div>

            <div className={dbnavbar["right-section"]}>
                {/* <Link to="/contact" element={<SliderSection />}>Contact Us</Link> */}
                <a href="#contact-us">Contact Us</a>
            </div>

            <div className={dbnavbar["hamburger-menu"]}>
                <img src={hbImg} alt="hb" className={dbnavbar["hb-icon"]} onClick={handleDropdown}/>
            </div>

            <div className={`${dbnavbar["hamburger-menu-dd-top"]} ${showDropdown ? `${dbnavbar["show-hb-dd"]}` : `${dbnavbar['hide-hb-dd']}`}`}>
            <div className={dbnavbar["hb-menu-dd-items"]} onClick={handleShowSubItems}>
                <div className={dbnavbar["hb-menu-dd-item-name"]} >Products <img src={ddImg} alt="arr-down" className="arr-down-img" /></div>
                    <div className={`${dbnavbar["hb-menu-dd-sub-items"]} ${showSubItems ? dbnavbar['show-sub-items'] : dbnavbar['hide-sub-items']}`}>
                        <a href={"/datacob"} className={dbnavbar["dd-sub-item"]}>Datacob</a>
                        <a href={"/snippetflow"} className={dbnavbar["dd-sub-item"]}>SnippetFlow</a>
                        <a href={"/ira"} className={dbnavbar["dd-sub-item"]}>Ira AI</a>
                    </div>
                </div>

                
                {/* <div className={dbnavbar["hb-menu-dd-items"]} >
                    <div className={dbnavbar["hb-menu-dd-item-name"]}>Services <img src={ddImg} alt="arr-down" className={dbnavbar["arr-down-img"]} /></div>
                    <div className={dbnavbar["hb-menu-dd-sub-items"]}>

                    </div>
                </div> */}

                <div className={dbnavbar["hb-menu-dd-items"]} >
                    <a href="#contact-us" style={{textDecoration : "none"}}  onClick={handleDropdown}><div className={dbnavbar["hb-menu-dd-item-name"]}>Contact Us </div></a>
                </div>

            </div>
            
         </div>
        </>
    )
}