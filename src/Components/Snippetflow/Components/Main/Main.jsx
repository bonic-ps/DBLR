import React from 'react';
import './main.css';
import MainSectionFour from './MainSectionFour/MainSectionFour';
import MainIntroSection from './MainIntroSection/MainIntroSection';
import MainCreativeSection from './MainCreativeSection/MainCreativeSection';
import Features from '../../Feature/Features'
import AboutProduct from '../AboutProduct/AboutProduct';
import MainAbout from './MainAbout/MainAbout';
import MainBasic from './MainBasic/MainBasic';
import MainContactUs from './MainContactus/MainContactUs';
import FeatureSlider from '../FeatureSlider/FeatureSlider';
import MainFeatures from './MainFeatures/MainFeatures';
import CreativeCard from '../CreativeCards/CreativeCard';

export default function Main(props){
    

    return (
        <>
          <div className="main-top-section">
            <div className="main-container">
                {/* This is the main section */}
                <MainIntroSection />
                <MainAbout />
                <MainBasic />
                <FeatureSlider />
                <MainFeatures />
                <MainContactUs />
                {/* <Features /> */}
                {/* <AboutProduct /> */}
                {/* <MainSectionFour /> */}
                {/* <MainCreativeSection /> */}
            </div>
          </div>
        </>
    )
}