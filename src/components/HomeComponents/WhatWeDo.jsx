import React from 'react';
import { PiGraduationCapLight } from "react-icons/pi";
import { GoMegaphone } from "react-icons/go";
import { LuMonitorPlay } from "react-icons/lu";
import { LuCalendarClock } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import bg3 from "../../assets/bg3.png";

const services = [
    { icon: <PiGraduationCapLight className="text-[#25758A] text-[50px]"/>, title: "Talent Search" },
    { icon: <GoMegaphone className="text-[#25758A] text-[50px]" />, title: "Megaphone" },
    { icon: <LuMonitorPlay className="text-[#25758A] text-[50px]" />, title: "Video Call Free" },
    { icon: <LuCalendarClock className="text-[#25758A] text-[50px]" />, title: "Calendar" },
    { icon: <PiCertificate className="text-[#25758A] text-[50px]" />, title: "Certificate" },
    { icon: <RiTeamLine className="text-[#25758A] text-[50px]" />, title: "Team Building" }
];
const WhatWeDo = () => {
    return (
        <section className="mx-auto max-w-[1350px] px-6 lg:px-20 py-16 text-justify relative bg-center" style={{ backgroundImage: `url(${bg3})`, }}>
            <p className="text-[20px] text-[#25758A] tracking-[2px] uppercase text-center">Key to Success</p>
            <h2 className="text-[32px] md:text-[48px] font-bold mt-2 text-center">WHAT WE DO</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        {service.icon}
                        <h3 className="text-[22px] font-semibold mt-4">{service.title}</h3>
                        <p className="text-[16px] max-w-[300px] mt-2">
                            We know how to search for the best talent. We use the latest profiling tools as part of our service,
                            which will help you develop the right job profile.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeDo;
