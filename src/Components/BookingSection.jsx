import React from 'react'
import BookingForm from './BookingForm'

function BookingSection() {
  return (
    <div className="booking-section-container">
        <div className="booking-headline">
            <h4>Booking Unit</h4>
            <h3>Book Your Storage Unit Now & Simplify Your Life!</h3>
            <img className="booking-fox" src="./ContactFox.jpg" alt="" />
            {/* Bilden är ai genererad med gemini */}
        </div>
        <div className="booking-section-form">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            <BookingForm />
        </div>
    </div>
  )
}

export default BookingSection