import React from "react";
import "animate.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="absolute w-full top-20 z-20 flex flex-col items-end pr-5">
      <div className="w-1/2">
        <h1 className="text-3xl lg:text-7xl md:5xl font-bold text-white drop-shadow-xl animate__animated animate__bounceInRight animate__fast">
          EXPLORE THE
        </h1>
        <h1 className="text-3xl lg:text-7xl md:5xl font-bold text-white drop-shadow-xl animate__animated animate__bounceInRight animate__slow">
          CITY OF <span className="text-blue-600">DESTINY</span>
        </h1>
        <h1 className="text-3xl lg:text-7xl md:5xl font-bold text-white drop-shadow-xl animate__animated animate__bounceInRight animate__slower">
          WITH{" "}
          <span className="text-blue-600 underline decoration-2 decoration-sky-200">
            US
          </span>
        </h1>
      <p className="mt-5 font-semibold text-gray-200 p-2 text-sm drop-shadow-2xl animate__animated animate__bounceInRight animate__delay-2s">
        Visakhapatnam, also known as Vizag, is a popular coastal city in Andhra
        Pradesh, India. With beautiful beaches, scenic hills, historic sites,
        and cultural landmarks, it is a great destination for travelers seeking
        a mix of natural beauty, history, and culture.
      </p>
      <div className="flex flex-col items-end m-5">
      {/* <button className="bg-white/50 md:px-4 md:py-2 items-center rounded-full font-semibold text-blue-600 hover:bg-white/90 md:text-xl text-sm px-2 py-1 drop-shadow-2xl animate__animated animate__bounceInRight animate__delay-3s">Book A Tour</button> */}
      <Link href={'/bookTour'}><button className="bg-transparent md:px-4 md:py-2 items-center rounded-full font-semibold text-white border border-white hover:bg-white/20 hover:text-blue-800 md:text-xl text-sm px-2 py-1 drop-shadow-2xl animate__animated animate__bounceInRight animate__delay-3s">Book A Tour</button></Link>
      </div>
      </div>
    </div>
  );
};

export default Hero;
