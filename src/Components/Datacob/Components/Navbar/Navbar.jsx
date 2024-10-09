import React from "react";
// import {Link} from 'react-router-dom';
import './navbar.css';
import hbImg from '../../Images/hb2.svg';
// import arrowDown from '../../Images/SliderImages/Images/arrow-down.svg';
import ddImg from '../../Images/ddImg.png';


export default function Navbar(props){

    const [scrolled, setScrolled] = React.useState(window.scrollY);
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

    //To handle the scroll
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        let navbar = document.getElementById('navbar');
        const links = document.querySelectorAll('.nav-each-option > a, .right-section > a');
        // Loop through each selected <a> element and apply the style

        if(scrolled > 20) {
            navbar.classList.add('scrolled');

            links.forEach(link => {
                link.style.color = 'black';
            });
        }
        else{
             navbar.classList.remove('scrolled');
             links.forEach(link => {
                link.style.color = 'white';
            });
            };
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrolled])


    const handleScroll = () => {
       let isScrolled = window.scrollY;
       if(isScrolled !== scrolled){
        setScrolled(isScrolled);
       }
    }


    return (
        <>
         <div className="nav-top-section" id="navbar"  >
            <div className="name-logo-container">
                <img src="https://dabler.online/assets/dabler_logo_02-7083de9b.svg" alt="logo"/>
            </div>

            <div className="nav-options">

                <div className="nav-each-option">
                    <a href="/" >Home</a>
                    {/* <div className="nav-each-hov-section">
                        <div className="nav-hov-description">We believe that people are the most important resource in any organization. We are always on the lookout for people who can embrace change to drive transformation for our customers and the communities we operate in.</div>
                        <div className="nav-hov-options">
                            
                            <div className="nav-hov-each-option">
                                <a href="#" className="open-sub-menu">Compute</a>
                                <div className="nav-hov-sub-options">
                                    <a href="#">Datacob</a>
                                    <a href="#">Tutorial</a>
                                    <a href="#">Documentation</a>
                                    <a href="#">WindTech</a>
                                </div>
                            </div>

                            <div className="nav-hov-each-option">
                                <a href="#">Services</a> 
                            </div>   
                        </div>
                    </div> */}
                </div>

                <div className="nav-each-option">
                    <a href="#" >Categories</a>
                    <div className="nav-each-hov-section">
                        {/* <div className="nav-hov-description">Here is the list of features available to the customers. We are always on the lookout for people who can embrace change to drive transformation for our customers and the communities we operate in</div> */}
                        <div className="nav-hov-options">
                            
                            <div className="nav-hov-each-option">
                                <a href="#" className="open-sub-menu">Developers</a>
                                <div className="nav-hov-sub-options">
                                    <a href="#">Documentation</a>
                                    <a href="#">Blogs</a>
                                </div>
                            </div>

                            {/* <div className="nav-hov-each-option">
                                <a href="#">Services</a> 
                            </div>    */}
                        </div>
                    </div>
                </div>

                <div className="nav-each-option">
                    <a href="#">Pricing</a>
                </div>

                <div className="nav-each-option">
                    <a href="#">Try Free</a>
                </div>  

                <div className="nav-each-option">
                    <a href="#contact-us">Contact Us</a>
                </div>     

            </div>

            <div className="right-section">
                {/* <Link to="/contact" element={<SliderSection />}>Contact Us</Link> */}
                <a href="#">Login</a> 
            </div>

            <div className="hamburger-menu">
                <img src={hbImg} alt="hb" className="hb-icon" onClick={handleDropdown}/>
            </div>

            <div className={`hamburger-menu-dd-top ${showDropdown ? 'show-hb-dd' : 'hide-hb-dd'}`}>
                <div className="hb-menu-dd-items" onClick={handleShowSubItems}>
                    <div className="hb-menu-dd-item-name" >Products <img src={ddImg} alt="arr-down" className="arr-down-img" /></div>
                    <div className={`hb-menu-dd-sub-items ${showSubItems ? 'show-sub-items' : 'hide-sub-items'}`}>
                        <a href="#" className="dd-sub-item">Dabler</a>
                        <a href="#" className="dd-sub-item">SnippetFlow</a>
                    </div>
                </div>

                
                <div className="hb-menu-dd-items" >
                    <div className="hb-menu-dd-item-name">Services <img src={ddImg} alt="arr-down" className="arr-down-img" /></div>
                    <div className="hb-menu-dd-sub-items">

                    </div>
                </div>

                <div className="hb-menu-dd-items" >
                    <a href="#contact-us" style={{textDecoration : "none"}}  onClick={handleDropdown}><div className="hb-menu-dd-item-name">Contact Us </div></a>
                </div>

            </div>
            
         </div>
         
        </>
    )
}