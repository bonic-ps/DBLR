import React from "react";
import './products.css';
import CreativeCards from '../CreativeCards/CreativeCard.jsx';
import { productLinks } from "../../App.js";

export default function Products(){

    const data = [
        {name : "Datacob", img : undefined, description : 'some description about product..', link : "/datacob"},
        {name : "Snippetflow", img : undefined, description : 'some description about product..', link : "/snippetflow"},
        {name : "Ira AI", img : undefined, description : 'some description about product..', link : "/ira"}
    ]

    return (
        <>
          <div className="products-container">
            <div className="products-head-section">
                <h2>Our Products</h2>
            </div>
            <div className="products-content-section">
                {data.map((data, i) => {return <CreativeCards key = {i} data = {data}/>})}
            </div>
          </div>
        </>
    )
}