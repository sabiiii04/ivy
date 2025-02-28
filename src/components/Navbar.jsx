import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/Logo.svg";

const Navbar = () => {
    return (
        <div className="mx-auto max-w-[1350px] px-20 py-2 flex items-center justify-between">
            <img src={logo}  alt="logo" className="h-[70px]"/>
            <div className="flex gap-12 items-center">
                <nav>
                    <ul className="flex gap-10 text-[18px]">
                        <li className="hover:text-[#145566]"><Link to="/">Home</Link></li>
                        <li className="hover:text-[#145566]"><Link to="/services">services</Link></li>
                        <li className="hover:text-[#145566]"><Link to="/amenities">Amenities</Link></li>
                        <li className="hover:text-[#145566]"><Link to="/contact">Contact</Link></li>
                        <li className="hover:text-[#145566]"><Link to="/careers">Careers</Link></li>
                    </ul>
                </nav>
                <Link to="/contact" className="bg-[#145566] text-white text-[20px] font-semibold px-10 py-4 rounded-[12px]">Contact us</Link>
            </div>
            
        </div>
    );
};

export default Navbar;