import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import App1 from './Components/Dabler/App';
import Snippetflow from './Components/Snippetflow/App';
import Datacob from './Components/Datacob/App';
import Ira from './Components/Ira/Ira';
import About from './Components/Dabler/Components/About/About';
import AboutDabler from './Components/Dabler/Components/AboutUs/AboutDabler';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App1 />}/> 
          <Route path="/snippetflow" element={<Snippetflow />}/> 
          <Route path="/datacob" element={<Datacob />}/> 
          <Route path="/ira" element={<Ira />}/> 
          <Route path="/about" element={<AboutDabler />}/> 
          {/* <Route path="*" element={<div>No page found</div>}/>  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
