import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/bg.png";


const HeroSection = () => {
    return (
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})`, }}>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="max-w-[1350px] mx-auto max-auto relative z-10 flex items-center justify-start h-full px-6">
                <div className="w-full text-white text-start">
                    <h1 className="flex flex-col lg:leading-[80px]">
                        <span className="text-[18px] lg:text[20px] font-medium uppercase tracking-widset">Make Your Strategy Strong</span>
                        <span className="text-[50px] lg:text-[120px] font-black text-wrap xs:text-nowrap uppercase mt-2">Grow Business</span>
                    </h1>
                    <p className="mt-10 text-[18px] lg:text-[20px] font-bold flex flex-col gap-5">
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</span>
                        <span>euismod tincidunt ut laoreet dolore magna aliquam erat</span>
                    </p>
                    <Link to="/contact" className="inline-block mt-12 px-6 py-3 bg-[#145566] hover:bg-[#145578] text-white font-semibold rounded-lg shadow-md transition">
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
