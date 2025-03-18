import React from "react";
import { FaChevronDown } from "react-icons/fa";
import experience from "../../assets/Experience.png";

const ExperiencedBusiness = () => {
    return (
        <section className="max-w-[1350px] mx-auto px-6 lg:px-20 py-16 bg-[#0D1321] text-white">
            <p className="text-[#25758A] uppercase tracking-wider text-sm">Why Choose Us</p>
            <h2 className="text-4xl font-bold mt-2">
                WE ARE EXPERIENCED BUSINESS <span className="text-[#25758A]">SOLUTION</span>
            </h2>
            <div className="mt-10 flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <div className="bg-[#152033] p-6 rounded-lg flex justify-between items-center">
                        <p className="text-lg font-semibold">01.  WHAT SHOULD I INCLUDED MY PERSONAL DETAILS?</p>
                        <FaChevronDown className="text-[#25758A]" />
                    </div>
                    <div className="bg-[#152033] p-6 rounded-lg flex justify-between items-center">
                        <p className="text-lg font-semibold">02. WHERE I CAN FIND MY BUSINESS GROWTH RESULT?</p>
                        <FaChevronDown className="text-[#25758A]" />
                    </div>
                    <div className="bg-[#152033] p-6 rounded-lg flex justify-between items-center">
                        <p className="text-lg font-semibold">03. DID YOU GET ANY BUSINESS CONSULTANT?</p>
                        <FaChevronDown className="text-[#25758A]" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                    <img src={experience} alt="Team" className="w-[450px] h-[450px]" />
                </div>
            </div>
        </section>
    );
};


export default ExperiencedBusiness;
