import React from 'react';
import HeroSection from "../components/ServicesComponents/HeroSection.jsx";
import ServicesSection from "../components/ServicesComponents/ServicesSection.jsx";
import BusinessGrowth from "../components/ServicesComponents/BusinessGrowth.jsx";
import CustomerBenefits from "../components/ServicesComponents/CustomerBenefits.jsx";
import Newsletter from "../components/ServicesComponents/Newsletter.jsx";

const Services = () => {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <BusinessGrowth/>
            <CustomerBenefits/>
            <Newsletter/>

        </div>
    );
};

export default Services;