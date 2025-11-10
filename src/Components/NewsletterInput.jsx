import React, { useState } from 'react'

function NewsletterInput({  }) {

    const [newsletterData, setNewsletterData] = useState({ email: "" });
    const [newsletterErrors, setNewsletterErrors] = useState({})

    const validateNewsletter = () => {
        const newNewsletterErrors = {}
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterData.email)) { //regex är ai genererad 
                newNewsletterErrors.email = "Please enter a valid emailadress."
            }
        setNewsletterErrors(newNewsletterErrors)
        return Object.keys(newNewsletterErrors).length === 0;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewsletterData({ ...newsletterData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateNewsletter()) {
            console.log('form valid')
            fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {method: 'post', headers: { 'content-type': 'application/json' }, body: JSON.stringify(newsletterData)})
        }
        else {
            console.log('form invalid')
        }
    }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
        <input className={`newsletter-input ${newsletterErrors.email ? "input-error" : ""}`} type="text" name="email" placeholder="Enter your email" value={newsletterData.email} onChange={handleInputChange} required/>
        {newsletterErrors.email && <span className="newsletter-error">{newsletterErrors.email}</span>}
        <button className="subscribe-btn" type="submit">Subscribe</button>
    </form>

    
  )
}

export default NewsletterInput