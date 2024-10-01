import React from "react";
// import './home.css';
import Navbar from '../Navbar/Navbar';
import SliderSection from '../SliderSection/SliderSection';
import Products from "../ProductsComp/Products";
import Footer from "../Footer/Footer";
// import About from '../About/About';
// import Features from '../Features/Features';
import FeatureSlider from '../FeatureSlider/FeatureSlider';
import ContactUs from '../ContactUs/ContactUs';

export default function Home(props){

    return (
        <>
         <div className="home-container">
            <Navbar />
            <SliderSection />
            <Products />
            <ContactUs />
            <Footer />
         </div>
        </>
    )
}