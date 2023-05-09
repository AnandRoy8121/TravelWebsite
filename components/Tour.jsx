import Link from 'next/link'
import React from 'react'


const Tour = ({tourName,price,img,id}) => {
  return (
    <div className='w-[300px] rounded-lg bg-white shadow-lg duration-100 hover:scale-110 '>
        <img className='w-full h-[200px] object-cover rounded-t-lg' src={img} alt="" />
        <div className='flex justify-between my-2'>
          <p className='text-xl font-bold px-2 text-blue-600'>{tourName}</p>
          <p className='text-xl font-semibold px-2 text-blue-600'>{price}</p>
        </div>
        <Link href={`/tours/${id}`}><button className='bg-blue-600 text-center w-full px-4 py-2 text-xl font-bold text-white rounded-lg hover:bg-blue-800'>More Details</button></Link>
    </div>
  )
}

export default Tour