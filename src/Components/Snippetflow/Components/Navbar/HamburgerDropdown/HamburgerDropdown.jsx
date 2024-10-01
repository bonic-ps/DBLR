import React from "react";
import { Link } from "react-router-dom";
import './hamburgerDropdown.css';
import { dropdownData, data } from "../../../Data/navData";
import NavDropdownItem from "../NavDropdownItem/NavDropdownItem";
import logo from '../../../logo.svg';
import ddArrow from '../../../Images/arrow-down.svg';
import Button from '../../ButtonComponent/Button';

export default function HamburgerDropdown(props){

    function createDropdown(data){
        let hamburgerDropdown = data.map((each, i) => { 
            return (
                    <div className="hamburger-dropdown-options" key={i}>
                        <h2>{each.name}</h2>
                        <div className="hb-dd-items-section">
                            {each.dropdownItemData.map((eachItem, idx) => {
                                return ( 
                                    <>
                                    <a href={'/about'} className="hb-eachitem-section" key={props.idx}>
                                            <div className="hb-dropdownitem-img-container">
                                                <img src={logo} alt="each product" width={"48px"}/>
                                            </div>
                                            <div className="hb-dropdownitem-details-container">
                                                <h4>{eachItem.title}</h4>
                                                <p>{eachItem.description}</p>
                                            </div>
                                        </a>
                                    </>
                                )
                            })}
                        </div>
                    </div>
            )
        })
        // console.log('the dropdown items are ', hamburgerDropdown);  
        return hamburgerDropdown
    }

// This function will run whenever user clicks on the dropdown image to show the dd options
    function handleShowDropdown(event){

       
        // const headingContainer = event.currentTarget.querySelector('.hb-dd-show');
        // const dropdownWrapper = headingContainer.nextElementSibling;
        // console.log(event.currentTarget.nextElementSibling);

        // if(headingContainer.style.display == 'block'){
        //     headingContainer.style.display = 'none';
        // }
        // else{
        //     headingContainer.style.display = 'block'; 
        // }
    //     if (window.getComputedStyle(headingContainer).display === 'none') {
    //     headingContainer.style.display = 'block';
    // } else {
    //     headingContainer.style.display = 'none';
    // }
        for(let each in dropdownState){
            if(dropdownState[each] === true){
                setDropdownState(prev => { return {...prev, [each] : false}})
            }
        }

        let titleName = event.currentTarget.getElementsByClassName('hb-dd-title')[0].innerText.toLowerCase() ;
        //   console.log(titleName);
        if(currentDropdown !== titleName){
            setDropdownState(prev => {return {...prev, [titleName] : true}});
            setCurrentDropdown(titleName)
        }
        else{
            setCurrentDropdown(undefined)
        }
    }

    let [dropdownState , setDropdownState] = React.useState({products : false, solutions : false, developers:false});
    let [currentDropdown, setCurrentDropdown] = React.useState();
    let [windWidth, setWindWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSize);
        return () => window.removeEventListener('resize', setWindWidth)
    }, [])

if(props.hbDropdown === false){
    
    // Turn off all the currently active individual dropdown options.
    for(let each in dropdownState){
        if(dropdownState[each] === true){
            setDropdownState(prev => { return {...prev, [each] : false}})
        }
    }
}


    function handleWindowSize(){
        
        if(windWidth !== window.innerWidth){
            setWindWidth(window.innerWidth);
        }
        if(window.innerWidth > 1032){
            props.setHbDropdown(false);
        } 
    }

    return (
        <>
          <div className="hb-dropdown-top-section" style={{display : props.hbDropdown  && window.innerWidth <= 1032 ? 'block' : 'none'}}>
             <div className="hb-dd-and-heading" onClick={(e) => handleShowDropdown(e)}>

                <Link to={"/"}>
                    <div className="hb-dd-heading-container">
                        <div className="hb-dd-title">HOME</div>
                        {/* <div className="hb-dd-img" >
                            <img src={ddArrow} alt="an image" width={"16px"} height={"16px"}/>
                        </div> */}
                    </div>
                </Link>
                {/* <div className="hb-dd-show" style={{display : dropdownState.products ? 'block' : 'none'}}>
                    <div className="hb-dd-each-wrapper">
                        {createDropdown(dropdownData)}
                    </div>
                </div> */}
             </div>
            
             <div className="hb-dd-and-heading" onClick={(e) => handleShowDropdown(e)}>
                <div className="hb-dd-heading-container">
                    <div className="hb-dd-title">DEVELOPERS</div>
                    <div className="hb-dd-img" >
                        <img src={ddArrow} alt="an image2" width={"16px"} height={"16px"}/>
                    </div>
                </div>
                <div className="hb-dd-show" style={{display : dropdownState.developers ? 'block' : 'none'}}>
                    <div className="hb-dd-each-wrapper">
                        {createDropdown(data)}
                    </div>
                </div>
             </div>


             <div className="hb-dd-and-heading">
                <div className="hb-dd-heading-container">
                    <div className="hb-dd-title">CONTACT US</div>
                </div>
             </div>

             {/* <a href="#">
                <div className="hb-dd-and-heading">
                    <div className="hb-dd-heading-container">
                        <div className="hb-dd-title">CONNECTORS</div>
                    </div>
                </div>
             </a> */}

             <a href="#">
                <div className="hb-dd-and-heading">
                    <div className="hb-dd-heading-container">
                        <div className="hb-dd-title">LOGIN</div>
                    </div>
                </div>
             </a>

            <div className="hb-dd-btn-container">
                <Button title={'Try Free'} bg={'#433bfb'} hbg={'#1209ed'} textColor={'white'}/>
                <Button title={'Pricing'} bg={'#433bfb'} hbg={'#1209ed'} textColor={'white'}/>
            </div>

          </div>

        </>
    )
}