import Button from "./Button"
import Tiles from "./Tiles"

function AboutUs() {

    return(
        <div className="about-us-container">

            <div className="about-us-experience">
                <img src="/AboutUsExperience.svg" alt="Facebook" id="FBICON" />
            </div>

            <div className="about-us-right">

                <div className="about-us-text">
                    <h4>About Us</h4>
                    <h3>Providing a Safe Space for Your Treasured Items</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>
                </div>
                
                <div className="about-us-components">
                    <Tiles Title="Vision" Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."  />
                    <Tiles Title="Mission" Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium." />
                </div>
                

                <div className="about-us-contact-container">
                    <Button Text="Discover more" />
                    <div className="about-us-contact">
                        <img src="./AboutUsPhone.svg" alt="about us phone" />
                        <div className="About-us-info">
                            <h3>More Information</h3>
                            <p>+46 8 123 122 44</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AboutUs