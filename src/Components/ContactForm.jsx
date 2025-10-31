import React from 'react'

function ContactForm() {
  return (
    <div className="contact-form-container">
        <div className="input-group">
            <label htmlFor="name" className="contact-label"></label>
            <input type="text" id="name" className="contact-input" />
        </div>

        <div className="input-group">
            <label htmlFor="email" className="contact-label"></label>
            <input type="text" id="email" className="contact-input" />
        </div>

        <div className="input-group">
            <label htmlFor="telephone" className="contact-label"></label>
            <input type="text" id="telephone" className="contact-input" />
        </div>

        <div className="input-group">
            <label htmlFor="subject" className="contact-label"></label>
            <input type="text" id="subject" className="contact-input" />
        </div>

        <div className="input-group">
            <label htmlFor="comment-questions" className="contact-label"></label>
            <input type="text" id="comments-questions" className="contact-input" />
        </div>

    </div>
  )
}

export default ContactForm