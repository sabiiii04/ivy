import React from 'react';
import { Link } from 'react-router-dom';
import bg2 from "../../assets/bg2.png";

const BusinessConsultancy = () => {
    return (
        <section className="relative  bg-center text-white py-20 px-6 lg:px-20" style={{ backgroundImage: `url(${bg2})`, }}>
            <div className="relative max-w-[1350px] mx-auto flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-[22px] md:text-[36px] font-bold text-center md:text-left">Need Any Business Consultancy?
                    <span className="text-[#25758A]">  Contact With Us</span></h2>
                <Link to="/contact" className="bg-[#25758A] text-white text-[16px] md:text-[18px] font-semibold px-6 py-3 rounded-lg mt-4 md:mt-0">Contact Us</Link>
            </div>
        </section>
    );
};

export default BusinessConsultancy;
