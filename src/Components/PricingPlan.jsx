import PriceList from "./PriceList"
function PricingPlan() {

    return(
        <div className="pricing-plan-container">
            <div className="pricing-plan-headline">
                <h3>Pricing Plan</h3>
                <h2>Find the Perfect Plan for Your Storage Needs</h2>
            </div>
            <div className="subscription">
                <PriceList Price="50" Text="/month" Unit="Small Unit" />
                <PriceList Price="100" Text="/month" Unit="Medium Unit" />
                <PriceList Price="150" Text="/month" Unit="Large Unit" />
                <PriceList Price="200" Text="/month" Unit="Executive Unit" />
            </div>

            
        </div>
    )
}
export default PricingPlan