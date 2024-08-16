'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import sweater from '../Images/sweater.png'
import three from '../Images/three.png'
import green from "../Images/green.png";
import boy from '../Images/boy.png'
import logo from '../Images/logo.svg'
import { GrFavorite } from "react-icons/gr";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";

const SectionFour = () => {
    const[women, setwomen] = useState(true)
    const[men, setmen] = useState(false)
    const[kids, setkids] = useState(false)
    const[sports, setsports] = useState(false)
    const[beauty, setbeauty] = useState(false)
    const[jewelry, setjewelry] = useState(false)

    const handleWomen = () => {
        setwomen(true)
        setmen(false)
        setkids(false)
        setsports(false)
        setbeauty(false)
        setjewelry(false)
    }
    const handleMen = () => {
        setwomen(false)
        setmen(true)
        setkids(false)
        setsports(false)
        setbeauty(false)
        setjewelry(false)
    }
    const handleKids = () => {
        setwomen(false)
        setmen(false)
        setkids(true)
        setsports(false)
        setbeauty(false)
        setjewelry(false)
    }
    const handleSports = () => {
        setwomen(false)
        setmen(false)
        setkids(false)
        setsports(true)
        setbeauty(false)
        setjewelry(false)
    }
    const handleBeauty = () => {
        setwomen(false)
        setmen(false)
        setkids(false)
        setsports(false)
        setbeauty(true)
        setjewelry(false)
    }
    const handleJewelry = () => {
        setwomen(false)
        setmen(false)
        setkids(false)
        setsports(false)
        setbeauty(false)
        setjewelry(true)
    }
  return (
    <div className='px-[7rem]'>
    <div className='pt-32 bg-neutral-100 w-full'>
      <div className='rounded-md py-25'>
        <h2 className='text-center text-4xl font-bold'>Start exploring.</h2>
        <ul className='flex w-fit bg-white rounded-full py-3 px-10 m-auto my-6 justify-center items-center'>
            <li onClick={handleWomen} className={`${women === true && 'bg-black text-white'} rounded-full cursor-pointer py-2 px-4`}>Women</li>
            <li onClick={handleMen} className={`${men === true && 'bg-black text-white'} rounded-full cursor-pointer py-2 px-4`}>Men</li>
            <li onClick={handleKids} className={`${kids === true && 'bg-black text-white'} rounded-full cursor-pointer py-2 px-4`}>Kids</li>
            <li onClick={handleSports} className={`${sports === true && 'bg-black text-white'} rounded-full cursor-pointer py-2 px-4`}>Sports</li>
            <li onClick={handleBeauty} className={`${beauty === true && 'bg-black text-white'} rounded-full cursor-pointer py-2 px-4`}>Beauty</li>
            <li onClick={handleJewelry} className={`${jewelry === true && 'bg-black text-white'} rounded-full cursor-pointer py-2 px-4`}>Jewelry</li>
        </ul>
      </div>
      {women === true || kids === true || beauty === true ?
      <div className='grid grid-cols-3 gap-6 py-10 px-[4rem]'>
        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpack</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>

        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpack</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>

        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpack</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>

        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpack</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>

        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpack</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>

        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpack</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>
      </div>

      :


      <div className='grid grid-cols-3 gap-6 py-10 px-[4rem]'>
        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpacksssss</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>

        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpacksssss</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>

        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpacksssss</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>

        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpacksssss</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>

        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpacksssss</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>

        <div className='w-full relative bg-white p-10 rounded-2xl'>
            <div className='flex items-center'>
                <div className='w-20 h-20 p-2 bg-neutral-200 flex items-center justify-center rounded-full'>
                    <Image className='' src={sweater} alt='' width={0} height={0}/>
                </div>
                <p className='ml-auto'>155 products</p>
            </div>
            <div className='py-14'>
                <p>Manufacturer</p>
                <h2 className='text-3xl'>Backpacksssss</h2>
                <button>See collections</button>
                <Image className='absolute bottom-0 right-0 w-[16rem]' src={three} alt='three' width={0} height={0}/>
            </div>
        </div>
      </div>
       }
    </div>


    <div className='pt-20'>
        <h2 className='text-4xl font-bold pb-10'>Best Sellers. <span className='text-neutral-400'>Best Selling of the month</span></h2>

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
                <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                    <div className='flex items-center justify-center p-2 pb-0'>
                        <button className='bg-white p-2 py-1 rounded-xl text-xs'>Sold Out</button>
                        <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                    </div>
                    <div className='w-[90%]'>
                        <Image src={green} alt='green' className='w-full' width={0} height={0}/>
                    </div>
                    <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                        <li className='bg-black text-white cursor-pointer text-xs transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                        <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
                <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                    <div className='flex items-center justify-center p-2 pb-0'>
                        <button className='bg-white p-2 py-1 rounded-xl text-xs'>Sold Out</button>
                        <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                    </div>
                    <div className='w-[90%]'>
                        <Image src={green} alt='green' className='w-full' width={0} height={0}/>
                    </div>
                    <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                        <li className='bg-white hover:bg-black hover:text-white text-sm transition-all ease-linear cursor-pointer p-2 rounded-lg w-full'>XS</li>
                        <li className='bg-white hover:bg-black hover:text-white text-sm transition-all ease-linear cursor-pointer p-2 rounded-lg w-full'>S</li>
                        <li className='bg-white hover:bg-black hover:text-white text-sm transition-all ease-linear cursor-pointer p-2 rounded-lg w-full'>M</li>
                        <li className='bg-white hover:bg-black hover:text-white text-sm transition-all ease-linear cursor-pointer p-2 rounded-lg w-full'>L</li>
                        <li className='bg-white hover:bg-black hover:text-white text-sm transition-all ease-linear cursor-pointer p-2 rounded-lg w-full'>XL</li>
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
                        <h2 className='text-base'>Leather Gloves</h2>
                        <p className='text-xs'>Perfect mint green</p>
                    </div>
                    <div className='flex pt-3 items-center'>
                        <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$28</button>
                        <p className='ml-auto text-sm'>4.9(98 reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
                <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                    <div className='flex items-center justify-center p-2 pb-0'>
                        <button className='bg-white p-2 py-1 rounded-xl text-xs'>Sold Out</button>
                        <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                    </div>
                    <div className='w-[90%]'>
                        <Image src={green} alt='green' className='w-full' width={0} height={0}/>
                    </div>
                    <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                        <li className='bg-black text-white cursor-pointer text-xs transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                        <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
                <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                    <div className='flex items-center justify-center p-2 pb-0'>
                        <button className='bg-white p-2 py-1 rounded-xl text-xs'>Sold Out</button>
                        <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                    </div>
                    <div className='w-[90%]'>
                        <Image src={green} alt='green' className='w-full' width={0} height={0}/>
                    </div>
                    <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                        <li className='bg-black text-white cursor-pointer text-xs transition-all ease-linear p-2 px-1 rounded-full w-full'>Add to bag</li>
                        <li className='bg-white text-black hover:bg-neutral-100 cursor-pointer text-xs transition-all ease-linear p-2 px-1 rounded-full w-full'>Quick view</li>
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
                        <h2 className='text-base'>Wool Cashmere Jacket</h2>
                        <p className='text-xs'>Matte black</p>
                    </div>
                    <div className='flex pt-3 items-center'>
                        <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$28</button>
                        <p className='ml-auto text-sm'>4.9(98 reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
                <div className='group cursor-pointer bg-neutral-200 rounded-lg'>
                    <div className='flex items-center justify-center p-2 pb-0'>
                        <button className='bg-white p-2 py-1 rounded-xl text-xs'>Sold Out</button>
                        <p className='rounded-full p-2 ml-auto flex bg-white justify-center items-center'><GrFavorite/></p>
                    </div>
                    <div className='w-[90%]'>
                        <Image src={green} alt='green' className='w-full' width={0} height={0}/>
                    </div>
                    <ul className='hover-div opacity-0 transition-opacity duration-300 transform-translate-y-2 flex items-center gap-3 px-3 pb-3'>
                        <li className='bg-white hover:bg-black hover:text-white text-sm transition-all ease-linear cursor-pointer p-2 rounded-lg w-full'>XS</li>
                        <li className='bg-white hover:bg-black hover:text-white text-sm transition-all ease-linear cursor-pointer p-2 rounded-lg w-full'>S</li>
                        <li className='bg-white hover:bg-black hover:text-white text-sm transition-all ease-linear cursor-pointer p-2 rounded-lg w-full'>M</li>
                        <li className='bg-white hover:bg-black hover:text-white text-sm transition-all ease-linear cursor-pointer p-2 rounded-lg w-full'>L</li>
                        <li className='bg-white hover:bg-black hover:text-white text-sm transition-all ease-linear cursor-pointer p-2 rounded-lg w-full'>XL</li>
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
                        <h2 className='text-base'>Ella Leather Tote</h2>
                        <p className='text-xs'>Cream pink</p>
                    </div>
                    <div className='flex pt-3 items-center'>
                        <button className='border border-green-500 text-green-500 text-xs p-2 rounded'>$28</button>
                        <p className='ml-auto text-sm'>4.9(98 reviews)</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          </Swiper>
    </div>


    <div className='mt-20 p-4 rounded-md bg-yellow-50 w-full flex items-center'>
        <div className='w-full'>
            <Image className='w-[90%]' src={boy} alt='boy' width={0} height={0}/>
        </div>
        <div className='w-full'>
            <div>
                <Image className='w-32 py-10' src={logo} alt='logo' width={0} height={0}/>
            </div>
            <div className='w-full'>
                <h2 className='font-bold text-5xl pb-7'>Special offer <br /> in kids products</h2>
                <p className=''>Fashion is a form of self-expression and autonomy at a <br /> particular period and place.</p>
                <button className='bg-black text-white rounded-full p-4 py-2 cursor-pointer my-10'>Discover more</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SectionFour
