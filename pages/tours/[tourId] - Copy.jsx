import Link from "next/link";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const BookTour = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  const tourDetails = [
    {
      image: "/pictures/TenettiPark.jpg",
      desc: "Traveling with our website in and around Visakhapatnam offers benefits such as personalized itineraries, local expertise, discounted rates, and seamless bookings for attractions, accommodations, and transportation.",
      tourName: "Araku tour",
      price: 200,
      id: 1,
    },
  ];
  return (
    <div>
      {tourDetails.map((details) => {
        return (
          <div
            key={details.id}
            className="w-full h-screen relative flex flex-col"
          >
            <img
              className="top-0 left-0 w-full min-h-[400px] object-cover"
              src={details.image}
              alt=""
            />

            <div className="absolute top-[50px] right-10 md:right-1/3 z-10 flex flex-col pr-5 bg-transparent/40 items-center justify-center px-8 py-4 mx-auto  rounded-2xl">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold px-8 py-4 text-white">
                {details.tourName}
              </h1>
              <p className="text-xl text-white font-semibold text-start mr-2">Place involved in tour</p>
              <ul>
                <li className=" text-gray-200 text-sm">Lorem ipsum dolor sit amet</li>
                <li className=" text-gray-200 text-sm">Lorem ipsum dolor sit amet</li>
                <li className=" text-gray-200 text-sm">Lorem ipsum dolor sit amet</li>
                <li className=" text-gray-200 text-sm">Lorem ipsum dolor sit amet</li>
                <li className=" text-gray-200 text-sm">Lorem ipsum dolor sit amet</li>
                <li className=" text-gray-200 text-sm">Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row gap-5 w-full bg-blue-100 mt-5 items-center mx-auto px-10 py-4 ">
              <input
                className="rounded-lg px-2 py-2"
                type="number"
                name="person"
                id="person"
                placeholder="Travellers"
              />
              <Datepicker
                className="z-40"
                value={value}
                onChange={handleValueChange}
              />

              <Link href={"#"}>
                <button className="px-10 py-2 bg-blue-500 rounded-full font-bold text-white">
                  Book
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookTour;
