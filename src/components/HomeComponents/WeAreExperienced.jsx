import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import experience from "../../assets/Experience.png";

const ExperiencedBusiness = () => {
    const faqs = [
        {
            question: "What should I include in my personal details?",
            answer: "Negue partiner nascetur facilisis suscipit ridiculus augue lobortis imperdiet vivamus...",
        },
        {
            question: "Where can I find my business growth result?",
            answer: "Business growth results can be found through analytics platforms...",
        },
        {
            question: "Did you get any business consultant?",
            answer: "Yes, we provide top-notch business consultancy services...",
        },
    ];
    const [selectedFaqIndex, setSelectedFaqIndex] = useState(-1);

    return (
        <section className="px-6 lg:px-20 py-16 bg-[#0D1321] text-white">
            <div className="max-w-[1350px] mx-auto">
                <p className="text-[#25758A] uppercase tracking-wider text-sm">Why Choose Us</p>
                <h2 className="text-4xl font-bold mt-2">
                    WE ARE EXPERIENCED BUSINESS <span className="text-[#25758A]">SOLUTION</span>
                </h2>
                <div className="mt-10 flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <div
                                onClick={() => setSelectedFaqIndex(selectedFaqIndex === index ? -1 : index)}
                                key={index}
                                className={`hover:cursor-pointer ${selectedFaqIndex === index ? "bg-white text-black" : "bg-[#152033]"} p-6 rounded-lg`}
                            >
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-semibold">
                                        <span className="text-[#25758A] text-[25px] mr-2">{index + 1}.</span> {faq.question}
                                    </p>
                                    <FaChevronDown className={`text-[#25758A] ${selectedFaqIndex === index ? "rotate-180" : "rotate-0"}`} />
                                </div>
                                {selectedFaqIndex === index && (
                                    <p className="px-5 pt-5">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                        <img src={experience} alt="Team" className="w-[450px] h-[450px] object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperiencedBusiness;