import React from 'react';
import { FaTwitter} from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#1E5A68] text-white py-12 px-6 md:px-20">
            <div className="max-w-[1350px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
                <div className="w-full md:w-1/3">
                    <h2 className="text-[50px] font-bold">IVY</h2>
                    <p className="text-lg uppercase tracking-wider">Healthcare Group</p>
                    <div className="w-[80px] h-[2px] bg-white my-2"></div>
                    <p className=" mt-2">Where the care is crafted for you, and the kindness comes from the heart.</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/amenities">Amenities</Link></li>
                        <li><Link to="/locations">Locations</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p><span className="font-semibold">Phone:</span> +1 (305) 912-9260</p>
                    <p><span className="font-semibold">Email:</span> info@ivyhealthcaregroup.com</p>
                    <div className="mt-4 flex space-x-4 text-2xl">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-[#E9F5F8] text-black flex items-center justify-center text-center py-3 ">
                <p>© 2021 ivyhealthcaregroup. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
