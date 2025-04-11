import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import GroupPhoto from '../../assets/GroupPhoto.png';

const InsuranceSection = () => {
    return (
        <section className="max-w-[1200px] mx-auto py-16 px-6 lg:px-20">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <p className="text-sm text-[#25758A] tracking-widest uppercase mb-2">Our Philosophy</p>
                    <h2 className="text-3xl font-bold mb-2">Personal Accident & Health</h2>
                    <h2 className="text-3xl font-bold mb-6">Insurance</h2>
                    <p className="mb-8">
                        Dapibus Curae Risus Rutrum Curabitur Nunc Sociis Nullam Nisl, Aliquet Quis Iaculis Scelerisque
                        Primis Massa Imperdiet, Dis Senectus Blandit Aptent Nulla Cubilia Sodales Convallis Tortor
                        Pellentesque Nulla.
                    </p>
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="flex items-center gap-3 border border-[#25758A] px-4 py-3">
                            <FaCheckCircle className="text-[#25758A]" />
                            <span className="font-medium text-sm">We Use The Latest Diagnostic Equipment</span>
                        </div>
                        <div className="flex items-center gap-3 border border-[#25758A] px-4 py-3">
                            <FaCheckCircle className="text-[#25758A]" />
                            <span className="font-medium text-sm">We Use The Latest Diagnostic Equipment</span>
                        </div>
                    </div>
                    <button className="bg-[#25758A] text-white cursor-pointer px-6 py-2 rounded-md shadow-md hover:bg-[#1e5c6e] transition-all duration-300">
                        Contact Us
                    </button>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={GroupPhoto} alt="Group Discussion" className="w-full h-auto object-cover"/>
                </div>
            </div>
        </section>
    );
};

export default InsuranceSection;
