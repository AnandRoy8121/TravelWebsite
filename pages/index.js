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
        <meta name="description" content="Best travel agent in visakhapatnam, vizag, aruku, bhimili, tours and travels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore vizag Visakhapatnam with best travel agent. Best and affordable tours available for Aruku, Visakhapatnam and aroud. Best can facility with wide range of vehicles"/>
        <meta property="og:title" content="Best travel agent in visakhapatnam, vizag, aruku, bhimili, tours and travels with cab and hotel facility - northsouthtourstravels"/>
        <meta property="og:description" content="Discover extraordinary destinations and embark on unforgettable journeys with NorthSouthToursTravels. We offer personalized travel experiences, expertly crafted itineraries, and exceptional customer service. Explore the world's wonders, from breathtaking landscapes to vibrant cultures. Start your next adventure today!"/>
        <meta property="og:url" content="https://northsouthtourstravels.com/"/>
        <meta property="og:type" content="website"/>
        <link rel="icon" href="/northsouthtourstravelsLOGO.ico" />
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
