import { useState, useEffect } from 'react'

const TestimonialsComponent = ({item}) => {


    const [testimonials, setTestimonials] = useState([])

    const fetchData = async () => {
    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setBlogPost(data)
  }

  useEffect (() => {

    fetchData()

  }, []) 

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
            <div>
                <p>{item.comment}</p>
            </div>
            
            <div className="testimonials-person">
                <img src={item.avatarURL} alt="" />
                <div className="testimonials-person-text">
                    <h5>{item.name}</h5>
                    <p>{item.companyName}</p>
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