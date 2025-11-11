import InputForm from "./InputForm"
import Button from "./Button"
import { useState } from 'react'

function ContactForm() {

    const [contactData, setContactData] = useState({ name: '', email: '', telephone: '', subject: '', comment: '' });
    const [contactErrors, setContactErrors] = useState({})

    const validateNewsletter = () => {
        const newContactErrors = {}
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) { //regex är ai genererad 
                newContactErrors.email = "Please enter a valid emailadress."
            }
        setContactErrors(newContactErrors)
        return Object.keys(newContactErrors).length === 0;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateNewsletter()) {
            console.log('form valid')
            fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {method: 'post', headers: { 'content-type': 'application/json' }, body: JSON.stringify(contactData)})
        }
        else {
            console.log('form invalid')
        }
    }
  return (


    <form className="contact-form-container" onSubmit={handleSubmit} noValidate>
        <div className="input-group">
            <p>Your Name</p>
            <input className="contact-input" id="name"  type="text" name="name" placeholder="Name" value={contactData.name} onChange={handleInputChange} required />
            {contactErrors.name && <span className="contact-error">{contactErrors.name}</span>}
        </div>

        <div className="input-group">
            <div className="contact-row-form">
                <div className="contact-row">
                    <p>Email</p>
                    <input className="contact-input" id="email"  type="text" name="email" placeholder="Email" value={contactData.email} onChange={handleInputChange} required />
                    {contactErrors.email && <span className="contact-error">{contactErrors.email}</span>}
                </div>

                <div className="contact-row">
                    <p>Telephone</p>
                    <input className="contact-input" id="telephone"  type="text" name="telephone" placeholder="Telephone" value={contactData.telephone} onChange={handleInputChange}/>
                    {contactErrors.telephone && <span className="contact-error">{contactErrors.telephone}</span>}
                </div>
            </div>
        </div>

        

        <div className="input-group">
            <p>Subject</p>
            <input className="contact-input" id="subject"  type="text" name="subject" placeholder="Subject" value={contactData.subject} onChange={handleInputChange} required />
            {contactErrors.subject && <span className="contact-error">{contactErrors.subject}</span>}
        </div>

        <div className="input-group">
            <p>Comments / Questions</p>
            <textarea className="contact-input" name="comment" placeholder="Comments" id="comments"></textarea>    
        </div>
        <div className="form-button">
            <Button Text="Submit" className="form-btn"/>
        </div>
    </form>
  )
}

export default ContactForm