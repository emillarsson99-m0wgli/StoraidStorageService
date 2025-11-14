import { NavLink } from "react-router-dom"
import { useState } from 'react'
import Button from "./Button"

function Header() {

    const [isActive, setIsActive] = useState()

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
                            <img src="/headerMailIcon.svg" alt="" className="contact-icons" />
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
                <nav className="header-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "navlink-btn active" : "navlink-btn" }>Home</NavLink>
                    <NavLink to="/AboutUsPage" className={({ isActive }) => isActive ? "navlink-btn active" : "navlink-btn" }>About Us</NavLink>
                    <NavLink to="/ServicePage" className={({ isActive }) => isActive ? "navlink-btn active" : "navlink-btn" }>Services</NavLink>
                    <NavLink to="/ContactPage" className={({ isActive }) => isActive ? "navlink-btn active" : "navlink-btn" }>Contact Us</NavLink>
                </nav>
                <Button Text="Book Now" className="header-btn" to="/BookingPage"/>
            </div>
            
        </div>
    )
}
export default Header