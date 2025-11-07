import Button from "./Button"
import checkmarkGreen from '/checkmark.svg'
import checkmarkYellow from '/checkmark-yellow.svg'
import { useState } from "react"


function PriceList({ Text, Price, Unit }) {
    const [isHovered, setIsHovered] = useState(false)

    return(
        <div 
            className="prices-box"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="pricing-plan-prices">
                
                <div className="unit">{Unit}</div>
                <div className="price">
                    <img src="/dollarIcon.svg" alt="" className="dollar-icon" />
                    <div className="price-amount">{Price}</div>
                    <div className="price-text">{Text}</div>
                </div>
                <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            </div>
                
            <div className="prices-what-you-get">
                <div className="what-you-get">
                    <img src={isHovered ? checkmarkYellow : checkmarkGreen} alt="" />
                    <p>Nam nec ipsum in dolor</p>
                </div>
                <div className="what-you-get">
                    <img src={isHovered ? checkmarkYellow : checkmarkGreen} alt="" />
                    <p>Fusce nec ligula ut arcu</p>
                </div>
                <div className="what-you-get">
                    <img src={isHovered ? checkmarkYellow : checkmarkGreen} alt="" />
                    <p>Aliquam pulvinar arcu in</p>
                </div>
                <div className="what-you-get">
                    <img src={isHovered ? checkmarkYellow : checkmarkGreen} alt="" />
                    <p>Duis gravida enim porta</p>
                </div>
                <div className="what-you-get">
                    <img src={isHovered ? checkmarkYellow : checkmarkGreen} alt="" />
                    <p>Etiam eget libero non ligula</p>
                </div>
                
            </div>                               
            <div className="subscribe-button">
                <Button Text="Rent Now" to="/NotFoundPage" className="price-list-btn" />
                    
                    
            </div>
        </div>
    )
}
export default PriceList