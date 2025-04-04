import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import guy1 from "../../assets/Guy1.png";

const teamMembers = [
    {
        name: "Alan Dosan",
        role: "Nutrition",
    },
    {
        name: "Abdul Rahman",
        role: "Diet Planer",
    },
    {
        name: "Amelia Colver",
        role: "Doctor",
    },
];

const TeamSection = () => {
    return (
        <section className="max-w-[1350px] mx-auto px-6 lg:px-20 py-16 text-center">
            <p className="text-[#25758A] uppercase tracking-wider text-sm">OUR EXPERTS</p>
            <h2 className="text-4xl font-bold mt-2">OUR TEAM MATES</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="relative bg-white rounded-lg shadow-lg mx-auto w-full lg:w-full">
                        <img src={guy1} alt="member" className="w-full h-[300px] lg:h-[400px] object-cover rounded-lg"/>
                        <div className="bg-white p-5 min-w-[146px] absolute -bottom-10 shadow-lg rounded-lg z-10 mx-5">
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm">{member.role}</p>
                            <div className="flex justify-center gap-3 mt-3">
                                <FaFacebookF className="cursor-pointer text-blue-600" />
                                <FaTwitter className="cursor-pointer text-blue-400" />
                                <FaLinkedinIn className="cursor-pointer text-blue-700" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;