import React from 'react'
import TitleCard from '../Components/TitleCard'
import ContactForm from '../Components/ContactForm'
import GetInTouch from '../Components/GetInTouch'
import FindUs from '../Components/FindUs'

function ContactPage() {
  return (
    <div>
      <TitleCard Title="Contact Us" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <GetInTouch />
      <FindUs />
    </div>
  )
}

export default ContactPage