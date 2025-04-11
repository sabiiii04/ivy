import React from 'react';
import { BsUmbrella } from "react-icons/bs";
import { RxGlobe } from "react-icons/rx";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const WhyChooseSection = () => {
    return (
        <section className="py-16 px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
                <p className="text-sm text-[#25758A] tracking-widest uppercase mb-2">OUR BENEFIT</p>
                <h2 className="font-bold text-[32px] md:text-[48px] font-bold mt-2 text-center">WHY YOU CHOOSE ASRI?</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
                <div className="flex flex-col items-center">
                    <BsUmbrella className="text-[#25758A] text-3xl mb-2" />
                    <p><strong>Full protection</strong><br />insurance</p>
                </div>
                <div className="flex flex-col items-center">
                    <RxGlobe className="text-[#25758A] text-3xl mb-2" />
                    <p><strong>780+ Employees</strong><br />Worldwide</p>
                </div>
                <div className="flex flex-col items-center">
                    <TbTargetArrow className="text-[#25758A] text-3xl mb-2" />
                    <p><strong>Target Fillup</strong><br />for Clients</p>
                </div>
                <div className="flex flex-col items-center">
                    <HiOutlineRocketLaunch className="text-[#25758A] text-3xl mb-2" />
                    <p><strong>Super Fars</strong><br />Support</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
