import React from "react";
import "animate.css";
import Link from "next/link";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Hero = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center md:justify-evenly gap-10 flex-col lg:flex-row mx-4 my-20">
      <div className="flex items-center justify-center bg-black/50 rounded-lg drop-shadow-xl animate__animated animate__bounceInLeft animate__slow">
        <div className="flex flex-col gap-4">
          <ul className="flex flex-row text-white gap-8 items-center justify-center mx-4 my-4 px-4 py-2">
            <li><WhatsAppIcon className="text-green-400"/></li>
            <li><LinkedInIcon className="text-blue-700"/></li>
            <li><FacebookIcon className="text-blue-700"/></li>
            <li><TwitterIcon className="text-blue-300"/></li>
          </ul>
          <div className="flex flex-row gap-2 mx-2">
            <PhoneIphoneIcon fontSize="large" className="text-white"/>
            <h1 className="text-white md:text-xl">+91 123456789</h1>
          </div>
          <div className="flex flex-row gap-2 mx-2">
            <MailOutlineIcon fontSize="large" className="text-white"/>
            <h1 className="text-white md:text-xl">Contact@northsouthtourstravels.com</h1>
          </div>
          <div className="flex flex-row gap-2 mx-2 mb-4">
            <LocationOnIcon fontSize="large" className="text-white"/>
            <h1 className="text-white md:text-xl">29-13-11, Singh Hotel Jn,<br/> Sivalayam Down Rd, Dabagardens, Visakhapatnam-530016</h1>
          </div>

        </div>
      </div>
      <div className="flex items-center justify-center mr-4">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-5xl md:3xl font-bold text-white drop-shadow-xl animate__animated animate__bounceInRight animate__fast">
            EXPLORE THE
          </h1>
          <h1 className="text-2xl lg:text-5xl md:3xl font-bold text-white drop-shadow-xl animate__animated animate__bounceInRight animate__slow">
            CITY OF <span className="text-blue-600">DESTINY</span>
          </h1>
          <h1 className="text-2xl lg:text-5xl md:text-3xl font-bold text-white drop-shadow-xl animate__animated animate__bounceInRight animate__slower">
            WITH{" "}
            <span className="text-blue-600 underline decoration-2 decoration-sky-200">
              US
            </span>
          </h1>
          {/* <p className="mt-5 font-semibold text-gray-200 p-2 text-sm drop-shadow-2xl animate__animated animate__bounceInRight animate__delay-2s">
        Visakhapatnam, also known as Vizag, is a popular coastal city in Andhra
        Pradesh, India. With beautiful beaches, scenic hills, historic sites,
        and cultural landmarks, it is a great destination for travelers seeking
        a mix of natural beauty, history, and culture.
      </p> */}
          <div className="flex flex-col my-4">
            {/* <button className="bg-white/50 md:px-4 md:py-2 items-center rounded-full font-semibold text-blue-600 hover:bg-white/90 md:text-xl text-sm px-2 py-1 drop-shadow-2xl animate__animated animate__bounceInRight animate__delay-3s">Book A Tour</button> */}
            <Link href={"/bookTour"}>
              <button className="bg-transparent md:px-4 md:py-2 items-center rounded-full font-semibold text-white border border-white hover:bg-white/20 hover:text-blue-800 md:text-xl text-sm px-2 py-1 drop-shadow-2xl animate__animated animate__bounceInRight animate__delay-3s">
                Book A Tour
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
