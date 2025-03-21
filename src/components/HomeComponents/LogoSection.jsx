import React from "react";
import bg6 from "../../assets/bg6.png";
import logo1 from "../../assets/Logo.svg";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";

const logos = [logo1, logo1, logo1, logo1, logo2, logo2, logo3, logo4];

const LogoSection = () => {
    return (
        <section className="py-20 bg-center">
            <div className="py-10 bg-cover bg-center" style={{ backgroundImage: `url(${bg6})` }}>
            <div className="max-w-[1350px] mx-auto flex flex-wrap justify-center gap-6 px-6">
                {logos.map((logo, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center w-32 h-20">
                        <img src={logo} alt={`Logo ${index + 1}`} className="max-w-full max-h-full object-contain" />
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default LogoSection;
