import Buttons from "./Button"
import InputForm from "./InputForm"

function Footer() {
  return (
    
      <div className="footer-bg">

        
        <div className="footer-container">
          <div className="newsletter">
            <div className="newsletter-text">
              <h2>Subscribe Our Newsletter</h2>
              <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
            </div>
            <InputForm placeholder="Enter you email" labelclassName="footer-label" inputclassName="footer-input" 
              inputName="footerInput" labelName="footerLabel"
            />
          </div>
        </div>


          <div className="footer-bottom-bg">
            <div className="footer">
              <p>© 2025 StorAid, All rights reserved.</p>
              <div className="terms-and-policy">
                <div className="terms">
                    <img src="/arrowIcon.svg" alt="" className="arrow-icon" />
                    <p>Terms & Conditions</p>
                </div>
                <div className="policy">
                    <img src="/arrowIcon.svg" alt="" className="arrow-icon" />
                    <p> Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        
      </div>
  )
}

export default Footer