import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Intro from "./Components/Introduction/Intro";
import Footer from "./Components/Footer/Footer";
import IraCard from "./Components/Cards/IraCard";

export default function Ira(props){

    return (
        <>
          <div className="ira-container">
            <Navbar />
            <Main />
            {/* <Intro /> */}
            <IraCard />
            <Footer />
          </div>
        </>
    )
}