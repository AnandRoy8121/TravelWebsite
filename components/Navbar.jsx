import React, { useState } from 'react'
import { BiMenuAltRight } from "react-icons/Bi";
import "animate.css";
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = ({companyName}) => {
    const router = useRouter()
    const [nav, setNav] = useState(false)
    const handleNav =()=>{
        setNav(!nav)
        if(!nav){
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'scroll'
            document.body.style.overflowX = 'hidden'
        }

    }
  return (
    <div className='absolute top-0 flex justify-between p-4 w-full items-center'>
        <Link href={'/'}><h1 className='text-white font-bold text-2xl z-40'>{companyName}</h1></Link>
        <BiMenuAltRight onClick={handleNav} size={30} className='text-white z-40 cursor-pointer'/>
        <div className={nav ?'fixed top-0 left-0 z-30 text-gray-300 w-full h-screen bg-black/80 px-4 py-7 flex-col ease-out duration-700':'absolute z-10 top-0 left-[-100%] duration-1000 ease-in h-screen'}>
            <ul className='flex flex-col items-center justify-center w-full h-full'>
                <Link href={'#'}><li className='font-bold text-2xl p-4 duration-75 translate-x-2 hover:scale-125 cursor-pointer'>Our Tours</li></Link>
                <Link href={'/about'}><li className='font-bold text-2xl p-4  duration-75 translate-x-2 hover:scale-125 cursor-pointer'>About Us</li></Link>
                <Link href={'/contact'}><li className='font-bold text-2xl p-4  duration-75 translate-x-2 hover:scale-125 cursor-pointer'>Contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar