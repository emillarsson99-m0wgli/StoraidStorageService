import Buttons from "./Button"
import NewsletterInput from "./NewsletterInput"

function Footer() {
  return (
    
      <div className="footer-bg">

        
        <div className="footer-container">
          <div className="newsletter">
            <div className="newsletter-text">
              <h2>Subscribe Our Newsletter</h2>
              <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
            </div>
            <NewsletterInput />
          </div>
        </div>


          <div className="footer-bottom-bg">
            <div className="footer">
              <p>© 2025 StorAid, All rights reserved.</p>
              <div className="terms-and-policy">
                <p>Terms & Conditions</p>
                <p> Privacy Policy</p>
              </div>
            </div>
          </div>
        
      </div>
  )
}

export default Footer