import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Amenities from "./pages/Amenities.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";
import "./App.css"
import Navbar from "./components/Navbar.jsx";
import React from "react";
import Footer from "./components/Footer.jsx";

function App(){
  return (
      <>
          <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/amenities" element={<Amenities/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/careers" element={<Careers/>}/>
        </Routes>
          <Footer/>
      </>
  )
}
export default App;