import Button from "./Button"

function Booking() {
  return (
    <div className="booking-bg">
        <div className="booking-container">
            <h2>Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            <Button Text="Book Now" to="/ContactPage" />
        </div>
    </div>
  )
}

export default Booking