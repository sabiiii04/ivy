import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { GiProcessor } from "react-icons/gi";
import help from '../../assets/help.png';

const WeAreHelp = () => {
    const whatWeDo = [
        {
            icon: <IoEyeOutline className="text-white text-[50px]" />,
            h3: "Tactical Vision Work",
            p: "Dorem Ipsum Dolor Sit Amet, Consectetur Mod Tempor Incididunt Business Phasellus Gravida."
        },
        {
            icon: <GiProcessor className="text-white text-[50px]" />,
            h3: "Tactical Vision Work",
            p: "Dorem Ipsum Dolor Sit Amet, Consectetur Mod Tempor Incididunt Business Phasellus Gravida."
        },
    ];

    return (
        <section className="max-w-[1350px] mx-auto px-6 lg:px-20 py-16 flex lg:flex-row flex-col-reverse items-center gap-10">
            <div className="relative w-full lg:w-1/2 flex justify-center">
                <img src={help} alt="Clients" />
            </div>
            <div className="w-full lg:w-1/2 text-left">
                <p className="text-[18px] tracking-wider uppercase">Easy Business Solutions</p>
                <h2 className="max-w-[500px] text-[40px] font-bold leading-tight mt-2">
                    WE ARE HELP OUR <span className="text-[#25758A]">CLIENTS</span>
                    <span className="text-[#25758A]"> FOR GOAL</span>
                </h2>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
                    nonummy nibh tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
                <div className="mt-8 space-y-6">
                    {whatWeDo.map((item, index) => (
                        <div key={index} className="flex gap-6 items-center bg-gray-100 p-6 shadow">
                            <div className="bg-[#25758A] p-3 -ml-16">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{item.h3}</h3>
                                <p className="text-sm">{item.p}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeAreHelp;