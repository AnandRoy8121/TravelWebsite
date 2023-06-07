import React from "react";
import "animate.css";



const PlanTrip = () => {
  return (
    <div className="max-w-[1200px] m-auto grid px-4 py-12 lg:grid-cols-2 gap-4">
      <div className="h-[80vh] grid grid-cols-2 grid-rows-6 animate__animated animate__bounceInLeft animate__delay-1 wow">
        <img
          className="row-span-3 w-full h-full p-2 object-cover"
          src="/pictures/Araku.jpg"
          alt=""
        />
        <img
          className="row-span-2 w-full h-full p-2 object-cover"
          src="/pictures/ArakuWaterfall.jpg"
          alt=""
        />
        <img
          className="row-span-2 w-full h-full p-2 object-cover"
          src="/pictures/beach.jpg"
          alt=""
        />
        <img
          className="row-span-3 w-full h-full p-2 object-cover"
          src="/pictures/TenettiPark.jpg"
          alt=""
        />
        <img
          className="row-span-2 w-full h-full p-2 object-cover"
          src="/pictures/Rushikonda.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col h-full gap-2 animate__animated animate__bounceInRight animate__delay-1s  wow">
        <h3 className="text-2xl mx-auto font-bold md:text-3xl text-blue-500
          underline underline-offset-1">
          SERVICES WE OFFER
        </h3>
        <ul className="flex flex-col items-start justify-center mx-auto gap-4">
          <li className="text-xl font-semibold bg-white px-4 py-2 shadow-md rounded-lg translate-x-2 duration-100 hover:scale-125">Hotel Booking</li>
          <li className="text-xl font-semibold bg-white px-4 py-2 shadow-md rounded-lg translate-x-2 duration-100 hover:scale-125">CAB Booking</li>
          <li className="text-xl font-semibold bg-white px-4 py-2 shadow-md rounded-lg translate-x-2 duration-100 hover:scale-125">Tours</li>
        </ul>
        {/* <p className="text-xl font-semibold text-blue-400  animate__animated animate__bounceInRight animate__delay-1s  wow">
        Experience the world like never before with us - Your gateway to adventure, relaxation, and unforgettable memories!
        </p>
        <p className="text-gray-700  animate__animated animate__bounceInRight animate__delay-1s  wow">
        Traveling with our website in and around Visakhapatnam offers benefits such as personalized itineraries, local expertise, discounted rates, and seamless bookings for attractions, accommodations, and transportation.
        </p> */}
        <div className="mt-4 mx-auto  animate__animated animate__bounceInRight animate__delay-1s  wow">
          <button className="bg-blue-600 text-white text-xl px-4 py-2 font-semibold shadow-md rounded-full hover:bg-blue-800">
            Book A Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
