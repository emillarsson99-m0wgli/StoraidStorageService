import Button from "./Buttons"
import { useState } from 'react'

function PriceList({ Text, Price, Unit }) {

    const [isHovered, setIsHovered] = useState(false)
    return(
        <div className="prices-box">
            <div className="pricing-plan-prices">
                <div className="unit">{Unit}</div>
                <div className="price">
                    <div className="price-amount">{Price}</div>
                    <div className="price-text">{Text}</div>
                </div>
                <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            </div>
                
            <div className="prices-what-you-get">
                <div className="what-you-get">
                    <img src="/checkmark.svg" alt="" />
                    <p>Nam nec ipsum in dolor</p>
                </div>
                <div className="what-you-get">
                    <img src="/checkmark.svg" alt="" />
                    <p>Fusce nec ligula ut arcu</p>
                </div>
                <div className="what-you-get">
                    <img src="/checkmark.svg" alt="" />
                    <p>Aliquam pulvinar arcu in</p>
                </div>
                <div className="what-you-get">
                    <img src="/checkmark.svg" alt="" />
                    <p>Duis gravida enim porta</p>
                </div>
                <div className="what-you-get">
                    <img src="/checkmark.svg" alt="" />
                    <p>Etiam eget libero non ligula</p>
                </div>
                
            </div>                               
            <div >
                <Button className={`price-list-btn ${isHovered ? 'pricelist-hovered' : ''}`} Text="Rent Now" />
                    
            </div>
        </div>
    )
}
export default PriceList