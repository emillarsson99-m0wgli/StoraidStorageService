import React from 'react'

function FindUs() {
  return (
    <div className="find-us-bg">
        <div className="find-us-container">
            <div className="find-us-image">
                <img src="/FindUsGubbe.svg" alt="Hero Figure" />
            </div>

            <div className="find-us-text-container">
                <div className="find-us-text">
                    <h2>Find Us On:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div className="find-us-contact-box">
                        <div className="find-us-icon-container">
                            <img src="/JustPhoneIcon.svg" alt="" className="find.us" />
                        </div>  
                        <div className="find-us-text">
                            <h5>Call Center</h5>
                            <p>+46 8 123 122 44</p>
                        </div>                     
                         
                    </div>    

                    <div className="find-us-contact-box">
                        <div className="find-us-icon-container">
                            <img src="/JustMailIcon.svg" alt="" />
                        </div>
                        <div className="find-us-text">
                            <h5>Email Address</h5>
                            <p>contact@domain.com</p>
                        </div>                     
                    </div>  

                    <div className="find-us-contact-box">
                        <div className="find-us-icon-container">
                            <img src="/JustLocationIcon.svg" alt="" />
                        </div>
                        <div className="find-us-text">
                            <h5>Location</h5>
                            <p>Klarabergsviadukten 90, Stockholm</p>
                        </div>                     
                    </div>  

                    <div className="socials-container">
                        <h5>Our Social media</h5>
                        <div className="socials-divider"></div>
                        <div className="social-medias">
                            <img src="/FacebookIcon.svg" alt="" />
                            <img src="/TwitterIcon.svg" alt="" />
                            <img src="/InstagramIcon.svg" alt="" />
                            <img src="/YoutubeIcon.svg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

  )
}

export default FindUs