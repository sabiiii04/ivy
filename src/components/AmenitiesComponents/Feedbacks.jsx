import React from 'react';
import David from '../../assets/Woman.png';
import Mark from '../../assets/Ginger.png';
import {FaQuoteRight} from "react-icons/fa";

const reviews = [
    {
        name: "David Smith",
        role: "Finance",
        image: David,
        review: "Dabus nisl aliquet congue tellus nascetur lectus pien mattis arcu dictumst augue volutpat felis etiam suspen disse rhoncus mauris dignissim ante."
    },
    {
        name: "Mark Jone",
        role: "Finance",
        image: Mark,
        review: "Dabus nisl aliquet congue tellus nascetur lectus pien mattis arcu dictumst augue volutpat felis etiam suspen disse rhoncus mauris dignissim ante."
    }
];

const CustomerFeedback = () => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 lg:px-20 py-16 text-center bg-gray">
            <p className="text-[#25758A] uppercase tracking-wide font-medium">Feedbacks</p>
            <h2 className="text-3xl font-bold mb-8">Customer Feedbacks</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                    <div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img src={review.image} alt={review.name}
                                         className="w-14 h-14 rounded-full object-cover"/>
                                    <div
                                        className="text-white bg-red-500 p-3 w-fit rounded-full text-sm absolute top-0 -right-3">
                                        <FaQuoteRight/></div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{review.name}</h3>
                                    <p className="text-gray-500 text-sm">{review.role}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600 italic">"{review.review}"</p>
                        </div>
                        <div className="flex items-center justify-between bg-gray-200 h-2"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerFeedback;
