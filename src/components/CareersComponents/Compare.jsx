import React, {useState} from 'react';
import { FaHome } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { FaPlane } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaUserShield } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';
import { FaWater } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';

const CompareSection = () => {
    const [insuranceOptions, setInsuranceOptions] = useState([
        { label: 'Home', icon: <FaHome className="text-[#25758A] text-2xl mb-2" />, isSelected: false },
        { label: 'Vehicles', icon: <FaCar className="text-[#25758A] text-2xl mb-2" /> , isSelected: false },
        { label: 'Life', icon: <FaHeartbeat className="text-[#25758A] text-2xl mb-2" />, isSelected: false },
        { label: 'Business', icon: <FaBriefcase className="text-[#25758A] text-2xl mb-2" />, isSelected: false },
        { label: 'Health', icon: <FaUserFriends className="text-[#25758A] text-2xl mb-2" />, isSelected: false },
        { label: 'Travel', icon: <FaPlane className="text-[#25758A] text-2xl mb-2" />, isSelected: false },
        { label: 'Retire', icon: <FaUserShield className="text-[#25758A] text-2xl mb-2" />, isSelected: false },
        { label: 'Pet', icon: <FaDog className="text-[#25758A] text-2xl mb-2" />, isSelected: false },
        { label: 'Marine', icon: <FaWater className="text-[#25758A] text-2xl mb-2" />, isSelected: false }

    ])
    return (
        <section className="py-10 px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
                <p className="text-sm text-[#25758A] tracking-widest uppercase mb-2">
                    GET AN INSURANCE QUOTE
                </p>
                <h2 className="font-bold text-[32px] md:text-[48px] mt-2 text-center">
                    COMPARE QUOTES & GET
                </h2>
                <h2 className="font-bold text-[32px] md:text-[48px] mt-2 text-center">
                    LIFE INSURANCE
                </h2>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="grid grid-cols-3 gap-4">
                    {insuranceOptions.map((option, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => {
                                setInsuranceOptions(insuranceOptions.map((option, index2) => {
                                    if (index2 === index) {
                                        option.isSelected = !option.isSelected;
                                        return option;
                                    } else {
                                        return option;
                                    }
                                }));
                            }}
                            className={`${option.isSelected ? "bg-blue-400" : "bg-white"} rounded-md shadow p-4 flex flex-col items-center hover:bg-gray-200 transition`}
                        >
                            {option.icon}
                            <span className="text-sm font-medium">{option.label}</span>
                        </button>
                    ))}
                </div>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="p-3 rounded shadow-sm" />
                    <input type="email" placeholder="Your Email" className="p-3 rounded shadow-sm" />
                    <input type="text" placeholder="Your Address" className="p-3 rounded shadow-sm" />
                    <input type="text" placeholder="Your Number" className="p-3 rounded shadow-sm" />
                    <button className="bg-[#25758A] text-white py-2 px-6 rounded shadow w-fit mt-2">
                        Contact Us
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CompareSection;

