import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelopeOpenText} from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import locationBg from '../../assets/map.png';

const ContactSection = () => {
    return (
        <section className="bg-white py-16 px-6 lg:px-20 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <div className="w-full h-[400px]">
                    <img src={locationBg} alt="Map Location" className="w-full h-full object-cover rounded-md shadow-md"/>
                </div>
                <div className="bg-gray-100 p-8 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Get In Touch!</h3>
                    <p className="mb-6 text-sm">
                        get the right service, determine what you need, contact us for the most suitable services.
                    </p>
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border-none rounded-md shadow-sm bg-white focus:outline-none"/>
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border-none rounded-md shadow-sm bg-white focus:outline-none"/>
                        <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border-none rounded-md shadow-sm bg-white focus:outline-none"/>
                        <textarea placeholder="Message..." className="w-full px-4 py-2 border-none rounded-md shadow-sm bg-white h-24 resize-none focus:outline-none"></textarea>
                        <button type="submit" className="bg-[#25758A] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#1e5c6e]">
                            Send Now
                        </button>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-10 text-sm">
                <div className="flex flex-col items-center gap-2">
                    <FaMapMarkerAlt className="text-[#25758A] text-2xl" />
                    <p className="font-semibold">1130 17TH AVENUE SOUTH<br />GREAT FALLS, MT 59405</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <FaEnvelopeOpenText className="text-[#25758A] text-2xl" />
                    <p className="font-semibold">INFO@THEIVYATGREATFALLS.COM</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <FaPhoneAlt className="text-[#25758A] text-2xl" />
                    <p className="font-semibold">+1 (406) 771-4500</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
