import React from 'react';
import {FaCar} from "react-icons/fa";
import {FaHandPointUp} from "react-icons/fa";
import {FaHandshake} from "react-icons/fa";
import {FaMoneyBillTrendUp} from "react-icons/fa6";

const BusinessGrowthManagement = () => {
    const services = [
        {
            icon: <FaCar className="text-white text-[50px]"/>,
            title: "Instant Business Growth",
            description: "Maintain Wireless Scenarios After Sure Quality Vectors Future."
        },
        {
            icon: <FaHandshake className="text-white text-[50px]"/>,
            title: "Easy Customer Service",
            description: "Maintain Wireless Scenarios After Sure Quality Vectors Future."
        },
        {
            icon: <FaHandPointUp className="text-white text-[50px]"/>,
            title: "24/7 Quality Service",
            description: "Maintain Wireless Scenarios After Sure Quality Vectors Future."
        },
        {
            icon: <FaMoneyBillTrendUp className="text-white text-[50px]"/>,
            title: "Quality Cost Service",
            description: "Maintain Wireless Scenarios After Sure Quality Vectors Future."
        }
    ];

    return (
        <section className="max-w-[1350px] mx-auto px-6 lg:px-20 py-6 relative">
            <h2 className="text-[40px] md:text-[60px] font-bold leading-tight font-bold mt-2 text-start">Business Growth Mangment</h2>
            <div className=" mx-auto pt-10 flex flex-col md:flex-row items-center gap-10">
                <div className="w-full">
                    <p className="text-600 mb-4 leading-7">
                        Continually myocardinate holistic mindshare with client-based web services. Assertively e-enable
                        catalysts for change before tested markets. Phosfluorescently maintain wireless scenarios after
                        intermandated applications. Conveniently predominate revolutionary quality vectors through
                        future-proof manufactured products. Enthusiastically transform distinctive collaboration.
                    </p>
                    <p className="text-600 mb-4 leading-7">Intrinsicly coordinate multifunctional functionalities reliable potentialities. Objectively
                        envisioneer high in convergence through collaborative networks. Interactively generate B2C
                        e-tailers for business data restore fully researched relationships through resource maximizing
                        results.</p>
                </div>
                <div
                    className="w-full md:w-1/3 bg-[#25758A] text-white p-6 flex flex-col items-center justify-center shadow-lg rounded-lg">
                    <h2 className="text-xl font-bold">IVY</h2>
                    <p className="text-center mt-2">Need Help? We Are Here To Help You</p>
                    <button className="mt-4 bg-white text-[#25758A] px-4 py-2 font-semibold rounded-md shadow-md">
                        Contact Us
                    </button>
                </div>
            </div>
            <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <li key={index} className="bg-gray-100 p-6 shadow-lg rounded-lg flex items-start gap-4">
                        <div className="bg-[#25758A] p-4 rounded-full w-16 h-16 flex items-center justify-center">
                            {service.icon}
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <p className="mt-2 text-sm">{service.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="gap-10 pt-16 items-center">
                <p className="text-600 mb-4 leading-7">Phosfluorescently maintain wireless scenarios after intermandated applications. Conveniently unique
                    predominate revolutionary quality vectors through future-proof manufactured products. Objectively
                    envisioneer high solution convergence through collaborative networks. Interactively generate B2C
                    e-tailers for business data restore fully researched relationships through resource maximizing
                    results.</p>
                <p className="text-600 mb-4 leading-7">Assertively e-enable catalysts for change before fully tested markets. Phosfluo rescently is maintain
                    solve wireless scenarios after intermandated applications. Conveniently predominate busin
                    revolutionary quality vectors through future-proof manufactured products. Enthusiastically transform
                    distinctive collaboration.
                    Phosfluorescently maintain wireless scenarios after intermandated applications. Conveniently
                    predominate misslat revolutionary quality vectors through future-proof manufactured products.</p>
            </div>
            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
                {["STEP ONE", "STEP TWO", "STEP THREE"].map((step, index) => (
                    <div key={index} className="flex flex-col items-center  p-6 rounded shadow w-full md:w-1/3">
                        <div
                            className="w-12 h-12 bg-[#25758A] text-white flex items-center justify-center rounded-full text-lg font-bold">
                            {index + 1}
                        </div>
                        <h3 className="mt-4 font-semibold">{step}</h3>
                        <p className="text-sm text-600 text-center">Tactical Services Through Market Web Services</p>
                    </div>
                ))}
            </div>
            <div className="gap-10 pt-16 items-center">
            <p className="text-600 mb-4 leading-7">Conveniently predominate revolutionary quality vectors through future-proof manufactured products.
                Objectively envisioneer high in convergence through collaborative networks. Interactively generate B2C
                tailers for business data restore fully researched relationships through</p>
            </div>
        </section>
    );
};

export default BusinessGrowthManagement;
