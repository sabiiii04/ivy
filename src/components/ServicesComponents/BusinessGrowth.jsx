import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { GiProcessor } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import { FaRegHandPointer } from "react-icons/fa6";

const BusinessGrowthManagement = () => {
    const services = [
        {
            icon: <FaCarAlt className="text-[#25758A] text-[50px]" />,
            title: "Instant Business Growth",
            description: "Maintain Wireless Scenarios After Sure Quality Vectors Future."
        },
        {
            icon: <GiProcessor className="text-[#25758A] text-[50px]" />,
            title: "Easy Customer Service",
            description: "Maintain Wireless Scenarios After Sure Quality Vectors Future."
        },
        {
            icon: <FaRegHandPointer className="text-[#25758A] text-[50px]" />,
            title: "24/7 Quality Service",
            description: "Maintain Wireless Scenarios After Sure Quality Vectors Future."
        },
        {
            icon: <IoEyeOutline className="text-[#25758A] text-[50px]" />,
            title: "Quality Cost Service",
            description: "Maintain Wireless Scenarios After Sure Quality Vectors Future."
        }
    ];

    return (
        <section className="max-w-[1350px] mx-auto px-6 lg:px-20 py-16">
            <div className="text-left">
                <h1 className="text-[50px] font-semibold">Business Growth Management</h1>
                <p className="mt-4 text-lg max-w-[900px]">
                    Continually myocardinate holistic mindshare with client-based web services. Assertively e-enable catalysts for change before tested markets. Phosfluorescently maintain wireless scenarios after intermandated applications. Conveniently predominate revolutionary quality vectors through future-proof manufactured products. Enthusiastically transform distinctive collaboration.
                </p>
                <span></span>
                <p>
                    Intrinsicly coordinate multifunctional functionalities reliable potentialities. Objectively envisioneer high in convergence through collaborative networks. Interactively generate B2C e-tailers for business data restore fully researched relationships through resource maximizing results.
                </p>
            </div>
            <div>

            </div>
            <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
                {services.map((service, index) => (
                    <li
                        key={index}
                        className="bg-gray-100 p-6 shadow-lg rounded-lg flex items-start text-left space-x-4"
                    >
                        <div className=" justify-center">
                            {service.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <p className="mt-2 text-sm">{service.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-16 text-left">
                <p className="text-lg max-w-[900px]">
                    Flexiboresecurity Maintain Wireless Scenarios After Intermediated Applications. Conveniently Unique Predominate Revolutionary Quality Vectors Through Future-Pred/Manufactured Products.
                </p>
            </div>
        </section>
    );
};

export default BusinessGrowthManagement;
