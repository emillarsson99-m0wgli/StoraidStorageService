

const TestimonialsComponent = ({item}) => {


  return (
    <div className="testimonials-box">
        <div className="testimonials-box-content">
            <div className="star-rating">
                <p>{item.rating}/5</p>
                <img src="/StarIcon.svg" alt="" />
                {/* <img src="/StarIcon.svg" alt="" />
                <img src="/StarIcon.svg" alt="" />
                <img src="/StarIcon.svg" alt="" />
                <img src="/StarIcon.svg" alt="" /> */}
            </div>
            <div className="testimonials-comment">
                <p>{item.comment}</p>
            </div>
            
            <div className="testimonials-person">
                <div className="testimonials-image">
                    <img src={item.avatarUrl} alt="" />
                </div>
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