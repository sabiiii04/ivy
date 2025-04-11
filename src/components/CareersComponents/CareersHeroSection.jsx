import React from "react";
import bg from "../../assets/Handshake.png";

const CareersHeroSection = () => {
    return (
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})`, }}>
            <div className="absolute inset-0 bg-black opacity-61"></div>
            <div className="max-w-[1350px] mx-auto max-auto relative z-10 flex items-center h-full px-6">
                <div className="w-full text-white text-start">
                    <h1 className="flex flex-col lg:leading-[80px] text-[50px] lg:text-[120px] font-black text-wrap xs:text-nowrap uppercase mt-2">
                        CAREERS
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default CareersHeroSection;