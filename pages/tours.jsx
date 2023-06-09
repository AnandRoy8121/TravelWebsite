import Layout from "@/components/Layout";
import React from "react";

const Tours = () => {
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
      name:'Vizag Local Site Seeing 17 Points',
      places:['Bhimli Beach', 'Red Hills', 'Ramanaidu Film Studio','Zoo Park', 'Rushi Konda Beach', 'Kailasagiri Hill', 'Tenneti Park', 'Visakha Museum','Beach Photo Spots', 'Submarine Museum', 'Fighter Craft Museum', 'R.K. Beach', 'Fish Aquarium', 'Kali Temple', 'Gokul Park', 'Three Temple Port Area', 'Fishing Harbour'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mahatma_Gandhi_statue_at_Bheemili_beach%2C_visakhapatnam.jpg/1200px-Mahatma_Gandhi_statue_at_Bheemili_beach%2C_visakhapatnam.jpg?20210720022721',
      id:2

    },
    {
      name:'Vizag Leisure Special -1',
      places:['Ramanaidu Film Studio', 'Rushi Konda Beach', 'Kailasagiri Hill Top Park', 'Tenneti Park', 'Beach Photo Spots'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ramanaidu_studios.jpg/220px-Ramanaidu_studios.jpg',
      id:3

    },
    {
      name:'Vizag Leisure Special -2',
      places:['Harbour Boat Sikar', 'Sagar Durga Temple', 'Light House Top', 'View Point(Shipyard,Dockyard,Naval Base)', 'Yarada Beach'],
      img: 'https://i.pinimg.com/originals/09/1e/40/091e402f9985a72ec4b38924f3000cc6.jpg',
      id:4

    },
    {
      name:'Araku/Borra Caves Tour',
      places:['Ghat Photo Spots & Coffee Shop', 'Borra Caves', 'Water Fall Visit', 'Tribal/Coffee Museum', 'Padma Gardens','Coffee Plantation'],
      img: 'https://curlytales.com/wp-content/uploads/2017/10/Borra-Caves-Near-Vizag-1-1-e1553859398618.jpg',
      id:5
    }
  ];
  return (
    <Layout>
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
          {tours.map((tour) => {
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
                  <h1 className="text-3xl font-bold text-blue-700">{tour.name}</h1>
                  <h2 className="text-left text-xl font-semibold underline text-blue-600">
                    Places covered
                  </h2>
                  <div className="flex flex-wrap gap-3 mt-4">
                  {tour.places.map(place=>{
                    return <p className="bg-blue-50 px-2 rounded-md shadow-md py-1 font-semibold">{place}</p>
                  })}
                  </div>
                  <button className="px-10 py-2 bg-blue-400 font-semibold text-white rounded-md shadow-md hover:bg-blue-600">Enquiry</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Tours;