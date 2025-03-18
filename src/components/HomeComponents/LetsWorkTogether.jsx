import React from "react";
import bg5 from "../../assets/bg5.png";

const BusinessDiscussion = () => {
    return (
        <section className="relative bg-cover bg-center text-white  h-[200px] flex items-center px-6 lg:px-20" style={{ backgroundImage: `url(${bg5})` }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="max-w-[1350px] mx-auto w-full flex flex-col md:flex-row justify-between items-center z-10">
                <h2 className="text-xl md:text-2xl font-semibold">
                    Let’s discuss about how we can help
                    <span>make your business better</span>
                </h2>
                <button className="bg-[#25758A] px-4 py-2 text-md md:text-sm font-semibold rounded-md shadow-md">
                    Let’s Work Together
                </button>
            </div>
        </section>
    );
};

export default BusinessDiscussion;
