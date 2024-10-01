import React, { useState, useEffect, useRef } from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import hblogo from '../../Images/PNG/hb_logo.png';


export default function Navbar(props){

    const navRef = useRef();

    const [scrolled, setScrolled] = useState(window.scrollY);
    console.log('navbar is ', navRef)
    console.log(scrolled)

    useEffect(() => {
        const handleScroll = () => {
            const windScroll = window.scrollY;
            if (windScroll !== scrolled) {
                setScrolled(windScroll);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);
    
    useEffect(() => {
        if (scrolled > 20) {
            navRef.current.classList.add("ira-nav-scroll");
        } else {
            navRef.current.classList.remove("ira-nav-scroll");
        }
    }, [scrolled]);


    const [showMobileMenu, setMobileMenu] = useState(false);

    function handleShowMenu(){
        setMobileMenu(prev => !prev);
    }

    return (
        <> 
          <div className="ira-nav-container" ref={navRef}>
            <div className="ira-nav-wrapper">
                <div className="ira-nav-left">
                    <h4>App logo</h4>
                    <img src="" alt="logo" className="ira-nav-logo"/>
                </div>
                <div className="ira-nav-right">
                    <Link className="ira-nav-link-hovline" to="/">Home</Link>
                    <Link className="ira-nav-link-hovline  ira-nav-links" >
                        Developer
                        <div className="ira-nav-hov-menu-container">
                            <div className="ira-nav-hov-menu">
                                <div className="options">Water</div>
                                <div className="options">AI Model</div>
                                <div className="options">Windgate</div>
                                <div className="options">Fireball</div>
                            </div>
                        </div>
                    </Link>
                    <Link className="ira-nav-link-hovline  ira-nav-links" >Pricing</Link>
                    <Link className="ira-nav-link-hovline  ira-nav-links" to={"/snippetflow"}>Try Free</Link>
                    <a href="/world" className="ira-nav-link-hovline">Login</a>
                    <a href="#footers" className="ira-nav-link-hovline">Contact</a>
                </div>

                <div className="ira-nav-hb-container" onClick={handleShowMenu}><img src={hblogo} alt="hb logo" className="ira-hb-logo" /></div>

                <div className={`ira-nav-mobile-menu-container ${showMobileMenu ? '' : 'ira-hide-mobile-menu'}`}>
                   <div className="ira-nav-mobile-menu">
                        <Link className="ira-nav-mobile-link" to="/">Home</Link>
                        <Link className="ira-nav-mobile-link" >
                            Developer
                            {/* <div className="ira-nav-hov-menu-container">
                                <div className="ira-nav-hov-menu">
                                    <div className="options">Water</div>
                                    <div className="options">AI Model</div>
                                    <div className="options">Windgate</div>
                                    <div className="options">Fireball</div>
                                </div>
                            </div> */}
                        </Link>
                        <Link className="ira-nav-mobile-link" >Pricing</Link>
                        <Link className="ira-nav-mobile-link" to={"/snippetflow"}>Try Free</Link>
                        <a href="/world" className="ira-nav-mobile-link">Login</a>
                        <a href="#footers" className="ira-nav-mobile-link">Contact</a>
                   </div>
                </div>
                
            </div>
          </div>
        </>
    )
}