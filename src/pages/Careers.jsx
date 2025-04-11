import React from 'react';
import CareersHeroSection from "../components/CareersComponents/CareersHeroSection.jsx";
import Insurance from "../components/CareersComponents/Insurance.jsx";
import WhyChooseSection from "../components/CareersComponents/WhyChooseSection.jsx";
import Compare from "../components/CareersComponents/Compare.jsx";

const Careers = () => {
    return (
        <div>
            <CareersHeroSection/>
            <Insurance/>
            <WhyChooseSection/>
            <Compare/>
            
        </div>
    );
};

export default Careers;