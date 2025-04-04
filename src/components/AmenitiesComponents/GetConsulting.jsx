import React from 'react';
import GetConsulting from '../../assets/GetConsulting.png';

const GetConsultingSection = () => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 lg:px-20 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
                <img src={GetConsulting} alt="Consulting" className="rounded-lg shadow-lg w-full h-auto"/>
            </div>

            <div className="w-full md:w-1/2">
                <p className="text-[#25758A] uppercase tracking-wide font-medium">Just a Consultancy</p>
                <h2 className="text-3xl font-bold mt-2">
                    Get Consulting for <br />
                    <span className="text-[#25758A]">Better Business Growth</span>
                </h2>
                <p className="text-600 mt-4">
                    Dapibus Curae Risus Rutrum Curabitur Nunc Sociis Nullam Nisi, Aliquet Quis Iaculis Scelerisque
                    Primis Massa Imperdiet, Dis Senectus Blandit Aptent Nulla Cubilia Sodales Convallis Tortor Pellentesque Nulla.
                </p>
                <div className="mt-6 space-y-4">
                    <div>
                        <p className="text-700 font-medium mb-1">Business Strategy <span className="float-right">70%</span></p>
                    </div>
                    <div>
                        <p className="text-700 font-medium mb-1">Company Strength <span className="float-right">93%</span></p>
                    </div>
                </div>
                <button className="mt-6 bg-[#25758A] text-white px-6 py-3 font-semibold rounded-md shadow-md hover:bg-[#1d5f74] transition">
                    Contact Us
                </button>
            </div>
        </section>
    );
};

export default GetConsultingSection;
