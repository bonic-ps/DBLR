import React from "react";
import {Link, useLocation} from 'react-router-dom';
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
    const currentLocation = useLocation();
    
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
    const [showSubItemsInsights, setShowSubItemsInsights] = React.useState(false);

    function handleShowSubItems(){ // for propducts
       setShowSubItems(!showSubItems);
    }

    function handleShowSubItemsInsights(){ // For Insights
        setShowSubItemsInsights(!showSubItemsInsights);
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

              {currentLocation.pathname !== '/' && 
                <div className={dbnavbar["nav-each-option"]}>
                    <Link to={"/"} className="db-nav-anchor-options">Home</Link>
                </div> }

                <div className={dbnavbar["nav-each-option"]}>
                    <a href="#" className="db-nav-anchor-options">Who We Are</a>
                    <div className={dbnavbar["nav-each-hov-section"]}>
                        <div className={dbnavbar["nav-hov-description"]}>we specialize in innovative solutions for data engineering, generative AI, and large
                            language models (LLMs). Our mission is to empower organizations to optimize their
                            data processes and leverage advanced AI technologies. With a focus on enhancing
                            efficiency and collaboration, we provide tools that enable data teams to unlock the
                            full potential of their data and drive impactful insights.
                        </div>
                        <div className={dbnavbar["nav-hov-options"]}>
                            
                            <Link to={'/about'}><div className={dbnavbar["nav-hov-each-option"]}>
                                {/* <Link  className={dbnavbar["open-sub-menu"]}>About Us</Link> */}
                                About Us
                                {/* <div className={dbnavbar["nav-hov-sub-options"]}>
                                    <a href={"/datacob"}>Datacob</a>
                                    <a href={"/snippetflow"}>SnippetFlow</a>
                                    <a href="/ira">Ira AI</a>
                                    <a href="#">WindTech</a>
                                    <a href="#">super</a>
                                    <a href="#">fire</a>
                                    <a href="#">winter</a>
                                    <a href="#">summer</a>
                                </div> */}
                            </div></Link>

                            {/* <div className={dbnavbar["nav-hov-each-option"]}>
                                <a href="#">Documentation</a> 
                            </div>    */}
                        </div>
                    </div>
                </div>

                <div className={dbnavbar["nav-each-option"]}>
                    <a href="#" className="db-nav-anchor-options">What We Do</a>
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
                    <a href="#" className="db-nav-anchor-options">Insights</a>
                    <div className={dbnavbar["nav-each-hov-section"]}>
                        <div className={dbnavbar["nav-hov-description"]}>Here is the list of features available to the customers. We are always on the lookout for people who can embrace change to drive transformation for our customers and the communities we operate in</div>
                        <div className={dbnavbar["nav-hov-options"]}>
                            
                            <div className={dbnavbar["nav-hov-each-option"]}>
                                <a href="#" className={dbnavbar["open-sub-menu"]}>Blog Articles</a>
                            </div>

                            <div className={dbnavbar["nav-hov-each-option"]}>
                                <a href="#">Case Studies</a> 
                            </div>   

                            <div className={dbnavbar["nav-hov-each-option"]}>
                                <a href="#">Whitepapers</a> 
                            </div>   

                            <div className={dbnavbar["nav-hov-each-option"]}>
                                <a href="#">Webinars and Tutorials</a> 
                            </div>   

                            <div className={dbnavbar["nav-hov-each-option"]}>
                                <a href="#">Industry Reports</a> 
                            </div>   

                            <div className={dbnavbar["nav-hov-each-option"]}>
                                <a href="#">News and Updates</a> 
                            </div>   
                        </div>
                    </div>
                </div>

                <div className={dbnavbar["nav-each-option"]}>
                    <a href="#" className="db-nav-anchor-options">People</a>
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

                <div className={dbnavbar["hb-menu-dd-items"]} onClick={handleShowSubItemsInsights}>
                    <div className={dbnavbar["hb-menu-dd-item-name"]} >Insights <img src={ddImg} alt="arr-down" className="arr-down-img" /></div>
                    <div className={`${dbnavbar["hb-menu-dd-sub-items"]} ${showSubItemsInsights ? dbnavbar['show-sub-items'] : dbnavbar['hide-sub-items']}`}>
                        <a href={"/datacob"} className={dbnavbar["dd-sub-item"]}>Blog Articles</a>
                        <a href={"/snippetflow"} className={dbnavbar["dd-sub-item"]}>Case Studies</a>
                        <a href={"/ira"} className={dbnavbar["dd-sub-item"]}>Whitepappers</a>
                        <a href={"/ira"} className={dbnavbar["dd-sub-item"]}>Webinars and Tutorials</a>
                        <a href={"/ira"} className={dbnavbar["dd-sub-item"]}>Industry Reports</a>
                        <a href={"/ira"} className={dbnavbar["dd-sub-item"]}>News and Updates</a>
                    </div>
                </div>

                
                {/* <div className={dbnavbar["hb-menu-dd-items"]} >
                    <div className={dbnavbar["hb-menu-dd-item-name"]}>Services <img src={ddImg} alt="arr-down" className={dbnavbar["arr-down-img"]} /></div>
                    <div className={dbnavbar["hb-menu-dd-sub-items"]}>

                    </div>
                </div> */}

                <div className={dbnavbar["hb-menu-dd-items"]} >
                    <Link to={"/about"} style={{textDecoration : "none"}}  onClick={handleDropdown}><div className={dbnavbar["hb-menu-dd-item-name"]}>About Us</div></Link>
                </div>

                <div className={dbnavbar["hb-menu-dd-items"]} >
                    <a href="#contact-us" style={{textDecoration : "none"}}  onClick={handleDropdown}><div className={dbnavbar["hb-menu-dd-item-name"]}>Contact Us </div></a>
                </div>

               { currentLocation.pathname !== "/" && <div className={dbnavbar["hb-menu-dd-items"]} >
                    <Link to={"/"} style={{textDecoration : "none"}}  onClick={handleDropdown}><div className={dbnavbar["hb-menu-dd-item-name"]}>Home</div></Link>
                </div>}


            </div>
            
         </div>
        </>
    )
}