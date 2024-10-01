import React from "react";
import './home.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Features from "../Features/Features";
import SliderManual from "../SliderManual/SliderManual";
import AutoSlider from "../AutoSlider/AutoSlider";
import ContactUsPage from "../ContactUsPage/ContactUspage";
import BasicCard from "../BasicCard/BasicCard";

export default function Home(props){

    return ( 
        <>
          <div className="home-top">
          <Navbar />
            {/* <About /> */}
            <AutoSlider />
            <div className="bc-head"><span className="bc-head-comp-name">DATACOB</span> is a data platform which helps in enabling data in a data warehouse to meet business needs. </div>
            <div className="bc-wrapper"><BasicCard /></div>
            <SliderManual />
            <Features />
            <ContactUsPage />
            <Footer />
          </div>
        </>
    )
}