"use client";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import Image from "next/image";
import logo from "../Components/Images/logo.svg";
import dog from "../Components/Images/dog.png";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { FaShoppingBasket } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [showDropDown, setshowDropDown] = useState(false);
  const [showDropDownInner, setshowDropDownInner] = useState(false);
  const [showDropDown2, setshowDropDown2] = useState(false);

  const toggleDropdown = () => {
    setshowDropDown(!showDropDown);
  };

  const toggleDropdownInner = () => {
    setshowDropDownInner(!showDropDownInner);
  };
  const toggleDropDown2 = () => {
    setshowDropDown2(!showDropDown2);
  };
  return (
    <div className="flex z-50 fixed w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-between items-center px-[7rem] bg-white py-4">
      <div>
        <Image className="w-32 " src={logo} alt="logo" width={0} height={0} />
      </div>
      <ul className="flex gap-3 relative">
        <li className="hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear">
          Men
        </li>
        <li className="hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear">
          Women
        </li>
        <li className="hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear">
          Beauty
        </li>
        <li className="hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear">
          Sport
        </li>
        <li
          onClick={toggleDropDown2}
          className="hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear flex gap-3 items-center "
        >
          Template
          <RiArrowDropDownLine className="text-2xl" />
        </li>
        {showDropDown2 === true && (
          <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center gap-5 px-[7rem] py-8 cursor-pointer absolute top-14 right-[-25.5rem] w-screen">
            <div className="flex flex-row gap-10">
              <ul>
                <li className="font-bold">Home Page</li>
                <li>Home 1</li>
                <li>Home 2</li>
                <li>Header 1</li>
                <li>Header 2</li>
                <li>Coming</li>
              </ul>
              <ul>
                <li className="font-bold">Shop Pages</li>
                <li>Category Page 1</li>
                <li>Category Page 2</li>
                <li>Product Page 1 </li>
                <li>Product Page 2</li>
                <li>Cart Page</li>
                <li>Checkout Page</li>
              </ul>
              <ul>
                <li className="font-bold">Other Pages</li>
                <li>Checkout Page</li>
                <li>Search Page</li>
                <li>Cart Page</li>
                <li>Account Page</li>
                <li>Order Page</li>
                <li>Subsciption</li>
              </ul>
              <ul>
                <li className="font-bold">Blog Page</li>
                <li>Blog Page</li>
                <li>Blog Single</li>
                <li>About Page</li>
                <li>Contact Page</li>
                <li>Login</li>
                <li>Signup</li>
                <li>Forgot Password</li>
              </ul>
            </div>
            <div className="bg-slate-200 rounded-md p-5 flex items-center ml-auto hover:bg-neutral-200 hover:transition-all hover:ease-linear">
              <div>
                <p className="">Sale Collection</p>
                <h2 className="font-bold text-3xl py-3">
                  Up to <br /> 80% of retail
                </h2>
                <button className="text-black bg-white rounded-full hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear">
                  Show me all
                </button>
              </div>
              <div>
                <Image src={dog} alt="dog" width={0} height={0} />
              </div>
            </div>
          </div>
        )}
        <li
          onClick={toggleDropdown}
          className=" hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear flex gap-3 items-center"
        >
          Explore <RiArrowDropDownLine className="text-2xl" />
        </li>
        {showDropDown === true && (
          <ul
            data-aos="fade-up"
            data-aos-duration="1000"
            className="absolute  text-sm flex flex-col gap-5 bg-neutral-200 top-14 right-[-8rem] p-6 w-[14rem] rounded-lg"
          >
            <li className="">Home</li>
            <li className="">Category Page</li>
            <li className="">Cart Page </li>
            <li
              onClick={toggleDropdownInner}
              className="flex relative items-center cursor-pointer"
            >
              Product Page
              <RiArrowDropDownLine className="text-2xl" />
              {showDropDownInner === true && (
                <ul
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="absolute bg-neutral-200 right-[-13rem] p-5 w-[10rem]"
                >
                  <li>Home</li>
                  <li>Shop</li>
                </ul>
              )}
            </li>
            <li className="">Checkout Page</li>
          </ul>
        )}
      </ul>

      <div className="flex gap-3 text-2xl">
        <p className="hover:bg-neutral-200 rounded-full px-3 py-3 cursor-pointer hover:transition-all hover:ease-linear">
          <FiSearch />
        </p>
        <p className="hover:bg-neutral-200 rounded-full px-3 py-3 cursor-pointer hover:transition-all hover:ease-linear">
          <GoPerson />
        </p>
        <p className="hover:bg-neutral-200 rounded-full px-3 py-3 cursor-pointer hover:transition-all hover:ease-linear">
          <FaShoppingBasket />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
