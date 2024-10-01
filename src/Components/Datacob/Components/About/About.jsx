import React from "react";
import './about.css';
import cloudImg from '../../Images/cloud-bg.jpg'

export default function About(props){
  const [animationProgress, setAnimationProgress] = React.useState(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimationProgress(prevProgress => {
  //       const newProgress = prevProgress + 1;
  //       return newProgress > 100 ? 100 : newProgress;
  //     });
  //   }, 10); // Adjust the interval duration for speed

  //   return () => clearInterval(interval);
  // }, []);

    return (
        <>
          <div className="about-top">
            <div className="about-container">
              {/* <div className="about-texts">
               <h1 className="about-title">New Product</h1>
              </div>
              <div className="about-img-wrapper">
                <div className="img-bg-design"></div>
                <img src={cloudImg} alt="about-img" className="about-img" />
              </div> */}
               {/* <div className="loader-container">
                  <div className="spinner"></div>
               </div> */}
            </div>
          </div>
        </>
    )
}