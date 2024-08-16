"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import sweater from "../Images/sweater.png";
import ball from "../Images/ball.png";
import dog from "../Images/dog.png";
import spray from "../Images/spray.png";
import green from "../Images/green.png";
import { GrFavorite } from "react-icons/gr";

const SectionTwo = () => {
  const [redClick, setredClick] = useState(false);

  const handleredClick = () => {
    setredClick(!redClick);
  };
  return (
    <div className="px-[7rem] mt-5">
      <h2 className="text-3xl font-bold my-5">
        Discover more. Good things are waiting for you
      </h2>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex p-5 px-10 items-center rounded-lg gap-4 bg-yellow-100">
              <div className="w-[100%] text-left">
                <p className="text-xs">Explore new arrivals</p>
                <h2 className="text-sm font-bold py-3">
                  Shop the latest from top brands
                </h2>
                <button className="bg-white p-3 mt-5 px-5 rounded-full text-sm">
                  Show me all
                </button>
              </div>
              <div className="">
                <Image src={sweater} alt="sweater" width={0} height={0} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex p-5 px-10 items-center rounded-lg gap-4 bg-red-100">
              <div className="w-[100%] text-left">
                <p className="text-xs">Explore new arrivals</p>
                <h2 className="text-sm font-bold py-3">
                  Shop the latest from top brands
                </h2>
                <button className="bg-white p-3 mt-5 px-5 rounded-full text-sm">
                  Show me all
                </button>
              </div>
              <div className="">
                <Image src={ball} alt="ball" width={0} height={0} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex p-5 px-10 items-center rounded-lg gap-4 bg-slate-100">
              <div className="w-[100%] text-left">
                <p className="text-xs">Explore new arrivals</p>
                <h2 className="text-sm font-bold py-3">
                  Shop the latest from top brands
                </h2>
                <button className="bg-white p-3 mt-5 px-5 rounded-full text-sm">
                  Show me all
                </button>
              </div>
              <div className="">
                <Image src={dog} alt="dog" width={0} height={0} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex p-5 px-10 items-center rounded-lg gap-4 bg-blue-100">
              <div className="w-[100%] text-left">
                <p className="text-xs">Explore new arrivals</p>
                <h2 className="text-sm font-bold py-3">
                  Shop the latest from top brands
                </h2>
                <button className="bg-white p-3 mt-5 px-5 rounded-full text-sm">
                  Show me all
                </button>
              </div>
              <div className="">
                <Image src={spray} alt="spray" width={0} height={0} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex p-5 px-10 items-center rounded-lg gap-4 bg-neutral-100">
              <div className="w-[100%] text-left">
                <p className="text-xs">Explore new arrivals</p>
                <h2 className="text-sm font-bold py-3">
                  Shop the latest from top brands
                </h2>
                <button className="bg-white p-3 mt-5 px-5 rounded-full text-sm">
                  Show me all
                </button>
              </div>
              <div className="">
                <Image src={sweater} alt="sweater" width={0} height={0} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>

      <div className="pt-20">
        <h2 className="text-4xl font-bold pb-10">New Arrivals. <span className="text-neutral-400">Key backpacks & bags</span></h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
                <div className="group relative cursor-pointer bg-neutral-200 rounded-lg">
                    <div className="w-[90%]">
                        <Image src={green} alt="green" className="w-[full]" width={0} height={0}/>
                    </div>
                    <p className="absolute rounded-full p-3 flex bg-white justify-center items-center right-5 top-5 rounded-full"><GrFavorite /></p>
                    <ul className="hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-5 pb-5">
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">XS</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">S</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">M</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">L</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">XL</li>
                    </ul>
                </div>
                <ul className="flex items-center gap-2 pt-5">
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                </ul>
                <div className="text-left pt-3">
                    <div>
                        <h2 className="text-base">Leather gloves</h2>
                        <p className="text-xs">Perfect Mint Green</p>
                    </div>
                    <div className="flex pt-3">
                        <button className="border border-green-700 text-xs p-2 rounded-lg">$42</button>
                        <p className="ml-auto text-sm">4.9(98reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
                <div className="group relative cursor-pointer bg-neutral-200 rounded-lg">
                    <div className="w-[90%]">
                        <Image src={green} alt="green" className="w-[full]" width={0} height={0}/>
                    </div>
                    <p className="absolute rounded-full p-3 flex bg-white justify-center items-center right-5 top-5"><GrFavorite /></p>
                    <ul className="hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-5 pb-5">
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">XS</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">S</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">M</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">L</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">XL</li>
                    </ul>
                </div>
                <ul className="flex items-center gap-2 pt-5">
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                </ul>
                <div className="text-left pt-3">
                    <div>
                        <h2 className="text-base">Leather gloves</h2>
                        <p className="text-xs">Perfect Mint Green</p>
                    </div>
                    <div className="flex pt-3">
                        <button className="border border-green-700 text-xs p-2 rounded-lg">$42</button>
                        <p className="ml-auto text-sm">4.9(98reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
                <div className="group relative cursor-pointer bg-neutral-200 rounded-lg">
                    <div className="w-[90%]">
                        <Image src={green} alt="green" className="w-[full]" width={0} height={0}/>
                    </div>
                    <p className="absolute rounded-full p-3 flex bg-white justify-center items-center right-5 top-5"><GrFavorite /></p>
                    <ul className="hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-5 pb-5">
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">XS</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">S</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">M</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">L</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">XL</li>
                    </ul>
                </div>
                <ul className="flex items-center gap-2 pt-5">
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                </ul>
                <div className="text-left pt-3">
                    <div>
                        <h2 className="text-base">Leather gloves</h2>
                        <p className="text-xs">Perfect Mint Green</p>
                    </div>
                    <div className="flex pt-3">
                        <button className="border border-green-700 text-xs p-2 rounded-lg">$42</button>
                        <p className="ml-auto text-sm">4.9(98reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
                <div className="group relative cursor-pointer bg-neutral-200 rounded-lg">
                    <div className="w-[90%]">
                        <Image src={green} alt="green" className="w-[full]" width={0} height={0}/>
                    </div>
                    <p className="absolute rounded-full p-3 flex bg-white justify-center items-center right-5 top-5"><GrFavorite /></p>
                    <ul className="hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-5 pb-5">
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">XS</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">S</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">M</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">L</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">XL</li>
                    </ul>
                </div>
                <ul className="flex items-center gap-2 pt-5">
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                </ul>
                <div className="text-left pt-3">
                    <div>
                        <h2 className="text-base">Leather gloves</h2>
                        <p className="text-xs">Perfect Mint Green</p>
                    </div>
                    <div className="flex pt-3">
                        <button className="border border-green-700 text-xs p-2 rounded-lg">$42</button>
                        <p className="ml-auto text-sm">4.9(98reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
                <div className="group relative cursor-pointer bg-neutral-200 rounded-lg">
                    <div className="w-[90%]">
                        <Image src={green} alt="green" className="w-[full]" width={0} height={0}/>
                    </div>
                    <p className="absolute rounded-full p-3 flex bg-white justify-center items-center right-5 top-5"><GrFavorite /></p>
                    <ul className="hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-5 pb-5">
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">XS</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">S</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">M</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">L</li>
                        <li className="bg-white hover:bg-black hover:text-white text-sm transition-all cursor-pointer ease-linear p-2 py-2 rounded-lg w-full">XL</li>
                    </ul>
                </div>
                <ul className="flex items-center gap-2 pt-5">
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                    <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                </ul>
                <div className="text-left pt-3">
                    <div>
                        <h2 className="text-base">Leather gloves</h2>
                        <p className="text-xs">Perfect Mint Green</p>
                    </div>
                    <div className="flex pt-3">
                        <button className="border border-green-700 text-xs p-2 rounded-lg">$42</button>
                        <p className="ml-auto text-sm">4.9(98reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          </Swiper>
      </div>
    </div>
  );
};

export default SectionTwo;
