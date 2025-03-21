import React from "react";
import { HiArrowRight } from "react-icons/hi";
import team from "../../assets/TeamTable.png";

const services = [
    "Financial Advices",
    "Investment Strategy",
    "Strategy Growth",
    "Tax Strategy",
    "Business Planning",
    "Market Research",
];

const ServicesSection = () => {
    return (
        <section className="max-w-[1350px] mx-auto flex flex-col md:flex-row items-center gap-10 px-6 lg:px-20 py-16">
            <div className="w-full md:w-2/3">
                <img src={team} alt="Business Meeting" className="w-full rounded-lg" />
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-[25px] font-semibold mb-4">Our Services</h3>
                <ul className="flex flex-col gap-3">
                    {services.map((service, index) => (
                        <li key={index} className="flex justify-between items-center bg-white px-4 py-3 rounded-md hover:bg-gray-100">
                            <span>{service}</span>
                            <HiArrowRight className="text-[#25758A]" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ServicesSection;
