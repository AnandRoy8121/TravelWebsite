import { useRouter } from 'next/router'
import React from 'react'

const BookingPage = () => {
    const router = useRouter()
  return (
    <div>
        <p>BookingPage :{router.query.tourId}</p>
    </div>
  )
}

export default BookingPage