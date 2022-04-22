import React from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';
import HomePage from "./HomePage";
import Country from './Country';
// import Brand from "./Brand";

function Pages() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:country" element={<Country />} />
        {/* <Route path="/brand/:brand" element={<Brand />} /> */}
    </Routes>
  )
}

export default Pages;