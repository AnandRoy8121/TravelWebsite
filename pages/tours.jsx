import Layout from "@/components/Layout";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Link from "next/link";

const Tours = () => {
  const [enquiry, setEnquiry] = useState(false);

  const [name, setName] = useState('');
    const [personCount, setPersonCount] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [tourId, setTourId] = useState('');
    const [tourName, setTourName] = useState('');

  const tours = [
    {
      name: "Vizag Local Site Seeing 14 Points",
      places: [
        "Simhachalam Mandir",
        "Zoo Park",
        "Rushi Konda Beach",
        "Kailasagiri Hill",
        "Tenneti Park",
        "Visakha Museum",
        "Beach Photo Spots",
        "Submarine Museum",
        "Fighter Craft Museum",
        "R.K. Beach",
        "Fish Aquarium",
        "Kali Temple",
        "Gokul Park",
      ],
      img: "https://www.revv.co.in/blogs/wp-content/uploads/2022/03/2010.png",
      id: 1,
    },
    {
      name: "Vizag Local Site Seeing 17 Points",
      places: [
        "Bhimli Beach",
        "Red Hills",
        "Ramanaidu Film Studio",
        "Zoo Park",
        "Rushi Konda Beach",
        "Kailasagiri Hill",
        "Tenneti Park",
        "Visakha Museum",
        "Beach Photo Spots",
        "Submarine Museum",
        "Fighter Craft Museum",
        "R.K. Beach",
        "Fish Aquarium",
        "Kali Temple",
        "Gokul Park",
        "Three Temple Port Area",
        "Fishing Harbour",
      ],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mahatma_Gandhi_statue_at_Bheemili_beach%2C_visakhapatnam.jpg/1200px-Mahatma_Gandhi_statue_at_Bheemili_beach%2C_visakhapatnam.jpg?20210720022721",
      id: 2,
    },
    {
      name: "Vizag Leisure Special -1",
      places: [
        "Ramanaidu Film Studio",
        "Rushi Konda Beach",
        "Kailasagiri Hill Top Park",
        "Tenneti Park",
        "Beach Photo Spots",
      ],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ramanaidu_studios.jpg/220px-Ramanaidu_studios.jpg",
      id: 3,
    },
    {
      name: "Vizag Leisure Special -2",
      places: [
        "Harbour Boat Sikar",
        "Sagar Durga Temple",
        "Light House Top",
        "View Point(Shipyard,Dockyard,Naval Base)",
        "Yarada Beach",
      ],
      img: "https://i.pinimg.com/originals/09/1e/40/091e402f9985a72ec4b38924f3000cc6.jpg",
      id: 4,
    },
    {
      name: "Araku/Borra Caves Tour",
      places: [
        "Ghat Photo Spots & Coffee Shop",
        "Borra Caves",
        "Water Fall Visit",
        "Tribal/Coffee Museum",
        "Padma Gardens",
        "Coffee Plantation",
      ],
      img: "https://curlytales.com/wp-content/uploads/2017/10/Borra-Caves-Near-Vizag-1-1-e1553859398618.jpg",
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
    <Layout className='relative'>
      <div className="h-full w-full">
        {/* Top Section */}
        <div
          className="flex justify-center items-center w-full h-[70%] bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(/pictures/ArakuValley.jpg)` }}
        >
          <h1 className="text-white text-6xl font-bold">Tours</h1>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col w-full h-full mt-5 px-10 py-10 gap-2">
          {!enquiry &&
            tours.map((tour) => {
              return (
                <div
                  key={tour.id}
                  className="flex flex-col md:flex-row w-full mx-auto bg-white shadow-lg px-2 py-2 mb-5 justify-between"
                >
                  <img
                    src={tour.img}
                    className="w-full md:w-[50%] h-full object-cover"
                    alt=""
                  />
                  <div className="flex flex-col items-center mx-auto px-4 py-2 gap-2">
                    <h1 className="text-3xl font-bold text-blue-700">
                      {tour.name}
                    </h1>
                    <h2 className="text-left text-xl font-semibold underline text-blue-600">
                      Places covered
                    </h2>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {tour.places.map((place) => {
                        return (
                          <p className="bg-blue-50 px-2 rounded-md shadow-md py-1 font-semibold">
                            {place}
                          </p>
                        );
                      })}
                    </div>
                    <button
                      className="px-10 py-2 bg-blue-400 font-semibold text-white rounded-md shadow-md hover:bg-blue-600"
                      onClick={() => handleEnquirySubmit(tour.id,tour.name)}
                    >
                      Enquiry
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {enquiry && (

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
        
      )}
    </Layout>
  );
};

export default Tours;
