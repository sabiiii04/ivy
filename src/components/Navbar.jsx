import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="mx-auto max-w-[1350px] px-6 md:px-20 py-4 flex items-center justify-between">
            <Link to="/">
                <img src={logo} alt="logo" className="h-[50px] md:h-[70px]" />
            </Link>
            <div className="hidden lg:flex gap-12 items-center">
                <nav>
                    <ul className="flex gap-10 text-[18px]">
                        <li className="hover:text-[#145566]"><Link to="/">Home</Link></li>
                        <li className="hover:text-[#145566]"><Link to="/services">Services</Link></li>
                        <li className="hover:text-[#145566]"><Link to="/amenities">Amenities</Link></li>
                        <li className="hover:text-[#145566]"><Link to="/contact">Contact</Link></li>
                        <li className="hover:text-[#145566]"><Link to="/careers">Careers</Link></li>
                    </ul>
                </nav>
                <Link to="/contact" className="bg-[#145566] text-white text-[16px] md:text-[20px] font-semibold px-6 md:px-10 py-3 md:py-4 rounded-[12px]">Contact us</Link>
            </div>
            <div className="lg:hidden">
                {isMenuOpen ? (
                    <AiOutlineClose
                        onClick={() => setIsMenuOpen(false)}
                        className="text-[40px] text-[#145566] cursor-pointer"
                    />
                ) : (
                    <GiHamburgerMenu
                        onClick={() => setIsMenuOpen(true)}
                        className="text-[40px] text-[#145566] cursor-pointer"
                    />
                )}
            </div>
            {isMenuOpen && (
                <div className="fixed bg-white w-full h-screen left-0 top-0 z-20 p-6 flex flex-col items-center text-center transition-transform duration-300">
                    <div className="flex justify-between w-full">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>
                            <img src={logo} alt="logo" className="h-[40px]" />
                        </Link>
                        <AiOutlineClose
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[40px] text-[#145566] cursor-pointer"
                        />
                    </div>

                    <nav className="mt-10">
                        <ul className="flex flex-col gap-6 text-[22px] font-bold">
                            <li><Link to="/" className="hover:text-[#145566]" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                            <li><Link to="/services" className="hover:text-[#145566]" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                            <li><Link to="/amenities" className="hover:text-[#145566]" onClick={() => setIsMenuOpen(false)}>Amenities</Link></li>
                            <li><Link to="/contact" className="hover:text-[#145566]" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                            <li><Link to="/careers" className="hover:text-[#145566]" onClick={() => setIsMenuOpen(false)}>Careers</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
