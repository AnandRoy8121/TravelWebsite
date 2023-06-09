import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/Bi";
import "animate.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = ({ companyName }) => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
      document.body.style.overflowX = "hidden";
    }
  };
  return (
    <div
      className={`${
        scrolled
          ? "fixed top-0 flex justify-between text-white w-full items-center bg-blue-600 z-40 shadow-md rounded-md"
          : "absolute top-0 flex justify-between w-full items-center z-40 bg-black/20"
      }`}
    >
      <Link href={"/"}>
        <h1 className="text-white font-bold mx-10 text-2xl z-50 cursor-pointer py-4">
          {companyName}
        </h1>
      </Link>

<div className="flex justify-center items-center lg:hidden">

      <BiMenuAltRight onClick={handleNav} size={30} className='text-white z-50 cursor-pointer'/>
      <div className={nav ?'fixed top-0 left-0 z-40 text-gray-300 w-full h-screen bg-transparent/80 px-4 py-7 flex-col ease-out duration-700':'absolute z-10 top-0 left-[-100%] duration-1000 ease-in h-screen'}>
            <ul className='flex flex-col items-center justify-center w-full h-full'>
                <Link href={'/tours'}><li className='font-bold text-2xl p-4 duration-75 translate-x-2 hover:scale-125 cursor-pointer'>Tour Packages</li></Link>
                <Link href={'/hotel'}><li className='font-bold text-2xl p-4  duration-75 translate-x-2 hover:scale-125 cursor-pointer'>Hotels</li></Link>
                <Link href={'/vehicle'}><li className='font-bold text-2xl p-4  duration-75 translate-x-2 hover:scale-125 cursor-pointer'>Vehicles</li></Link>
                {/* <Link href={'/contact'}><li className='font-bold text-2xl p-4  duration-75 translate-x-2 hover:scale-125 cursor-pointer'>Tickets</li></Link> */}
                <Link href={'/contact'}><li className='font-bold text-2xl p-4  duration-75 translate-x-2 hover:scale-125 cursor-pointer'>Contact</li></Link>
            </ul>
        </div>
</div>
      <div className="lg:flex lg:justify-center lg:items-center mx-auto hidden">
        <ul className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 w-full h-full">
          <Link href={"/tours"}>
            <li className="font-bold text-white text-2xl cursor-pointer link link-underline link-underline-black">
              Tours Packages
            </li>
          </Link>
          <Link href={"/hotel"}>
            <li className="font-bold text-white text-2xl cursor-pointer link link-underline link-underline-black">
              Hotel
            </li>
          </Link>
          <Link href={"/vehicle"}>
            <li className="font-bold text-white text-2xl cursor-pointer link link-underline link-underline-black">
              Vehicles
            </li>
          </Link>
          {/* <Link href={"/contact"}>
            <li className="font-bold text-white text-2xl cursor-pointer link link-underline link-underline-black">
              Tickets
            </li>
          </Link> */}
          <Link href={"/contact"}>
            <li className="font-bold text-white text-2xl cursor-pointer link link-underline link-underline-black">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
