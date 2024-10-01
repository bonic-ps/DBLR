import React from "react";
import './features.css';
import { featureData } from "./feature.js";
import FeatureItems from "./ItemsComponent/FeatureItems";


export default function Features(){
  // console.log(mainData)

  let [scroll, setScroll] = React.useState(window.scrollY); console.log(scroll)
  React.useEffect(() => {
    window.addEventListener('scroll', () => {setScroll(window.scrollY)})
  }, [])
  let mainItems = featureData.map((eachItem, idx) => {
    return (
      <FeatureItems eachItem = {eachItem} keyss={idx} />
    )
  })

    return (
        <> 
          <div className="features-top">
            <div className="features-container">
              <div className="features-heading-container">
                <h1 className="features-heading">Fully Managed and Adaptable</h1>
                <div>snippetflow allows us to accelerate data movement </div>
              </div>
              <section className="features-items-section">
                {mainItems}
              </section>
            </div>
          </div>
        </>
    )
}