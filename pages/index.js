import Head from 'next/head'
//import { Inter } from '@next/font/google'
import Hero from '@/components/Hero'
import ImageSlider from '@/components/ImageSlider'
import PlanTrip from '@/components/PlanTrip'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import Testimonial from '@/components/Testimonial'


const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    new WOW().init()
  }, [])
  
  return (
    <>
      <Head>
        <title>NorthSouth Tours&Travels</title>
        <meta name="description" content="best travel agent in visakhapatnam, vizag, aruku, bhimili, tours and travels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full h-screen'>
        {/* <img className='top-0 left-0 w-full h-screen object-cover' src="/pictures/hero.jpg" alt="" /> */}
        <video className='top-10 left-0 w-full h-screen object-cover' autoPlay muted loop src="/pictures/beach.mp4" alt=""></video>
        <Hero/>
        <PlanTrip/>
        <ImageSlider/>
        <Testimonial/>
        <Footer/>
      </div>
    </>
  )
}
