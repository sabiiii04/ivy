import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Pride from "../../assets/Pride.png";

const CustomerBenefits = () => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 lg:px-20 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
                <img src={Pride} alt="Business Meeting" className="rounded-lg shadow-lg w-full h-auto"/>
            </div>
            <div className="w-full md:w-1/2">
                <p className="text-[20px] md:text-[23px] tracking-[2px] md:tracking-[4px] text-[#25758A]">Our Awesome Features</p>
                <h2 className="text-3xl font-bold mb-4 font-bold leading-tight uppercase tracking-wider mt-2">We pride ourselves on our </h2>
                <h2 className="text-3xl mb-4 uppercase tracking-wider">Consultant feature</h2>
                <p className="text-600 mb-4">
                    Dapibus curae risus rutrum curabitur nunc sociis nullam nisl, aliquet quis iaculis scelerisque primis massa imperdiet, dis senectus blandit aptent nulla cubilia sodales convallis tortor pellentesque nulla.
                </p>
                <ul className="space-y-3 text-700">
                    {[
                        "We use the latest diagnostic equipment",
                        "We Are A Member Of Professional Service",
                        "Automotive Service Our Clients Receive" ,
                        "We use the latest diagnostic equipment",
                        "We Are A Member Of Professional Service",
                        "Automotive Service Our Clients Receive",
                        "We use the latest diagnostic equipment"
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