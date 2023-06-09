import React from 'react'
import Tour from './Tour'
import Layout from './Layout'

const Tours = () => {
    const tours =[
        {
            image:'/pictures/TenettiPark.jpg',
            tourName:"Araku tour",
            price:200,
            id:1
        },
        {
            image:'/pictures/Araku.jpg',
            tourName:"Rushikonda tour",
            price:100,
            id:2
        },
        {
            image:'/pictures/ArakuWaterfall.jpg',
            tourName:"City tour",
            price:250,
            id:3
        },
        {
            image:'/pictures/beach.jpg',
            tourName:"Tirupati tour",
            price:500,
            id:4
        },
        {
            image:'/pictures/Rushikonda.jpg',
            tourName:"Kailasgiri tour",
            price:150,
            id:5
        }
    ]
  return (
    <Layout>
        <div className='mt-30 flex justify-center my-5'>
    <h1 className='text-5xl font-semibold text-blue-500 decoration underline'>Choose Your Tours</h1>
    </div>
    <div className='flex max-w-[1200px] my-5 mx-auto gap-8 items-center justify-center flex-wrap'>
        
        {tours.map((tour)=>{
            return(
            <div key={tour.id}>
                <Tour img={tour.image} tourName={tour.tourName} price={tour.price} id={tour.id}/>
            </div>
        )})}
    </div>
    </Layout>
  )
}

export default Tours