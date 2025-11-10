import Button from "./Button"

function Hero() {

    return(
        
        <div className="hero-bg">
            <div className="hero-container">
                <div className="hero-text">
                    <h4>Welcome to Storaid</h4>
                    <h1>Space Simplified, Storage Perfected</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
                    <div className="hero-button">
                        <Button className="hero-btn" Text="Discover more" />
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/HeroFigure.svg" alt="Hero Figure" to="/NotFoundPage" />
                </div>
            </div>
        </div>
    )
}
export default Hero