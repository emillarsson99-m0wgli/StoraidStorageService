import React from 'react'
import Button from "./Button"

function ContactForm() {
  return (
    <div className="contact-form-container">
        <div className="input-group">
            <label htmlFor="name" className="contact-label" aria-required>Your Name</label>
            <input type="text" id="name" className="contact-input" placeholder="Your name"/>
        </div>

        <div className="contact-row">
            <div className="input-group">
                <label htmlFor="email" className="contact-label">Email</label>
                <input type="text" id="email" className="contact-input" placeholder="Email"/>
            </div>

            <div className="input-group">
                <label htmlFor="telephone" className="contact-label">Telephone</label>
                <input type="text" id="telephone" className="contact-input" placeholder="Telephone"/>
            </div>
        </div>

        <div className="input-group">
            <label htmlFor="subject" className="contact-label">Subject</label>
            <input type="text" id="subject" className="contact-input" placeholder="How can we help you" />
        </div>

        <div className="input-group">
            <label htmlFor="comment-questions" className="contact-label">Comments / Questions</label>
            <input type="text" id="comments-questions" className="contact-input" placeholder="Comments" />
        </div>

        <div className="form-btn">
            <Button Text="Submit"/>
        </div>

    </div>
  )
}

export default ContactForm