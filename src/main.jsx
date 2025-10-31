import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Components/header.css'
import './Components/Button.css'
import './Components/Hero.css'
import './Components/AboutUs.css'
import './Components/Tiles.css'
import './Components/Brands.css'
import './Components/OurServices.css'
import './Components/Testimonials.css'
import './Components/WhyChooseUs.css'
import './Components/PriceList.css'
import './Components/PricingPlan.css'
import './Components/Booking.css'
import './Components/BlogAndNews.css'
import './Components/BlogPost.css'
import './Components/Footer.css'
import './Components/InputForm.css'
import './Components/TitleCard.css'
import './Components/Accordion.css'
import './Components/FAQ.css'
import './Components/GetInTouch.css'
import './Components/ContactForm.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
