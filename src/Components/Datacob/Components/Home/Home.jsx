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
            <div className="bc-head"><span className="bc-head-comp-name">DATACOB</span> is designed for data engineers and scientists, ensuring accurate,
                versioned, and high-quality data for consumers and AI models. Our all-in-one
                solution combines data modelling, pipelining, validation, and observability, all
                within a user-friendly interface. With inbuilt orchestrators and multi-language
                support, Data Cob enhances collaborative data management through
                enforced data contracts, empowering teams to work together efficiently and
                effectively. Experience the future of data management with Data Cob today!
            </div>

            <div className="bc-wrapper"><BasicCard /></div>
                    
            {/* <ol>
              <li class=""><a href="#">enforced data contracts, empowering teams to work together</a></li>
              <li class=""><a href="#">Experience the future of data management with Data Cob today!</a></li>
              <li class=""><a href="#">support, Data Cob enhances collaborative data management</a></li>
              <li class=""><a href="#">together efficiently and effectively. Experience the future</a></li>
            </ol> */}
    
            {/* is a data platform which helps in enabling data in a data warehouse to meet business needs.  */}
            <SliderManual />
            <Features />
            <ContactUsPage />
            <Footer />
          </div>
        </>
    )
}