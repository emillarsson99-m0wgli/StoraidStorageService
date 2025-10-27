import Tiles from "./Tiles"


function OurServices() {

    return(
        <div className="our-services-container">
            <h4>Our Services</h4>
            <div className="our-services-top">
                <h2>Specialized Storage for Every Special Item</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            </div>
            <div className="our-services-bottom">

                <div className="our-services-left-container">

                    <Tiles className="our-services-tiles" Title="Divere Unit Sizes" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                    <Tiles className="our-services-tiles" Title="Moving Assistance" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />

                </div>

                <div className="our-services-middle-container">
                    <h3>Image</h3>
                </div>

                <div className="our-services-right-container">

                    <Tiles className="our-services-tiles" Title="Vehicle Storage" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
                    <Tiles className="our-services-tiles" Title="Top-Notch Security" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />

                </div>
            </div>
        </div>
    )
}
export default OurServices