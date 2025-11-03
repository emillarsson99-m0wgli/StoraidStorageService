import TestimonialsComponent from "./TestimonialsComponent"
import { useState, useEffect } from 'react'

function Testimonials() {


    const [testimonials, setTestimonials] = useState([])

    const fetchData = async () => {
    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setTestimonials(data)
  }

  useEffect (() => {

    fetchData()

  }, []) 

    return(
        <div className="testimonials-bg">
            
        
                <div className="testimonials-container">
                    <div className="testimonials-headline">
                        <h3>Testimonials</h3>
                        <h2>See What Our Clients Have to Say</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                    </div>

                    <div className="testimonials-boxes">

                        {
                            testimonials.map((item) => (<TestimonialsComponent key={item.id} item={item} />))
                        }
                        
                    </div>
                </div>
        </div>    
        
    )
}
export default Testimonials