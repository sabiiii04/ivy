import React from 'react';
import HeroSection from "../components/HomeComponents/HeroSection.jsx";
import Solution from "../components/HomeComponents/Solution.jsx";
import WhatWeDo from "../components/HomeComponents/WhatWeDo.jsx";
import Consultancy from "../components/HomeComponents/BuisnessConsultancy.jsx";
import WeAreHelp from "../components/HomeComponents/WeAreHelp.jsx";

const Home = () => {
    return (
        <main>
            <HeroSection/>
            <Solution/>
            <WhatWeDo/>
            <Consultancy/>
            <WeAreHelp/>
        </main>
    );
};

export default Home;