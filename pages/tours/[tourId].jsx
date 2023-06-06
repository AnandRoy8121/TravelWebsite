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
            // className="w-full h-screen relative flex flex-col"
            className="flex flex-col md:flex-row"
          >
            <div className="flex flex-col flex-3">
              <img
                className="top-0 left-0 w-full h-1/2 object-cover"
                src={details.image}
                alt=""
              />
              <div className="absolute top-[75px] max-w-prose left-5 z-10 flex flex-col pr-5 bg-transparent/40 items-center justify-center px-4 py-2 mx-auto rounded-2xl">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold px-4 py-2 text-white">
                  {details.tourName}
                </h1>
                <p className="text-sm text-gray-200 text-start mr-2">
                  {details.desc}
                </p>
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-500 mt-5 px-4 py-2">Places covered in this tour</h1>
              <div className="flex flex-wrap gap-5 mx-auto ml-10 mt-10">
                <p className="text-sm bg-white shadow-md font-semibold px-4 py-2">Lorem ipsum dolor sit amet</p>
                <p className="text-sm bg-white shadow-md font-semibold px-4 py-2">Lorem ipsum dolor sit amet</p>
                <p className="text-sm bg-white shadow-md font-semibold px-4 py-2">Lorem ipsum dolor sit amet</p>
                <p className="text-sm bg-white shadow-md font-semibold px-4 py-2">Lorem ipsum dolor sit amet</p>
                <p className="text-sm bg-white shadow-md font-semibold px-4 py-2">Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div className="flex flex-1 w-full flex-col gap-5 md:h-screen bg-blue-100 items-center mx-auto px-10 py-4 ">
              <div className="flex flex-col gap-5">
                <h1 className="font-bold text-2xl text-center decoration underline">
                  Book Now
                </h1>
                <input
                  className="rounded-lg px-4 py-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                <input
                  className="rounded-lg px-4 py-2"
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

                <input
                  className="rounded-lg px-4 py-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  className="rounded-lg px-4 py-2"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                />
              </div>

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
