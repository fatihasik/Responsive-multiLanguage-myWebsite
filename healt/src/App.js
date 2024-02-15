import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import PlanYT from "./Components/PlanYT";
import Branches from "./Components/Branches";
import FAQ from "./Components/FAQ";
import  AppBar  from "./Components/Appbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";


function App() {
  
  return (
    <Router>
      <AppBar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/plan" element={<PlanYT/>}/>
    <Route path="/branches" element={<Branches/>}/>
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  <Footer/>
</Router>
  );
}

export default App;
