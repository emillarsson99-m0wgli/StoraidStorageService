import React, { useState } from 'react'
import SubmitButton from './SubmitButton'

function NewsletterInput({  }) {

    const [responseMessage, setResponseMessage] = useState('')
    const [newsletterData, setNewsletterData] = useState({ email: '' });
    const [newsletterErrors, setNewsletterErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validateNewsletter = () => {
        const newNewsletterErrors = {}
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterData.email)) { //regex är ai genererad 
                newNewsletterErrors.email = "Please enter a valid emailadress."
            }
            
            setNewsletterErrors(newNewsletterErrors)

            return Object.keys(newNewsletterErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewsletterData({...newsletterData, [name]: value})

        if (value.trim() === '' ) {
            setNewsletterErrors(prevNewsletterErrors => ({...prevNewsletterErrors, [name] : 'This field is required' }))
        } else {
            setNewsletterErrors(prevNewsletterErrors => ({...prevNewsletterErrors, [name] : '' }))
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();

            const newNewsletterErrors = {}
            Object.keys(newsletterData).forEach(field => {
                if (newsletterData[field].trim() === '') {
                    newNewsletterErrors[field] = 'This field is required'
                }
            })
            
            if(Object.keys(newNewsletterErrors).length > 0) {
                setNewsletterErrors(newNewsletterErrors)
                return
            }

            if (!validateNewsletter()) {
                console.log("Invalid email")
                return;
            }
        
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
                method: 'post',
                headers: {
                    'content-type': 'application/json' 
                }, 
                body: JSON.stringify(newsletterData)
            })

            const data = await res.json()
            console.log("response:", data)
            console.log("Status code:", res.status);

            if (res.ok) {
                setSubmitted(true)
                setNewsletterData({ email: '' })
                setResponseMessage(data.message)
            } 
                

    }        

    
    if (submitted) {
        return(
            <div className="newsletter-submitted">
                <div className="newsletter-submitted-text">
                    <h2>{responseMessage}</h2>
                </div>
                <button className="newsletter-submitted-btn" onClick={handleOk} >Return</button>
            </div>
        )
    }
        
    

  return (
    <div className="newsletter-container">
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <div className="input-btn-container">
                <input className={`newsletter-input ${newsletterErrors.email ? "input-error" : ""}`} type="text" name="email" placeholder="Enter your email" value={newsletterData.email} onChange={handleChange} required/>
                <SubmitButton className="subscribe-btn" text="Subscribe" />
            </div>
            <div className="error-message">
            {newsletterErrors.email && <span className="newsletter-error">{newsletterErrors.email}</span>}
            </div>
        </form>
        
    </div>
    
  )
}

export default NewsletterInput