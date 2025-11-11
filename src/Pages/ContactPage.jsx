import React from 'react'
import TitleCard from '../Components/TitleCard'
import ContactForm from '../Components/ContactForm'

function ContactPage() {
  return (
    <div>
      <TitleCard Title="Contact Us" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <ContactForm />
    </div>
  )
}

export default ContactPage