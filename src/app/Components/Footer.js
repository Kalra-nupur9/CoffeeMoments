import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCoffeescript } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      className="footer text-center relative  bg-[#F5E1C8] py-10 w-screen "
      id="footer"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-5 relative">
          {/* Links */}
          <div className="flex flex-col md:flex-row gap-10 z-0 ">
            {/* Home Link */}
            <a
              href="/"
              className="text-xl hover:text-main-red font-medium text-[#421A00] hover:text-white hover:scale-110"
            >
              Home
            </a>

            {/* About Us Link */}
            <a
              href="/aboutme"
              className="text-xl text-[#421A00] hover:text-main-red font-medium hover:text-white hover:scale-110"
            >
              About Us
            </a>

            {/* Contact Us Link */}
            <a
              href="/contactme"
              className="text-xl text-[#421A00] hover:text-main-red font-medium hover:text-white hover:scale-110"
            >
              Contact Us
            </a>
          </div>

          {/* Icons */}
          <div className="flex gap-4 px-5">
            <FaInstagram className="text-[#421A00] text-3xl cursor-pointer hover:text-[#a1867a]" />
            <FaGithub className="text-[#421A00] text-3xl cursor-pointer hover:text-[#a1867a]" />
            <FaLinkedin className="text-[#421A00] text-3xl cursor-pointer hover:text-[#a1867a]" />
            <FaXTwitter className="text-[#421A00] text-3xl cursor-pointer hover:text-[#a1867a]" />
          </div>
        </div>
        <div className=" text-[#421A00] text-7xl select-none justify-center flex w-full px-5 ">
          <a
            href="/"
            className="tracking-tightest text-6xl flex items-center logo_font"
          >
            <SiCoffeescript className="text-6xl" />
            Moment
          </a>
        </div>
        <p className="text-[#38403d]">© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
