"use client";
import React, { useEffect, useRef } from "react";
import { CiShoppingCart } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <div className=" bg_image pt-28">
        <h1 className=" text-8xl text-[#532d0e] text-center ">
          Crafted with Passion, Served with Love
        </h1>
        <p className="text-4xl text-[#ffffff] text-center ">
          Experience the joy of freshly brewed perfection in every cup.
        </p>

        <div className="flex justify-center gap-10 mt-14  flex-wrap">
          <button className="px-8 z-30 py-4 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
            Order Now <CiShoppingCart />
          </button>
          <button className="px-8 z-30 py-4 bg-[#a1867a] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#532d0e] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl ">
            Reserve table Now
          </button>
        </div>
      </div>
    </>
  );
}
