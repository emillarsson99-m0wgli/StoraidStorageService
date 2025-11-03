import TestimonialsComponent from "./TestimonialsComponent"

function Testimonials() {

    return(
        <div className="testimonials-bg">
            
        
                <div className="testimonials-container">
                    <div className="testimonials-headline">
                        <h3>Testimonials</h3>
                        <h2>See What Our Clients Have to Say</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                    </div>

                    <div className="testimonials-boxes">

                        <TestimonialsComponent />

                        <TestimonialsComponent />
                        
                        <TestimonialsComponent />
                        
                    </div>
                </div>
        </div>    
        
    )
}
export default Testimonials