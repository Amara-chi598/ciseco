'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import sweater from '../Images/sweater.png'
import man from '../Images/man.png'
import red from '../Images/17.png'
import green from '../Images/green.png'
import beanie from '../Images/16.png'
import umbrella from '../Images/6.png'
import bag from '../Images/9.png'
import short from '../Images/8.png'
import love from '../Images/love.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";

import { GrFavorite } from "react-icons/gr";
import { GoStar } from 'react-icons/go';
import { FaArrowCircleRight } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";
import MockData from '../MockData';
import { GoStarFill } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";


const SectionFive = () => {
    const[allItems, setallItems] = useState(true)
    const[womens, setwomens] = useState(false)
    const[mens, setmens] = useState(false)
    const[kidz, setkidz] = useState(false)
    const[jewels, setjewels] = useState(false)
    const[price,setprice] = useState(true)
    const[categories,setcategories] = useState(false)
    const[colors, setcolors] = useState(false)
    const[sizes, setsizes] = useState(false)
    const[onSale, setonSale] = useState(false)
    const[sortOrder, setsortOrder] = useState(false)
    const[favorite,setfavorite] = useState(false)
    const[star,setstar] = useState(false)
    const[dropDown,setdropDown] = useState(false)
    const[favoritesData, setfavoritesData] = useState([MockData])


    const handleDropDown = () => {
        setdropDown(!dropDown)
    }

    const handleStar =() => {
        setstar(!star)
    }

    const handleFavorite = () => {
        setfavorite(!favorite)
    }

    const handleAllItems = () => {
        setallItems(true)
        setwomens(false)
        setmens(false)
        setkidz(false)
        setjewels(false)
    }
    const handleWomens = () => {
        setallItems(false)
        setwomens(true)
        setmens(false)
        setkidz(false)
        setjewels(false)
    }
    const handleMens = () => {
        setallItems(false)
        setwomens(false)
        setmens(true)
        setkidz(false)
        setjewels(false)
    }
    const handleKidz = () => {
        setallItems(false)
        setwomens(false)
        setmens(false)
        setkidz(true)
        setjewels(false)
    }
    const handleJewels = () => {
        setallItems(false)
        setwomens(false)
        setmens(false)
        setkidz(false)
        setjewels(true)
    }
    const handlePrice = () => {
        setprice(true)
        setcategories(false)
        setcolors(false)
        setsizes(false)
        setonSale(false)
        setsortOrder(false)
    }
    const handleCategories = () => {
        setprice(false)
        setcategories(true)
        setcolors(false)
        setsizes(false)
        setonSale(false)
        setsortOrder(false)
    }
    const handleColors = () => {
        setprice(false)
        setcategories(false)
        setcolors(true)
        setsizes(false)
        setonSale(false)
        setsortOrder(false)
    }
    const handleSizes = () => {
        setprice(false)
        setcategories(false)
        setcolors(false)
        setsizes(true)
        setonSale(false)
        setsortOrder(false)
    }
    const handleOnSale = () => {
        setprice(false)
        setcategories(false)
        setcolors(false)
        setsizes(false)
        setonSale(true)
        setsortOrder(false)
    }
    const handleSortOrder = () => {
        setprice(false)
        setcategories(false)
        setcolors(false)
        setsizes(false)
        setonSale(false)
        setsortOrder(true)
    }
  return (
    <div className=' pt-32'>
        <div className='px-[7rem]'>
            <div>
                <h2 className='font-bold text-4xl pb-10'>Chosen by our experts</h2>

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
            <div className='w-full'>
                <div className='w-full bg-neutral-200 rounded-lg'>
                    <Image className='w-full mb-3' src={sweater} alt='sweater' width={0} height={0}/>
                </div>
                <div className='grid grid-cols-3 gap-3'>
                    <Image className='w-fit bg-neutral-200 rounded-lg' src={sweater} alt='sweater' width={0} height={0}/>
                    <Image className='w-fit bg-neutral-200 rounded-lg' src={sweater} alt='sweater' width={0} height={0}/>
                    <Image className='w-fit bg-neutral-200 rounded-lg' src={sweater} alt='sweater' width={0} height={0}/>
                </div>
                <div className='text-left'>
                    <div className='flex items-center py-2'>
                        <p className='font-bold text-xl'>Suede Bomber Jacket</p>
                        <button className='border border-green-500 text-green-500 text-sm p-2 rounded ml-auto'>$52</button>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-sm'>Orange</p>
                        <p className='text-sm'>|</p>
                        <p className='text-sm'>4.9(296 reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full'>
                <div className='w-full bg-neutral-200 rounded-lg'>
                    <Image className='w-full mb-3' src={sweater} alt='sweater' width={0} height={0}/>
                </div>
                <div className='grid grid-cols-3 gap-3'>
                    <Image className='w-fit bg-neutral-200 rounded-lg' src={sweater} alt='sweater' width={0} height={0}/>
                    <Image className='w-fit bg-neutral-200 rounded-lg' src={sweater} alt='sweater' width={0} height={0}/>
                    <Image className='w-fit bg-neutral-200 rounded-lg' src={sweater} alt='sweater' width={0} height={0}/>
                </div>
                <div className='text-left'>
                    <div className='flex items-center py-2'>
                        <p className='font-bold text-xl'>Suede Bomber Jacket</p>
                        <button className='border border-green-500 text-green-500 text-sm p-2 rounded ml-auto'>$52</button>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-sm'>Orange</p>
                        <p className='text-sm'>|</p>
                        <p className='text-sm'>4.9(296 reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full'>
                <div className='w-full bg-neutral-200 rounded-lg'>
                    <Image className='w-full mb-3' src={sweater} alt='sweater' width={0} height={0}/>
                </div>
                <div className='grid grid-cols-3 gap-3'>
                    <Image className='w-fit bg-neutral-200 rounded-lg' src={sweater} alt='sweater' width={0} height={0}/>
                    <Image className='w-fit bg-neutral-200 rounded-lg' src={sweater} alt='sweater' width={0} height={0}/>
                    <Image className='w-fit bg-neutral-200 rounded-lg' src={sweater} alt='sweater' width={0} height={0}/>
                </div>
                <div className='text-left'>
                    <div className='flex items-center py-2'>
                        <p className='font-bold text-xl'>Suede Bomber Jacket</p>
                        <button className='border border-green-500 text-green-500 text-sm p-2 rounded ml-auto'>$52</button>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-sm'>Orange</p>
                        <p className='text-sm'>|</p>
                        <p className='text-sm'>4.9(296 reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full bg-neutral-200 rounded-lg text-center'>
                <p className='text-sm'>More items</p>
                <p className='text-sm'> Show me more</p>
            </div>
          </SwiperSlide>
          </Swiper>
            </div>
        </div>

        <div className='pt-32 px-[7rem]'>
            <div>
                <h2 className='font-bold text-4xl pb-10'>Shop by department</h2>

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
                    <div className='w-full'>
                        <div className='w-full bg-slate-200 rounded-lg'>
                            <Image className='w-full mb-3' src={sweater} alt='sweater' width={0} height={0}/>
                        </div>
                        <div className=''>
                            <h2 className='font-bold text-sm'>Travel Kits</h2>
                            <p className='text-sm'>20+ categories</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <div className='w-full bg-neutral-200 rounded-lg'>
                            <Image className='w-full mb-3' src={sweater} alt='sweater' width={0} height={0}/>
                        </div>
                        <div className=''>
                            <h2 className='font-bold text-sm'>Beauty Products</h2>
                            <p className='text-sm'>10+ categories</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <div className='w-full bg-blue-100 rounded-lg'>
                            <Image className='w-full mb-3' src={sweater} alt='sweater' width={0} height={0}/>
                        </div>
                        <div className=''>
                            <h2 className='font-bold text-sm'>Sport Kits</h2>
                            <p className='text-sm'>34+ categories</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <div className='w-full bg-orange-100 rounded-lg'>
                            <Image className='w-full mb-3' src={sweater} alt='sweater' width={0} height={0}/>
                        </div>
                        <div className=''>
                            <h2 className='font-bold text-sm'>Pets Food</h2>
                            <p className='text-sm'>12+ categories</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <div className='w-full bg-neutral-200 rounded-lg'>
                            <h2 className='font-bold text-sm'>More collections</h2>
                            <p className='text-sm'>Show me more</p>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className='pt-32 px-[7rem]'>
            <div className='bg-slate-100 rounded-lg w-full flex'>
                <div className='w-full p-20'>
                    <h2 className='font-bold text-5xl pb-7'>Don't miss out on special offers</h2>
                    <p>Register to recieve news about the latest, savings combos, discount codes...</p>
                    <div className='py-8'>
                        <p className='font-bold text-sm'><span className='bg-purple-200 text-purple-500 text-sm font-bold rounded-xl w-fit p-2 py-1 mr-5'>01</span>Savings combos</p>
                        <p className='font-bold text-sm py-4'><span className='bg-blue-200 text-blue-500 text-sm font-bold rounded-xl w-fit p-2 py-1 mr-5'>02</span>Freeship</p>
                        <p className='font-bold text-sm'><span className='bg-orange-200 text-orange-500 text-sm font-bold rounded-xl w-fit p-2 py-1 mr-5'>03</span>Premium magazines</p>
                    </div>
                    <form className='relative w-fit'>
                        <input type="email" placeholder='Enter your email' className='bg-white text-black border rounded-full p-3 pl-3 pr-[10rem]'/>
                        <button className='absolute top-2 right-4'><FaArrowCircleRight className='text-3xl'/></button>
                    </form>
                </div>
                <div className='w-full'>
                    <Image className='w-full py-0' src={man} alt='man' width={0} height={0}/>
                </div>
            </div>
        </div>

        <div className='pt-32 px-[7rem]'>
            <div className='w-full'>
                <div>
                    <h2 className='text-4xl font-bold'>What's trending now</h2>
                    <p className='py-3'>Discover the most trending products in Ciseco</p>
                </div>
                <ul className='flex items-center gap-6 py-8'>
                    <li onClick={handleAllItems} className={`${allItems === true && 'bg-black text-white'} text-sm rounded-full cursor-pointer py-2 px-4`}>All items</li>
                    <li onClick={handleWomens} className={`${womens === true && 'bg-black text-white'} text-sm rounded-full cursor-pointer py-2 px-4`}>Women</li>
                    <li onClick={handleMens} className={`${mens === true && 'bg-black text-white'} text-sm rounded-full cursor-pointer py-2 px-4`}>Men</li>
                    <li onClick={handleKidz} className={`${kidz === true && 'bg-black text-white'} text-sm rounded-full cursor-pointer py-2 px-4`}>Kids</li>
                    <li onClick={handleJewels} className={`${jewels === true && 'bg-black text-white'} text-sm rounded-full cursor-pointer py-2 px-4`}>Jewels</li>
                    <li className='bg-black text-white rounded-full cursor-pointer py-2 px-4 text-sm ml-auto'>Filter</li>
                </ul>
                <hr />
                <ul className='flex items-center gap-6 py-5'>
                    <li onClick={handlePrice} className={`${price === true && 'bg-blue-100 border border-blue-300'} cursor-pointer rounded-full py-2 px-4 border`}>100$ - 500$</li>
                    <li onClick={handleCategories} className={`${categories === true && 'bg-blue-100 border border-blue-300'} cursor-pointer rounded-full py-2 px-4 border`}>Categories</li>
                    <li onClick={handleColors} className={`${colors === true && 'bg-blue-100 border border-blue-300'} cursor-pointer rounded-full py-2 px-4 border`}>Colors</li>
                    <li onClick={handleSizes} className={`${sizes === true && 'bg-blue-100 border border-blue-300'} cursor-pointer rounded-full py-2 px-4 border`}>Sizes</li>
                    <li onClick={handleOnSale} className={`${onSale === true && 'bg-blue-100 border border-blue-300'} cursor-pointer rounded-full py-2 px-4 border`}>On sale</li>
                    <li onClick={handleSortOrder} className={`${sortOrder === true && 'bg-blue-100 border border-blue-300'} cursor-pointer rounded-full py-2 px-4 border ml-auto`}>Sort order</li>
                </ul>
                {/* <div className='w-full grid grid-cols-4 gap-8'>
                    <div className="">
                        <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                            <div className='flex items-center justify-center p-2 pb-0'>
                                <button className='bg-white p-2 py-1 rounded-xl text-xs'>New in</button>
                                <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite onClick={handleFavorite} className={`${favorite === true && 'text-red-300'}`} /></p>
                            </div>
                            <div className='w-full'>
                                <Image src={red} alt='red' className='w-full' width={0} height={0}/>
                            </div>
                            <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                                <li className='bg-black text-white cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                                <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
                            </ul>
                        </div>
                        <ul className='flex items-center gap-3 pt-5'>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                        </ul>
                        <div className='text-left pt-3'>
                        <div>
                            <h2 className='text-base'>Rey Nylon Backpack</h2>
                            <p className='text-xs'>Brown cockroach wings</p>
                        </div>
                        <div className='flex pt-3 items-center'>
                            <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$74</button>
                            <p className='ml-auto text-sm'>4.4(98 reviews)</p>
                        </div>
                        </div>
                    </div>

                    <div className="">
                        <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                            <div className='flex items-center justify-center p-2 pb-0'>
                                <button className='bg-white p-2 py-1 rounded-xl text-xs'>50% Discount</button>
                                <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite onClick={handleFavorite} className={`${favorite === true && 'text-red-300'}`} /></p>
                            </div>
                            <div className='w-full'>
                                <Image src={red} alt='red' className='w-full' width={0} height={0}/>
                            </div>
                            <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                                <li className='bg-black text-white cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                                <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
                            </ul>
                        </div>
                        <ul className='flex items-center gap-3 pt-5'>
                            <li className='bg-purple-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-yellow-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-orange-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-blue-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-green-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                        </ul>
                        <div className='text-left pt-3'>
                        <div>
                            <h2 className='text-base'>Round Buckle 1" Belt</h2>
                            <p className='text-xs'>Classic green</p>
                        </div>
                        <div className='flex pt-3 items-center'>
                            <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$68</button>
                            <p className='ml-auto text-sm'>4.9(98 reviews)</p>
                        </div>
                        </div>
                    </div>

                    <div className="">
                        <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                            <div className='flex items-center justify-center p-2 pb-0'>
                                <button className='bg-white p-2 py-1 rounded-xl text-xs'>Sold Out</button>
                                <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                            </div>
                            <div className='w-full'>
                                <Image src={beanie} alt='red' className='w-full' width={0} height={0}/>
                            </div>
                            <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                                <li className='bg-black text-white cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                                <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
                            </ul>
                        </div>
                        <ul className='flex items-center gap-3 pt-5'>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                        </ul>
                        <div className='text-left pt-3'>
                        <div>
                            <h2 className='text-base'>Waffle Knit Beanie</h2>
                            <p className='text-xs'>New blue aqua</p>
                        </div>
                        <div className='flex pt-3 items-center'>
                            <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$132</button>
                            <p className='ml-auto text-sm'>4.9(98 reviews)</p>
                        </div>
                        </div>
                    </div>

                    <div className="">
                        <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                            <div className='flex items-center justify-center p-2 pb-0'>
                                <button className='bg-white p-2 py-1 rounded-xl text-xs'>Sold Out</button>
                                <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                            </div>
                            <div className='w-full'>
                                <Image src={red} alt='red' className='w-full' width={0} height={0}/>
                            </div>
                            <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                                <li className='bg-black text-white cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                                <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
                            </ul>
                        </div>
                        <ul className='flex items-center gap-3 pt-5'>
                            <li className='bg-purple-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-yellow-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-orange-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-blue-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-green-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                        </ul>
                        <div className='text-left pt-3'>
                        <div>
                            <h2 className='text-base'>Travel Pet Carrier</h2>
                            <p className='text-xs'>Dark pink 2023</p>
                        </div>
                        <div className='flex pt-3 items-center'>
                            <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$28</button>
                            <p className='ml-auto text-sm'>4.9(98 reviews)</p>
                        </div>
                        </div>
                    </div>

                    <div className="">
                        <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                            <div className='flex items-center justify-center p-2 pb-0'>
                                <button className='bg-white p-2 py-1 rounded-xl text-xs'>Sold Out</button>
                                <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                            </div>
                            <div className='w-full'>
                                <Image src={green} alt='red' className='w-full h-[16rem]' width={0} height={0}/>
                            </div>
                            <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                                <li className='bg-black text-white cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                                <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
                            </ul>
                        </div>
                        <ul className='flex items-center gap-3 pt-5'>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                        </ul>
                        <div className='text-left pt-3'>
                        <div>
                            <h2 className='text-base'>Leather gloves</h2>
                            <p className='text-xs'>Perfect mint green</p>
                        </div>
                        <div className='flex pt-3 items-center'>
                            <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$42</button>
                            <p className='ml-auto text-sm'>4.9(98 reviews)</p>
                        </div>
                        </div>
                    </div>

                    <div className="">
                        <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                            <div className='flex items-center justify-center p-2 pb-0'>
                                <button className='bg-white p-2 py-1 rounded-xl text-xs'>Sold Out</button>
                                <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                            </div>
                            <div className='w-full'>
                                <Image src={umbrella} alt='red' className='w-full' width={0} height={0}/>
                            </div>
                            <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                                <li className='bg-black text-white cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                                <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
                            </ul>
                        </div>
                        <ul className='flex items-center gap-3 pt-5'>
                            <li className='bg-purple-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-yellow-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-orange-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-blue-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                            <li className='bg-green-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                        </ul>
                        <div className='text-left pt-3'>
                        <div>
                            <h2 className='text-base'>Hoodie Sweatshirt</h2>
                            <p className='text-xs'>New design 2023</p>
                        </div>
                        <div className='flex pt-3 items-center'>
                            <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$28</button>
                            <p className='ml-auto text-sm'>4.9(98 reviews)</p>
                        </div>
                        </div>
                    </div>

                    <div className="">
                        <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                            <div className='flex items-center justify-center p-2 pb-0'>
                                <button className='bg-white p-2 py-1 rounded-xl text-xs'>New in</button>
                                <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                            </div>
                            <div className='w-full'>
                                <Image src={bag} alt='red' className='w-full' width={0} height={0}/>
                            </div>
                            <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                                <li className='bg-black text-white cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                                <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
                            </ul>
                        </div>
                        <ul className='flex items-center gap-3 pt-5'>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                        </ul>
                        <div className='text-left pt-3'>
                        <div>
                            <h2 className='text-base'>Wool Cashmere Jacket</h2>
                            <p className='text-xs'>Matte black</p>
                        </div>
                        <div className='flex pt-3 items-center'>
                            <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$12</button>
                            <p className='ml-auto text-sm'>4.9(98 reviews)</p>
                        </div>
                        </div>
                    </div>

                    <div className="">
                        <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                            <div className='flex items-center justify-center p-2 pb-0'>
                                <button className='bg-white p-2 py-1 rounded-xl text-xs'>limited edition</button>
                                <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                            </div>
                            <div className='w-full'>
                                <Image src={short} alt='red' className='w-full' width={0} height={0}/>
                            </div>
                            <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                                <li className='bg-black text-white cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                                <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs text-center transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
                            </ul>
                        </div>
                        <ul className='flex items-center gap-3 pt-5'>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                            <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                        </ul>
                        <div className='text-left pt-3'>
                        <div>
                            <h2 className='text-base'>Ella Leather Tote</h2>
                            <p className='text-xs'>Cream pink</p>
                        </div>
                        <div className='flex pt-3 items-center'>
                            <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$145</button>
                            <p className='ml-auto text-sm'>4.9(98 reviews)</p>
                        </div>
                        </div>
                    </div>
                </div> */}
                <div className='grid grid-cols-4 gap-10'>
                    {MockData.map((data)=>(
                        <div className='col-span-1'>
                            <div className='bg-blue-50 rounded-xl h-[15rem] p-10'>
                                <Image className='w-full' src={data.image} width={0} height={0}/>
                                <p><MdFavorite /></p>
                                <p><MdFavoriteBorder/></p>
                            </div>
                            {data?.id === 1 && (
                                <ul className='flex items-center gap-4 pt-5'>
                                    <li className='bg-purple-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                                    <li className='bg-yellow-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                                    <li className='bg-orange-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                                    <li className='bg-blue-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                                    <li className='bg-green-300 rounded-full border border-purple-500 p-2 w-6 h-6'></li>
                                </ul>
                            )}
                            {data?.id === 2 && (
                                <ul className='flex items-center gap-4 pt-5'>
                                    <li className="w-8 h-4 bg-gradient-to-r from-slate-400 to-slate-700 rounded-md"></li>
                                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md"></li>
                                    <li className="w-8 h-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-md"></li>
                                    <li className="w-8 h-4 bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-md"></li>
                                    <li className="w-8 h-4 bg-gradient-to-r from-slate-900 to-gray-500 rounded-md"></li>
                                </ul>
                            )}
                            <div className='pt-3'>
                                <h2 className='text-base'>{data.name}</h2>
                                <p className='text-xs'>{data.description}</p>
                                <div className='flex items-center pt-3'>
                                <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>{data.price}</button>
                                {data?.rating === 3 && (
                                    <ul className='flex gap-2 ml-auto text-yellow-300'>
                                        <li><GoStarFill/></li>
                                        <li><GoStarFill/></li>
                                        <li><GoStarFill/></li>
                                    </ul>
                                )}
                                {data?.rating === 4 && (
                                    <ul className='flex gap-2 ml-auto text-yellow-300'>
                                        <li><GoStarFill/></li>
                                        <li><GoStarFill/></li>
                                        <li><GoStarFill/></li>
                                        <li><GoStarFill/></li>
                                    </ul>
                                )}
                                {data?.rating === 5 && (
                                    <ul className='flex gap-2 ml-auto text-yellow-300'>
                                        <li><GoStarFill/></li>
                                        <li><GoStarFill/></li>
                                        <li><GoStarFill/></li>
                                        <li><GoStarFill/></li>
                                        <li><GoStarFill/></li>
                                    </ul>
                                )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='py-10 text-center'>
                    <button className='bg-blue-900 text-sm text-white p-2 px-4 rounded-full'>Show me more</button>
                </div>
            </div>
        </div>

        <div className='pt-32'>
            <div className='bg-neutral-100 py-32 px-[7rem] rounded-2xl'>
                <h2 className='font-bold text-4xl pb-10'>The latest news. <span className='text-neutral-500'>From the Ciseco blog</span></h2>
                <div className='flex items-center gap-2 w-full'>
                    <div className=''>
                        <div className=''>
                            <Image className='w-[80%] rounded-xl' src={love} alt='love' width={0} height={0}/>
                        </div>
                        <div>
                            <h2 className='font-semibold'>Turquis Cursus In Hac Habitasse Platea 
                                Dictumst Quisque Sagittis Purus</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Provident aliquam quisquam corrupti harum quae debitis itaque? 
                                    Est dolore neque dolorum soluta eveniet nulla, optio id cupiditate. 
                                    Delectus error ea quaerat.</p>
                                    <div className='flex items-center gap-2'>
                                        div
                                    </div>
                        </div>
                    </div>
                    <div className=''></div>
                </div>
            </div>
        </div>

        <div className='pt-32 pb-32'>
            <div className='w-full'>
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                >
                <SwiperSlide>
                    <div className='w-full'>
                        <div className='text-center w-full'>
                            <h2 className='font-bold text-4xl'>Good news from far away</h2>
                            <p className='py-3'>Let's see what people think of Ciseco</p>
                        </div>
                        <div className='flex items-center justify-center py-6'>
                            <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                                <Image className='' src={sweater} alt='sweater' width={0} height={0}/>
                            </div>
                        </div>
                        <div className='text-center w-full'>
                            <p className='text-xl'>Great quality products, affordable prices, fast <br /> and friendly. I very recommend.</p>
                            <p className='py-3 font-bold'>Tiana Abie</p>
                        </div>
                        <div className='py-3 pb-10 flex items-center justify-center'>
                            <div className='flex items-center justify center gap-2 text-lg'>
                            <p onClick={handleStar} className={star === true && 'text-yellow-400'}><GoStar/></p>
                            <p><GoStar/></p>
                            <p><GoStar/></p>
                            <p><GoStar/></p>
                            <p><GoStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <div className='text-center w-full'>
                            <h2 className='font-bold text-4xl'>Good news from far away</h2>
                            <p className='py-3'>Let's see what people think of Ciseco</p>
                        </div>
                        <div className='flex items-center justify-center py-6'>
                            <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                                <Image className='' src={sweater} alt='sweater' width={0} height={0}/>
                            </div>
                        </div>
                        <div className='text-center w-full'>
                            <p className='text-xl'>Great quality products, affordable prices, fast <br /> and friendly. I very recommend.</p>
                            <p className='py-3 font-bold'>Tiana Abie</p>
                        </div>
                        <div className='py-3 pb-10 flex items-center justify-center'>
                            <div className='flex items-center justify center gap-2 text-lg'>
                            <p onClick={handleStar} className={star === true && 'text-yellow-400'}><GoStar/></p>
                            <p><GoStar/></p>
                            <p><GoStar/></p>
                            <p><GoStar/></p>
                            <p><GoStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <div className='text-center w-full'>
                            <h2 className='font-bold text-4xl'>Good news from far away</h2>
                            <p className='py-3'>Let's see what people think of Ciseco</p>
                        </div>
                        <div className='flex items-center justify-center py-6'>
                            <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                                <Image className='' src={sweater} alt='sweater' width={0} height={0}/>
                            </div>
                        </div>
                        <div className='text-center w-full'>
                            <p className='text-xl'>Great quality products, affordable prices, fast <br /> and friendly. I very recommend.</p>
                            <p className='py-3 font-bold'>Tiana Abie</p>
                        </div>
                        <div className='py-3 pb-10 flex items-center justify-center'>
                            <div className='flex items-center justify center gap-2 text-lg'>
                            <p onClick={handleStar} className={star === true && 'text-yellow-400'}><GoStar/></p>
                            <p><GoStar/></p>
                            <p><GoStar/></p>
                            <p><GoStar/></p>
                            <p><GoStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default SectionFive
