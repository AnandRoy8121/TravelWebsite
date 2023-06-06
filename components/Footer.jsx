import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/Bs";
import {AiOutlineMail} from "react-icons/Ai";

const Footer = () => {
  return (
    <div className='bg-blue-900 text-gray-200 w-full p-4 mx-auto mt-10'>
        <div className='grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-300'>
            <div className=''>
                <h3 className='font-semibold uppercase'>Araku Tour</h3>
                <ul>
                    <li className='p-2'>Lorem1</li>
                    <li className='p-2'>Lorem2</li>
                    <li className='p-2'>Lorem3</li>
                    <li className='p-2'>Lorem4</li>
                    <li className='p-2'>Lorem5</li>
                </ul>
            </div>
            <div className=''>
                <h3 className='font-semibold uppercase'>Rushikonda Tour</h3>
                <ul>
                    <li className='p-2'>Lorem1</li>
                    <li className='p-2'>Lorem2</li>
                    <li className='p-2'>Lorem3</li>
                    <li className='p-2'>Lorem4</li>
                    <li className='p-2'>Lorem5</li>
                </ul>
            </div>
            <div className=''>
                <h3 className='font-semibold uppercase'>Tirupati Tour</h3>
                <ul>
                    <li className='p-2'>Lorem1</li>
                    <li className='p-2'>Lorem2</li>
                    <li className='p-2'>Lorem3</li>
                    <li className='p-2'>Lorem4</li>
                    <li className='p-2'>Lorem5</li>
                </ul>
            </div>
            <div className=''>
                <h3 className='font-semibold uppercase'>City Tour</h3>
                <ul>
                    <li className='p-2'>Lorem1</li>
                    <li className='p-2'>Lorem2</li>
                    <li className='p-2'>Lorem3</li>
                    <li className='p-2'>Lorem4</li>
                    <li className='p-2'>Lorem5</li>
                </ul>
            </div>
            <div className='col-span-2 px-4 '>
                <h3 className='p-2 uppercase font-semibold text-3xl decoration underline'>Contact Us</h3>
                
                <div className='flex items-center'>
                    <BsFillTelephoneFill className='m-2 cursor-pointer' size={20}/>
                <p className='p-2 text-xl font-semibold'>+91 123456789</p>
                </div>
                <div className='flex items-center'>
                    <AiOutlineMail className='m-2 cursor-pointer' size={20}/>
                <p className='p-2 text-xl font-semibold'>vizagtravel@gmail.com</p>
                </div>
                <p className='text-xl font-semibold mt-5'>&copy; VizagTravel {new Date().getFullYear()}</p>
            </div>
        </div>
        <div className='p-2 flex flex-col sm:flex-row mt-2 justify-between'>
            <h3 className='mt-2 text-xl font-bold '>Follows Us on</h3>
            <div className='flex justify-between'>
            <FaFacebook className='m-2 cursor-pointer' size={30}/>
            <FaInstagram className='m-2 cursor-pointer' size={30}/>
            <FaTwitter className='m-2 cursor-pointer' size={30}/>
            <FaWhatsapp className='m-2 cursor-pointer' size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Footer