import React from 'react';
import HeroSection from "../components/AmenitiesComponents/HeroSection.jsx";
import BusinessConsultancy from "../components/AmenitiesComponents/BuisnessConsultancy.jsx";
import OurTeam from "../components/AmenitiesComponents/OurTeam.jsx";
import NewsletterSignup from "../components/AmenitiesComponents/NewsletterSignup.jsx";
import GetConsulting from "../components/AmenitiesComponents/GetConsulting.jsx";
import WePride from "../components/AmenitiesComponents/WePride.jsx";
import Feedbacks from "../components/AmenitiesComponents/Feedbacks.jsx";

const Amenities = () => {
    return (
        <div>
            <HeroSection/>
            <GetConsulting/>
            <WePride/>
            <Feedbacks/>
            <BusinessConsultancy/>
            <OurTeam/>
            <NewsletterSignup/>
        </div>
    );
};

export default Amenities;