import React from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App1() {
  console.log(window.innerWidth)
  return (
    <>
      <Home />
    </>
  );
}


export const productLinks = {
  datacob : "https://dc-website-gnrl.onrender.com",
  snippetflow : "https://sf-website-2.onrender.com"
}

export default App1;
