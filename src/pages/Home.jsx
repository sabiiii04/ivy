import React from 'react';
import HeroSection from "../components/HomeComponents/HeroSection.jsx";
import Solution from "../components/HomeComponents/Solution.jsx";
import WhatWeDo from "../components/HomeComponents/WhatWeDo.jsx";
import Consultancy from "../components/HomeComponents/BuisnessConsultancy.jsx";
import WeAreHelp from "../components/HomeComponents/WeAreHelp.jsx";
import OurBusinsessCases from "../components/HomeComponents/OurBusinsessCases.jsx";
import WeAreExperienced from "../components/HomeComponents/WeAreExperienced.jsx";
import TeamSection from "../components/HomeComponents/TeamSection.jsx";
import LetsWorkTogether from "../components/HomeComponents/LetsWorkTogether.jsx";
import LogoSection from "../components/HomeComponents/LogoSection.jsx";

const Home = () => {
    return (
        <main>
            <HeroSection/>
            <Solution/>
            <WhatWeDo/>
            <Consultancy/>
            <WeAreHelp/>
            <OurBusinsessCases/>
            <WeAreExperienced/>
            <TeamSection/>
            <LogoSection/>
            <LetsWorkTogether/>
        </main>
    );
};

export default Home;