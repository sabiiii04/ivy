import React, {useState} from "react";
import bg4 from "../../assets/bg4.png";
import woman from "../../assets/Woman.png";
import team from "../../assets/Team.png";
import ginger from "../../assets/Ginger.png";
import {FaEye} from "react-icons/fa";

const businessCases = [
    {
        img: woman,
    },
    {
        img: team,
    },
    {
        img: ginger,
    },
];

const BusinessCases = () => {
    const [mouseHoverIndex, setMouseHoverIndex] = useState(-1);
    return (
        <section className="max-w-[1350px] mx-auto px-6 lg:px-20 py-16 bg-center "
                 style={{backgroundImage: `url(${bg4})`,}}>
            <p className="text-[#25758A] uppercase text-sm">
                Recent Case Studies
            </p>
            <h2 className="text-4xl font-bold mt-2">OUR BUSINESS CASES</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center">
                {businessCases.map((item, index) => (
                    <div onMouseEnter={() => setMouseHoverIndex(index)}
                         onMouseLeave={() => setMouseHoverIndex(-1)}
                         key={index} className="rounded-lg overflow-hidden shadow-lg items-center flex justify-center"
                         style={{
                             backgroundImage: `url(${item.img})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                             height: "350px",
                         }}>
                        {mouseHoverIndex === index ? (
                            <div className="bg-white px-8 py-8 rounded shadow-md overflow-hidden relative mt-30">
                                <h3 className="font-semibold text-sm">Digital Startup Agency</h3>
                                <p className="text-xs text-[#25758A]">Business growth</p>
                                <div className="absolute -bottom-8 -left-7 w-16 h-16 z-5 bg-[#145566] rounded-full"></div>
                                <div className="absolute -bottom-8 -left-8 w-16 h-16 z-15 bg-[#25758A] rounded-full"></div>
                            </div>

                        ) : (
                            <FaEye
                                className={`text-[#25758A] duration-300 bg-white rounded-full p-2 size-[50px]  align-center items-center`}/>
                        )}


                    </div>
                ))}
            </div>
        </section>
    );
};

export default BusinessCases;
