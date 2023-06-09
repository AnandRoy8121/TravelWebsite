import React from 'react'
import Layout from '@/components/Layout'

const Vehicle = () => {
  return (
    <Layout>
      <div className='h-full w-full'>
      <div className='flex justify-center items-center w-full h-[70%] bg-cover bg-center rounded-md'
         style={{backgroundImage:`url(/pictures/vehicle.jpg)`}}>
          <h1 className='text-white text-6xl font-bold'>Vehicles</h1>
         </div>
      </div>
     </Layout>
  )
}

export default Vehicle