import { useState } from 'react'
import SubmitButton from './SubmitButton'

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
            
        setContactErrors(newContactErrors)
        return Object.keys(newContactErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setContactData({...contactData, [name]: value})

        let error = ''

        if (value.trim() === '' ) {
            error = 'This field is required'
        } else {
            if (name === 'name' && !/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/.test(value)) {
                error = "Please enter a valid name."
            }

            if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = "Please enter a valid email."
            }

            if (name === 'subject' && !/^[A-Za-z0-9À-ÖØ-öø-ÿ.,!?'"()\- ]{3,100}$/.test(value)) {
                error = "Please enter a valid subject."
            }

            if (name === 'comment' && !/^[A-Za-z0-9\s.,!?;:'"\-(){}\[\]@#$%^&*\/\\]{2,200}$/.test(value)) {
                error = "Please enter a valid comment."
            }
        }

        setContactErrors(prevContactErrors => ({ ...prevContactErrors, [name]: error}))
    };

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['name', 'email', 'subject', 'comment']; // Har tagit hjälp av ai för att kunna submitta formuläret utan att "telephone" är ifyllt. 
    
        const newContactErrors = {}
        requiredFields.forEach(field => {
            if (contactData[field].trim() === '') {
                newContactErrors[field] = 'This field is required'
                console.log("The required fields need to be filled")
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
        console.log(contactData)
        console.log("Response:", data)
        console.log("Status code:", res.status);
        if (res.ok) {
            setSubmitted(true)
            setContactData({ 
                name: '',
                email: '',
                telephone: '',
                subject: '',
                comment: ''
              });
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
            <p className={`contact-input-p ${contactErrors.name ? "contact-input-error-p" : ""}`}>Your Name <span className="red-star">*</span></p>
            <input className={`contact-input ${contactErrors.name ? "contact-input-error" : ""}`} id="contactName"  type="text" name="name" placeholder="Name" value={contactData.name} onChange={handleChange} required />
            {contactErrors.name && <span className="contact-error">{contactErrors.name}</span>}
        </div>

        <div className="input-group">
            <div className="contact-row-form">
                <div className="contact-row">
                    <p className={`contact-input-p ${contactErrors.email ? "contact-input-error-p" : ""}`}>Email <span className="red-star">*</span></p>
                    <input className={`contact-input ${contactErrors.email ? "contact-input-error" : ""}`} id="contactEmail"  type="text" name="email" placeholder="Email" value={contactData.email} onChange={handleChange} required />
                    {contactErrors.email && <span className="contact-error">{contactErrors.email}</span>}
                </div>

                <div className="contact-row">
                    <p>Telephone</p>
                    <input className={`contact-input ${contactErrors.telephone ? "" : ""}`} id="contactTelephone"  type="text" name="telephone" placeholder="Telephone" value={contactData.telephone} onChange={handleChange}/>
                    {/* {contactErrors.telephone && <span className="contact-error">{contactErrors.telephone}</span>} */}
                </div>
            </div>
        </div>

        

        <div className="input-group">
            <p className={`contact-input-p ${contactErrors.subject ? "contact-input-error-p" : ""}`}>Subject <span className="red-star">*</span></p>
            <input className={`contact-input ${contactErrors.subject ? "contact-input-error" : ""}`} id="contactSubject"  type="text" name="subject" placeholder="Subject" value={contactData.subject} onChange={handleChange} required />
            {contactErrors.subject && <span className="contact-error">{contactErrors.subject}</span>}
        </div>

        <div className="input-group">
            <p className={`contact-input-p ${contactErrors.comment ? "contact-input-error-p" : ""}`}>Comments / Questions <span className="red-star">*</span></p>
            <textarea className={`contact-input ${contactErrors.comment ? "contact-input-error" : ""}`} name="comment" placeholder="Comments" id="contactComments" value={contactData.comment} onChange={handleChange} required></textarea>
            {contactErrors.comment && <span className="contact-error">{contactErrors.comment}</span>}    
        </div>
        <div className="form-button">
            <SubmitButton className="form-btn" text="Submit" />
        </div>
    </form>
  )
}

export default ContactForm