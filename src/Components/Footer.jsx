'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../Components/Images/logo.svg'
import { FaFacebook, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='px-[7rem] w-full py-[7rem]'>
      <div className='flex items-center m-auto justify-between gap-5 w-full'>
        <ul className=''>
          <div>
              <Image className="w-[80%] mb-3 " src={logo} alt="logo" width={0} height={0}/>
          </div>
          <li className='mb-3 text-sm flex items-center gap-3'><FaFacebook className='text-xl text-blue-600'/>Facebook</li>
          <li className='mb-3 text-sm flex items-center gap-3'><FaYoutube className='text-xl text-red-600'/>Youtube</li>
          <li className='mb-3 text-sm flex items-center gap-3'><FaTelegram className='text-xl text-blue-500'/>Telegram</li>
          <li className='mb-3 text-sm flex items-center gap-3'><FaTwitter className='text-xl text-blue-600'/>Twitter</li>
        </ul>
        <ul className=''>
          <li className='mb-3 text-sm font-semibold'>Getting started</li>
          <li className='mb-3 text-sm'>Release notes</li>
          <li className='mb-3 text-sm'>Upgrade guide</li>
          <li className='mb-3 text-sm'>Browser support</li>
          <li className='mb-3 text-sm'>Dark mode</li>
        </ul>
        <ul className=''>
          <li className='mb-3 text-sm font-semibold'>Explore</li>
          <li className='mb-3 text-sm'>Prototyping</li>
          <li className='mb-3 text-sm'>Design systems</li>
          <li className='mb-3 text-sm'>Pricing</li>
          <li className='mb-3 text-sm'>Security</li>
        </ul>
        <ul className=''>
          <li className='mb-3 text-sm font-semibold'>Resources</li>
          <li className='mb-3 text-sm'>Best practices</li>
          <li className='mb-3 text-sm'>Support</li>
          <li className='mb-3 text-sm'>Developers</li>
          <li className='mb-3 text-sm'>Learn design</li>
        </ul>
        <ul className=''>
          <li className='mb-3 text-sm font-semibold'>Community</li>
          <li className='mb-3 text-sm'>Discussions forums</li>
          <li className='mb-3 text-sm'>Code of Conduct</li>
          <li className='mb-3 text-sm'>Contributing</li>
          <li className='mb-3 text-sm'>API reference</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
