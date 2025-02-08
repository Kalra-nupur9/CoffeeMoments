import React from "react";
import { FaStar } from "react-icons/fa";

import { FaCircle } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { SiBuymeacoffee } from "react-icons/si";

function page() {
  return (
    <>
      <div className="bg-[#421A00] w-screen h-auto flex  flex-col items-center py-10">
        <h1 className="text-center text-8xl text-[#a1867a] pb-10">Desserts</h1>
        <div className=" bg-[#a1867a] w-5/6">
          <div className="grid grid-flow-row grid-cols-2  justify-center  items-center p-5">
            <div className=" relative flex justify-center items-center flex-col py-5 bg-white border border-orange-950 rounded-3xl">
              <img
                src="/images/Home/Additional_details.jpg"
                alt=""
                className="size-[70%] rounded-tl-2xl rounded-br-2xl"
              />
              <h2 className="text-4xl">Coffee Name </h2>
              {/* veg Sign */}
              {/* <div className=" absolute top-1 end-12 text-green-700  border-2 w-fit p-1 border-green-700 ">
                  <FaCircle />
                </div> */}
              <p className=" text-justify px-16">
                Coffee Discription: Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quod corporis beatae eveniet. Illum natus
                asperiores sapiente eveniet minus unde eos ipsam ipsa, ullam,
                earum dolore necessitatibus maxime repudiandae praesentium
                placeat?{" "}
              </p>
              <div className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-4xl text-[#532d0e]">500/-</div>
              <div className="flex justify-center item-center gap-4 flex-wrap">
                <button className="px-5 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Order Now <CiShoppingCart />
                </button>
                <button className="px-8 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Buy Now <SiBuymeacoffee />
                </button>
              </div>
            </div>
            <div className=" relative flex justify-center items-center flex-col py-5 bg-white border border-orange-950 rounded-3xl">
              <img
                src="/images/Home/Additional_details.jpg"
                alt=""
                className="size-[70%] rounded-tl-2xl rounded-br-2xl"
              />
              <h2 className="text-4xl">Coffee Name </h2>
              {/* veg Sign */}
              {/* <div className=" absolute top-1 end-12 text-green-700  border-2 w-fit p-1 border-green-700 ">
                  <FaCircle />
                </div> */}
              <p className=" text-justify px-16">
                Coffee Discription: Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quod corporis beatae eveniet. Illum natus
                asperiores sapiente eveniet minus unde eos ipsam ipsa, ullam,
                earum dolore necessitatibus maxime repudiandae praesentium
                placeat?{" "}
              </p>
              <div className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-4xl text-[#532d0e]">500/-</div>
              <div className="flex justify-center item-center gap-4 flex-wrap">
                <button className="px-5 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Order Now <CiShoppingCart />
                </button>
                <button className="px-8 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Buy Now <SiBuymeacoffee />
                </button>
              </div>
            </div>
            <div className=" relative flex justify-center items-center flex-col py-5 bg-white border border-orange-950 rounded-3xl">
              <img
                src="/images/Home/Additional_details.jpg"
                alt=""
                className="size-[70%] rounded-tl-2xl rounded-br-2xl"
              />
              <h2 className="text-4xl">Coffee Name </h2>
              {/* veg Sign */}
              {/* <div className=" absolute top-1 end-12 text-green-700  border-2 w-fit p-1 border-green-700 ">
                  <FaCircle />
                </div> */}
              <p className=" text-justify px-16">
                Coffee Discription: Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quod corporis beatae eveniet. Illum natus
                asperiores sapiente eveniet minus unde eos ipsam ipsa, ullam,
                earum dolore necessitatibus maxime repudiandae praesentium
                placeat?{" "}
              </p>
              <div className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-4xl text-[#532d0e]">500/-</div>
              <div className="flex justify-center item-center gap-4 flex-wrap">
                <button className="px-5 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Order Now <CiShoppingCart />
                </button>
                <button className="px-8 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Buy Now <SiBuymeacoffee />
                </button>
              </div>
            </div>
            <div className=" relative flex justify-center items-center flex-col py-5 bg-white border border-orange-950 rounded-3xl">
              <img
                src="/images/Home/Additional_details.jpg"
                alt=""
                className="size-[70%] rounded-tl-2xl rounded-br-2xl"
              />
              <h2 className="text-4xl">Coffee Name </h2>
              {/* veg Sign */}
              {/* <div className=" absolute top-1 end-12 text-green-700  border-2 w-fit p-1 border-green-700 ">
                  <FaCircle />
                </div> */}
              <p className=" text-justify px-16">
                Coffee Discription: Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quod corporis beatae eveniet. Illum natus
                asperiores sapiente eveniet minus unde eos ipsam ipsa, ullam,
                earum dolore necessitatibus maxime repudiandae praesentium
                placeat?{" "}
              </p>
              <div className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-4xl text-[#532d0e]">500/-</div>
              <div className="flex justify-center item-center gap-4 flex-wrap">
                <button className="px-5 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Order Now <CiShoppingCart />
                </button>
                <button className="px-8 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Buy Now <SiBuymeacoffee />
                </button>
              </div>
            </div>
            <div className=" relative flex justify-center items-center flex-col py-5 bg-white border border-orange-950 rounded-3xl">
              <img
                src="/images/Home/Additional_details.jpg"
                alt=""
                className="size-[70%] rounded-tl-2xl rounded-br-2xl"
              />
              <h2 className="text-4xl">Coffee Name </h2>
              {/* veg Sign */}
              {/* <div className=" absolute top-1 end-12 text-green-700  border-2 w-fit p-1 border-green-700 ">
                  <FaCircle />
                </div> */}
              <p className=" text-justify px-16">
                Coffee Discription: Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quod corporis beatae eveniet. Illum natus
                asperiores sapiente eveniet minus unde eos ipsam ipsa, ullam,
                earum dolore necessitatibus maxime repudiandae praesentium
                placeat?{" "}
              </p>
              <div className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-4xl text-[#532d0e]">500/-</div>
              <div className="flex justify-center item-center gap-4 flex-wrap">
                <button className="px-5 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Order Now <CiShoppingCart />
                </button>
                <button className="px-8 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Buy Now <SiBuymeacoffee />
                </button>
              </div>
            </div>
            <div className=" relative flex justify-center items-center flex-col py-5 bg-white border border-orange-950 rounded-3xl">
              <img
                src="/images/Home/Additional_details.jpg"
                alt=""
                className="size-[70%] rounded-tl-2xl rounded-br-2xl"
              />
              <h2 className="text-4xl">Coffee Name </h2>
              {/* veg Sign */}
              {/* <div className=" absolute top-1 end-12 text-green-700  border-2 w-fit p-1 border-green-700 ">
                  <FaCircle />
                </div> */}
              <p className=" text-justify px-16">
                Coffee Discription: Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quod corporis beatae eveniet. Illum natus
                asperiores sapiente eveniet minus unde eos ipsam ipsa, ullam,
                earum dolore necessitatibus maxime repudiandae praesentium
                placeat?{" "}
              </p>
              <div className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-4xl text-[#532d0e]">500/-</div>
              <div className="flex justify-center item-center gap-4 flex-wrap">
                <button className="px-5 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Order Now <CiShoppingCart />
                </button>
                <button className="px-8 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Buy Now <SiBuymeacoffee />
                </button>
              </div>
            </div>
            <div className=" relative flex justify-center items-center flex-col py-5 bg-white border border-orange-950 rounded-3xl">
              <img
                src="/images/Home/Additional_details.jpg"
                alt=""
                className="size-[70%] rounded-tl-2xl rounded-br-2xl"
              />
              <h2 className="text-4xl">Coffee Name </h2>
              {/* veg Sign */}
              {/* <div className=" absolute top-1 end-12 text-green-700  border-2 w-fit p-1 border-green-700 ">
                  <FaCircle />
                </div> */}
              <p className=" text-justify px-16">
                Coffee Discription: Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quod corporis beatae eveniet. Illum natus
                asperiores sapiente eveniet minus unde eos ipsam ipsa, ullam,
                earum dolore necessitatibus maxime repudiandae praesentium
                placeat?{" "}
              </p>
              <div className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-4xl text-[#532d0e]">500/-</div>
              <div className="flex justify-center item-center gap-4 flex-wrap">
                <button className="px-5 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Order Now <CiShoppingCart />
                </button>
                <button className="px-8 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Buy Now <SiBuymeacoffee />
                </button>
              </div>
            </div>
            <div className=" relative flex justify-center items-center flex-col py-5 bg-white border border-orange-950 rounded-3xl">
              <img
                src="/images/Home/Additional_details.jpg"
                alt=""
                className="size-[70%] rounded-tl-2xl rounded-br-2xl"
              />
              <h2 className="text-4xl">Coffee Name </h2>
              {/* veg Sign */}
              {/* <div className=" absolute top-1 end-12 text-green-700  border-2 w-fit p-1 border-green-700 ">
                  <FaCircle />
                </div> */}
              <p className=" text-justify px-16">
                Coffee Discription: Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quod corporis beatae eveniet. Illum natus
                asperiores sapiente eveniet minus unde eos ipsam ipsa, ullam,
                earum dolore necessitatibus maxime repudiandae praesentium
                placeat?{" "}
              </p>
              <div className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-4xl text-[#532d0e]">500/-</div>
              <div className="flex justify-center item-center gap-4 flex-wrap">
                <button className="px-5 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Order Now <CiShoppingCart />
                </button>
                <button className="px-8 z-30 py-2 bg-[#532d0e] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#a1867a] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   text-2xl flex gap-3 items-center justify-center ">
                  Buy Now <SiBuymeacoffee />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
