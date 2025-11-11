import React from 'react'
import ContactForm from './ContactForm'

function GetInTouch() {
  return (
    <div className="get-in-touch-container">
        <div className="get-in-touch-headline">
            <h4>Get in Touch</h4>
            <h3>Get Personalized Assistance – Contact Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
            <img className="contact-fox" src="./ContactFox.jpg" alt="" />
            {/* Bilden är ai genererad med gemini */}
        </div>
        <div className="get-in-touch-form">
            <ContactForm />
        </div>
    </div>
  )
}

export default GetInTouch