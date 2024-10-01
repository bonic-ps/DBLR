import React from 'react';
import './aboutproduct.css';
import Button from '../ButtonComponent/Button';

export default function AboutProduct(props){

    return (
        <>
          <div className="aboutproduct-top-section">
            <div className="aboutproduct-container">
                <h4 className='aboutproduct-heading'>What is SnippetFlow?</h4>
                <p className="aboutproduct-description">SnippetFlow is a task orchestration tool which helps to run compute tasks in a serverless manner at infinite scale. SnippetFlow can deploy your tasks in any cloud provider.</p>
                <div className="aboutproduct-btn"><Button title={'Book a Demo'} bg={'white'} textColor={'#f031c7'} /></div>
            </div>
          </div>
        </>
    )
}