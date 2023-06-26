import React, { useState } from "react";
import Layout from "@/components/Layout";
import Datepicker from "react-tailwindcss-datepicker";
import Link from "next/link";


const Vehicle = () => {
  const [enquiry, setEnquiry] = useState(false);

  const [name, setName] = useState('');
    const [personCount, setPersonCount] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [tourId, setTourId] = useState('');
    const [tourName, setTourName] = useState('');
  const vehicles = [
    {
      name: "Seden/Dzire/Vista",
      capacity: 4,
      img: "https://www.cartoq.com/wp-content/uploads/2018/03/S201.jpg",
      id: 1,
    },
    {
      name: "Ertiga/Bolero/Triber",
      capacity: 6,
      img: "https://imgd.aeplcdn.com/600x337/n/cw/ec/139315/hector-plus-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
      id: 2,
    },
    {
      name: "Innova/XUV 700",
      capacity: 7,
      img: "https://www.indiacarnews.com/wp-content/uploads/2020/10/Upcoming-7-seater-SUVs-MPVs-India.jpg",
      id: 3,
    },
    {
      name: "Tevera",
      capacity: 9,
      img: "https://www.godigit.com/content/dam/godigit/directportal/en/mahindra-tuv300-1.jpg",
      id: 4,
    },
    {
      name: "Tempo Traveller",
      capacity: 18,
      img: "https://5.imimg.com/data5/QR/YT/QJ/SELLER-8114104/17-seat-tempo-travellor.jpg",
      id: 5,
    },
  ];
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    
    setValue(newValue);
  };

  const handleEnquirySubmit = (id,name)=>{
    setEnquiry(true)
    setTourId(id)
    setTourName(name)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, personCount, email, phone, tourId,tourName,value }),
      });

      if (response.ok) {
        //console.log('Email sent successfully');
        setEnquiry(false)
        // Handle success, show a success message, or redirect the user
      } else {
        //console.log('Failed to send email');
        // Handle error, show an error message, or redirect the user
      }
    } catch (error) {
      //console.log('Failed to send email', error);
      // Handle error, show an error message, or redirect the user
    }
  };
  return (
    <Layout>
      <div className="h-full w-full">
        <div
          className="flex justify-center items-center w-full h-[70%] bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(/pictures/vehicle.jpg)` }}
        >
          <h1 className="text-white bg-black/40 text-6xl font-bold">
            Vehicles
          </h1>
        </div>
        {/* Bottom section */}
        <div className="flex w-full h-full my-10 gap-4 justify-around flex-wrap">
          {!enquiry && vehicles.map((vehicle) => {
            return (
          <div
            className="flex w-full md:w-1/3 h-1/3 bg-cover bg-center p-4 bg-white shadow-lg rounded-md mx-5 my-4 duration-100 hover:scale-110"
            style={{ backgroundImage: `url(${vehicle.img})` }}
          key={vehicle.id}>
            <div className="flex flex-col gap-2 px-4 py-2 my-auto mx-auto bg-black/50 justify-center rounded-md">
              <h1 className="text-white font-bold">{vehicle.name}</h1>
              <div className="flex flex-row text-white font-semibold justify-evenly">
                <p>Capacity:</p>
                <p>{vehicle.capacity}</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 rounded-md text-white font-semibold" onClick={()=>handleEnquirySubmit(vehicle.id,vehicle.name)}>
                Enquiry
              </button>
            </div>
          </div>
            );
          })}
        </div>
      </div>
      {enquiry &&
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[100]">
        <div className="flex w-full md:w-1/2 flex-col gap-5 bg-blue-100 items-center mx-auto py-10">

      
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl text-center decoration underline">
              Send Enquiry By Filling Below
            </h1>
            {/* Input Name */}
            <Datepicker
              className="z-40"
              value={value}
              onChange={handleValueChange}
              useRange={false}
              placeholder={"Enter Travel Dates"}
              separator={"to"}
            />
            <input
              className="rounded-lg px-4 py-2"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* Input Person Count */}
            <input
              className="rounded-lg px-4 py-2"
              type="number"
              name="person"
              id="person"
              placeholder="Travellers"
              value={personCount}
              onChange={(e) => setPersonCount(e.target.value)}
            />
          {/* Input Email */}
            <input
              className="rounded-lg px-4 py-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Input Phone */}
            <input
              className="rounded-lg px-4 py-2"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <Link href={"#"}>
            <button className="px-10 py-2 bg-blue-500 rounded-full font-bold text-white" onClick={handleSubmit}>
              Book
            </button>
          </Link>
        </div>
        <div
          className="absolute top-5 right-5 md:right-10 font-bold text-white text-2xl cursor-pointer"
          onClick={() => setEnquiry(!enquiry)}
        >
          X
        </div>
      </div>
      }
    </Layout>
  );
};

export default Vehicle;
