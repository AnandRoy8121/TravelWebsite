import React from 'react'
import Layout from '@/components/Layout'

const Hotel = () => {
  return (
    <Layout>
      <div className='h-full w-full'>
      <div className='flex justify-center items-center w-full h-[70%] bg-cover bg-center rounded-md'
         style={{backgroundImage:`url(/pictures/hotel.jpg)`}}>
          <h1 className='text-white text-6xl font-bold'>Hotel</h1>
         </div>
         <div className='mt-10 font-bold text-center bg-blue-200 mx-auto px-10 py-5 text-3xl'>Best Hotel Deals Coming SOON!! Stay Tuned!!</div>
      </div>
     </Layout>
  )
}

export default Hotel