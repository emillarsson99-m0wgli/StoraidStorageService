import Button from "./Button"

function Header() {

    return(
        <div className="container">
            <div className="header-top-bg">
                <div className="header-top">
                    <div className="header-contact">
                        <div className="call-us">
                            <img src="/PhoneIcon.svg" alt="" className="contact-icons" />
                            <p>+46 8 123 122 44</p>
                        </div>
                        <div className="mail-us">
                            <img src="/MailIcon.svg" alt="" className="contact-icons" />
                            <p>contact@domain.com</p>
                        </div>
                    </div>
                    <div className="header-socials">
                        <div>
                            <a href="https://facebook.com" target="_blank"></a>
                            <img src="/FacebookIcon.svg" alt="facebook" />
                        </div>
                        <div>
                            <a href="https://instagram.com" target="_blank"></a>
                            <img src="InstagramIcon.svg" alt="Instagram" />
                        </div>
                        <div>
                            <a href="https:/x.com" target="_blank"></a>
                            <img src="/TwitterIcon.svg" alt="Twitter" />
                        </div>
                        <div>
                            <a href="https://youtube.com" target="_blank"></a>
                            <img src="/YoutubeIcon.svg" alt="Youtube" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header-main">
                <img src="/StoraidIcon.svg" alt="Storaid" />
                <div className="header-nav">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Services</a>
                    <a href="#">Contact Us</a>
                </div>
                <Button Text="Book Now" />
            </div>
            
        </div>
    )
}
export default Header