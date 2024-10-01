import React from 'react';
import './maincreativesection.css';
import CreativeCard from '../../CreativeCards/CreativeCard';


export default function MainCreativeSection(){


    return (
        <div className="creative-card-top-section">
            <CreativeCard />
            <CreativeCard />
            <CreativeCard />
        </div>
    )
}