"use client";
import React, { useState } from "react";
import { SiCoffeescript } from "react-icons/si";
import { CiShoppingCart } from "react-icons/ci";

function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsClick(!isClick);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navBar" className="shadow-sm w-screen bg-[#F5E1C8]  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 logo_font">
              <a
                href="/"
                className="tracking-tightest text-6xl flex items-center"
              >
                <SiCoffeescript className="text-6xl" />
                Moment
              </a>
            </div>
          </div>

          <div className="hidden md:flex w-3/4">
            <div className="ml-4 flex items-center space-x-10 justify-end">
              {/* Home Link */}
              <a
                href="/"
                className="text-xl hover:text-main-red font-medium text-[#421A00] hover:text-[#a1867a] hover:scale-110"
              >
                Home
              </a>

              {/* Menu Link (with dropdown) */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-xl text-[#421A00] hover:text-main-red font-medium hover:text-[#a1867a] hover:scale-110 flex items-center space-x-2"
                >
                  <span>Menu</span>
                  <svg
                    className={`transform transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 bg-[#421A00] text-white shadow-lg rounded-lg w-40 p-2">
                    <a
                      href="/food"
                      className="block px-4 py-2 text-lg hover:bg-[#854e28] hover:text-[#a1867a]"
                    >
                      Food
                    </a>
                    <a
                      href="/coffees"
                      className="block px-4 py-2 text-lg hover:bg-[#854e28] hover:text-[#a1867a]"
                    >
                      Coffees
                    </a>
                    <a
                      href="/mocktails"
                      className="block px-4 py-2 text-lg hover:bg-[#854e28] hover:text-[#a1867a]"
                    >
                      Mocktails
                    </a>
                    <a
                      href="/desserts"
                      className="block px-4 py-2 text-lg hover:bg-[#854e28] hover:text-[#a1867a]"
                    >
                      Desserts
                    </a>
                  </div>
                )}
              </div>

              {/* About Us Link */}
              <a
                href="/aboutme"
                className="text-xl text-[#421A00] hover:text-main-red font-medium hover:text-[#a1867a] hover:scale-110"
              >
                About Us
              </a>

              {/* Contact Us Link */}
              <a
                href="/contactme"
                className="text-xl text-[#421A00] hover:text-main-red font-medium hover:text-[#a1867a] hover:scale-110"
              >
                Contact Us
              </a>
              {/* cart Link */}
              <a
                href="/contactme"
                className="text-xl text-[#421A00] hover:text-main-red font-medium hover:text-[#a1867a] hover:scale-110 flex items-center"
              >
                Cart <CiShoppingCart />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-[#421A00] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-800"
              onClick={toggleNavMenu}
            >
              {isClick ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isClick && (
        <div className="flex justify-center">
          <div className="w-full space-y-1 bg-amber-950 py-1 grid justify-center text-center">
            {/* Home Link */}
            <a href="/" className="text-2xl font-medium text-white">
              Home
            </a>

            {/* Menu Link (with dropdown) */}
            <div className="relative justify-center grid">
              <button
                onClick={toggleDropdown}
                className="text-2xl font-medium text-white hover:scale-110 flex items-center space-x-2 justify-center"
              >
                <span>Menu</span>
                <svg
                  className={`transform transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 top-8 mt-2 bg-orange-800 text-white shadow-lg rounded-lg w-40 p-2">
                  <a
                    href="/food"
                    className="block px-4 py-2 text-lg hover:bg-[#854e28] hover:text-[#a1867a]"
                  >
                    Food
                  </a>
                  <a
                    href="/coffees"
                    className="block px-4 py-2 text-lg hover:bg-[#854e28] hover:text-[#a1867a]"
                  >
                    Coffees
                  </a>
                  <a
                    href="/mocktails"
                    className="block px-4 py-2 text-lg hover:bg-[#854e28] hover:text-[#a1867a]"
                  >
                    Mocktails
                  </a>
                  <a
                    href="/desserts"
                    className="block px-4 py-2 text-lg hover:bg-[#854e28] hover:text-[#a1867a]"
                  >
                    Desserts
                  </a>
                </div>
              )}
            </div>

            {/* About Us Link */}
            <a
              href="/aboutme"
              className="text-2xl font-medium text-white hover:scale-110 text-center"
            >
              About Us
            </a>

            {/* Contact Us Link */}
            <a
              href="/contactme"
              className="text-2xl font-medium text-white hover:scale-110 text-center"
            >
              Contact Us
            </a>
            {/* cart Link */}
            <a
              href="/cart"
              className="text-2xl font-medium text-white hover:scale-110 text-center flex justify-center items-center"
            >
              Cart <CiShoppingCart />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
