import React from "react";
import './footer.css';  import reactlogo from '../../logo.svg'
import { productLinks, serviceLinks, resourceLinks, socialLogos} from "../../Data/footerData";
import FooterItem from "./FooterItems/FooterItem";


export default function Footer(props){
let socialLinks = socialLogos.map(eachLogo => {return (<a href={eachLogo.link}> <img src={eachLogo.logo} alt="f" style={{height: "36px", width: "36px"}}/></a>)})

    return (
        <>
          <div className="footer-top-section">
            <div className="footer-container">
               <div className="footer-items-wrapper">
                    <div className="about-company">
                        <div className="company-logo" style={{width:" 40px", display: "flex", marginBottom: "2rem", fontSize: "1.4rem", fontWeight: "400"}}>
                            <img src={reactlogo} alt="company logo" />SnippetFlow
                        </div>
                        <div className="company-description" style={{marginBottom: "1.6rem", textAlign: "start"}}> SnippetFlow is an open-source data integration engine that helps you consolidate your data in your data warehouses, lakes and databases.</div>
                        <div className="social-media" style={{display: "flex" , gap: "1rem"} }>
                            {socialLinks}
                        </div>
                    </div>                    
                    <FooterItem title={"RESOURCES"} linksArr={serviceLinks}/>
                    <FooterItem title={"DOCUMENTAION"} linksArr={productLinks}/>
                    <FooterItem title={"SOCIAL MEDIA"} linksArr={resourceLinks}/>
               </div>
            </div>
          </div>
        </>
    )
}