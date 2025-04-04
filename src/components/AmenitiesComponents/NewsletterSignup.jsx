import React from 'react';
import Newsletter from "../../assets/Newsletter.png";

const NewsletterSignup = () => {
    return (
        <section className="relative bg-cover bg-center text-white  h-[200px] flex items-center px-6 py-20 lg:px-20" style={{ backgroundImage: `url(${Newsletter})` }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="max-w-[1350px] mx-auto w-full flex flex-col md:flex-row justify-between items-center z-10">
                <p className="text-sm uppercase tracking-widest">Latest Business Ideas</p>
                <h2 className="text-3xl font-bold">Sign Up Newsletter</h2>
                <div className="mt-6 flex flex-row items-center gap-4 bg-white rounded-full">
                    <input
                        type="email"
                        placeholder="Your E-Mail"
                        className="w-full md:w-[400px] px-6 py-3 text-800 rounded-full"
                    />
                    <button className="bg-[#25758A] text-white px-6 py-3 rounded-full font-semibold text-nowrap">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSignup;