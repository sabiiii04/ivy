import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { GiProcessor } from "react-icons/gi";
import help from '../../assets/help.png';

const WeAreHelp = () => {
    return (
        <section className="max-w-[1350px] mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-10">
            <div className="relative w-full lg:w-1/2 flex justify-center">
                <img src={help} alt="Clients"/>
            </div>
            <div className="w-full lg:w-1/2 text-left">
                <p className="text-[18px]  tracking-wider uppercase">Easy Business Solution</p>
                <h2 className="text-[30px] lg:text-[48px] font-bold leading-tight mt-2">
                    WE ARE HELP OUR <span>CLIENTS</span> <span className="text-[#25758A]">FOR GOAL</span>
                </h2>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
                <div className="mt-8 space-y-6">
                    <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow">
                        <IoEyeOutline className="text-[#25758A] text-[50px] mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Strategic Vision Work</h3>
                            <p>Dorem Ipsum Dolor Sit Amet, Consectetur Mod Tempor Incididunt Business Phasellus Gravida.</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow">
                        <GiProcessor className="text-[#25758A] text-[50px] mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Tactical Vision Work</h3>
                            <p>Dorem Ipsum Dolor Sit Amet, Consectetur Mod Tempor Incididunt Business Phasellus Gravida.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeAreHelp;