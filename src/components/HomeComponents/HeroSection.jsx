import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "../assets/bg.png" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full px-6">
                <div className="max-w-4xl text-white text-center">
                    <p className="text-lg uppercase tracking-widest">Make Your Strategy Strong</p>
                    <h1 className="text-5xl md:text-6xl font-bold uppercase mt-2">Grow Business</h1>
                    <p className="mt-4 text-lg leading-relaxed">
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</span>
                        <span>euismod tincidunt ut laoreet dolore magna aliquam erat</span>
                    </p>
                    <Link to="/contact" className="inline-block mt-6 px-6 py-3 bg-[#145566] hover:bg-[#145578] text-white font-semibold rounded-lg shadow-md transition">
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
