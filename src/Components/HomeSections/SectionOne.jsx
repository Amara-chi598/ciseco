'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import hero from '../Images/hero.png'
import hero2 from '../Images/hero2.png'
import hero3 from '../Images/hero3.png'
import { CiSearch } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const SectionOne = () => {
  const[showSectionOne, setshowSectionOne] = useState(true)
  const[showSectionTwo, setshowSectionTwo] = useState(false)
  const[showSectionThree, setshowSectionThree] = useState(false)

  const handleshowSectionOne = () => {
    setshowSectionOne(true)
    setshowSectionTwo(false)
    setshowSectionThree(false)
  }

  const handleshowSectionTwo = () => {
    setshowSectionOne(false)
    setshowSectionTwo(true)
    setshowSectionThree(false)
  }

  const handleshowSectionThree = () => {
    setshowSectionOne(false)
    setshowSectionTwo(false)
    setshowSectionThree(true)
  }
  return (
    <div className='relative'>
      <div>
        <p className='left-10 top-[40vh] text-2xl bg-white p-3 rounded-full cursor-pointer absolute'><FaChevronLeft/></p>
        <p className='right-10 top-[40vh] text-2xl bg-white p-3 rounded-full cursor-pointer absolute'><FaChevronRight/></p>
      </div>

      <div className='flex items-center gap-5 justify-center m-auto right-0 left-0 absolute bottom-[20px]'>
        <p onClick={handleshowSectionOne} className={`h-2 w-36 cursor-pointer ${showSectionOne === true ? 'bg-black' : 'bg-white'} rounded-full`}></p>
        <p onClick={handleshowSectionTwo} className={`h-2 w-36 cursor-pointer ${showSectionTwo === true ? 'bg-black' : 'bg-white'} rounded-full`}></p>
        <p onClick={handleshowSectionThree} className={`h-2 w-36 cursor-pointer ${showSectionThree === true ? 'bg-black' : 'bg-white'} rounded-full`}></p>
      </div>
        {/* ====== SECTION ONE ======= */}
        {showSectionOne === true &&
        <section className='px-[7rem] py-25 pt-[5rem] h-[100vh] flex bg-green-100 items-center'>
        <div className='w-[80%]' data-aos="fade-right"data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
            <p className='text-2xl font-semibold'>In this season, find the best 🔥 </p>
            <h2 className='text-4xl font-bold py-5'>Exclusive collection <br /> for everyone</h2>
            <button className='bg-black text-white rounded-full py-3 px-10 flex items-center gap-2'>Explore now <CiSearch /></button>
        </div>
        <div className='ml-auto w-[100%]' data-aos="fade-left"data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
            <Image className='w-[100%]' src={hero} alt='image' width={0} height={0} />
        </div>
    </section>
    }
         {/* ====== SECTION TWO ======= */}
         {showSectionTwo === true &&
        <section className='px-[7rem] py-25 pt-[5rem] h-[100vh] flex bg-green-100 items-center'>
        <div className='w-[80%]' data-aos="fade-right"data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
            <p className='text-2xl font-semibold'>In this season, find the best 🔥 </p>
            <h2 className='text-4xl font-bold py-5'>Exclusive collection <br /> for everyone</h2>
            <button className='bg-black text-white rounded-full py-3 px-10 flex items-center gap-2'>Explore now <CiSearch /></button>
        </div>
        <div className='ml-auto w-[100%]' data-aos="fade-left"data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
            <Image className='w-[90%]' src={hero2} alt='image' width={0} height={0} />
        </div>
    </section>
    }
          {/* ====== SECTION THREE ======= */}
          {showSectionThree === true &&
        <section className='px-[7rem] py-25 pt-[5rem] h-[100vh] flex bg-green-100 items-center'>
        <div className='w-[80%]' data-aos="fade-right"data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
            <p className='text-2xl font-semibold'>In this season, find the best 🔥 </p>
            <h2 className='text-4xl font-bold py-5'>Exclusive collection <br /> for everyone</h2>
            <button className='bg-black text-white rounded-full py-3 px-10 flex items-center gap-2'>Explore now <CiSearch /></button>
        </div>
        <div className='ml-auto w-[100%]' data-aos="fade-left"data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
            <Image className='w-[90%]' src={hero3} alt='image' width={0} height={0} />
        </div>
    </section>
    }

    </div>
  )
}

export default SectionOne
