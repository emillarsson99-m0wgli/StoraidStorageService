import React from 'react'
import AboutUs from '../Components/AboutUs'
import Testimonials from '../Components/Testimonials'
import WhyChooseUs from '../Components/WhyChooseUs'
import Brands from '../Components/Brands'
import TitleCard from '../Components/TitleCard'
function AboutUsPage() {
  return (
    <div>
        <TitleCard Title="About Us" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
        <AboutUs />
        <Brands />
        <Testimonials />
        <WhyChooseUs className="WCU-about-us" />
    </div>
  )
}

export default AboutUsPage