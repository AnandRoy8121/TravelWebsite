import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import Link from "next/link";

const Enquiry = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
      });
    
      const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
      }
  return (
    <div className="w-screen flex h-screen absolute top-16 my-auto bg-black/80 z-[100]">
          <div className="flex w-full md:w-1/2 flex-col gap-5 h-screen bg-blue-100 items-center mx-auto py-10">
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
            <div className="absolute top-5 right-5 md:right-10 font-bold text-white text-2xl cursor-pointer" onClick={()=>setEnquiry(!enquiry)}>
              X
            </div>
        </div>
  )
}

export default Enquiry