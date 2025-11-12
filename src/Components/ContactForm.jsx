import InputForm from "./InputForm"
import Button from "./Button"
import { useState } from 'react'

function ContactForm() {


    const [contactData, setContactData] = useState({ 
        name: '',
        email: '',
        telephone: '',
        subject: '',
        comment: ''
    });
    const [contactErrors, setContactErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validateContactForm = () => {
        const newContactErrors = {}
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) { //regex är ai genererad 
                newContactErrors.email = "Please enter a valid emailadress."
            }
        setContactErrors(newContactErrors)
        return Object.keys(newContactErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setContactData({...contactData, [name]: value})

        if (value.trim() === '' ) {
            setContactErrors(prevContactErrors => ({...prevContactErrors, [name] : 'This field is required' }))
        } else {
            setContactErrors(prevContactErrors => ({...prevContactErrors, [name] : '' }))
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

            const newContactErrors = {}
            Object.keys(contactData).forEach(field => {
                if (contactData[field].trim() === '') {
                    newContactErrors[field] = 'This field is required'
                }
            })
            
            if(Object.keys(newContactErrors).length > 0) {
                setContactErrors(newContactErrors)
                return
            }

            if (!validateContactForm()) {
                console.log("Invalid email")
                return;
            }
        
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
                method: 'post',
                headers: {
                    'content-type': 'application/json' 
                }, 
                body: JSON.stringify(contactData)
            })

            const data = await res.json()
            console.log("Success:", data.success)
            console.log("response:", data)
            console.log("Status code:", res.status);

            if (res.ok) {
                setSubmitted(true)
                setContactData({ email: '' })
            } 
    }

    if (submitted) {
        return(
            <div className="contactform-submitted">
                <div className="contactform-submitted-text">
                    <h2>Thank you for contacting us!</h2>
                    <p>We have received your message and will respond to you within 1-2 business days.</p>
                </div>
                <button className="contactform-submitted-btn" onClick={handleOk}>Return</button>
            </div>
        )
    }

  return (


    <form className="contact-form-container" onSubmit={handleSubmit} noValidate>
        <div className="input-group">
            <p>Your Name</p>
            <input className="contact-input" id="name"  type="text" name="name" placeholder="Name" value={contactData.name} onChange={handleChange} required />
            {contactErrors.name && <span className="contact-error">{contactErrors.name}</span>}
        </div>

        <div className="input-group">
            <div className="contact-row-form">
                <div className="contact-row">
                    <p>Email</p>
                    <input className="contact-input" id="email"  type="text" name="email" placeholder="Email" value={contactData.email} onChange={handleChange} required />
                    {contactErrors.email && <span className="contact-error">{contactErrors.email}</span>}
                </div>

                <div className="contact-row">
                    <p>Telephone</p>
                    <input className="contact-input" id="telephone"  type="text" name="telephone" placeholder="Telephone" value={contactData.telephone} onChange={handleChange}/>
                    {contactErrors.telephone && <span className="contact-error">{contactErrors.telephone}</span>}
                </div>
            </div>
        </div>

        

        <div className="input-group">
            <p>Subject</p>
            <input className="contact-input" id="subject"  type="text" name="subject" placeholder="Subject" value={contactData.subject} onChange={handleChange} required />
            {contactErrors.subject && <span className="contact-error">{contactErrors.subject}</span>}
        </div>

        <div className="input-group">
            <p>Comments / Questions</p>
            <textarea className="contact-input" name="comment" placeholder="Comments" id="comments" value={contactData.comment} onChange={handleChange} required></textarea>
            {contactErrors.comment && <span className="contact-error">{contactErrors.comment}</span>}    
        </div>
        <div className="form-button">
            <Button Text="Submit" className="form-btn"/>
        </div>
    </form>
  )
}

export default ContactForm