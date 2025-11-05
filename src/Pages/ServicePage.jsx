import React from 'react'
import OurServices from '../Components/OurServices'
import Testimonials from '../Components/Testimonials'
import Booking from '../Components/Booking'
import TitleCard from '../Components/TitleCard'
import FAQ from '../Components/FAQ'
function ServicePage() {
  return (
    <div>
        <TitleCard Title="Services" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
        <OurServices />
        <Testimonials className="testimonials-servicePage" />
        <FAQ />
        <Booking />
    </div>
  )
}

export default ServicePage