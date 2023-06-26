import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <div className='bg-blue-900 text-gray-200 w-full p-4 mx-auto mt-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-300 gap-2 px-2 py-2'>
            <div className='bg-blue-800 shadow-lg px-4 rounded-md'>
                <h3 className='font-bold md:text-3xl uppercase text-center'>Tours</h3>
                <ul>
                    <li className='p-2 font-semibold'>Vizag Local Site Seeing 14 Points</li>
                    <li className='p-2 font-semibold'>Vizag Local Site Seeing 17 Points</li>
                    <li className='p-2 font-semibold'>Vizag Leisure Special -1</li>
                    <li className='p-2 font-semibold'>Vizag Leisure Special -2</li>
                    <li className='p-2 font-semibold'>Araku/Borra Caves Tour</li>
                </ul>
            </div>
            <div className='bg-blue-800 shadow-lg px-2 py-2 gap-2 rounded-md'>
                <h3 className='font-bold md:text-3xl uppercase text-center'>Vehicles</h3>
                <ul>
                    <li className='p-2 font-semibold'>Seden/Dzire/Vista</li>
                    <li className='p-2 font-semibold'>Ertiga/Bolero/Triber</li>
                    <li className='p-2 font-semibold'>Innova/XUV 700</li>
                    <li className='p-2 font-semibold'>Tevera</li>
                    <li className='p-2 font-semibold'>Tempo Traveller</li>
                </ul>
            </div>
            {/* <div className=''>
                <h3 className='font-semibold uppercase'>Tirupati Tour</h3>
                <ul>
                    <li className='p-2'>Lorem1</li>
                    <li className='p-2'>Lorem2</li>
                    <li className='p-2'>Lorem3</li>
                    <li className='p-2'>Lorem4</li>
                    <li className='p-2'>Lorem5</li>
                </ul>
            </div> */}
            {/* <div className=''>
                <h3 className='font-semibold uppercase'>City Tour</h3>
                <ul>
                    <li className='p-2'>Lorem1</li>
                    <li className='p-2'>Lorem2</li>
                    <li className='p-2'>Lorem3</li>
                    <li className='p-2'>Lorem4</li>
                    <li className='p-2'>Lorem5</li>
                </ul>
            </div> */}
            <div className='col-span-2 px-4 bg-blue-800 shadow-lg py-2 gap-2 rounded-md'>
                <h3 className='p-2 uppercase font-semibold text-3xl decoration underline'>Contact Us</h3>
                
                <div className='flex items-center'>
                <PhoneIphoneIcon fontSize="large" className="text-white"/>
                <p className='p-2 text-xl font-semibold'>+91 7981321157</p>
                </div>
                <div className='flex items-center'>
                <MailOutlineIcon fontSize="large" className="text-white"/>
                <p className='p-2 md:text-xl text-sm font-semibold'>Contact@northsouthtourstravels.com</p>
                </div>
                <p className='text-xl font-bold mt-5'>&copy; NorthSouth Tours&Travels {new Date().getFullYear()}</p>
            </div>
        </div>
        <div className='p-2 flex flex-col sm:flex-row mt-2 justify-between'>
            <h3 className='mt-2 text-xl font-bold '>Follows Us on</h3>
            <div className='flex justify-between'>
            <a href="https://www.facebook.com/profile.php?id=100093822167607" target="_blank"><FaFacebook className='m-2 cursor-pointer' size={30}/></a>
            <a href="https://www.instagram.com/northsouthtandt/" target="_blank"><FaInstagram className='m-2 cursor-pointer' size={30}/></a>
            <a href="https://twitter.com/NorthSouthTandT" target="_blank"><FaTwitter className='m-2 cursor-pointer' size={30}/></a>
            {/* <FaWhatsapp className='m-2 cursor-pointer' size={30}/> */}
            </div>
        </div>
    </div>
  )
}

export default Footer