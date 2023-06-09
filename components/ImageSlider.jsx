import React, { useEffect, useState } from 'react'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md";
import {GoPrimitiveDot} from "react-icons/Go";
const ImageSlider = () => {
    const [slide, setSlide] = useState(0)
    useEffect(() => {
        setInterval(() => {
                 setSlide(slide=> slide ===Images.length-1?0:slide+1)
                  }, 5000);
}, [])
    
    const Images =[
        {
            image:'/pictures/TenettiPark.jpg',
            text: 'Ash'
        },
        {
            image:'/pictures/Araku.jpg',
            text:'Biryani'
        },
        {
            image:'/pictures/ArakuWaterfall.jpg',
            text:'Fries'
        },
        {
            image:'/pictures/beach.jpg',
            text:'salad'
        },
        {
            image:'/pictures/Rushikonda.jpg',
            text:'Icecream'
        }
    ]
    const slideLeft =()=>{
            const isFirst = slide ===0
            const currentSlide = isFirst ? Images.length-1:slide-1
            setSlide(currentSlide)
    }

    const slideRight =()=>{
        const isLast = slide === Images.length-1
        const currentSlide = isLast? 0:slide+1
        setSlide(currentSlide)
    }

    // setInterval(() => {
    //     setSlide(slide=> slide ===Images.length-1?0:slide+1)
    // }, 2000);
  return (
    <div className='h-[500px] w-full m-auto py-6 px-4 relative group mt-5'>
        <div className='w-full h-full bg-cover bg-center rounded-2xl'
         style={{backgroundImage:`url(${Images[slide].image})`}}>
         </div>
        <div className='absolute top-[40%] -translate-x-0 -translate-y-[-50%] ease-in left-5 text-2xl rounded-full p-2 group-hover:bg-black/50 text-white cursor-pointer duration-700'>
            <MdKeyboardArrowLeft size={30} onClick={slideLeft}/>
        </div>
        <div className='absolute top-[40%] -translate-x-0 -translate-y-[-50%] ease-out right-5 text-2xl rounded-full p-2 group-hover:bg-black/50 text-white cursor-pointer duration-700'>
            <MdKeyboardArrowRight size={30} onClick={slideRight}/>
        </div>
        <div className='flex top-4 justify-center p-2'>
            {
                Images.map((slide,slideIndex)=>(
                    <div className='cursor-pointer' key={slideIndex} onClick={()=>setSlide(slideIndex)}>
                        <GoPrimitiveDot size={20}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ImageSlider