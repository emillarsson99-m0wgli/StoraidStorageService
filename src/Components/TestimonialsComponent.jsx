import React from 'react'

function TestimonialsComponent() {
  return (
    <div className="testimonials-box">
        <div className="testimonials-box-content">
            <div className="star-rating">
                <img src="/StarIcon.svg" alt="" />
                <img src="/StarIcon.svg" alt="" />
                <img src="/StarIcon.svg" alt="" />
                <img src="/StarIcon.svg" alt="" />
                <img src="/StarIcon.svg" alt="" />
            </div>
            <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
            
            <div className="testimonials-person">
                <p className="img-placeholder">Placeholder</p>
                <div className="testimonials-person-text">
                    <h5>Celvin Gabriel</h5>
                    <p>Customer</p>
                </div>
                <div className="testimonials-quote">
                    <img src="/quoteIcon.svg" alt="" className="quote-icon" />
                </div>
            </div>
        </div>     
    </div>
  )
}

export default TestimonialsComponent