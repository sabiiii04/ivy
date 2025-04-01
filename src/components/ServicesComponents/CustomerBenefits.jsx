import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Men from "../../assets/Men.png";

const CustomerBenefits = () => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 lg:px-20 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
                <img src={Men} alt="Business Meeting" className="rounded-lg shadow-lg w-full h-auto"/>
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Customer Benefits</h2>
                <p className="text-600 mb-4">
                    Catalysts for change before fully tested markets. Maintain wireless scenarios after intermandated applications. Predominate revolutionary.
                </p>
                <ul className="space-y-3 text-700">
                    {[
                        "We Use The Latest Diagnostic Equipment",
                        "We Are A Member Of Professional Service",
                        "Automotive Service Our Clients Receive"
                    ].map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <FaCheckCircle className="text-[#25758A] text-lg" />
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CustomerBenefits;
