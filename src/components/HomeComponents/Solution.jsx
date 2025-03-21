import React from 'react';
import SolutionPhoto from '../../assets/SolutionImg.png';
import People from '../../assets/People.png';
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Solution = () => {
    const pros = [
        "24/7 Call Services Available",
        "Great Skilled Consultant",
        "Expert Team Members",
        "Reasonable Project Price",
        "Leading Business Solution",
        "How to improve business",
        "Services we provide",
    ];

    return (
        <section className="mx-auto max-w-[1350px] px-6 md:px-20 py-10 md:py-20 flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-16">
            <img src={SolutionPhoto} alt="Solution" className="w-full md:w-[50%]" />
            <div className="w-full lg:w-[50%] text-center md:text-left">
                <p className="text-[20px] md:text-[23px] tracking-[2px] md:tracking-[4px]">Easy business solution</p>
                <h2 className="flex flex-col text-wrap xs:text-nowrap text-[40px] md:text-[60px] font-bold leading-tight">
                    <span>The most leading</span>
                    <span className="font-semibold text-[32px] md:text-[57px]">Solution for you</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-6 my-6">
                    <div className="flex flex-row gap-4">
                        <div className="w-[20px] bg-[#25758A] rounded-[25px] mb-2 mx-auto md:mx-0" />
                        <p className="text-[17px] md:text-[19px]">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.
                        </p>
                    </div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 text-center md:text-left">
                    {pros.map((pro, index) => (
                        <li key={index} className="flex items-center gap-2 justify-center md:justify-start">
                            <IoMdCheckmarkCircle className="text-[#25758A] text-[21px]" />
                            <span className="text-[17px] md:text-[19px] font-semibold ">{pro}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col md:flex-row mt-10 items-center gap-6 md:gap-10">
                    <img src={People} alt="People" className="h-[60px] md:h-[60px]" />
                    <p className="flex flex-col items-center md:items-start">
                        <span className="font-bold text-[22px] md:text-[25px]">1500+</span>
                        <span className="font-semibold text-[18px] md:text-[20px] text-[#145566]">Active Reviews</span>
                    </p>
                    <Link to="/contact" className="bg-[#145566] text-white text-[18px] font-semibold px-6 md:px-10 py-3 rounded-[12px]">Contact us</Link>
                </div>
            </div>
        </section>
    );
};

export default Solution;
