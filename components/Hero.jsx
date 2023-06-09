import React from "react";
import "animate.css";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from '@mui/icons-material/Instagram';

const Hero = () => {
  return (
        // <div className="flex flex-col gap-4 absolute w-full h-[calc(100%-3rem)] top-12 md:flex-row">
        <div className="flex flex-col gap-4 absolute w-full h-full top-12 md:flex-row">
    <div className="flex flex-col w-full h-full md:flex-row justify-center items-center">
        <div className="flex justify-center items-center h-full w-1/2 m-4">
        <div className="flex bg-white/50 rounded-lg drop-shadow-xl animate__animated animate__bounceInLeft animate__slow">
        <div className="flex flex-col gap-4">
          <ul className="flex flex-row gap-4 items-center justify-center mx-4 my-4 px-4 py-2">
            <li><WhatsAppIcon fontSize="large" className="text-green-500 cursor-pointer duration-100 translate-x-2 hover:scale-125"/></li>
            <li><LinkedInIcon fontSize="large" className="text-blue-700 cursor-pointer duration-75 translate-x-2 hover:scale-125"/></li>
            <li><FacebookIcon fontSize="large" className="text-blue-700 cursor-pointer duration-75 translate-x-2 hover:scale-125"/></li>
            <li><TwitterIcon fontSize="large" className="text-blue-400 cursor-pointer duration-75 translate-x-2 hover:scale-125"/></li>
            <li><InstagramIcon fontSize="large" className="text-red-500 cursor-pointer duration-75 translate-x-2 hover:scale-125"/></li>
          </ul>
          <div className="flex flex-row gap-2 mx-2">
            <PhoneIphoneIcon fontSize="large" className="text-black"/>
            <h1 className="text-black font-semibold md:text-xl">+91 123456789</h1>
          </div>
          <div className="flex flex-row gap-2 mx-2">
            <MailOutlineIcon fontSize="large" className="text-black"/>
            <h1 className="text-black font-semibold md:text-xl">Contact@northsouthtourstravels.com</h1>
          </div>
          <div className="flex flex-row gap-2 mx-2 mb-4">
            <LocationOnIcon fontSize="large" className="text-black"/>
            <h1 className="text-black font-semibold md:text-xl">29-13-11, Singh Hotel Jn,<br/> Sivalayam Down Rd,
            Lalitha Colony, Dabagardens,<br/> Visakhapatnam-530020</h1>
          </div>

        </div>
      </div>
        </div>
        <div className="md:flex hidden justify-center items-center h-full w-1/2 m-4">
          <div className="flex flex-col gap-2 animate__animated animate__bounceInRight animate__slow">
            <h1 className="text-2xl lg:text-5xl md:3xl font-bold text-white drop-shadow-xl">
              WE PROVIDE BEST
            </h1>
            <h1 className="text-2xl lg:text-5xl md:3xl font-bold text-white drop-shadow-xl">
              SERVICES AND TOURS
            </h1>
            <h1 className="text-2xl lg:text-5xl md:text-3xl font-bold text-white drop-shadow-xl">
            AT AFFORDABLE{" "}
              <span className="underline decoration-2 decoration-sky-200">
                PRICE
              </span>
            </h1>
            {/* <p className="font-semibold text-gray-200 text-sm drop-shadow-2xl animate__animated animate__bounceInRight animate__delay-2s">
              Visakhapatnam, also known as Vizag, is a popular coastal city in
              Andhra Pradesh, India. With beautiful beaches, scenic hills,
              historic sites, and cultural landmarks, it is a great destination
              for travelers seeking a mix of natural beauty, history, and
              culture.
            </p> */}
            <div className="flex mt-4 flex-col animate__animated animate__bounceInRight animate__slow">
              <Link href={"/bookTour"}>
                <button className="bg-transparent md:px-4 md:py-2 items-center rounded-full font-bold text-white border border-white hover:bg-white/30 hover:text-blue-800 md:text-xl text-sm px-2 py-1 drop-shadow-2xl">
                  Book A Tour
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
