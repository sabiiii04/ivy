import React from "react";
import bg4 from "../../assets/bg4.png";
import woman from "../../assets/Woman.png";
import team from "../../assets/Team.png";
import ginger from "../../assets/Ginger.png";
import { FaEye } from "react-icons/fa";
const businessCases = [
    {
        img: woman,

    },
    {
        img: team,
    },
    {
        img: ginger,
    },
];

const BusinessCases = () => {
    return (
        <section className="max-w-[1350px] mx-auto px-6 lg:px-20 py-16 bg-center" style={{ backgroundImage: `url(${bg4})`, }}>
            <p className="text-[#25758A] uppercase tracking-wider text-sm">
                Recent Case Studies
            </p>
            <h2 className="text-4xl font-bold mt-2">OUR BUSINESS CASES</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {businessCases.map((item, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg px-20 py-30  " style={{ backgroundImage: `url(${item.img})`, }}>
                            <FaEye className="text-[#25758A] bg-white rounded-full p-2 size-[50px]  align-center items-center" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BusinessCases;
