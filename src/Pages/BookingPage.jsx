import React from 'react'
import TitleCard from '../Components/TitleCard'
import WhyChooseUs from '../Components/WhyChooseUs'
import Booking from '../Components/Booking'
import FAQ from '../Components/FAQ'
import BookingSection from '../Components/BookingSection'
function BookingPage() {
  return (
    <div>
      <TitleCard Title="Booking" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <BookingSection />
      <WhyChooseUs className="WCU-bookingpage" />
      <Booking />
      <FAQ />
    </div>
  )
}

export default BookingPage