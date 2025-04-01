import React from 'react';
import Newsletter from "../../assets/Newsletter.png";

const NewsletterSignup = () => {
    return (
        <section className="relative bg-cover bg-center py-16 px-6 lg:px-20" style={{ backgroundImage: "url('/Newsletter.png')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative max-w-[1200px] mx-auto text-white text-center md:text-left">
                <p className="text-sm uppercase tracking-widest">Latest Business Ideas</p>
                <h2 className="text-3xl font-bold">Sign Up Newsletter</h2>
                <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                    <input
                        type="email"
                        placeholder="Your E-Mail"
                        className="w-full md:w-[400px] px-6 py-3 text-800 rounded-full focus:outline-none"
                    />
                    <button className="bg-[#25758A] text-white px-6 py-3 rounded-full font-semibold">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSignup;
